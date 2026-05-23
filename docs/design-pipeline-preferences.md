# Design Pipeline Preferences

> Locked-in rules for generating banners, posters, and business cards as print-ready PDFs.
> Pipeline: html2canvas + jsPDF + qrcodejs (CDN), browser-based rendering.
> Last updated: May 2026

---

## General Rules

### 1. Exact dimensions are non-negotiable
When a specific size is requested, the final file MUST match those dimensions exactly. Verify multiple times before delivering:
1. Verify the page size set in the PDF library
2. Verify the unit (in/mm/px) is correct
3. Verify no auto-fit or scaling is overriding the size
4. Compute expected pixel dimensions vs actual output

Never assume — always validate.

### 2. Full design must fit — never crop
The ENTIRE design must fit within the file. All sections (header, body, footer, QR, contact, every element) must be visible. Before delivering:
- Verify all sections present
- Verify nothing cut off at edges
- Verify design scales/fits target dimensions rather than being cropped
- Confirm by counting key elements (logo, hero, services, QR, contact) all appear

### 3. DPI standards by format
- **Large-format banners** (roll-up, floor banners, banners over ~30 inches): 72–150 DPI is industry-correct (viewed from 3+ ft). Do not enforce 300 DPI standards meant for close-viewed print.
- **Business cards / close-viewed print**: 300+ DPI required.
- Compute capture scale dynamically based on Chrome canvas limit (max ~16384 px per dimension, use 15500 for safety). Push longest dimension near limit to maximize quality.
- Show both horizontal and vertical DPI in verification output.

### 4. Two-button workflow (always)
Banner/poster/card exports require TWO buttons:
- **"Run Pre-Flight Test"** — captures canvas, verifies, caches result
- **"Download PDF"** — disabled until test passes, uses cached canvas (no re-capture)

Verification checks:
- Sections present (`data-section` attrs)
- Canvas within 5% of expected dimensions
- DPI meets threshold
- Pixel sampling at 5 regions scanning ~20 Y × 30 X per region needs 3+ non-bg pixels
- Console logs all dimensions for debugging

### 5. Standard stack
- **Libraries**: html2canvas + jsPDF + qrcodejs from cdnjs
- **Async waits**: `document.fonts.ready` AND QR image load before capture
- **Layout flush**: double `requestAnimationFrame` before capture
- **PDF settings**: jsPDF `compress:true`, `canvas.toDataURL('image/jpeg', 0.95)` for size/quality balance
- **Metadata**: Set PDF properties (title/subject/author). Filename includes dimensions: `Design-{W}x{H}in.pdf`

### 6. CSS limitations
- **NEVER use `background-clip: text`** — html2canvas captures it as solid filled rectangle, not gradient-clipped text. Use solid colors with text-shadow for gradient-like effects, or use an actual SVG/PNG image for gradient text.

### 7. QR codes (universal rules)
QR codes MUST always be perfectly square (1:1 ratio) and scannable. Five-layer protection:
1. Set width AND height with `!important` on QR container img/canvas
2. Use `aspect-ratio: 1/1` as backup
3. Prevent flex/grid stretching with `flex-shrink: 0`, `align-self: center`
4. Verify final QR dimensions in pixel sampling (width = height within 2%)
5. Ensure QR img has `display: block`, no `object-fit: fill`

Default QR styling: white bg, dark border, hard shadow effect.
QR generated at 800px base with `correctLevel: H`.
Always include dynamic URL input field + label input field in control panel with "Update QR" button.
Always include QR section unless user explicitly says no QR.

### 8. Content overflow strategy
If a design overflows/runs out of space, **NEVER trim/shrink** (reducing margins, paddings, font sizes to squeeze content). Instead **REMOVE the least important section entirely**.

**Priority to keep**: brand, hero, primary services/offer, QR, contact
**Removable when needed**: clients/testimonials, secondary stripe banners, decorative dividers, pitch tagline

Ask user which to remove if unsure, or remove lowest-priority by default.

---

## Banners

