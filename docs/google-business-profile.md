# Google Business Profile — audit and change list

Listing: **Cee Bee Enterprises**, https://www.google.com/maps?cid=1606472877273398140
Checked from the public listing on 3 Nov 2026. Edit it at business.google.com,
or search "Cee Bee Enterprises" on Google while signed in → *Edit profile*.

---

## 0. What the listing shows today

| Field | Now on Google | Verdict |
| --- | --- | --- |
| Name | Cee Bee Enterprises | ✅ OK. Don't add keywords (see 2.5) |
| Hindi name (auto) | की बी एंटरप्राइजेज | ⚠️ Google's own transliteration; "की" is wrong (should be "सी") |
| Rating | 4.8 ★ from 70 reviews | ✅ Strong |
| Primary category | Plywood supplier | ⚠️ Narrower than what you sell (see 1.2) |
| Address | Bajrangi chowk, Jai Prakash Marg, Kani bazar, Hazaribagh, Jharkhand 825301 | ✅ Website now matches this |
| Pin / plus code | 23.9913656, 85.3528197 · X9R3+G4 | ✅ Now in the website's schema |
| Phone | 094313 94626 | ✅ Matches website |
| Hours | Tue–Sun 9:30 AM–7:30 PM, Mon closed | ✅ Website now matches. ⚠️ No holiday hours, so Google shows "Hours might differ" around Diwali |
| **Website** | **None** ("Add website") | ❌ Biggest gap (see 1.1) |
| Photos | 31 | ⚠️ OK, but needs regular additions and a video |
| Owner replies to reviews | None on the reviews Google shows publicly | ❌ (see 1.4) |
| Products / Updates (posts) | None visible | ❌ (see 1.5, 1.6) |
| Description | Not visible in the public view | Paste the one in section 3 |

### What Google's AI says about you (and why)

Google's AI Overview for "Cee Bee Enterprises" is built mostly from **Justdial**, not your listing. It currently says:
- the address is "Bansal Complex, Jhanda Chowk / Bajrangi Chowk, Gola Road, Boddom Bazar" (a mix of four places),
- you "open daily" (wrong: Monday closed),
- you sell "hand-held and power tools, plumbing supplies, and paints" (wrong).

AI tools trust the sources that agree with each other. Adding the website to the listing, filling in products and the description, and cleaning up Justdial/Facebook/Instagram (section 7) is how this gets corrected.

---

## 1. Do these first (highest impact)

### 1.1 Add the website — after one Netlify fix

**Yes, add it**, but first turn off Netlify's visitor protection. Right now `https://ceebee-enterprises.netlify.app` returns a Netlify login page (HTTP 401) to everyone who isn't signed in to your Netlify account, including Google. Fix: Netlify → your site → *Site configuration* → *Access & security* (or *Access control*) → *Visitor access* / *Site protection* → set to **public / no protection**, then open the site in a private/incognito window to confirm. If it's a team-wide default, also check *Team settings → Access & security*.

Then GBP → *Edit profile* → *Contact* → *Website*:

```
https://ceebee-enterprises.netlify.app/?utm_source=google&utm_medium=organic&utm_campaign=gbp_listing
```

The UTM part lets you see GBP visitors separately in analytics. The page's canonical tag points to the clean address, so Google won't treat the tagged link as a duplicate.

### 1.2 Categories

GBP → *Edit profile* → *Business category*. Type each name and use it **only if it appears in Google's dropdown exactly**.

**Primary: `Hardware store`**, with `Plywood supplier` moved to secondary.
Why: "Plywood supplier" makes you eligible mainly for plywood searches. "Hardware store" covers locks, handles, kitchen fittings, adhesives and more, matching "hardware shop in Hazaribagh" searches and the website's home page. Rankings can wobble for a week or two after a primary-category change. **If plywood is clearly your biggest seller, keeping `Plywood supplier` as primary is also a reasonable choice.** Either way, keep both.

**Secondary (up to 9):**

| Category | Covers |
| --- | --- |
| `Plywood supplier` | Plywood, blockboard, MDF, flush doors |
| `Home improvement store` | The broad interiors range |
| `Lock store` | Godrej locks, door hardware |
| `Kitchen supply store` | Modular kitchen hardware |
| `Furniture accessories` | Handles, bed and sofa fittings |
| `Lighting store` | Chandeliers and decorative lights |
| `Wallpaper store` | Excel wallpaper |
| `Window treatment store` | Blinds, curtain rods |
| `Mattress store` | King Koil |

