# Cee Bee Enterprises (CB Decor) — website

Website for **Cee Bee Enterprises (CB Decor)**, a family-run hardware, plywood and interior products shop at Bajrangi Chowk, Hazaribagh, Jharkhand.

**Live:** https://ceebee-enterprises.netlify.app

Static site built for local search and AI search: every page is plain server-rendered HTML with structured data, light enough for budget Android phones on mobile data, in English with Hindi versions of the home, products and contact pages.

## Tech stack

- [Astro 6](https://astro.build), static output, with `@astrojs/sitemap`
- Plain CSS (`src/styles/global.css`), self-hosted Fraunces headings, system body font
- About 2 KB of JavaScript in total (click tracking, map loader, video loader, WhatsApp quote button)
- Hosted on Netlify, with Netlify Forms for the quote form

## Pages

| Path | Page |
| --- | --- |
| `/` | Home |
| `/products/` and `/products/<category>-hazaribagh/` | Products hub and 12 category pages |
| `/brands/` | Authorised brands |
| `/services/`, `/contractors/` | Delivery and services; bulk supply for contractors |
| `/about/`, `/faq/`, `/contact/` | About, FAQ, contact with map and quote form |
| `/guides/` and `/guides/<slug>/` | Four buying guides |
| `/hi/`, `/hi/products/`, `/hi/contact/` | Hindi pages |
| `/robots.txt`, `/llms.txt`, `/sitemap-index.xml` | Crawler files, generated at build |

## Project structure

| To change… | Edit |
| --- | --- |
| Name, address, phone, hours, map, socials, delivery towns, GA4 ID | `src/config/site.ts` (single source of truth for every page and the schema) |
| Product categories: copy, stock ranges, FAQs, WhatsApp messages | `src/data/categories.ts` |
| Hindi category names | `src/data/categories-hi.ts` |
| Authorised brands | `src/data/brands.ts` |
| Sitewide FAQ | `src/data/faqs.ts` |
| Certificates and awards strip | `src/data/certificates.ts` and pictures in `src/assets/certificates/` |
| Shop photos | `src/assets/photos/` (file names listed in its README) |
| Buying guides | `src/content/guides/*.md` |
| Styles | `src/styles/global.css` |
| Page templates | `src/pages/`, `src/components/`, `src/layouts/` |
| Showroom video | `public/video/` (made by `npm run media:video`) |

Also in the repo: `tools/` (media and SEO-check scripts), `reference/stock-items.json` (the shop's stock export, used to write the category pages and not shipped), and `docs/` (including `docs/brand/`, the logo prepared for the Google listing).

## Run locally

Needs Node.js 22.12 or newer.

```bash
npm install
```

```bash
npm run dev
```

Opens at http://localhost:4321. In dev mode, missing photos, certificates and awards show as labelled `TODO` panels; on the live site they're left out until the file is added.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Builds the site into `dist/` |
| `npm run preview` | Serves the built `dist/` locally |
| `npm run check:seo` | After a build, checks every page: title and description length, one H1, canonical, valid JSON-LD, image sizes, broken links, and no visible `TODO`/`{{FILL}}` |
| `npm run media:video` | Compresses the video in `media-source/` (git-ignored) into `public/video/`; optional `-- --start=0 --duration=45` |
| `npm run media:icons` | Regenerates the favicon, app icons and `og-default.jpg` share image from the logo |

## Docs

- [docs/todo.md](docs/todo.md): current to-do list, most valuable first
- [CHANGELOG.md](CHANGELOG.md): what changed and why
- [docs/audit.md](docs/audit.md): problems with the old site
- [docs/google-business-profile.md](docs/google-business-profile.md): Google Business Profile audit and change list
- [docs/citation-nap.md](docs/citation-nap.md): name, address and phone block for directories, and fixes per listing
- [docs/seo-and-ai-search.md](docs/seo-and-ai-search.md): robots.txt explained, structured data, validation
- [docs/launch-checklist.md](docs/launch-checklist.md): launch status and everything still to fill in
