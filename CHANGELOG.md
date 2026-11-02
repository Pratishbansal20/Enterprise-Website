# Changelog

## 2.0.0 — 2026-11-02 · Full rebuild for local SEO and AI search

### Why
The old React app sent empty HTML to Google and AI crawlers, loaded 1.1 MB of JavaScript on every page, had no SEO basics, and contained wrong facts. See `docs/audit.md`.

### Platform
- **Replaced React/Vite with Astro 6 static output.** Every page is plain HTML with ~2 KB of JavaScript in total (click tracking, map loader, reel loader, WhatsApp form button). Astro 6 rather than 7 because Astro 7 needs Node ≥ 22.23 and this PC has 22.16. Netlify uses Node 22 either way.
- **Netlify hosting** (`netlify.toml`): build settings, long caching for assets, security headers, and 301 redirects from the old `/catalogue` and `/product/*` URLs.
- **Removed** React, React Router, lucide-react, pdf-parse and xlsx, plus the AI-looking category PNGs (≈10 MB) and the Vite favicon.
- The 4,058-item stock export moved to `reference/stock-items.json`. It is no longer shipped to visitors; its contents were used to write accurate category pages.

### Business facts
- **One source of truth for NAP**, `src/config/site.ts`: name, address, phone, hours, socials and service area. The footer, contact pages, schema markup and `llms.txt` all read from it.
- Name standardised to **"Cee Bee Enterprises (CB Decor)"**; town spelled **"Hazaribag"** as on Google Business Profile.
- Hours corrected to **Tue–Sun 9:30 AM–8 PM, Monday closed**.
- "Building materials" removed everywhere. Glass/mirrors and curtain fabric are not listed.
- Only the 9 brands confirmed as authorised dealerships appear as brands (`src/data/brands.ts`). "Royal Touchee" written as **Royale Touche**, the spelling in the stock list and the brand's own name.

### Pages (30 built)
- **Home**, with a "Hardware & Plywood Shop in Hazaribag" hero, an entity-clear intro, category grid, showroom reel, authorised brands, certificate strip, why-us, FAQ, map and guides.
- **Products hub + 12 category pages**, each with its own primary keyword, a "what we stock" table taken from real stock data, answer-first sections, authorised brands, photo slots, FAQ and a WhatsApp CTA with a prefilled message: plywood/boards, laminates, door hardware, kitchen hardware, furniture fittings (replacing "architectural hardware", as asked), adhesives, PVC/WPC, ACP/acrylic, wall panels/louvers, false ceiling, wallpaper/flooring/blinds, and King Koil mattresses.
- **Brands, Services** (delivery, bulk supply, carpenter referral), **For Contractors** (with quote form), **About**, **FAQ**, **Contact** (live map, hours, quote form), **Thanks**, **404**.
- **4 buying guides** (Markdown in `src/content/guides/`): BWP vs MR vs commercial plywood; choosing a laminate finish; kitchen hinges and channels; how much plywood a 2BHK needs (worked example with the maths shown).
- **Hindi pages**: `/hi/`, `/hi/products/`, `/hi/contact/`, with `hreflang`.

### SEO / AI search
- Titles ≤ 60, descriptions ≤ 155, one H1, canonical, Open Graph/Twitter tags, sitemap (`@astrojs/sitemap`), robots.txt (explained in `docs/seo-and-ai-search.md`), `/llms.txt`.
- JSON-LD: `HardwareStore` sitewide, plus `Organization`, `WebSite`, `VideoObject`, `FAQPage`, `BreadcrumbList` and `Article` where relevant. Placeholder values are left out of the markup automatically. No review markup.
- `npm run check:seo` audits the built site (lengths, H1s, canonicals, JSON-LD validity, image alt/size, broken links, visible placeholders).

### Conversion
- Sticky mobile bar: **Call | WhatsApp | Directions**.
- WhatsApp click-to-chat on every page with page-specific prefilled messages.
- **Quote form** (name, phone, need, optional material-list upload) via Netlify Forms, emailed to you, plus a "Send on WhatsApp instead" button.
- GA4 click events (`click_call`, `click_whatsapp`, `click_directions`, `generate_lead`), loaded only after the page is idle and only once a GA4 ID is set.
- **Dealer certificates & awards strip**: an endless horizontal loop that pauses on hover/touch and becomes a swipeable row for reduced-motion users. Shows only certificates that have a photo.

### Media & design
- **Showroom reel**: 18 MB → 3 MB MP4 (no audio, faststart) in a 9:16 phone frame. It downloads only when scrolled into view, pauses off-screen, and never auto-downloads on Data Saver. `npm run media:video` regenerates it.
- Real-photo slots (`src/components/Photo.astro`): drop a correctly named photo into `src/assets/photos/` and it appears as AVIF/WebP with width/height set.
- Warm walnut/teak/brass palette with the logo red as an accent, a CSS-only veneer texture (no image cost), self-hosted Fraunces headings (18 KB) and system body fonts, ≥ 44 px tap targets.
- Favicon, app icons and a 1200×630 share image generated from the CB logo (`npm run media:icons`).