If one isn't in the dropdown, use `Flooring store` instead. Don't add `Building materials supplier`, `Paint store` or `Tool store`: you don't sell those, and wrong categories show you for the wrong searches.

### 1.3 Holiday hours

Google already flags Diwali dates as "Hours might differ". GBP → *Edit profile* → *Hours* → *Special hours*: add every festival day you close or change times (Diwali, Govardhan Puja, Bhai Dooj, Chhath, Holi, Eid, etc.). Doing this before each festival keeps the "Hours might differ" warning away, and Google treats it as a sign the listing is actively managed.

### 1.4 Reply to every review

None of the reviews Google shows publicly has an owner reply. Reply to all 70, newest first (10 a day is fine), and then to each new one within a few days. Keep replies short and personal, mention the product, and never copy-paste the same text.

> *Thank you, Abhishek ji! Glad you found everything for your house in one place. See you again at Bajrangi Chowk. — Satish Bansal, Cee Bee Enterprises*

For a negative review: thank them, apologise for the experience, give the shop number to sort it out, and never argue in public.

**Getting more reviews:** GBP → *Ask for reviews* gives a short link. Print it as a QR code at the counter and send it on WhatsApp after a sale. Never offer discounts or gifts for reviews (against Google policy) and never post reviews yourself.

### 1.5 Add products

GBP → *Edit profile* → *Products* (or *Products* tab) → *Add product*. One per category, each with a **real photo of that shelf**, no price, button **Learn more** with the link. The table is in section 4.

### 1.6 Start posting updates

GBP → *Add update*. Aim for one post a week. Four ready-made posts are in section 6.

---

## 2. Then these

### 2.1 Photos and video
- **Cover photo:** the shop front with the signboard readable. **Logo:** the CB logo (`src/assets/brand/cb-decor-logo.png`).
- Add photos of the exterior (so people recognise the shop from the road), the interior, each product section, the team, and deliveries being loaded. Add 3–5 new ones every month; listings with fresh photos tend to get more calls and direction requests.
- **Video:** GBP accepts videos of up to 30 seconds at 720p or higher. The website reel is 360×640, below that. Export a 20–30 second clip of the showroom from the **original phone file** at 720p or more and upload it.

### 2.2 Description
Paste the text in section 3. No URLs, phone numbers or offers.

### 2.3 Opening date
GBP → *Edit profile* → *About* → *Opening date* → **2001**.

### 2.4 Attributes
GBP → *Edit profile* → *More*. Tick only what's true: payment options (cash, UPI, debit/credit cards), "In-store shopping", "Delivery", wheelchair-accessible entrance (if true), "Family-owned" if offered for your category.

### 2.5 Business name: leave it
Keep **Cee Bee Enterprises**. Adding words like "Plywood & Hardware Hazaribagh" to the name is against Google's guidelines and a common cause of suspension. You can add "(CB Decor)" only if "CB Decor" is printed on your signboard. Your second Justdial listing already uses "Cee Bee Enterprises & CB Decor", so check the board.

### 2.6 Address: leave it
The address is correct. Its lowercase "chowk"/"bazar" is cosmetic, and **editing the address can trigger re-verification**, so don't touch it. The website uses the same words with tidy capitals.

### 2.7 Service area
A shop with a storefront can also list areas it delivers to. GBP → *Edit profile* → *Location* → *Service area*: add Hazaribagh and the towns you deliver to (Barhi, Barkagaon, Barkatha, Bishnugarh, Chouparan, Ichak, Katkamsandi, Keredari, Padma, etc.). Keep the shop address visible.

### 2.8 Phone and WhatsApp
Keep **094313 94626** as the primary number. If your dashboard offers a *WhatsApp* or *Chat* contact option, add the same business number. Don't add your father's personal number anywhere public.

### 2.9 Hindi name
Google shows the auto-transliteration "की बी एंटरप्राइजेज". You can't set it directly; on Google Maps use *Suggest an edit* → name, or ignore it (low priority).

---

## 3. Business description (735 / 750 characters)

```
Cee Bee Enterprises (CB Decor) is a family-run hardware, plywood and interior products shop at Bajrangi Chowk, Hazaribagh, serving homeowners, carpenters, contractors and interior designers since 2001. We stock BWP, MR and commercial plywood, blockboard, MDF and flush doors; laminates and veneers; door handles and locks; modular kitchen hardware; furniture fittings; Fevicol and adhesives; PVC and WPC boards, ACP and acrylic sheets; wall panels, louvers and false ceiling material; wallpaper, wall putty, flooring and blinds; chandeliers and decorative lights; and King Koil mattresses. Authorised dealer for Century, Greenply, Royale Touche, Merino, Godrej, Ebco, Pidilite, Excel and King Koil. Delivery across Hazaribagh district.
```

