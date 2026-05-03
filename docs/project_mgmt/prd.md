# Product Requirements Document — OlliesWorld

## Overview

**Product**: OlliesWorld Marketing Agency Website  
**Type**: Static marketing/branding site (no backend)  
**Owner**: Roni Lockwood  
**Mascot/Voice**: Ollie (the dog, founder and chief strategist)  
**Last updated**: 2026-05-03

---

## Purpose

OlliesWorld is the public-facing website for a boutique content marketing agency. Its job is to communicate the agency's personality, showcase its services and work, attract qualified leads, and give Ollie a place to publish content ("Ollie's Corner" blog).

The site is intentionally small-batch — the agency takes 4–6 clients per year — so the site should feel curated and personal rather than high-volume.

---

## Goals

1. Establish a strong, differentiated brand identity around Ollie's "ground-level" perspective
2. Drive qualified contact form submissions from prospective clients
3. Showcase past work to build credibility
4. Publish content (blog) that reinforces the agency's voice and SEO presence
5. Be fast, accessible, and work flawlessly on mobile

---

## Target Audience

- Small-to-mid-size brands needing content strategy, brand voice, or SEO
- Founders and marketing leads who value personality and craft over corporate polish
- Brands that appreciate humor and don't want another generic agency deck

---

## Pages & Requirements

### `/` — Home
- Hero with headline, subheadline, and two CTAs ("See Our Work", "Meet Ollie →")
- Animated stat band (47 clients, 312 articles, 8 years, ∞ treats)
- Intro section introducing Ollie and the agency concept
- Services preview (3 of 6 services)
- Featured work (3 case studies)
- Journey band linking to archived portfolio

### `/about`
- Hero headline
- Founding story and timeline (4 milestones)
- 6 core values
- Team section (Ollie + Roni)

### `/services`
- All 6 services with sub-items
- 4-step process (Sniff It Out → Map the Terrain → Fetch & Deliver → Measure & Iterate)

### `/work`
- Mosaic grid of 5 case studies
- Each card: client name, service type, year, outcome stat

### `/blog` ("Ollie's Corner")
- 3 featured posts
- All posts grid (6 total)
- Each post: title, category tag, date, read time

### `/contact`
- Contact info (email, location, response time)
- Netlify-powered contact form
- Fields: First Name, Company, Email, Service, Budget, Message

---

## Out of Scope (Current Version)

- CMS or dynamic content management
- User authentication
- Blog post detail pages (individual blog article routes)
- E-commerce or payment flows
- Client portal or login
- Server-side rendering

---

## Success Metrics

- Contact form submissions (primary conversion)
- Time on site and pages-per-session
- Blog post engagement
- Page load speed (target: <2s LCP on mobile)

---

## Constraints

- Must be deployable as a fully static site (Netlify/static host)
- No backend required; contact form handled by Netlify Forms
- All content is hardcoded (no CMS for now)
- Fonts loaded from Google Fonts CDN
