// Single source of truth for NAP (name, address, phone) and business facts.
// Everything on the site, in the footer, contact page, schema markup and
// llms.txt reads from here. Keep it character-for-character identical to the
// Google Business Profile. Empty values are optional facts not known yet:
// they are left out of the page and the schema markup until filled in.

export const SITE = {
  // Comes from `site` in astro.config.mjs (Netlify's URL at build time).
  url: import.meta.env.SITE.replace(/\/$/, ''),

  // ── Name ────────────────────────────────────────────────────────────────
  name: 'Cee Bee Enterprises (CB Decor)',
  legalName: 'Cee Bee Enterprises',
  brand: 'CB Decor',

  // ── Address ─────────────────────────────────────────────────────────────
  // If your Google Business Profile shows a shop number, building or road
  // before "Bajrangi Chowk", add it to `street` exactly as Google shows it.
  address: {
    street: 'Bajrangi Chowk',
    city: 'Hazaribag',
    region: 'Jharkhand',
    postalCode: '825301',
    country: 'IN',
  },
  landmark: 'near Bajrangi Chowk',

  // ── Phone / messaging ───────────────────────────────────────────────────
  phoneDisplay: '+91 94313 94626',
  phoneE164: '+919431394626',
  whatsappE164: '919431394626',
  email: 'satish.hzb@gmail.com',

  // ── Hours ───────────────────────────────────────────────────────────────
  hoursDisplay: 'Tuesday to Sunday, 9:30 AM – 8:00 PM. Closed on Monday.',
  hoursShort: 'Tue–Sun 9:30 AM–8 PM · Mon closed',
  hours: [
    {
      days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:30',
      closes: '20:00',
    },
  ],
  closedDays: ['Monday'],

  // ── Business facts ──────────────────────────────────────────────────────
  foundingYear: 2001,
  owner: 'Satish Bansal',
  familyRun: true,
  gstin: '', // intentionally not shown

  // ── Location / maps ─────────────────────────────────────────────────────
  // Shop coordinates: in Google Maps, long-press the shop pin and copy the
  // two numbers, e.g. lat '23.99xxxx', lng '85.36xxxx'.
  geo: {
    lat: '',
    lng: '',
  },
  gbpUrl: 'https://share.google/lHSCm9gutzeIC0xpM',
  mapsQuery: 'Cee Bee Enterprises, Bajrangi Chowk, Hazaribag, Jharkhand 825301',

  // ── Service area ────────────────────────────────────────────────────────
  areaServed: 'Hazaribag district',
  deliveryTowns: [
    'Hazaribag town',
    'Barhi',
    'Barkagaon',
    'Barkatha',
    'Bishnugarh',
    'Chouparan',
    'Churchu',
    'Daru',
    'Ichak',
    'Katkamsandi',
    'Keredari',
    'Padma',
  ],

  // ── Profiles (only real business pages) ─────────────────────────────────
  social: {
    facebook: 'https://www.facebook.com/ceebeeenterprises24/',
    instagram: 'https://www.instagram.com/ceebeeenterprises/',
    justdial:
      'https://www.justdial.com/Hazaribagh/Cee-Bee-Enterprises-Bajrangi-Chowk-Jhanda-Chowk/9999P6546-6546-190521181958-V4T1_BZDET',
    indiamart: '', // add when the listing exists
  },

  // ── Analytics / forms ───────────────────────────────────────────────────
  ga4Id: '', // GA4 measurement ID, e.g. 'G-XXXXXXXXXX'. Analytics stays off until set.
  priceRange: '', // optional, e.g. '₹₹'
} as const;

export const isFilled = (v: unknown): v is string =>
  typeof v === 'string' && v.length > 0 && !v.startsWith('{{FILL');

export const addressLine = () =>
  `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`;

export const yearsInBusiness = () => new Date().getFullYear() - SITE.foundingYear;

export const telHref = `tel:${SITE.phoneE164}`;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapsQuery)}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&z=16&output=embed`;

export const waLink = (message: string) =>
  `https://wa.me/${SITE.whatsappE164}?text=${encodeURIComponent(message)}`;

export const sameAs = () =>
  [SITE.gbpUrl, ...Object.values(SITE.social)].filter((u) => isFilled(u));
