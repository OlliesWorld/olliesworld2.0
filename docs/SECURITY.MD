# Security — OlliesWorld

This is a fully static SvelteKit site deployed on Netlify. There is no server-side code, no database, and no authentication. The threat surface is narrow, but a few areas still require attention.

---

## Architecture Overview

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | SvelteKit (`adapter-static`) | Outputs flat HTML/CSS/JS — no runtime server |
| Hosting | Netlify | Handles HTTPS, CDN, and form submissions |
| Contact form | Netlify Forms | Processed entirely by Netlify — no custom backend |
| Fonts | Google Fonts CDN | Loaded via `<link>` in `app.html` |

---

## HTTP Security Headers

Security headers are set at the Netlify layer via `netlify.toml`.

**File:** `netlify.toml` (project root)

| Header | Value |
|--------|-------|
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `Content-Security-Policy` | Scoped to `'self'` + Google Fonts CDN |

---

## Contact Form (Netlify Forms)

The contact form at `/contact` uses Netlify's built-in form handling (`method="POST" netlify`). No form data touches custom code.

### Spam Protection

A honeypot field (`bot-field`) is active on the form. Netlify silently discards any submission where the hidden field is filled in — bots fill all fields, humans never see it.

For heavier traffic, Netlify also supports reCAPTCHA v2 — enable it in the Netlify dashboard under Forms > Spam Filters.

**File:** `src/routes/contact/+page.svelte`

---

## No Secrets in Source Code

This is a static site — all JavaScript is publicly visible in the browser. The codebase currently contains no embedded secrets, and `.gitignore` blocks `.env` and `.env.*` from being committed.

When adding integrations, keep this in mind:

- Never embed API keys, tokens, or credentials directly in `.svelte` or `.js` files
- SvelteKit exposes `PUBLIC_` prefixed env vars to the browser — anything with that prefix is visible to end users
- Non-public env vars (no `PUBLIC_` prefix) are build-time only and never reach the browser
- Store all secrets in Netlify's environment variable settings, not in the repo

---

## Dependency Security

The project has no runtime server dependencies, but build-time packages can still have vulnerabilities.

**Routine checks:**

```bash
npm audit
npm audit fix
```

Keep `@sveltejs/kit`, `svelte`, and `vite` updated — Vite in particular has had build-time security patches.

**Current known issue (low severity):** `@sveltejs/kit@2.59.0` depends on `cookie@0.6.0` ([GHSA-pxg6-pf52-xh8x](https://github.com/advisories/GHSA-pxg6-pf52-xh8x)). This only affects the dev server — the static build output has no server and is not impacted. Do not run `npm audit fix --force` as it would downgrade SvelteKit to a breaking old version. Monitor for a `@sveltejs/kit` release that bumps `cookie` to `>=0.7.0`.

---

## HTTPS

Netlify enforces HTTPS automatically and provisions TLS certificates via Let's Encrypt. No action required. The HSTS header in the recommended config above reinforces this at the browser level.

---

## External Resources

The app loads fonts from Google's CDN (`fonts.googleapis.com`, `fonts.gstatic.com`). The `<link rel="preconnect">` tags in `app.html` are correct. No other third-party scripts are loaded.

If adding analytics or embeds in the future, update the `Content-Security-Policy` header accordingly and prefer loading scripts with the `defer` attribute.

---

## Security Checklist

- [x] Add `netlify.toml` with security headers
- [x] Add honeypot field to the contact form
- [x] Run `npm audit` before each deploy — 3 low severity findings (see Dependency Security)
- [x] Never commit API keys or tokens — `.gitignore` covers `.env` and `.env.*`; no secrets present in repo
- [x] Third-party scripts — none currently loaded; CSP in `netlify.toml` must be updated if any are added
