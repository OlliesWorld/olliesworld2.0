# Design Specification — OlliesWorld

**Last updated**: 2026-05-03

---

## Brand Identity

**Name**: OlliesWorld  
**Tagline**: "Marketing from the ground up."  
**Tone**: Warm, witty, confident. Serious craft with a light touch. Never corporate, never cold.  
**Mascot**: Ollie — a dog who serves as the agency founder. The perspective is literally "4 inches off the ground."

---

## Color Palette

All colors are defined as CSS custom properties in `src/app.css`.

| Token       | Hex       | Role                                      |
|-------------|-----------|-------------------------------------------|
| `--slate`   | `#2a4a5e` | Primary dark blue — main backgrounds      |
| `--slate-d` | `#1d3648` | Darker slate — nav, dark section fills    |
| `--slate-l` | `#3b6070` | Lighter slate — card backgrounds          |
| `--amber`   | `#c4762a` | Brand accent — CTAs, labels, highlights   |
| `--amber-l` | `#d98b3a` | Lighter amber — hover states              |
| `--cream`   | `#f5f0e8` | Light background and text on dark          |
| `--cream-d` | `#ede5d4` | Darker cream — borders, dividers          |
| `--ink`     | `#1a2a35` | Darkest — primary text on light           |
| `--mid`     | `#7a9aaa` | Mid-slate — secondary/muted text          |

**Usage rules**:
- Dark sections (hero, CTA bands): `--slate-d` or `--slate` background, `--cream` text
- Light sections (content): `--cream` or white background, `--ink` text
- Amber is used for labels, active states, button fills, and decorative accents only — never for body text
- Never use amber on a dark background for body text (contrast too low)

---

## Typography

**Fonts loaded via Google Fonts CDN** (in `app.html`):

| Variable     | Family           | Weights         | Use                         |
|--------------|------------------|-----------------|-----------------------------|
| `--ff-head`  | Playfair Display | 400, 600, 800   | All headings (h1–h4, .h2)   |
| `--ff-body`  | DM Sans          | 300–600, var    | Body, labels, nav, UI text  |

**Type scale**:

| Element | Size                        | Weight | Notes                       |
|---------|-----------------------------|--------|-----------------------------|
| h1      | `clamp(3rem, 4.8vw, 4.5rem)` | 800    | Playfair Display, italic    |
| h2/.h2  | `clamp(2rem, 3.2vw, 3rem)`  | 700    | Playfair Display            |
| h3      | ~1.4rem                     | 600    | Playfair Display            |
| .label  | 0.72rem                     | 600    | DM Sans, uppercase, amber, 0.18em letter-spacing |
| .body-lg | 1.05rem                   | 400    | DM Sans, 1.85 line-height   |
| body    | 1rem                        | 400    | DM Sans, 1.7 line-height    |
| small   | 0.88rem                     | 400    | DM Sans                     |

---

## Layout

**Container**: `.inner` — max-width `1160px`, horizontal padding `52px` (reduces to `20px` on mobile)

**Sections**: Standard vertical padding `120px` (reduces to `64px` on mobile)

**Grid patterns used**:
- 3-column services/work preview
- 4-column stats band
- 2-column content+image
- Mosaic work grid (mixed widths)
- 3-column blog grid

---

## Buttons

| Class          | Background   | Text         | Border          | Hover                          |
|----------------|--------------|--------------|-----------------|--------------------------------|
| `.btn-amber`   | `--amber`    | `--cream`    | none            | `--amber-l` + `translateY(-2px)` |
| `.btn-outline` | transparent  | `--cream`    | 1px `--cream`   | amber text + amber border      |
| `.btn-white`   | white        | `--ink`      | none            | slight darken                  |
| `.nav-cta-btn` | `--amber`    | `--cream`    | none            | `--amber-l`                    |

All buttons: `border-radius: 3px`, `padding: 12px 26px`, `font-size: 0.9rem`, `font-weight: 500`, `transition: 0.2s`

---

## Navigation

- **Position**: Fixed, `z-index: 900`, height `62px`
- **Background**: `--slate-d`
- **Logo**: "OlliesWorld" — amber, Playfair Display, 1.2rem, 700
- **Links**: `--cream`, 0.88rem, DM Sans 500, amber underline on active/hover
- **CTA**: "Get in Touch" rendered as `.nav-cta-btn`
- **Mobile**: Hamburger toggle appears at `≤1024px`, menu drops down full-width

---

## Animation System

All scroll animations use the `reveal` class family, powered by IntersectionObserver in `src/lib/utils.js`.

| Class           | Effect                             | Duration |
|-----------------|------------------------------------|----------|
| `.reveal`       | Fade in + `translateY(36px)`       | 0.65s    |
| `.reveal-left`  | Fade in + `translateX(-40px)`      | 0.70s    |
| `.reveal-right` | Fade in + `translateX(40px)`       | 0.70s    |
| `.reveal-scale` | Fade in + `scale(0.93)`            | 0.60s    |

**Stagger delays**: `data-delay="1"` through `data-delay="6"` add `0.08s` per step.

**Page transitions**: Svelte `fly` transition on route change (`y: 16`, `duration: 260`).

**Counter animations**: Homepage stats animate from 0 to target value on mount (1400ms, cubic ease-out).

**Marquee**: CSS `@keyframes` infinite scroll at `30s` linear.

---

## Background Textures

| Class              | Pattern                                         |
|--------------------|-------------------------------------------------|
| `.stripe-bg`       | 45deg repeating stripes, white 3% opacity       |
| `.stripe-bg-light` | -45deg repeating stripes, black 1.8% opacity    |
| `.placeholder-box` | Styled image placeholder with stripe overlay   |

---

## Responsive Breakpoints

| Breakpoint | Width       | Key changes                                                    |
|------------|-------------|----------------------------------------------------------------|
| Tablet     | ≤1024px     | Hamburger nav, 3→2 col grids, reduced padding                  |
| Mobile     | ≤768px      | Single column, nav padding 20px, section padding 64px          |

---

## Image Assets

All images are `.webp` format, located in `/static/img/`.

| File               | Used in              |
|--------------------|----------------------|
| `ollie-hero.webp`  | Home hero            |
| `ollie_pink.webp`  | Home intro section   |
| `ollie_cute.webp`  | About page           |
| `me1k.webp`        | Team section (Roni)  |
| `ollie_relax.webp` | Archive/journey      |
| `ollie_toon.webp`  | Toon version         |

**Favicon**: `ollie_toon.ico` (referenced in `app.html`)

---

## Design Rules (Do/Don't)

**Do**:
- Use amber sparingly — it's a highlight, not a base color
- Keep headings in Playfair Display — it's core to the brand warmth
- Apply `.label` pattern (uppercase, small, amber) for section eyebrows
- Use `.reveal` classes on new sections for scroll animation consistency
- Use `.inner` container on every new section for alignment

**Don't**:
- Add new colors outside the token set without approval
- Use amber text on dark backgrounds for body copy
- Mix font families outside the defined set
- Create new button styles — extend existing classes instead
- Remove or replace the stripe background textures on dark hero sections
