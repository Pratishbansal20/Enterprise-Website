# To-do

Current to-do list for the website and online listings, most valuable first.
Last checked against the live Google listing, Search Console and Bing on
**11 Nov 2026**. Tick items as you finish them. Background and copy-paste
text for the Google listing are in `docs/google-business-profile.md`.

> **Google listing: edit pause until about 23 Nov 2026.** The map pin was moved
> about two houses to the correct spot on ~9 Nov. That's the right fix and the
> listing is live and normal (checked 11 Nov), but after a location edit Google
> re-checks the listing and positions can wobble for a week or two. Until about
> 23 Nov, **don't change** the name, address, pin, phone, website or category.
> Replying to reviews, posts, photos, products and holiday hours are fine. If
> the dashboard shows a *Verify* or *Under review* banner, follow it.

## This week

- [ ] **1. Get Google to re-read the site.** Only the home page is in Google, and it's an old copy that still says "Hazaribag" and "8 PM".
  - Search Console → paste `https://ceebee-enterprises.netlify.app/` into the inspection bar at the top → **Request indexing**.
  - Over the next days, do the same for (a few per day):
    - `/products/plywood-shop-hazaribagh/`
    - `/products/laminate-shop-hazaribagh/`
    - `/products/door-handles-locks-hazaribagh/`
    - `/products/modular-kitchen-hardware-hazaribagh/`
- [ ] **2. Turn on quote-form emails.** Without this, quote requests from the website reach nobody.
  - Netlify → your site → *Forms*. If it asks, turn on form detection and redeploy.
  - *Forms* → **quote** → *Form notifications* → *Add notification* → *Email* → `satish.hzb@gmail.com`.
  - Send a test from the contact page with a file attached and check it arrives.
- [ ] **3. Reply to Google reviews.** 115 reviews; none of the ones shown publicly has a reply.
  - In the Google Business dashboard → *Reviews*, list the reviews with no reply.
  - Send them to Claude for personal reply drafts, then post them (10 a day is fine).
  - From now on, reply to each new review within a few days.
- [ ] **4. Set holiday hours.** Google still shows "Diwali might affect these hours".
  - Google listing → *Edit profile* → *Hours* → *Special hours*. Add Chhath and every other festival day you close or change times.

## Next

- [ ] **5. Finish the Google listing** (details in `docs/google-business-profile.md`).
  - Fix product names: "Green" → **Greenply**, "Royal Touche" → **Royale Touche**.
  - Add the remaining products: laminates, door hardware, kitchen hardware, furniture fittings, adhesives, PVC/WPC, ACP, wall panels, false ceiling, wallpaper and blinds, lights, King Koil (section 4).
  - **After the pause (from ~23 Nov): decide the primary category.** All 10 category slots are already set well (Plywood supplier primary, Hardware Shop and 8 others secondary). On 11 Nov the shop came 7th on Maps for "plywood shop in Hazaribagh" but wasn't in the top 10 for "hardware shop in Hazaribagh", because the primary category counts most. Keep Plywood supplier primary (safer), or swap Hardware Shop in as primary to target hardware searches. Change only that one thing that week (section 1.2).
  - Add services (section 5) and start weekly posts (section 6).
- [ ] **6. Get on Bing, and with it ChatGPT search and Copilot.** Steps below.
  - [x] **6A. Bing Webmaster Tools:** done 11 Nov (site imported from Search Console). This is the part that feeds ChatGPT search and Copilot.
  - [ ] **6B. Bing Places:** blocked. The import from Google says "address line 1 missing", so Bing won't verify, and editing the address gives "you don't have the required permission". Google's *Street address* field is filled ("Jay Prakash Marg, Bajrangi Chowk"), so the fault is on Bing's side: contact Bing Places support. See *If Bing Places is stuck* below.
- [ ] **7. Fix the other listings** so they match `docs/citation-nap.md`.
  - **Facebook:** replace the personal number +91 70045 07988 with +91 94313 94626; add address, hours, website.
  - **Instagram:** change the landmark to Bajrangi Chowk, Hazaribagh; put the website in the bio.
  - **Justdial:** fix the address on both listings, remove paints/tools/plumbing, add website and hours, ask Justdial to merge the two.
- [ ] **8. Google Analytics.** Create a GA4 property for the site and send the `G-…` Measurement ID to Claude to add to `src/config/site.ts`. Then mark `click_call`, `click_whatsapp`, `click_directions` and `generate_lead` as key events.

## When you can

