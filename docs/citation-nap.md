# Citation / NAP block

Copy these exact lines into **Justdial, IndiaMART, Bing Places, Apple Business
Connect, Facebook, Instagram** and any other directory. They match the Google
Business Profile and the website (`src/config/site.ts`). If anything changes,
change Google first, then `site.ts`, then every listing.

```
Business name:  Cee Bee Enterprises (CB Decor)
Address:        Bajrangi Chowk, Jai Prakash Marg, Kani Bazar, Hazaribagh, Jharkhand 825301, India
Phone:          +91 94313 94626
WhatsApp:       +91 94313 94626
Email:          satish.hzb@gmail.com
Website:        https://ceebee-enterprises.netlify.app/
Hours:          Tuesday–Sunday 9:30 AM – 7:30 PM; Monday closed
Established:    2001
Category:       Hardware store
```

Use **only** the business number above. Don't list a personal number on any
public profile.

**Short description (for directories with small boxes):**

```
Family-run hardware, plywood and interiors shop at Bajrangi Chowk, Hazaribagh since 2001. Plywood, laminates, locks, kitchen hardware, wall panels, wallpaper, blinds, lights and King Koil mattresses. Authorised dealer for Century, Godrej, Merino and more.
```

**Long description:** the 735-character text in `docs/google-business-profile.md`, section 3.

**Products you do NOT sell** (remove them if a directory lists them):
paints, hand and power tools, plumbing supplies, building materials (cement,
steel, sand), curtain fabric, glass and mirrors.

## What to fix where

| Directory | Found (3 Nov, re-checked 11 Nov 2026) | Action |
| --- | --- | --- |
| Google Business Profile | 11 Nov: website, description and products added; 4.9 ★ from 115 reviews | Remaining items in `google-business-profile.md` |
| Justdial (listing 1) | "Jhanda Chowk", 4.9 ★ (79); still lists tools and plumbing on 11 Nov | Address → block above; remove paints/tools/plumbing; add website and hours |
| Justdial (listing 2) | "Cee Bee Enterprises & CB Decor, Bottom Bazar Road", 4.7 ★ (84) | Ask Justdial to merge it into one listing; same fixes |
| Facebook page | Phone +91 70045 07988 (personal); unchanged in Google results on 11 Nov | Phone → +91 94313 94626; add address, hours, website |
| Instagram | Bio landmark "Mahesh Soni Chowk"; unchanged in Google results on 11 Nov | Address → "Bajrangi Chowk, Hazaribagh"; website link in bio |
| Bing Places | Not checked | bingplaces.com → *Import from Google Business Profile* |
| Apple Business Connect | Not checked | businessconnect.apple.com → claim the place |
| IndiaMART | None | Optional; then add the URL to `SITE.social.indiamart` in `src/config/site.ts` |

The GST registration shows "Mahesh Soni Chowk, Boddom Bazar". That's the legal
record and can stay as it is; just don't copy it into public listings.
