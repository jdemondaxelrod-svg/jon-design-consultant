# Portfolio Photo Sorter

A simple local web app for reviewing handyman portfolio photos one at a time and copying them into organized project folders.

## Folders

| Path | Purpose |
|------|---------|
| `~/Downloads/portfolio-photos` | Source photos (originals are never deleted) |
| `~/Downloads/organized-portfolio` | Organized output |

## Output structure

```
~/Downloads/organized-portfolio/
  bathroom-remodel/
    hero/
    before/
    during/
    after/
  deck-repair/
    hero/
    before/
    ...
```

Progress is saved in `~/Downloads/organized-portfolio/.sorter-state.json`, so you can stop and resume later.

## Run

```bash
python3 tools/portfolio-photo-sorter/server.py
```

Then open [http://127.0.0.1:8765](http://127.0.0.1:8765)

## Usage

1. Enter or select a **project name** (e.g. `bathroom-remodel`)
2. Tag the current photo:
   - **Hero** — main showcase image
   - **Before / During / After** — project stages
   - **Skip** — move on without copying
3. The app copies the file and shows the next photo

### Keyboard shortcuts

| Key | Action |
|-----|--------|
| `H` | Hero |
| `B` | Before |
| `D` | During |
| `A` | After |
| `S` | Skip |

## Notes

- Runs locally only (`127.0.0.1`)
- HEIC photos are converted on the fly for browser preview using macOS `sips`; originals are copied unchanged
- Duplicate filenames in a folder get a `-2`, `-3`, etc. suffix
