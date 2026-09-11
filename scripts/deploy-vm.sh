#!/bin/sh
set -eu

: "${DEPLOY_IMAGE:?DEPLOY_IMAGE must be set}"
: "${HEALTH_URL:?HEALTH_URL must be set}"
command -v curl >/dev/null
docker info >/dev/null

# Keep the running service intact if the registry is unavailable.
docker pull "$DEPLOY_IMAGE"
# An interrupted deployment needs manual inspection before another replacement.
if docker container inspect resume-rollback >/dev/null 2>&1; then
  printf '%s\n' 'resume-rollback already exists; inspect the previous deployment.' >&2
  exit 1
fi

previous=false
replacement=false
rollback() {
  status=$?
  trap - EXIT HUP INT TERM
  if [ "$status" -ne 0 ]; then
    if [ "$replacement" = true ]; then
      docker logs resume >&2 || true
      docker rm -f resume || true
    fi
    if [ "$previous" = true ]; then
      docker rename resume-rollback resume && docker start resume && docker container restart nginx || {
        printf '%s\n' 'Rollback failed; manual recovery is required.' >&2
      }
    fi
  fi
  exit "$status"
}
trap rollback EXIT
trap 'exit 1' HUP INT TERM

if docker container inspect resume >/dev/null 2>&1; then
  docker rename resume resume-rollback
  previous=true
  docker stop resume-rollback
fi

replacement=true
docker run --detach --net nginx --name resume --restart always \
  --publish 127.0.0.1::80 "$DEPLOY_IMAGE"

# Probe the new container directly before asking nginx to resolve its new address.
address=$(docker port resume 80/tcp)
curl --fail --silent --show-error --retry 5 --retry-all-errors \
  --retry-delay 2 --connect-timeout 5 --max-time 10 "http://$address/" >/dev/null
docker container restart nginx
curl --fail --silent --show-error --retry 5 --retry-all-errors \
  --retry-delay 2 --connect-timeout 5 --max-time 10 "$HEALTH_URL" >/dev/null

# Commit only after both the container and the public endpoint are ready.
trap - EXIT HUP INT TERM
if [ "$previous" = true ]; then
  docker rm resume-rollback
fi
printf '%s\n' 'Deployment verified successfully.'