### Architecture
- Source DOM has **FIXED WIDTH only** (e.g., 2010px), **NO fixed height**
- Content defines natural height
- No `overflow: hidden`
- PDF uses fit-to-page with center alignment — invisible letterbox in banner bg color fills any aspect gap
- Use `jsPDF unit: 'pt' format: [w*72, h*72]`, NOT `'in'`
- Force width inline before capture (`minWidth`, `maxWidth: none`) to prevent flex shrink
- Apply same forced styles in `html2canvas` `onclone` callback

### Aspect ratio locking (when gradient background)
If banner background has gradient/color variation, the source DOM MUST be locked to exact print aspect ratio (width × height matching target inches ratio). Otherwise letterbox shows visible color seam between captured image (with gradient) and flat PDF page background fill.

- Lock height with explicit px
- Use `flex justify-content: space-between` to distribute sections
- Remove section margin-bottoms
- Example: 33.5×78.75 banner → 2010×4725px source

### Section data attributes
Each major section needs `data-section="name"` attribute:
- brand, hero, divider, pitch, services, stripe, clients, offer, qr, contact (adapt to design)

### Default dimensions
- **Chromora banners**: 33.5 × 78.75 inches (standard in-store size — use unless told otherwise)

---

## Posters

Distinguish from banners:
- **BANNER**: structured layout with stripes, boxes, dividers, brand-prominent (roll-up, floor banner, vertical signage)
- **POSTER**: edge-to-edge design with no padding/borders, hero visual dominant, minimal corporate elements, gallery/aesthetic feel (in-store, gallery, wall display)

Ask which when ambiguous. Default poster to in-store pickup messaging over shipping when user has physical location.

### Layout system
Use **absolute positioning with `bottom:` anchoring** for footer/QR (not `top:` positions) — guarantees footer stays inside frame border.

- Frame border inset 50px from poster edge
- Footer `bottom: 130px` from poster edge (baseline)
- Pickup `bottom: 600px` from edge (baseline)
- QR sized smaller for posters (200×200px img, 232×232px container) to leave room
- Caption/headline/promises use `top:` positions in upper half

This bottom-anchor approach prevents the QR-overflowing-frame issue.

### Workflow template
- Full-bleed hero image bg
- Gradient overlay (heavier at top: 0.45 → 0.10 → 0.40 → 0.55 → 0.92 → 0.98)
- Frame border inset 50px
- Content with absolute positioning
- Top half uses `top:` (brand, caption, headline)
- Bottom half uses `bottom:` anchor (footer/QR, pickup)
- Auto-scale dimensions proportionally to requested size
- Apply this proven template directly — never re-iterate on layout problems already solved

### Element sizes (scale proportionally)
Baseline values (scale to actual dimensions):
- Brand name: ~220px font
- Caption: ~64px
- Headline number: HUGE (~380px)
- Headline text: ~140px
- Promises icons: ~110px / titles: ~52px / subs: ~32px
- Pickup: ~76px
- Contact-web: ~120px

### Styling
- Caption sits with semi-transparent dark backdrop + blur for legibility on busy bg
- All large text gets text-shadow for pop against image

### Proportional Y-position scaling
Absolute Y positions are NOT one-size-fits-all. Must scale proportionally to source height.

**Reference: Chromora 24×36 used 2700px tall**:
- brand: 90
- caption: 520
- headline: 820
- promises: `bottom: 750`
- pickup: `bottom: 480`
- footer: `bottom: 130`

**Formula for other sizes**:
```
position_ratio = original_pos / 2700
new_pos = position_ratio × new_height
```

NEVER copy absolute pixel positions from one poster size to another without proportional scaling.

### Pre-layout section-height table
BEFORE placing absolute-positioned sections, calculate each section's actual height (font sizes + line-height + padding + margins) and map every section's Y range.

Verify no Y ranges overlap with **minimum 20px gap**. Use this table approach:

| Section | Anchor | Height | Y range |

Common pitfalls:
- Promise sub text needs ~2-line height factored in
- Pickup needs padding×2 + label + label margin + pickup-text height

### Proven 18×24 poster spec (baseline for ~0.75 aspect)
**Bottom-anchored sections (no overlap)**:
- Promises: `bottom: 720`
- Pickup: `bottom: 460`
- Footer: `bottom: 130`