---

## 4. Products

Leave price blank. Button: **Learn more**. All links start with `https://ceebee-enterprises.netlify.app`.

| Product name | Category | Description | Link |
| --- | --- | --- | --- |
| Plywood, Blockboard, MDF & Flush Doors | Boards | Century, Greenply and Royale Touche BWP, MR and commercial plywood, 3–25 mm; 19 mm blockboard; MDF; HDHMR; 30 mm flush doors. | /products/plywood-shop-hazaribagh/ |
| Laminates & Veneers | Boards | Century, Merino and Royale Touche laminates, 0.7–1.5 mm, gloss, suede, matt, textured and acrylic; liners; veneer sheets. | /products/laminate-shop-hazaribagh/ |
| Door Handles & Locks | Hardware | Godrej mortise locks and handle sets, cylinders, knobs, tower bolts, door closers and floor springs. | /products/door-handles-locks-hazaribagh/ |
| Modular Kitchen Hardware | Hardware | Godrej and Ebco soft-close hinges, telescopic channels, SS baskets, gas lifts and profile handles. | /products/modular-kitchen-hardware-hazaribagh/ |
| Furniture Fittings | Hardware | Handles, knobs, hydraulic bed fittings, sofa legs, sliding wardrobe fittings and stays. | /products/furniture-fittings-hazaribagh/ |
| Fevicol & Adhesives | Hardware | Pidilite Fevicol SH, Araldite, Feviseal and Dr. Fixit, small packs to bulk tins. | /products/adhesives-fevicol-hazaribagh/ |
| PVC & WPC Boards and Doors | Boards | PVC foam boards 5–19 mm, WPC boards 12–28 mm, WPC and PVC doors. | /products/pvc-wpc-board-hazaribagh/ |
| ACP Sheets & Acrylic | Boards | 3 mm and 4 mm ACP in 8×4, 10×4, 12×4 ft; acrylic solid surface; acrylic sheets. | /products/acrylic-acp-sheet-hazaribagh/ |
| Wall Panels & Louvers | Interiors | Interior and exterior louvers, charcoal panels, PVC and fluted panels with profiles. | /products/wall-panels-louvers-hazaribagh/ |
| Gypsum False Ceiling Material | Interiors | Gypsum boards, ceiling tiles, PVC gypsum tiles, GI channels and grid. | /products/gypsum-false-ceiling-hazaribagh/ |
| Wallpaper, Flooring & Blinds | Interiors | Excel wallpaper, flooring and blinds; wall putty; curtain rods and brackets. | /products/wallpaper-flooring-blinds-hazaribagh/ |
| Chandeliers & Decorative Lights | Interiors | Chandeliers and decorative lights. Visit the showroom to see the range. | / |
| King Koil Mattresses | Bedroom | Authorised King Koil dealer: mattresses and pillows. | /products/king-koil-mattress-hazaribagh/ |

## 5. Services (GBP → *Edit profile* → *Services*)

- **Home and site delivery in Hazaribagh district:** delivery of plywood, hardware, interior products and mattresses to homes and building sites across Hazaribagh district.
- **Bulk supply for contractors and builders:** send your material list on WhatsApp for one combined quote with site delivery.
- **Carpenter referral:** ask us and we can refer you to carpenters we know.

---

## 6. Four starter posts (GBP → *Add update*)

Use a real photo with each. Button: **Learn more**.

**Post 1: Our new website**
> Cee Bee Enterprises (CB Decor) now has a website: browse plywood, laminates, locks, kitchen hardware, wall panels, wallpaper, lights and King Koil mattresses, read our buying guides, and WhatsApp us for today's price. Visit us at Bajrangi Chowk, Tuesday to Sunday, 9:30 AM–7:30 PM.
> Link: `https://ceebee-enterprises.netlify.app/?utm_source=google&utm_medium=organic&utm_campaign=gbp_post`

**Post 2: Send your material list**
> Building or renovating? Send your carpenter's material list on WhatsApp and we'll price plywood, laminates, hardware and fittings together in one quote, with delivery across Hazaribagh district.
> Link: `https://ceebee-enterprises.netlify.app/contractors/?utm_source=google&utm_medium=organic&utm_campaign=gbp_post`

