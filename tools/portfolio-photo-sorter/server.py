#!/usr/bin/env python3
"""Local portfolio photo sorter — review photos one at a time and copy into project folders."""

from __future__ import annotations

import json
import mimetypes
import re
import shutil
import subprocess
import sys
import threading
import urllib.parse
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

SOURCE_DIR = Path.home() / "Downloads" / "portfolio-photos"
OUTPUT_DIR = Path.home() / "Downloads" / "organized-portfolio"
STATE_FILE = OUTPUT_DIR / ".sorter-state.json"
PREVIEW_CACHE = OUTPUT_DIR / ".preview-cache"
STATIC_DIR = Path(__file__).resolve().parent / "static"
PORT = 8765

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".heic", ".heif", ".webp", ".gif", ".tiff", ".tif"}
TAGS = ("hero", "before", "during", "after")
HEIC_EXTS = {".heic", ".heif"}

state_lock = threading.Lock()


def slugify(name: str) -> str:
    slug = name.strip().lower()
    slug = re.sub(r"[^\w\s-]", "", slug)
    slug = re.sub(r"[\s_]+", "-", slug)
    slug = re.sub(r"-+", "-", slug).strip("-")
    return slug or "untitled-project"


def list_source_photos() -> list[Path]:
    if not SOURCE_DIR.exists():
        return []
    photos = [
        path
        for path in sorted(SOURCE_DIR.iterdir())
        if path.is_file() and path.suffix.lower() in IMAGE_EXTS and not path.name.startswith(".")
    ]
    return photos


def load_state() -> dict:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    if STATE_FILE.exists():
        with STATE_FILE.open(encoding="utf-8") as handle:
            return json.load(handle)
    return {"processed": {}, "skipped": []}


def save_state(state: dict) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    with STATE_FILE.open("w", encoding="utf-8") as handle:
        json.dump(state, handle, indent=2)


def is_done(filename: str, state: dict) -> bool:
    return filename in state.get("processed", {}) or filename in state.get("skipped", [])


def pending_photos(state: dict) -> list[Path]:
    return [photo for photo in list_source_photos() if not is_done(photo.name, state)]


def list_projects() -> list[str]:
    if not OUTPUT_DIR.exists():
        return []
    projects = []
    for path in sorted(OUTPUT_DIR.iterdir()):
        if path.is_dir() and not path.name.startswith("."):
            projects.append(path.name)
    return projects


