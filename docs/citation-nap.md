# Citation / NAP block

Copy these exact lines into **Justdial, IndiaMART, Bing Places, Apple Business
Connect, Facebook** and any other directory. Keep every character identical
(spelling "Hazaribag", spaces in the phone number, the brackets around CB Decor).
If anything here ever changes, change `src/config/site.ts` first, then update
every listing.

```
Business name:  Cee Bee Enterprises (CB Decor)
Address:        Bajrangi Chowk, Hazaribag, Jharkhand 825301, India
Phone:          +91 94313 94626
WhatsApp:       +91 94313 94626
Email:          satish.hzb@gmail.com
Website:        https://cbdecor.netlify.app/
Hours:          Tuesday–Sunday 9:30 AM – 8:00 PM; Monday closed
Established:    2001
Category:       Hardware store
```

**Short description (≈250 characters, for directories with small boxes):**

```
Family-run hardware, plywood and interiors shop at Bajrangi Chowk, Hazaribag since 2001. Plywood, laminates, locks, kitchen hardware, wall panels, wallpaper, blinds and King Koil mattresses. Authorised dealer for Century, Godrej, Merino and more.
```

**Long description:** use the 722-character GBP description in
`docs/google-business-profile.md`.

## Where to list (and what to fix)

| Directory | Status | Action |
| --- | --- | --- |
| Google Business Profile | Live (name shows "Cee Bee Enterprises") | See the name note in `google-business-profile.md`; add the website link with UTM |
| Justdial | Live, address shows "Bajrangi Chowk Jhanda Chowk" | Edit so the address matches the block above exactly; add website and hours |
| Facebook page | Live (facebook.com/ceebeeenterprises24) | Update About → name, address, phone, hours, website |
| Instagram | Live (@ceebeeenterprises) | Put `https://cbdecor.netlify.app/` in bio; same phone |
| Bing Places | Claim | bingplaces.com → "Import from Google Business Profile" (fastest) |
| Apple Business Connect | Claim | businessconnect.apple.com → add place for Apple Maps / Siri |
| IndiaMART | Create if wanted | Then add its URL to `SITE.social.indiamart` in `src/config/site.ts` |

> If the shop's address on Google has a shop number or road name before
> "Bajrangi Chowk", use Google's exact version here and in `site.ts`.