**Sizes**:
- Promise icon: 88px / title: 42px / sub: 24px (line-height 1.35)
- Pickup padding: 32px / label: 22px / pickup-text: 56px
- Headline: `top: 780`, num 320px, text 108px, sub 54px

Use these as baseline for similar aspect ratios. Scale Y positions proportionally to source height ratio (`target_H / 2400`).

### Section gap requirement
**Minimum 20px between any two stacked sections.**

Computed Y range table for poster layout:
- brand: `top: 110` height ~370 → 110–480
- caption: `top: 540` height ~140 → 540–680
- headline: `top: 780` height ~570 → 780–1350
- promises: bottom-anchored, height ~210
- pickup: bottom-anchored, height ~234
- footer: bottom-anchored, height ~280

Always show this table when designing posters so user can review before render.

---

## Business Cards

### Spec
- **Dimensions**: 1750 × 1000 px source (exact 1.75 aspect)
- **Landscape**: 3.5 × 2 in standard
- **PDF**: 252 × 144 pt
- **DPI**: 300+ required (verification check)
- **Color-matched letterbox fill** (no visible seams)

### Workflow
- Build **FRONT first** when user asks for a card (brand-identity focused, no QR)
- Offer to build **BACK** as a follow-up (action/QR focused, inverted palette)
- Both sides as a pair: cohesive palette, mirrored typography, complementary intent

### Front side
- Brand-identity focused, **no QR**
- Single-zone centered layout (NOT side panels — long brand names like "CHROMORA" with letter-spacing overflow narrow zones)
- Watermark behind content (low opacity, no `background-clip: text`)
- Subtle paper texture overlay (45° crosshatch ~0.03 opacity)
- 4 gold corner brackets

**Sections**:
- Top ornament line
- Center wordmark + tagline
- Bottom 3-column footer (left meta / center URL / right meta)

**Pre-flight MUST measure wordmark width vs card width with 200px margin.**

### Back side
- Action/QR focused, **inverted palette** from front (dark bg, light text)
- Two-zone 40/60 split: left = QR action zone, right = info zone
- QR in light cream frame with gold border + offset shadow on dark bg = high contrast
- Right zone vertical bands:
  - Top header (eyebrow + headline + subtitle)
  - Middle offer block (gold-framed)
  - Bottom contact (URL+meta left, signature italic right)
- Diagonal watermark wordmark behind content at 5% opacity

### Verification gates (all sides)
- All sections present (`data-section` attrs)
- QR squareness (1:1 ratio, 5-layer enforcement) — back only
- Headline/wordmark width fits container with 200px margin
- Card aspect = 1.75
- Canvas aspect matches (no letterbox)
- DPI ≥ 300 (print standard for business cards)
- Pixel content sampling on each zone

---

## Quick reference: auto-applied pipeline checklist

| # | Rule | Ensures |
|---|------|---------|
| 1 | Exact dimensions verified 4 ways | File matches requested size precisely |
| 2 | Full design fits, never cropped | Every section visible in final file |
| 3 | DPI scaled to format (72–150 large / 300+ close) | Realistic print quality |
| 4 | Fixed width / natural height / pt units / forced inline styles | Robust architecture |
| 5 | Two-button workflow (Test → Download) | Verify before delivering |
| 6 | Standard stack with proper async waits | Fonts and QR load before capture |
| 7 | `data-section` attributes + dynamic QR controls | Inspection-friendly, configurable |
| 8 | Remove sections, never shrink | Design integrity preserved |
| 9 | QR squareness enforced 5 ways | Scannable QR every time |
| 10 | Poster bottom-anchor for footer/QR | Stays inside frame border |
| 11 | Proportional Y-scaling by source height | Layouts work at any size |
| 12 | Section-height table verified before render | No overlap, min 20px gap |
| 13 | Business cards: front first, back as pair | Cohesive design system |
| 14 | Inverted palette for card back | Visual distinction |
| 15 | No `background-clip: text` (fails in html2canvas) | Reliable rendering |
