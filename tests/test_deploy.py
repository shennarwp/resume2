"""Exercise the deployment shell script with stateful Docker/curl substitutes."""

import json
import os
from pathlib import Path
import subprocess
import tempfile
import unittest


SCRIPT = Path(__file__).resolve().parents[1] / "scripts" / "deploy-vm.sh"
MOCK = r'''#!/usr/bin/env python3
import json
import os
from pathlib import Path
import sys

path = Path(os.environ["MOCK_STATE"])
state = json.loads(path.read_text())
args = sys.argv[1:]
tool = Path(sys.argv[0]).name
state["calls"].append([tool, *args])
failure = os.environ.get("FAILURE")
code = 0
containers = state["containers"]
if tool == "curl":
    if failure == "health" or (failure == "public" and args[-1].startswith("https:")):
        code = 1
elif args[0] == "pull":
    code = int(failure == "pull")
elif args[:2] == ["container", "inspect"]:
    code = int(args[2] not in containers)
elif args[0] == "rename":
    containers[args[2]] = containers.pop(args[1])
elif args[0] == "stop":
    containers[args[1]]["running"] = False
elif args[0] == "start":
    containers[args[1]]["running"] = True
elif args[0] == "run":
    containers["resume"] = {"image": "new", "running": failure != "run"}
    code = int(failure == "run")
elif args[0] == "rm":
    containers.pop(args[-1], None)
elif args[0] == "port":
    print("127.0.0.1:49152")
elif args[:2] == ["container", "restart"]:
    code = int(failure == "proxy" and containers.get("resume", {}).get("image") == "new")
path.write_text(json.dumps(state))
sys.exit(code)
'''


class DeploymentTests(unittest.TestCase):
    def deploy(self, failure="", containers=None):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            for tool in ("docker", "curl"):
                executable = root / tool
                executable.write_text(MOCK)
                executable.chmod(0o755)
            state_file = root / "state.json"
            state_file.write_text(json.dumps({
                "containers": containers if containers is not None else {
                    "resume": {"image": "old", "running": True}
                },
                "calls": [],
            }))
            result = subprocess.run(
                ["sh", str(SCRIPT)],
                env={**os.environ, "PATH": f"{root}:{os.environ['PATH']}",
                     "MOCK_STATE": str(state_file), "FAILURE": failure,
                     "DEPLOY_IMAGE": "registry/resume:new",
                     "HEALTH_URL": "https://resume.example/"},
                capture_output=True, text=True, timeout=10,
            )
            return result, json.loads(state_file.read_text())

    def test_success_verifies_before_removing_previous_container(self):
        result, state = self.deploy()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(state["containers"], {"resume": {"image": "new", "running": True}})
        calls = state["calls"]
        self.assertLess(calls.index(["docker", "pull", "registry/resume:new"]),
                        calls.index(["docker", "stop", "resume-rollback"]))
        public_check = next(i for i, call in enumerate(calls) if call[-1] == "https://resume.example/")
        self.assertLess(public_check, calls.index(["docker", "rm", "resume-rollback"]))

    def test_failed_pull_never_stops_current_service(self):
        result, state = self.deploy("pull")
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(state["containers"]["resume"], {"image": "old", "running": True})
        self.assertFalse(any(call[1] == "stop" for call in state["calls"]))

    def test_failed_replacement_restores_previous_service(self):
        for failure in ("run", "health", "public", "proxy"):
            with self.subTest(failure=failure):
                result, state = self.deploy(failure)
                self.assertNotEqual(result.returncode, 0)
                self.assertEqual(state["containers"], {"resume": {"image": "old", "running": True}})
                self.assertIn(["docker", "container", "restart", "nginx"], state["calls"])

    def test_first_deployment_success(self):
        result, state = self.deploy(containers={})
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(state["containers"], {"resume": {"image": "new", "running": True}})

    def test_first_deployment_failure_removes_failed_container(self):
        result, state = self.deploy("health", containers={})
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(state["containers"], {})

    def test_existing_rollback_is_preserved(self):
        containers = {"resume": {"image": "new", "running": True},
                      "resume-rollback": {"image": "old", "running": False}}
        result, state = self.deploy(containers=containers)
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(state["containers"], containers)


if __name__ == "__main__":
    unittest.main()