def preview_path(source: Path) -> Path:
    if source.suffix.lower() not in HEIC_EXTS:
        return source

    PREVIEW_CACHE.mkdir(parents=True, exist_ok=True)
    cached = PREVIEW_CACHE / f"{source.name}.jpg"
    if cached.exists() and cached.stat().st_mtime >= source.stat().st_mtime:
        return cached

    result = subprocess.run(
        ["sips", "-s", "format", "jpeg", str(source), "--out", str(cached)],
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        raise RuntimeError(result.stderr.strip() or "Failed to convert HEIC preview")
    return cached


def unique_destination(folder: Path, filename: str) -> Path:
    folder.mkdir(parents=True, exist_ok=True)
    candidate = folder / filename
    if not candidate.exists():
        return candidate

    stem = Path(filename).stem
    suffix = Path(filename).suffix
    index = 2
    while True:
        candidate = folder / f"{stem}-{index}{suffix}"
        if not candidate.exists():
            return candidate
        index += 1


def copy_photo(source: Path, project: str, tag: str) -> str:
    if tag not in TAGS:
        raise ValueError(f"Invalid tag: {tag}")

    project_slug = slugify(project)
    if not project_slug:
        raise ValueError("Project name is required")

    destination = unique_destination(OUTPUT_DIR / project_slug / tag, source.name)
    shutil.copy2(source, destination)
    return str(destination.relative_to(OUTPUT_DIR))


class PhotoSorterHandler(BaseHTTPRequestHandler):
    server_version = "PortfolioPhotoSorter/1.0"

    def log_message(self, format: str, *args) -> None:
        print(f"[{self.log_date_time_string()}] {format % args}")

    def _send_json(self, payload: dict, status: int = HTTPStatus.OK) -> None:
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _read_json(self) -> dict:
        length = int(self.headers.get("Content-Length", "0"))
        raw = self.rfile.read(length) if length else b"{}"
        return json.loads(raw.decode("utf-8"))

    def _send_file(self, path: Path) -> None:
        if not path.exists() or not path.is_file():
            self.send_error(HTTPStatus.NOT_FOUND)
            return

        mime, _ = mimetypes.guess_type(path.name)
        if path.suffix.lower() in HEIC_EXTS:
            mime = "image/jpeg"

        body = path.read_bytes()
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", mime or "application/octet-stream")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self) -> None:
        parsed = urllib.parse.urlparse(self.path)
        route = parsed.path

        if route in ("/", "/index.html"):
            return self._send_file(STATIC_DIR / "index.html")

        if route == "/api/status":
            with state_lock:
                state = load_state()
                photos = list_source_photos()
                queue = pending_photos(state)
                current = queue[0] if queue else None

            payload = {
                "sourceDir": str(SOURCE_DIR),
                "outputDir": str(OUTPUT_DIR),
                "total": len(photos),
                "remaining": len(queue),
                "completed": len(photos) - len(queue),
                "projects": list_projects(),
                "tags": list(TAGS),
                "current": None,
            }

            if current:
                payload["current"] = {
                    "name": current.name,
                    "sizeBytes": current.stat().st_size,
                    "previewUrl": f"/api/preview?file={urllib.parse.quote(current.name)}",
                }

            return self._send_json(payload)

        if route == "/api/preview":
            params = urllib.parse.parse_qs(parsed.query)
            filename = params.get("file", [""])[0]
            source = SOURCE_DIR / filename
            if not source.exists() or source.suffix.lower() not in IMAGE_EXTS:
                return self.send_error(HTTPStatus.NOT_FOUND)

            try:
                preview = preview_path(source)
            except RuntimeError as error:
                return self._send_json({"error": str(error)}, HTTPStatus.INTERNAL_SERVER_ERROR)

            return self._send_file(preview)

        return self.send_error(HTTPStatus.NOT_FOUND)

    def do_POST(self) -> None:
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path != "/api/sort":
            return self.send_error(HTTPStatus.NOT_FOUND)

        try:
            data = self._read_json()
            filename = data.get("filename", "").strip()
            project = data.get("project", "").strip()
            tag = data.get("tag", "").strip().lower()
            action = data.get("action", "copy").strip().lower()

            source = SOURCE_DIR / filename
            if not source.exists():
                return self._send_json({"error": "Photo not found"}, HTTPStatus.NOT_FOUND)

            with state_lock:
                state = load_state()

                if action == "skip":
                    skipped = state.setdefault("skipped", [])
                    if filename not in skipped:
                        skipped.append(filename)
                    save_state(state)
                    return self._send_json({"ok": True, "action": "skip", "filename": filename})

                if not project:
                    return self._send_json({"error": "Project name is required"}, HTTPStatus.BAD_REQUEST)

                if tag not in TAGS:
                    return self._send_json({"error": "Invalid tag"}, HTTPStatus.BAD_REQUEST)

                relative_dest = copy_photo(source, project, tag)
                state.setdefault("processed", {})[filename] = {
                    "project": slugify(project),
                    "tag": tag,
                    "destination": relative_dest,
                }
                save_state(state)
                return self._send_json(
                    {
                        "ok": True,
                        "action": "copy",
                        "filename": filename,
                        "destination": relative_dest,
                    }
                )
        except json.JSONDecodeError:
            return self._send_json({"error": "Invalid JSON"}, HTTPStatus.BAD_REQUEST)
        except ValueError as error:
            return self._send_json({"error": str(error)}, HTTPStatus.BAD_REQUEST)
        except RuntimeError as error:
            return self._send_json({"error": str(error)}, HTTPStatus.INTERNAL_SERVER_ERROR)


def main() -> None:
    if not SOURCE_DIR.exists():
        print(f"Source folder not found: {SOURCE_DIR}")
        print("Create it and add photos, then run again.")
        sys.exit(1)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    photo_count = len(list_source_photos())

    server = ThreadingHTTPServer(("127.0.0.1", PORT), PhotoSorterHandler)
    print("Portfolio photo sorter")
    print(f"  Source:  {SOURCE_DIR} ({photo_count} photos)")
    print(f"  Output:  {OUTPUT_DIR}")
    print(f"  Open:    http://127.0.0.1:{PORT}")
    print("Press Ctrl+C to stop.")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
        server.server_close()


if __name__ == "__main__":
    main()
