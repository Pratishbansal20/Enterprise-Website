# Cee Bee Enterprises (CB Decor) — website

Static, fast, local-SEO website for **Cee Bee Enterprises (CB Decor)**, a hardware, plywood and interiors shop at Bajrangi Chowk, Hazaribag. It's built with [Astro](https://astro.build) and hosted on Netlify at **https://cb-mirror.cc**.

Every page is plain HTML (readable by Google and AI crawlers without JavaScript), weighs roughly 15 KB gzipped before images, and is designed for cheap Android phones on mobile data.

## Where things live

| You want to change… | Edit |
| --- | --- |
| Name, address, phone, hours, socials, delivery towns, GA4 ID | `src/config/site.ts` (**single source of truth**, used by footer, contact, schema and llms.txt) |
| Product categories (copy, stock ranges, FAQs, WhatsApp messages) | `src/data/categories.ts` |
| Hindi category names | `src/data/categories-hi.ts` |
| Authorised brands | `src/data/brands.ts` |
| Sitewide FAQ (also used for GBP) | `src/data/faqs.ts` |
| Certificates & awards strip | `src/data/certificates.ts` + pictures in `src/assets/certificates/` |
| Shop photos | drop files into `src/assets/photos/` (names listed in its README) |
| Buying guides | `src/content/guides/*.md` (Markdown) |
| Colours, fonts, layout | `src/styles/global.css` |
| Pages | `src/pages/` |

Other folders: `docs/` (audit, GBP kit, citations, SEO notes, launch checklist), `tools/` (video, icon and SEO-check scripts), `reference/stock-items.json` (the old stock export, kept for reference and not shipped).

## Run it on your computer

Needs [Node.js](https://nodejs.org) 22.12 or newer.

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:4321. In dev mode, missing photos and certificates show their expected file names.

```bash
npm run build && npm run check:seo
```

`check:seo` checks every built page (title/description length, one H1, canonical, valid JSON-LD, image sizes, broken links) and lists any `{{FILL}}` placeholders still visible.

### Media scripts

```bash
npm run media:video
```

Compresses the first video in `media-source/` into `public/video/` (MP4 without sound, plus a poster). Optional trim: `npm run media:video -- --start=0 --duration=45`. `media-source/` is git-ignored, so the 18 MB original never gets uploaded.

```bash
npm run media:icons
```

Regenerates `favicon.ico`, app icons and the social-share image `og-default.jpg` from the logo.

## Deploy to cb-mirror.cc (Netlify + Spaceship)

You do this once. After that, every `git push` redeploys automatically.

1. **Put the code on GitHub.** Create a private repo and push this folder.
2. **Create the Netlify site.** Sign up at netlify.com with GitHub → *Add new site* → *Import an existing project* → choose the repo. Build settings are read from `netlify.toml` (`npm run build`, publish `dist`). Click **Deploy**. You'll get a temporary `something.netlify.app` address; check the site there.
3. **Add your domain in Netlify.** *Site configuration → Domain management → Add a domain* → `cb-mirror.cc`. Netlify will also offer `www.cb-mirror.cc`; accept, and keep `cb-mirror.cc` as the primary domain.
4. **Point the domain at Netlify (in Spaceship).** Spaceship → *Domains* → `cb-mirror.cc` → *DNS / Nameservers* → keep Spaceship nameservers → *DNS records*:
   - Delete any existing `A`, `AAAA` or `CNAME` records for `@` and `www` (parking page records).
   - Add `A` record: host `@`, value `75.2.60.5` (Netlify's load balancer; confirm the value Netlify shows on the domain screen).
   - Add `CNAME` record: host `www`, value `<your-site>.netlify.app`.

   DNS usually updates within an hour (up to 24 h).
5. **HTTPS.** Back in Netlify → *Domain management → HTTPS*, click *Verify DNS configuration*. The free Let's Encrypt certificate is issued automatically. Then `http://`, `www.` and `https://www.` all redirect to `https://cb-mirror.cc/`.
6. **Quote form emails.** Netlify → *Forms* → enable form detection → redeploy → *Forms → quote → Settings & usage → Form notifications → Add notification → Email* → `satish.hzb@gmail.com`. Send a test from `/contact/` with a file attached. (Uploads up to 8 MB. Netlify's free plan covers a small shop's volume; check current limits under *Usage*.)

Then work through **`docs/launch-checklist.md`** (Search Console, Bing, GBP, analytics).

## Deliverables in this repo

- `docs/audit.md`: what was wrong with the old site
- `CHANGELOG.md`: what changed and why
- `docs/google-business-profile.md`: GBP description, categories, products, services, 4 posts, 10 Q&As
- `docs/citation-nap.md`: copy-paste NAP block for Justdial, IndiaMART, Bing Places, Apple, Facebook
- `docs/seo-and-ai-search.md`: robots.txt explained, schema, validation, Search Console / Bing steps
- `docs/launch-checklist.md`: launch steps and every `{{FILL}}` placeholder

## Rules for future edits

- **Never invent facts.** No fake reviews, ratings, customer counts, awards or "authorised dealer" claims. Unknown facts go in as `{{FILL: …}}`.
- **NAP lives only in `src/config/site.ts`.** Don't type the address or phone anywhere else.
- **One primary keyword per page.** Don't create two pages targeting the same search.
- No prices on the site; customers ask for today's rate on WhatsApp.
