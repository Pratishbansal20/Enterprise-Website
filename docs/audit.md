# Audit of the old site (before rebuild, 2 Nov 2026)

The old site was a React + Vite single-page app (`index.html` → `src/main.jsx`). Problems, most serious first:

1. **Invisible to search engines and AI crawlers.** The HTML sent to browsers was an empty `<div id="root">` with the title "ceebee-enterprises". Google had to run JavaScript to see any text; most AI crawlers don't run it at all.
2. **Very heavy on mobile.** One 1.1 MB JavaScript bundle loaded on every page, because all 4,058 stock items (`products.json`) were bundled in. The 16 images were 0.5–1 MB PNGs with no WebP/AVIF versions and no width/height (causing layout shift).
3. **No technical SEO.** No meta descriptions, canonical tags, structured data, sitemap, robots.txt, Open Graph tags or 404 page; the favicon was Vite's default logo. `.gitignore` excluded every `*.txt`, so a robots.txt would never have been committed.
4. **Wrong or inconsistent facts.** "Building materials" appeared in the footer and hero (not sold); hours said 9:30 PM (actual: 8 PM); the name appeared as "Ceebee Enterprises" and the town as both "Hazaribag" and "Hazaribagh". No NAP consistency with Google Business Profile.
5. **Thin structure.** Four routes only, with no category, brand, about, FAQ or guide pages, so nothing to rank for "plywood dealer in Hazaribag" and similar searches. Product pages were raw stock lines (e.g. "(HT) P2O TC 12") with brand "Generic".
6. **Trust and conversion gaps.** Category images looked AI-generated rather than real stock photos; one WhatsApp button pointed to `91XXXXXXXXXX`; social links went to personal profiles; Privacy/Terms/Sitemap links were dead (`href="#"`); no call/WhatsApp click tracking; no quote form.
7. **Design.** A generic "luxury" template (slate + gold, glassmorphism) with inline `<style>` blocks repeated per component; no sticky mobile actions; tap targets and contrast not checked.
