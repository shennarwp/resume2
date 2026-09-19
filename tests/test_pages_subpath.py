"""Check that the static artifact uses relative assets for GitHub Pages subpaths."""

from pathlib import Path
import re
import unittest


ROOT = Path(__file__).resolve().parents[1] / "build"


class StaticSubpathTests(unittest.TestCase):
    def test_generated_pages_have_relative_local_assets(self):
        self.assertTrue(ROOT.exists(), "run npm run build before this test")
        for page in (ROOT / "index.html", ROOT / "de" / "index.html", ROOT / "id" / "index.html"):
            self.assertTrue(page.exists(), page)
            html = page.read_text()
            local_urls = re.findall(r'(?<![\w-])(?:href|src)="([^"]+)"', html)
            self.assertTrue(local_urls)
            for url in local_urls:
                if url.startswith(("https://", "http://", "data:", "mailto:", "tel:", "#")):
                    continue
                self.assertTrue(url.startswith("."), f"{page}: non-relative asset {url}")


if __name__ == "__main__":
    unittest.main()
