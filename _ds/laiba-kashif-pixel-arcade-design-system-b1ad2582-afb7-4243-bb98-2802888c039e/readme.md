# Laiba Kashif — Pixel-Arcade Design System

A retro pixel-art portfolio world for **Laiba Kashif**, a final-year B.Sc.
Information Technology student in Dubai working where **Data · Product · UX**
meet. The system turns her core message — *"I turn messy data, product questions
and user needs into clear dashboards, tested experiences and usable products"* —
into a playful-but-polished, recruiter-friendly visual language inspired by
arcade start screens, desktop UI, checklist quest-logs, pixel clouds and CRT
frames.

> **Tone in one line:** an arcade start screen run by a data analyst. Playful,
> technical, readable. Never childish, never cluttered.

---

## Sources

This system was reverse-engineered from Laiba's live portfolio and her repos.
None are assumed accessible to the reader — explore them for deeper fidelity:

- **Portfolio codebase:** `portfolio/Laiba Kashif - Portfolio v3.html`
  (a single, self-contained pixel-arcade site — the primary source of truth for
  colors, type, motifs, copy and components). A readable, un-bundled copy of its
  markup lives at `reference/portfolio-source.html` in this project.
- **GitHub:** <https://github.com/libbicodes/personal-portfolio> (the repo is
  mostly a license + readme; the built site above is the real artifact).
  Related project repos worth a look:
  <https://github.com/libbicodes/skillmap-uae-canada-job-market> (SkillMap, the
  flagship data/BI project) and `laibakashif2015/codequest`.

Fonts **Pixelify Sans** and **VT323** were extracted from the portfolio bundle
and ship as real `.woff2` files in `assets/fonts/` (latin subset). Both are also
freely available on Google Fonts if a fuller character set is needed.

---

## Content fundamentals

How Laiba's copy is written — match this voice in any new surface:

- **Voice = first person, warm and plain.** "I'm Laiba — a final-year B.Sc. IT
  student…", "I clean datasets, build dashboards, spot trends." Address the
  reader directly and lightly ("Move your cursor to scan →", "tap any cover").
- **Arcade framing, professional substance.** Game language is the *wrapper*
  ("LEVEL 01 — PRESS START", "★ UNLOCKED", "QUEST LOG", "player stats"), but the
  nouns underneath are always real and specific: SQL, pandas, Power BI, UAT,
  personas, dashboards, reconciliation, EC2. The play never replaces the proof.
- **Casing.** Pixel labels & kickers are **UPPERCASE** with wide tracking
  (`★ PORTFOLIO · 2026 ★`, `RIGHT NOW I'M…`). Headings are sentence case
  ("Data, design & products that click."). Body is sentence case.
- **Punctuation flourishes.** Middots `·`, arrows `→ ↗ ↡ ▶`, stars `★ ✦ ◆`,
  checkmarks `✓` and a trailing `.exe` on window titles. Used as texture, not noise.
- **Concise & scannable.** Short lead sentences, tag lists over prose, one idea
  per sticky note. Recruiter-skim friendly.
- **No emoji.** The brand uses *pixel glyphs and unicode symbols* (★ ✦ ◆ ▶ ✉ ♥
  → ↗) — never emoji. Keep it that way.
- **Signature lines:** "Data, design & products that click." · "Let's make
  something loud." · "clean data / test flow / dashboard ready."

---

## Visual foundations

- **Palette.** Warm cream paper (`#F2E9D0`) is the ground. Card surfaces are a
  near-white warm `#FBF8EE`. Everything is outlined and shadowed in near-black
  **ink** `#16140E`. Arcade primaries — **orange** `#F2913B` (the signature
  accent / CTA / title-shadow), **yellow**, **teal**, **cyan**, **purple**,
  **rose**, **navy**, **green** — are used as flat fills, one or two per element.
  A dark CRT family (`--screen #14131F` + phosphor **neon green** `#5BE584`) powers
  the "data world" / scanner reveal. Sticky notes use soft paper pastels.
- **Type.** Two voices only. **Pixelify Sans** (chunky pixel) for every heading,
  label, chip and button. **VT323** (monospace terminal) for *all* running copy —
  it sets large, so body base is 20px / line-height 1.4. Hero & section titles
  carry a hard **5px orange text-shadow**, never a blur.
- **Backgrounds.** Flat cream, occasionally a soft teal **band** (`#D8ECE5`) to
  separate a section. No gradients on content surfaces — the *only* gradient is
  the purple radial on the arcade start screen. Decorated with floating
  **pixel clouds, stars, sparks** and a platformer **hills** ground; a faint
  film-grain/scanline texture is allowed at low opacity.
