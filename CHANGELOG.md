# Changelog

## 2.2.2 — 2026-11-11 · Follow the Google listing's new map pin

- The Google Business Profile pin moved about 18 m (plus code X9R3+G4 → X9R3+J4), so the schema coordinates in `src/config/site.ts` now match: 23.9915308, 85.3528508.
- New `docs/todo.md`: the current to-do list in priority order, with full Bing Webmaster Tools and Bing Places steps.
- Docs re-checked against the live listing: 115 reviews (4.9 ★), 69 photos, website, description and plywood products now on Google; Search Console verified with all 28 pages discovered; Bing not indexed yet.

## 2.2.1 — 2026-11-11 · Google Search Console verification

- Added the Search Console ownership file `public/google678c51c84924c368.html`, served at the site root. It must stay in place to keep the site verified.
- `check:seo` now skips search-engine verification files, which aren't pages.

## 2.2.0 — 2026-11-03 · Match the Google Business Profile

From an audit of the live Google listing (see `docs/google-business-profile.md`):

- **Spelling "Hazaribagh"** everywhere, as on Google, Justdial and the GST record ("Hazaribag" kept once as an alternate spelling). **Page addresses changed** to `…-hazaribagh/`. This was safe because the site wasn't indexed yet; the old URLs were never public.
- **Address** now matches Google: "Bajrangi Chowk, Jai Prakash Marg, Kani Bazar, Hazaribagh, Jharkhand 825301". **Coordinates** (23.9913656, 85.3528197) added to the schema, and the map link uses the listing's permanent Google Maps URL.
- **Closing time 7:30 PM** (was 8 PM), matching Google.
- **Chandeliers, decorative lights and wall putty** added to the product lists; paints, tools and plumbing listed as not sold in `llms.txt` (Google's AI summary claimed them).
- Live address is `ceebee-enterprises.netlify.app`; docs and the build fallback updated.
- New GBP audit and change list; citation block updated with the fixes for Justdial (two listings), Facebook (personal phone number) and Instagram (different landmark).
- **README trimmed** to what the project is, live URL, tech stack, pages, structure, local commands and a docs index. Deploy steps and editing rules removed; deploy status now lives in `docs/launch-checklist.md`.

## 2.1.0 — 2026-11-03 · Deploy-ready without placeholders

- **No placeholders on the live site.** Photo frames, the hero photo column, the About photos, certificates and awards are left out until their files exist; layouts fall back to one column. The About story and Contact landmarks became code `TODO` comments. `npm run dev` still shows every missing item as a labelled `TODO` panel.
- **`check:seo` now fails** if any `TODO` or `{{FILL}}` would be visible on a live page.
- **Site address no longer hard-coded.** `cb-mirror.cc` is used by the shop's billing app, so the site launches on the free `ceebee-enterprises.netlify.app`. The address comes from Netlify's `URL` variable at build time (override with `SITE_URL`), so moving to a custom domain later needs no code change. `robots.txt` is now generated so its Sitemap line follows the address.
- Optional config values (`geo`, `ga4Id`, `priceRange`) are now empty strings instead of `{{FILL}}` text.
- Docs updated: deploy steps, launch checklist (post-launch to-do list, custom-domain move), Search Console URL-prefix property for the netlify.app address.

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