- [ ] **9. Website content** (each appears on the site as soon as it's added; list in `launch-checklist.md` section E).
  - Shop and product photos (`src/assets/photos/README.md` has the names).
  - Dealer certificates and award photos (`src/assets/certificates/README.md`).
  - 2–4 lines of the shop's story for the About page; 1–2 landmarks for the Contact page.
- [ ] **10. Own domain** (e.g. `cbdecor.in`). Steps in `launch-checklist.md` section C.

---

## Step 6 in detail: Bing

Bing's index is used by **ChatGPT search, Microsoft Copilot and DuckDuckGo**, so being on Bing is how the shop shows up when people ask an AI where to buy plywood or hardware in Hazaribagh. Two parts, about 15 minutes in total.

### A. Bing Webmaster Tools (gets the website into Bing)

1. Go to **https://www.bing.com/webmasters** and click **Sign in**. Choose **Google** and use the same Google account as Search Console. A Microsoft account also works.
2. On the welcome screen, under **Import your sites from GSC**, click **Import**.
3. Click **Continue**, choose the Google account, and **Allow** Bing to read your Search Console data. This is read-only and Bing can't change anything.
4. Tick **`https://ceebee-enterprises.netlify.app/`** and click **Import**. Bing copies the site and its verification, so nothing needs adding to the website. It usually brings the sitemap across too.
5. Open **Sitemaps** in the left menu. If `sitemap-index.xml` isn't listed, click **Submit sitemap**, enter `https://ceebee-enterprises.netlify.app/sitemap-index.xml` and click **Submit**.
6. Open **URL Submission** and submit these to speed things up:
   ```
   https://ceebee-enterprises.netlify.app/
   https://ceebee-enterprises.netlify.app/products/
   https://ceebee-enterprises.netlify.app/products/plywood-shop-hazaribagh/
   https://ceebee-enterprises.netlify.app/products/laminate-shop-hazaribagh/
   https://ceebee-enterprises.netlify.app/products/door-handles-locks-hazaribagh/
   https://ceebee-enterprises.netlify.app/products/modular-kitchen-hardware-hazaribagh/
   https://ceebee-enterprises.netlify.app/contact/
   https://ceebee-enterprises.netlify.app/hi/
   ```
7. Check back in about a week: *Search Performance* and *URL Inspection* show what Bing has indexed. Searching `site:ceebee-enterprises.netlify.app` on bing.com should start listing pages.

### B. Bing Places for Business (puts the shop on Bing Maps)

1. Go to **https://www.bingplaces.com** and sign in. The same Google or Microsoft account is fine.
2. Choose **Import from Google Business Profile**, sign in with the Google account that manages the Cee Bee Enterprises listing, and **Allow**.
3. Select **Cee Bee Enterprises** and click **Import**. Name, address, phone, hours, categories and photos come across. Listings imported from Google are normally verified straight away; if Bing asks, complete its phone or postcard verification.
4. Open the listing and check:
   - **Website:** `https://ceebee-enterprises.netlify.app/`
   - **Hours:** Tue–Sun 9:30 AM–7:30 PM, Monday closed
   - **Phone:** +91 94313 94626 only
   - **Description:** paste the 735-character text from `docs/google-business-profile.md`, section 3
5. If Bing says a listing for the shop **already exists**, claim that one instead of creating a duplicate.
6. Changes usually show on Bing Maps within a few days.

**Done when:** the site shows in Bing Webmaster Tools with the sitemap processed, Bing Places shows the listing as published, and `site:ceebee-enterprises.netlify.app` on bing.com lists pages.

### If Bing Places is stuck ("address line 1 missing" + "required permission")

**Why it happens:** a listing imported from Google stays synced to Google, and Bing makes its synced fields read-only. You're expected to fix them on Google and let the next sync carry the change over. But Google's *Street address* field is filled in ("Jay Prakash Marg, Bajrangi Chowk", checked 11 Nov), so there's nothing to fix on Google: Bing's import has failed to read it. (This comes from community reports; Microsoft has no official page on this exact error.)

**Don't change the Google address just for Bing.** Editing the address on Google can trigger re-verification of a listing with 115 reviews, and Bing Maps brings far fewer customers than Google. Instead, in this order:

1. ~~Look only at Google's Street address.~~ Done: it reads "Jay Prakash Marg, Bajrangi Chowk". Leave it as it is.
2. **Ask Bing Places support** (from the Bing Places dashboard: *Help* / *Support* → *Contact us*). Say the listing was imported from Google Business Profile, give the full address *Bajrangi Chowk, Jai Prakash Marg, Kani Bazar, Hazaribagh, Jharkhand 825301*, and say you can't edit address line 1 or verify. Mention that Google's street address field is "Jay Prakash Marg, Bajrangi Chowk", so the import should have filled line 1. Attach screenshots of both errors.
3. **If support doesn't help in ~2 weeks:** in Bing Places, turn off Google sync (look under *Settings* / *Preferences* → *Google Business Profile sync*; the menu names change often), or delete the imported listing. Then **add the business manually** with the full address from `docs/citation-nap.md` and verify by phone or post. Claim an existing listing rather than creating a duplicate.

Bing Webmaster Tools (6A) is already done, so ChatGPT search and Copilot can find the website either way. Bing Places only adds the Bing Maps pin.