**Post 3: BWP or MR plywood?**
> Not sure which plywood to buy? Use BWP plywood in the kitchen and anywhere it can get wet, and MR plywood for wardrobes and beds in dry rooms. We're authorised dealers for Century, Greenply and Royale Touche.
> Link: `https://ceebee-enterprises.netlify.app/guides/bwp-vs-mr-vs-commercial-plywood/?utm_source=google&utm_medium=organic&utm_campaign=gbp_post`

**Post 4: King Koil mattresses**
> Cee Bee Enterprises is an authorised King Koil dealer in Hazaribagh. Visit our showroom near Bajrangi Chowk to see King Koil mattresses and pillows and get help choosing the right size for your bed.
> Link: `https://ceebee-enterprises.netlify.app/products/king-koil-mattress-hazaribagh/?utm_source=google&utm_medium=organic&utm_campaign=gbp_post`

Good follow-up post ideas: a new laminate or wallpaper collection (with photos), the showroom reel, festival hours, a kitchen-hardware tip from the guides, a completed customer project (with permission).

---

## 7. Fix the other listings (they feed Google's AI)

Use the exact block in `docs/citation-nap.md` everywhere.

| Where | Problem found | Fix |
| --- | --- | --- |
| **Justdial** (two listings) | One says "Jhanda Chowk" (4.9 ★, 79), the other "Cee Bee Enterprises & CB Decor, Bottom Bazar Road" (4.7 ★, 84). Products include tools, plumbing and paints. | Claim both. Ask Justdial (support or the listing's *Edit*) to merge the duplicate. Set the address to match Google, remove paints/tools/plumbing, add the website and hours. |
| **Facebook** | Shows +91 70045 07988 (personal number) | Change to +91 94313 94626; add address, hours and website |
| **Instagram** | Bio says "Landmark – Mahesh Soni Chowk" | Use "Bajrangi Chowk, Hazaribagh" (or add "near Mahesh Soni Chowk" only as a landmark if that's the same spot); add the website link |
| **GST record** | "Mahesh Soni Chowk, Boddom Bazar" | That's your registered legal address and can stay. Just don't copy it into listings. |
| **Bing Places** | Not checked | Claim → *Import from Google Business Profile* |
| **Apple Business Connect** | Not checked | Claim the Apple Maps place |

---

## 8. Ten Q&As

Google has largely removed the public Q&A section from profiles. These answers live on the website's FAQ page (`src/data/faqs.ts`), which Google and AI tools read. Reuse them in posts or replies as needed.

1. **Where is Cee Bee Enterprises (CB Decor) in Hazaribagh?** Bajrangi Chowk, Jai Prakash Marg, Kani Bazar, Hazaribagh, Jharkhand 825301.
2. **What are your shop timings?** Tuesday to Sunday, 9:30 AM – 7:30 PM. Closed on Monday.
3. **What does Cee Bee Enterprises sell?** Plywood, blockboard, MDF, flush doors, laminates and veneers, door handles and locks, modular kitchen hardware, furniture fittings, Fevicol and adhesives, PVC/WPC boards, ACP and acrylic sheets, wall panels and louvers, false ceiling material, wallpaper, wall putty, flooring, blinds, curtain rods, chandeliers and decorative lights, and King Koil mattresses.
4. **Which brands are you an authorised dealer for?** Century, Greenply, Royale Touche, Merino, Godrej, Ebco, Pidilite, Excel and King Koil.
5. **Where can I buy plywood in Hazaribagh?** At Cee Bee Enterprises (CB Decor) near Bajrangi Chowk. We stock Century, Greenply and Royale Touche BWP, MR and commercial plywood from 3 mm to 25 mm.
6. **Do you deliver?** Yes, across Hazaribagh district. WhatsApp us your location and material list for delivery details.
7. **Do you supply contractors and builders in bulk?** Yes. Send your material list on WhatsApp for a bulk quote with delivery to site.
8. **Can you recommend a carpenter?** Yes. Ask us and we can refer you to carpenters we know.
9. **How can I get today's price?** WhatsApp the product, brand, size and quantity. Prices change with company rates, so we don't publish fixed prices online.
10. **Do you sell King Koil mattresses?** Yes. We are an authorised King Koil dealer and sell King Koil mattresses and pillows.

---

## 9. Monthly routine (about 30 minutes)

- Reply to every new review.
- Post 2–4 updates.
- Add 3–5 new photos.
- Set special hours before each festival.
- Check *Performance* in GBP: calls, website clicks, direction requests.