- **Borders.** Solid `--ink`, always. `3px` default, `4px` on window/modal
  frames, `6px` on console/screen bezels. Nothing is borderless.
- **Shadows.** Hard, offset, **zero-blur**, ink-colored: `2/5/8/12px` square
  drops (`--sh-sm/--sh/--sh-lg/--sh-xl`). On focus, inputs flip to an *inset*
  hard shadow. There are no soft/blurred shadows anywhere.
- **Corners.** Rounded but chunky — `6 / 10 / 14 / 18px`; pills at `30px`.
  Sticky notes are barely rounded (`6px`); the arcade console goes large (`34px`).
- **Cards.** Paper fill + `3px` ink border + `8px` hard shadow, often **tilted
  ±1–2.5°** for a pinned-collage feel and **straightened + lifted on hover**.
- **Motion.** Bouncy and tactile, never subtle-corporate. Entrances pop
  (`cubic-bezier(.2,.9,.3,1.2)`), reveal lines slide up, clouds float, stars
  twinkle, the start button blinks. Respect the patterns below.
- **Hover.** Lift: `translate(-3px,-3px)` and the shadow **grows** (`--sh` →
  `--sh-lg`); accent backgrounds may brighten (e.g. nav item → orange).
- **Press.** Push down: `translate(3px,3px)` and the shadow **shrinks** to
  `--sh-sm`. The whole UI behaves like physical arcade buttons.
- **Imagery vibe.** Pixel-art SVGs, `image-rendering: pixelated`,
  `shape-rendering: crispEdges`. Warm, saturated, hard-edged. A small ink
  drop-shadow under floating motifs. No photography-as-texture, no realism.
- **Avoid:** realistic 3D, glassmorphism/blur-heavy panels, bluish-purple SaaS
  gradients, emoji, rounded-corner + colored-left-border cards, overcrowding.

---

## Iconography

- **Pixel-art SVG, hand-placed.** Every icon and motif is a `crispEdges` pixel
  SVG copied from the portfolio into `assets/`. There is **no icon font** and
  **no CDN icon set** — and none should be introduced; a stroke-icon library
  (Lucide/Feather) would clash with the chunky pixel language.
- **Three families** in `assets/`:
  - *Decorative doodles* — `cloud-{lg,md,sm,puff}`, `star`, `spark`, `heart`,
    `burst`, `gamepad`, `ground-hills`. Float them in skies and section corners.
  - *Tool logos* — `tool-{sql,python,pandas,powerbi,figma,react,firebase,aws}`,
    drawn in pixel form. Use in toolkits, stat blocks, project tags.
  - *Project motifs* — `motif-{skillmap,codequest,skinmatch,nimbus,solar}`, one
    pixel cover icon per featured project, shown centered on a colored cover.
  - *Status icons* — `icon-award-{gold,rose}`, `icon-cert`, `icon-exp-*`.
- **Unicode glyphs as inline icons** — ★ ✦ ◆ ▶ ✉ ♥ → ↗ ↡ ✓ ▢ — are part of the
  system and used freely in labels and buttons. **Emoji are not.**
- When a needed icon doesn't exist, draw it as a pixel SVG matching the existing
  `6px`-grid, flat-fill, ink-outline style — don't substitute a stroke icon.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
  `effects.css`, `base.css`.
- `assets/` — pixel SVG motifs, tool logos, project motifs, icons; `fonts/`.
- `SKILL.md` — Agent-Skills-compatible entry for downloading this system.

**Components** (`window.LaibaKashifPixelArcadeDesignSystem_b1ad25`)
- `core/` — **Button**, **Badge**, **Tag**, **StatusPill**
- `surfaces/` — **Card**, **Window**, **StickyNote**
- `forms/` — **Input**, **Checklist** (quest-log)
- `data/` — **StatBar**, **Marquee**
- `brand/` — **PlayerCard** (RPG character-sheet hero card)

Each directory has a `<Name>.jsx` + `.d.ts` + `.prompt.md` and a
`*.card.html` specimen.

**Guidelines** (`guidelines/`) — foundation specimen cards for the Design System
tab: Colors (paper, primaries, ink/terminal, note tints), Type (pixel, mono,
scale), Spacing (scale, shadows, borders), Brand (doodles, tools, motifs).

**UI kits** (`ui_kits/`)
- `portfolio/` — full single-page portfolio recreation with the redesigned
  **data-scanner hero**. See its `README.md`.
