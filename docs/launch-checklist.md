# Launch checklist

## A. Every `{{FILL}}` placeholder

| # | Where | What's needed | Shown to visitors? |
| --- | --- | --- | --- |
| 1 | `src/pages/about.astro` | 2–4 sentences of the shop's real story (how it started, what it first sold, how CB Decor came about, who in the family works there) | **Yes, fill before launch** |
| 2 | `src/pages/contact.astro` | 1–2 landmarks next to the shop ("opposite …", "next to …") and the nearest well-known road | **Yes, fill before launch** |
| 3 | `src/config/site.ts` → `geo.lat` / `geo.lng` | Shop coordinates: open Google Maps, long-press the shop pin, copy the two numbers | No (left out of schema until filled) |
| 4 | `src/config/site.ts` → `ga4Id` | GA4 measurement ID `G-XXXXXXXXXX` (see section D) | No (analytics off until filled) |
| 5 | `src/config/site.ts` → `priceRange` | Optional, e.g. `₹₹` | No |
| 6 | `src/config/site.ts` → `address.street` | Only if Google shows a shop number / building / road before "Bajrangi Chowk" | n/a (currently "Bajrangi Chowk") |
| 7 | `src/config/site.ts` → `social.indiamart` | IndiaMART URL, if you create a listing | No |
| 8 | `src/assets/photos/` | 21 real photos, named as listed in `src/assets/photos/README.md` | Wood panels show until added |
| 9 | `src/assets/certificates/` | 9 dealer certificates (+ award photos) | Strip hidden until added |
| 10 | `src/data/certificates.ts` | Award name, given by, year for each award photo | Hidden until photo added |

**Questions for you (answers change the site):**

- Is **"CB Decor"** on the shop signboard? This decides whether GBP can use "Cee Bee Enterprises (CB Decor)" (see `docs/google-business-profile.md`).
- Besides Hazaribag district, **which nearby towns** do you deliver to? (You said "district and nearby towns".)
- The stock list also shows **Greenlam, Hettich, Amulya, Vivre, Alstar, Krayon, Saint-Gobain and Abhiyan**. You're not an authorised dealer for these, but do you want any named on category pages as "also in stock"?
- The stock list has **aluminium and stainless-steel ladders**. Should they appear on the site?
- Please have someone fluent **read the three Hindi pages** and correct any wording.

## B. Deploy (see README for click-by-click)

- [ ] Push this repo to GitHub.
- [ ] Netlify → *Add new site* → *Import from GitHub* → pick the repo (build settings come from `netlify.toml`).
- [ ] Netlify → *Domain management* → add `cb-mirror.cc` and `www.cb-mirror.cc`.
- [ ] Spaceship → DNS: `A @ 75.2.60.5` and `CNAME www <your-site>.netlify.app` (remove any old parking records).
- [ ] Wait for HTTPS ("Let's Encrypt certificate" turns green in Netlify), then confirm `http://` and `www` both redirect to `https://cb-mirror.cc/`.
- [ ] Netlify → *Forms* → enable form detection → *Notifications* → email to satish.hzb@gmail.com. Send a test quote **with a file attached** and check it arrives.

## C. After it's live

- [ ] Open the site on a cheap Android phone on mobile data: tap Call, WhatsApp and Directions in the sticky bar.
- [ ] PageSpeed Insights (mobile) on home, one category page and one guide. Targets: LCP < 2.5 s, INP < 200 ms, CLS < 0.1.
- [ ] Rich Results Test and schema.org validator on home, a category page and a guide.
- [ ] Google Search Console (Domain property) → submit `https://cb-mirror.cc/sitemap-index.xml`.
- [ ] Bing Webmaster Tools → import from Search Console → submit sitemap.
- [ ] Claim **Bing Places** and **Apple Business Connect**.
- [ ] Update GBP: website link with UTM, description, categories, products, services, 4 posts (all in `docs/google-business-profile.md`).
- [ ] Make Justdial, Facebook and Instagram match the NAP block in `docs/citation-nap.md` exactly.
- [ ] Check `https://cb-mirror.cc/robots.txt`, `/llms.txt` and `/sitemap-index.xml` open.

## D. Analytics (GA4)

1. analytics.google.com → *Admin* → *Create property* "CB Decor website" → *Web* stream for `https://cb-mirror.cc`.
2. Copy the Measurement ID (`G-…`) into `ga4Id` in `src/config/site.ts`, then rebuild/deploy.
3. In GA4 → *Admin* → *Events*, mark `click_call`, `click_whatsapp`, `click_directions` and `generate_lead` as **key events**.
4. GBP traffic appears under *Acquisition → Traffic acquisition* as source `google`, campaign `gbp_listing`.

## E. Ongoing (monthly, 30 minutes)

- Add 2–3 new real photos to GBP and the site.
- Post one GBP update (new stock, a tip from a guide).
- Reply to every Google review.
- Check Search Console for errors and which searches bring visitors.
