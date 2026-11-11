# To-do

Current to-do list for the website and online listings, most valuable first.
Last checked against the live Google listing, Search Console and Bing on
**11 Nov 2026**. Tick items as you finish them. Background and copy-paste
text for the Google listing are in `docs/google-business-profile.md`.

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
  - Decide the main category: suggested **Hardware store**, keeping Plywood supplier as a second category (section 1.2).
  - Add services (section 5) and start weekly posts (section 6).
- [ ] **6. Get on Bing, and with it ChatGPT search and Copilot.** Bing has no pages of the site yet. Steps below.
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
