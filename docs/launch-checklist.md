# Launch checklist

Status as of 11 Nov 2026. Missing photos, certificates and text are left out
of the live site; in `npm run dev` each shows as a labelled `TODO`.
`npm run check:seo` fails if a `TODO` or `{{FILL}}` would reach a live page.

## A. Deploy

- [x] Site rebuilt and merged into `main` (PR #1).
- [x] Netlify site created from the GitHub repo and named `ceebee-enterprises`, giving https://ceebee-enterprises.netlify.app. Every push to `main` redeploys. The address comes from Netlify's `URL` variable, so canonicals, sitemap and robots.txt follow it.
- [x] Site is public: visitor protection is off and every page returns 200 (checked 11 Nov 2026).
- [x] Google-listing fixes merged (PR #2): Hazaribagh URLs, 7:30 PM hours, exact address.
- [ ] **Quote form emails.** Netlify → *Forms* → enable form detection → redeploy → *Forms → quote → Form notifications* → email to satish.hzb@gmail.com. Send a test quote with a file attached (max 8 MB) and check it arrives.

## B. After it's live

- [ ] Open the site on a cheap Android phone on mobile data: tap Call, WhatsApp and Directions in the sticky bar.
- [ ] PageSpeed Insights (mobile) on home, one category page and one guide. Targets: LCP < 2.5 s, INP < 200 ms, CLS < 0.1.
- [ ] Rich Results Test and schema.org validator on home, a category page and a guide.
- [x] Google Search Console: *URL prefix* property `https://ceebee-enterprises.netlify.app/`, verified by the HTML file `public/google678c51c84924c368.html` (keep it). `sitemap-index.xml` submitted 11 Nov 2026 with status Success; Google has discovered all 28 pages. Next, watch *Pages* → *Indexed* (discovered ≠ indexed) and, after 2–4 weeks, *Performance* for the searches that show the site.
- [ ] Search Console → *URL inspection* → *Request indexing*: **home page first**, because on 11 Nov it was the only page in Google and still showed the old "Hazaribag" / "8 PM" text. Then the main category pages (plywood, laminates, door hardware, kitchen hardware), a few a day.
- [ ] Bing Webmaster Tools → import from Search Console → submit sitemap. On 11 Nov, Bing had no pages of the site, so ChatGPT search and Copilot can’t find it yet.
- [ ] Claim **Bing Places** and **Apple Business Connect**.
- [ ] Update GBP (see `docs/google-business-profile.md`). Done by 11 Nov: website link with UTM, description, plywood products, 69 photos, 115 reviews. Still to do: primary category, holiday hours, review replies, product name fixes and remaining products, services, posts.
- [ ] Make Justdial, Facebook and Instagram match the NAP block in `docs/citation-nap.md` exactly.
- [x] `/robots.txt`, `/llms.txt` and `/sitemap-index.xml` open (checked 11 Nov).

## C. Moving to your own domain later

When you buy a domain that matches the brand (e.g. `cbdecor.in`):

1. Netlify → *Domain management* → *Add a domain* → set it as **primary**. Netlify then redirects `ceebee-enterprises.netlify.app` to it automatically, and the next build uses it for canonicals, sitemap and robots.txt (from Netlify's `URL` variable).
2. Point the domain's DNS at Netlify as Netlify's domain screen shows (usually an `A` record for the root and a `CNAME` for `www`), and wait for HTTPS.
3. Search Console → add the new domain → *Settings → Change of address* from the netlify.app property.
4. Update the website link on GBP, Justdial, Facebook, Instagram, Bing and Apple (`docs/citation-nap.md`) and in `docs/google-business-profile.md`.

## D. Analytics (GA4)

1. analytics.google.com → *Admin* → *Create property* "CB Decor website" → *Web* stream for the live address.
2. Copy the Measurement ID (`G-…`) into `ga4Id` in `src/config/site.ts`, then push. Analytics stays off until it's set.
3. In GA4 → *Admin* → *Events*, mark `click_call`, `click_whatsapp`, `click_directions` and `generate_lead` as **key events**.
4. GBP traffic appears under *Acquisition → Traffic acquisition* as source `google`, campaign `gbp_listing`.

## E. To fill in after launch

Nothing here blocks launch. Each item appears on the live site as soon as it's added.

| # | Where | What's needed | On the live site until then |
| --- | --- | --- | --- |
| 1 | `src/pages/about.astro` (`TODO` comment under "Our story") | 2–4 sentences of the shop's real story | Story paragraph shows only the founding year and owner |
| 2 | `src/pages/contact.astro` (`TODO` comment under "How do I find the shop?") | 1–2 landmarks next to the shop and the nearest well-known road | Shows the directions link and "call us" |
| 3 | `src/assets/photos/` | 21 real photos, named as in `src/assets/photos/README.md` | Photo frames are left out; layouts go single-column |
| 4 | `src/assets/certificates/` | 9 dealer certificates (+ award photos) | Certificate strip hidden |
| 5 | `src/data/certificates.ts` | Award name, given by, year for each award photo | Award hidden |
| 6 | `src/data/categories.ts` | Types and brands of chandeliers / decorative lights you stock, to give lighting its own page | Mentioned in product lists only |
| 7 | `src/config/site.ts` → `ga4Id` | GA4 measurement ID (section D) | No analytics |
| 8 | `src/config/site.ts` → `priceRange` | Optional, e.g. `₹₹` | Left out of schema |
| 9 | `src/config/site.ts` → `social.indiamart` | IndiaMART URL, if you create a listing | Not linked |

**Questions for you (answers change the site):**

- Is **"CB Decor"** on the shop signboard? This decides whether GBP can use "Cee Bee Enterprises (CB Decor)" (see `docs/google-business-profile.md`).
- Besides Hazaribagh district, **which nearby towns** do you deliver to?
- The stock list also shows **Greenlam, Hettich, Amulya, Vivre, Alstar, Krayon, Saint-Gobain and Abhiyan**. Should any be named on category pages as "also in stock"?
- The stock list has **aluminium and stainless-steel ladders**. Should they appear on the site?
- Please have someone fluent **read the three Hindi pages** and correct any wording.

## F. Ongoing (monthly, 30 minutes)

- Add 2–3 new real photos to GBP and the site.
- Post one GBP update (new stock, a tip from a guide).
- Reply to every Google review.
- Check Search Console for errors and which searches bring visitors.
