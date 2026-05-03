# Technical Specification — OlliesWorld

**Last updated**: 2026-05-03

---

## Stack

| Layer       | Technology                        | Version  |
|-------------|-----------------------------------|----------|
| Framework   | SvelteKit                         | ^2.0.0   |
| UI Runtime  | Svelte                            | ^5.0.0   |
| Build Tool  | Vite                              | ^6.0.0   |
| Adapter     | @sveltejs/adapter-static          | ^3.0.0   |
| Hosting     | Netlify (static, no SSR)          | —        |
| Forms       | Netlify Forms                     | —        |
| Fonts       | Google Fonts CDN                  | —        |
| Styling     | Vanilla CSS (custom properties)   | —        |

No TypeScript, no CSS framework (Tailwind, etc.), no component library, no backend.

---

## Project Structure

```
/
├── src/
│   ├── app.html                  # Root HTML shell (fonts, favicon, meta viewport)
│   ├── app.css                   # Global stylesheet — all styles live here
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Nav.svelte        # Fixed navigation header
│   │   │   └── Footer.svelte     # Site footer
│   │   └── utils.js              # initReveals(), animateCounters()
│   └── routes/
│       ├── +layout.svelte        # Root layout (Nav, CSS import, page transitions, initReveals)
│       ├── +page.svelte          # / (Home)
│       ├── about/+page.svelte    # /about
│       ├── services/+page.svelte # /services
│       ├── work/+page.svelte     # /work
│       ├── blog/+page.svelte     # /blog ("Ollie's Corner")
│       └── contact/+page.svelte  # /contact
├── static/
│   ├── img/                      # WebP images
│   └── olliesworld2.0/           # Archived v2 portfolio (static HTML/JS)
├── build/                        # Compiled output (gitignored)
├── svelte.config.js
├── vite.config.js
└── package.json
```

---

## Routing

SvelteKit file-based routing. All routes are **prerendered at build time** — no server-side rendering.

```javascript
// src/routes/+layout.svelte
export const prerender = true;
```

The static adapter outputs flat HTML files to `build/`. A `404.html` fallback is configured for any unmatched routes.

---

## Layout & Navigation

The root layout (`+layout.svelte`) does three things:
1. Renders `<Nav>` above every page
2. Imports `app.css` globally
3. Runs `initReveals()` after every navigation via `afterNavigate`

Page transitions use Svelte's built-in `fly` transition on the `{#key $page.url.pathname}` block.

---

## Utility Functions (`src/lib/utils.js`)

### `initReveals()`
Uses `IntersectionObserver` to add `.visible` to elements with `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale` when they enter the viewport (threshold: 0.1).

- Called in `+layout.svelte` via `afterNavigate`
- Supports staggered delays via `data-delay="1"–"6"` (0.08s per step)
- CSS transitions handle the actual animation (no JS animation frames)

### `animateCounters()`
Runs on homepage mount (400ms delay). Queries `[data-count]` elements and animates their text content from `0` to `data-count` value over 1400ms using cubic ease-out (`1 - (1-p)³`) and `requestAnimationFrame`.

---

## Styling Architecture

Single global stylesheet: `src/app.css` (~536 lines).

- CSS custom properties (design tokens) defined on `:root`
- No scoped component styles — all styles are global
- BEM-influenced class naming
- Mobile-first responsive with two breakpoints (`1024px`, `768px`)

See `design_spec.md` for full token and component reference.

---

## Contact Form

The contact form on `/contact` is a standard HTML form submitted to Netlify Forms.

```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  ...
</form>
```

- No JavaScript is involved in form submission
- Netlify handles validation, spam filtering, and email notification
- No custom success/error state currently implemented in UI (browser default)

---

## Performance

| Concern         | Approach                                                        |
|-----------------|-----------------------------------------------------------------|
| Images          | All `.webp` format (smaller than PNG/JPG)                       |
| Fonts           | Preconnect to `fonts.googleapis.com` and `fonts.gstatic.com`   |
| JS              | Minimal — only utils.js (no external JS dependencies)          |
| CSS             | Single file, no unused CSS purging needed (small file)         |
| Rendering       | Fully prerendered static HTML — no client-side data fetching   |
| Animations      | IntersectionObserver (lazy) + CSS transitions (GPU-composited) |

---

## Build & Deploy

```bash
npm run dev      # Vite dev server with HMR
npm run build    # SvelteKit build → static output in /build
npm run preview  # Preview the built static output
```

Deploy: Push to main branch; Netlify picks up build automatically.  
Build command: `npm run build`  
Publish directory: `build`

---

## Browser Support

Targets modern browsers only. No polyfills included.

Required APIs:
- CSS Custom Properties
- CSS Grid / Flexbox
- IntersectionObserver
- `requestAnimationFrame`
- ES6 modules

---

## Adding New Pages

1. Create `src/routes/<name>/+page.svelte`
2. Add `export const prerender = true;` if needed (already set globally via layout)
3. Add nav link to `src/lib/components/Nav.svelte`
4. Add reveal classes and `data-delay` for scroll animations
5. Use `.inner` wrapper for all section content

## Adding New Content Sections

- Wrap in a `<section>` with a meaningful class
- Use `.inner` for max-width containment
- Use `.label` for eyebrow text
- Apply `.reveal` (or variant) to animated elements
- Follow existing color patterns from `design_spec.md`

---

## Known Limitations

- All content is hardcoded — no CMS integration
- Blog post pages are not implemented (cards exist but no `/blog/[slug]` route)
- No individual case study pages (`/work/[slug]`)
- No analytics integration currently present
- `ollie_toon.ico` favicon is referenced in `app.html` but verify it exists in `/static`
