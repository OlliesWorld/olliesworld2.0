# MVP Build Plan — OlliesWorld

**Last updated**: 2026-05-03  
**Status**: Core MVP is live. This document tracks what's done, what's missing, and what comes next.

---

## MVP Definition

The MVP for OlliesWorld is a fully functional, publicly accessible static marketing site that:
- Communicates the brand and agency offer clearly
- Accepts contact/lead form submissions
- Displays work and blog content
- Performs well on mobile
- Can be deployed and maintained without a backend

---

## Phase 1 — Foundation (Complete)

- [x] SvelteKit + Vite project scaffolded with static adapter
- [x] Global stylesheet with design token system (`app.css`)
- [x] Root layout with Nav and Footer components
- [x] Page transition animations
- [x] Scroll reveal animation system (`initReveals()`)
- [x] Google Fonts integration (Playfair Display + DM Sans)
- [x] Mobile responsive navigation with hamburger toggle
- [x] Favicon

---

## Phase 2 — Core Pages (Complete)

- [x] Home page (`/`) — hero, stats, intro, services preview, featured work, journey band
- [x] About page (`/about`) — story, timeline, values, team
- [x] Services page (`/services`) — all 6 services + 4-step process
- [x] Work page (`/work`) — 5 case studies in mosaic grid
- [x] Blog hub (`/blog`) — featured posts + all posts grid
- [x] Contact page (`/contact`) — Netlify form + contact info

---

## Phase 3 — Polish & Interactivity (Complete)

- [x] Counter animations on homepage stats
- [x] Marquee animation band
- [x] Staggered reveal delays (`data-delay`)
- [x] Button hover states and micro-interactions
- [x] All WebP images integrated
- [x] Archived v2 portfolio linked from Journey band

---

## Phase 4 — Outstanding Items (To Do)

These are gaps identified from the current codebase that need to be addressed before the site is fully production-ready.

### High Priority

- [ ] **Blog post detail pages** — Individual `/blog/[slug]` routes. Currently blog cards exist but lead nowhere. Either add routes or remove the cards until ready.
- [ ] **Work/case study detail pages** — Individual `/work/[slug]` routes with full case study content. Currently work cards have no destination.
- [ ] **Form success state** — Contact form has no in-page confirmation after submission. Add a visible success message so the user knows the form went through.
- [ ] **404 page** — A custom `404.html` fallback is configured but there is no branded 404 page. Create `src/routes/+error.svelte` or a static `404.html` in `/static`.

### Medium Priority

- [ ] **SEO meta tags** — Each page needs unique `<title>`, `<meta name="description">`, and Open Graph tags. Currently only the base `<title>` is set per page.
- [ ] **Favicon audit** — `ollie_toon.ico` is referenced in `app.html` — confirm it exists in `/static` and renders correctly.
- [ ] **Analytics** — No analytics integration exists. Add Plausible, Fathom, or similar privacy-friendly analytics.
- [ ] **Sitemap** — Generate `sitemap.xml` for SEO. SvelteKit has a plugin for this or it can be generated manually.

### Low Priority / Future

- [ ] **CMS integration** — Blog and work content are hardcoded. When content volume grows, consider a headless CMS (Contentful, Sanity, or even a Markdown/MDsveX approach for the blog).
- [ ] **Blog post count** — Currently 6 posts are shown. Populate with real published content.
- [ ] **Work case studies** — 5 case studies exist as cards. Flesh out with full project details and real client results when ready to publish detail pages.
- [ ] **Testimonials section** — Not currently present anywhere on the site. Consider adding to Home or About once client relationships allow.
- [ ] **RSS feed** — For the blog ("Ollie's Corner"), an RSS feed would support readers and SEO.

---

## Phase 5 — Growth (Backlog)

These are not blockers but represent the natural evolution of the site beyond the current MVP scope.

- [ ] Individual blog post pages with full article content (MDsveX or CMS)
- [ ] Full case study pages with project narrative, metrics, images
- [ ] Email newsletter signup integration
- [ ] Search functionality for blog
- [ ] Related posts on blog article pages
- [ ] Dark/light mode toggle (tokens are already in place — implementation is straightforward)

---

## Deployment Checklist

Before each production deploy, verify:

- [ ] `npm run build` completes without errors
- [ ] All pages render correctly in `npm run preview`
- [ ] Contact form submits and triggers Netlify notification
- [ ] Mobile nav opens/closes correctly on real device
- [ ] Images load (check WebP support)
- [ ] No broken links (especially to `/olliesworld2.0/`)
- [ ] Favicon appears in browser tab

---

## Decision Log

| Date       | Decision                                                                 | Reason                                              |
|------------|--------------------------------------------------------------------------|-----------------------------------------------------|
| 2026       | Use SvelteKit static adapter, not SSR                                    | No backend needed; simplifies hosting and cost      |
| 2026       | Hardcode all content (no CMS)                                            | Low content volume; keep it simple for now          |
| 2026       | Single global CSS file instead of component-scoped or Tailwind           | Small project; tokens + BEM is sufficient           |
| 2026       | Netlify Forms for contact                                                | Zero-backend form handling with spam protection     |
| 2026       | Archive v2 portfolio as static HTML in `/static/olliesworld2.0/`         | Preserve history without rebuilding in SvelteKit    |
