"""Build a portable static site and a self-contained GitHub source download."""
from pathlib import Path
from shutil import copy2
from zipfile import ZipFile, ZIP_DEFLATED
ROOT = Path(__file__).resolve().parent
DIST = ROOT / "dist"
DIST.mkdir(exist_ok=True)
ASSETS = ["index.html", "style.css", "app.js", "lessons.js", "icon.svg", "dictionary.js", "word-help.js", "reader-data.js", "reader.js", "library-seeds.js", "ceo-stories.js", "library-data.js", "library.js", ".nojekyll"]
for name in ASSETS:
    copy2(ROOT / name, DIST / name)
with ZipFile(DIST / "source.zip", "w", ZIP_DEFLATED) as archive:
    for name in ASSETS + ["README.md", "build.py", ".github/workflows/pages.yml", ".gitignore"]:
        archive.write(ROOT / name, name)
print("Built dist/ and dist/source.zip")
