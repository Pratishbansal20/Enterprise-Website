// JSON-LD builders. All business facts come from src/config/site.ts so the
// markup always matches the footer, contact page and Google Business Profile.
// No Review / AggregateRating markup: add it only with real review data.
import { SITE, isFilled, sameAs } from '../config/site';
import { categories } from '../data/categories';

const abs = (path: string) => new URL(path, SITE.url).href;

export const STORE_ID = `${SITE.url}/#store`;
export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;

export function storeSchema() {
  const geo =
    isFilled(SITE.geo.lat) && isFilled(SITE.geo.lng)
      ? { geo: { '@type': 'GeoCoordinates', latitude: Number(SITE.geo.lat), longitude: Number(SITE.geo.lng) } }
      : {};
  return {
    '@context': 'https://schema.org',
    '@type': 'HardwareStore',
    '@id': STORE_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: [SITE.brand, SITE.legalName],
    url: abs('/'),
    logo: abs('/icon-512.png'),
    image: [abs('/og-default.jpg')],
    telephone: SITE.phoneE164,
    email: SITE.email,
    foundingDate: String(SITE.foundingYear),
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    ...geo,
    hasMap: SITE.gbpUrl,
    openingHoursSpecification: SITE.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
      opens: h.opens,
      closes: h.closes,
    })),
    ...(isFilled(SITE.priceRange) ? { priceRange: SITE.priceRange } : {}),
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Hazaribagh district, Jharkhand' },
      ...SITE.deliveryTowns.map((t) => ({ '@type': 'Place', name: `${t}, Hazaribagh` })),
    ],
    knowsLanguage: ['hi', 'en'],
    sameAs: sameAs(),
    parentOrganization: { '@id': ORG_ID },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Products sold at Cee Bee Enterprises & CB Decor',
      itemListElement: categories.map((c) => ({
        '@type': 'OfferCatalog',
        name: c.name,
        url: abs(`/products/${c.slug}/`),
      })),
    },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: SITE.brand,
    url: abs('/'),
    logo: abs('/icon-512.png'),
    foundingDate: String(SITE.foundingYear),
    email: SITE.email,
    telephone: SITE.phoneE164,
    sameAs: sameAs(),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE.name,
    alternateName: SITE.brand,
    url: abs('/'),
    inLanguage: ['en-IN', 'hi-IN'],
    publisher: { '@id': ORG_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function articleSchema(a: { title: string; description: string; path: string; published: Date; updated?: Date }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    mainEntityOfPage: abs(a.path),
    image: [abs('/og-default.jpg')],
    datePublished: a.published.toISOString().slice(0, 10),
    dateModified: (a.updated ?? a.published).toISOString().slice(0, 10),
    inLanguage: 'en-IN',
    author: { '@id': ORG_ID, '@type': 'Organization', name: SITE.name },
    publisher: { '@id': ORG_ID, '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: abs('/icon-512.png') } },
  };
}

