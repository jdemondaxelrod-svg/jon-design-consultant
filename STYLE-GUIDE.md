# Jon DeMond-Axelrod — Style Guide

Use this guide when designing the resume PDF (or any companion materials) so they match [www.jondemondaxelrodstudio.com](https://www.jondemondaxelrodstudio.com).

---

## Design intent

**Aesthetic:** Architectural editorial. Warm minimalism. Premium but restrained.

**Feel:** Sophisticated, warm, direct, human, confident — never hypey.

**Avoid:**
- Startup gradients, bright accent colors, or tech-bro layouts
- Generic contractor marketing (bold red CTAs, tool icons, star bursts)
- Heavy drop shadows, glossy buttons, or stock-photo energy
- Thumbtack-style testimonial graphics or review platform branding

---

## Typography

### Font families

| Role | Font | Source | Weights |
|------|------|--------|---------|
| **Headlines & display** | [Fraunces](https://fonts.google.com/specimen/Fraunces) | Google Fonts | 400 (Regular), 500 (Medium) |
| **Body, labels, UI** | [Figtree](https://fonts.google.com/specimen/Figtree) | Google Fonts | 400 (Regular), 500 (Medium), 600 (Semibold) |

**Fallbacks (if fonts unavailable):**
- Serif: Georgia, `Times New Roman`, serif
- Sans: system-ui, `-apple-system`, `Segoe UI`, sans-serif

**Rendering:** Always enable antialiasing / subpixel smoothing where the app supports it.

---

### Type scale (resume PDF)

Use these sizes on a **US Letter (8.5 × 11 in)** document:

| Element | Font | Size | Weight | Letter-spacing | Line height | Color |
|---------|------|------|--------|----------------|-------------|-------|
| **Name** | Fraunces | 28–32 pt | Medium (500) | −0.02em | 1.05 | Foreground |
| **Title line** | Figtree | 11–12 pt | Regular (400) | 0 | 1.4 | Muted |
| **Contact line** | Figtree | 9–10 pt | Regular | 0 | 1.4 | Subtle |
| **Section label** | Figtree | 7–8 pt | Regular | 0.18–0.22em | 1.2 | Subtle · **ALL CAPS** |
| **Section heading** | Fraunces | 18–22 pt | Medium | −0.02em | 1.15 | Foreground |
| **Role / company** | Figtree | 11–12 pt | Semibold (600) | 0 | 1.3 | Foreground |
| **Role meta** (title, location) | Figtree | 9–10 pt | Regular | 0 | 1.4 | Muted |
| **Dates** | Figtree | 9–10 pt | Regular | 0 | 1.3 | Subtle |
| **Body / summary** | Figtree | 10–11 pt | Regular | 0 | 1.55–1.65 | Muted |
| **Bullets** | Figtree | 9.5–10 pt | Regular | 0 | 1.45 | Muted |
| **Pull quote** | Fraunces | 14–16 pt | Regular | 0 | 1.5 | Foreground |
| **Quote attribution** | Figtree | 7–8 pt | Regular | 0.08em · ALL CAPS | 1.3 | Subtle |

---

## Color palette

| Token | Hex | Use |
|-------|-----|-----|
| **Background** | `#FAF8F5` | Page background — warm white / linen |
| **Background Alt** | `#F3F0EB` | Optional secondary panels or footer band |
| **Foreground** | `#2A2826` | Primary text, name, headings |
| **Foreground Muted** | `#5C5650` | Body copy, descriptions, bullets |
| **Foreground Subtle** | `#8A837A` | Labels, dates, captions, contact secondary |
| **Border** | `#E5E0D8` | Light rules, card outlines |
| **Border Strong** | `#D4CDC3` | Section dividers, emphasis rules |
| **Accent** | `#6B5D52` | Hover states, bullet dots, subtle emphasis |
| **Accent Soft** | `#EBE6DF` | Highlights, selection tint (optional) |

**Do not introduce** additional accent colors (no blue, green, or orange CTAs).

---

## Layout & spacing

### Page setup (PDF)
- **Size:** US Letter (8.5 × 11 in) or A4 if required — Letter preferred
- **Margins:** 0.75–1 in on all sides (48–64 px at 72 dpi)
- **Column:** Single column; max content width ~6.5 in
- **Alignment:** Left-aligned text; dates may right-align on the same line as role titles

### Vertical rhythm
- **Section gap:** 28–40 pt between major sections
- **After section label:** 8–12 pt before heading
- **After heading:** 12–16 pt before body
- **Between roles:** 20–28 pt
- **Between bullets:** 4–6 pt

### Dividers
- Use **1 px horizontal rules** in Border Strong (`#D4CDC3`)
- Width: full content area, or shortened to ~4–5 in for hero-style accent rules
- Place below name/contact block and between major sections

---

## Component patterns

### Header block (top of resume)
```
Jon DeMond-Axelrod                    ← Fraunces, 28–32 pt, Medium
Residential Design Consultant · Columbus, Ohio   ← Figtree, 11 pt, Muted
jdemondaxelrod@gmail.com · 614-404-4662 · Columbus, Ohio   ← Figtree, 9 pt, Subtle
─────────────────────────────────────  ← 1 px rule, Border Strong
```

### Section label
- Figtree, 7–8 pt, ALL CAPS, letter-spacing 0.2em, Foreground Subtle
- Examples: `SUMMARY` · `CORE COMPETENCIES` · `EXPERIENCE`

### Section heading (if used inside resume)
- Fraunces, 18–22 pt, Medium, Foreground
- Keep headings short and editorial — not bold sans-serif blocks

### Experience entry
```
The Clintonville Handyman          2022–Present
Owner & Residential Remodeling Consultant · Columbus, Ohio
– Bullet one
– Bullet two
```
- Company: Figtree Semibold, Foreground
- Dates: Figtree Regular, Subtle, right-aligned
- Bullets: em dash `–` or small Accent dot; never heavy round bullets

### Pull quote (if used)
- Left border: 1 px Border Strong, 24–32 pt padding-left
- Quote: Fraunces, 14–16 pt
- Attribution: Figtree, 7–8 pt, ALL CAPS — `ERIN L. · JUNE 17, 2024`

---

## Resume content structure (recommended)

1. **Header** — Name, title, contact, divider
2. **Summary** — 3–4 lines, Figtree body, Muted
3. **Core competencies** — 6–8 items, single or two-column list, no icons
4. **Experience** — Reverse chronological, bullets under each role
5. **Optional footer** — Single line, Subtle: `Prepared for Dave Fox Design Build Remodelers`

Keep to **1–2 pages**. Prioritize white space over density.

---

## Voice & copy (for consistency)

- First person where appropriate on the site; resume traditionally third person or implied first (no "I" required in bullets)
- Tone: direct, warm, confident, specific — use numbers where available (+15% conversion, 120+ homeowners, 5:1 ROAS)
- Avoid: "passionate," "guru," "ninja," "synergy," exclamation points

---

## Buttons & links (if designing a PDF with clickable links)

| State | Background | Text | Border |
|-------|------------|------|--------|
| **Primary** | Foreground `#2A2826` | Background `#FAF8F5` | none |
| **Secondary** | transparent | Foreground | Border Strong |

- Label style: Figtree, 7 pt, ALL CAPS, letter-spacing 0.12em
- No border-radius greater than 0–2 pt — keep corners nearly square

---

## Font installation quick reference

**Google Fonts URL (both families):**
```
https://fonts.google.com/share?selection.family=Fraunces:opsz,wght@9..144,400;9..144,500|Figtree:wght@400;500;600
```

**Adobe / Canva / Figma:**
- Search: `Fraunces` and `Figtree`
- If Fraunces unavailable, substitute **Cormorant Garamond** or **Libre Baskerville** (close editorial serif feel) and note the slight mismatch

**Microsoft Word / Apple Pages:**
- Download fonts from Google Fonts, install on system, then select in document styles

---

## Checklist before export

- [ ] Page background is `#FAF8F5` (not pure white `#FFFFFF`)
- [ ] Headlines use Fraunces Medium, not bold sans-serif
- [ ] Body uses Figtree Regular
- [ ] Section labels are small caps / uppercase with wide letter-spacing
- [ ] No colors outside the palette
- [ ] Generous margins; page does not feel crowded
- [ ] Dividers are thin and warm gray — not black rules
- [ ] Exported PDF embedded fonts (print-ready)

---

## File naming

When placing the finished PDF on the site:
- **Filename:** `Jon-DeMond-Axelrod-Resume.pdf`
- **Location:** `public/Jon-DeMond-Axelrod-Resume.pdf`

After the PDF is ready, tell your developer to point the Download Resume button to the static file instead of the generated API route.
