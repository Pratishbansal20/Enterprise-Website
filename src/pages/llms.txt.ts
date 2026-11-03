// /llms.txt — plain-text summary of the business for AI assistants.
// Generated from the same config as the rest of the site so it never drifts.
import type { APIRoute } from 'astro';
import { SITE, addressLine, sameAs } from '../config/site';
import { categories } from '../data/categories';
import { brands } from '../data/brands';
import { siteFaqs } from '../data/faqs';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const u = (p: string) => new URL(p, SITE.url).href;
  const guides = (await getCollection('guides')).sort((a, b) => a.data.order - b.data.order);
  const body = `# ${SITE.name}

> ${SITE.name} is a family-run hardware, plywood and interior products shop at ${addressLine()}, India. Established in ${SITE.foundingYear} and run by ${SITE.owner}. Authorised dealer for ${brands.map((b) => b.name).join(', ')}. Delivers across Hazaribagh district. Customers: homeowners, carpenters, contractors, builders, architects and interior designers. Languages: Hindi and English.

## Contact
- Phone / WhatsApp: ${SITE.phoneDisplay}
- Email: ${SITE.email}
- Hours: ${SITE.hoursDisplay}
- Address: ${addressLine()}
- Google Maps: ${SITE.gbpUrl}
- Profiles: ${sameAs().join(', ')}

## Products
${categories.map((c) => `- [${c.name}](${u(`/products/${c.slug}/`)}): ${c.range.map((r) => `${r.label}: ${r.items}`).join('; ')}`).join('\n')}

## Also sold
- Chandeliers and decorative lights
- Wall putty

## Services
- Home and site delivery across Hazaribagh district: ${u('/services/')}
- Bulk supply for contractors, builders and architects: ${u('/contractors/')}
- Carpenter referral: ${u('/services/')}

## Key pages
- [Home](${u('/')})
- [All products](${u('/products/')})
- [Authorised brands](${u('/brands/')})
- [About](${u('/about/')})
- [FAQ](${u('/faq/')})
- [Contact and directions](${u('/contact/')})
- [Hindi home page](${u('/hi/')})

## Guides
${guides.map((g) => `- [${g.data.title}](${u(`/guides/${g.id}/`)}): ${g.data.description}`).join('\n')}

## FAQ
${siteFaqs.map((f) => `- Q: ${f.q}\n  A: ${f.a}`).join('\n')}

## Notes
- Prices are not published because company rates change; customers ask for today's price on WhatsApp.
- Not sold: building materials (cement, steel, sand), paints, hand and power tools, plumbing supplies, curtain fabric, glass and mirrors.
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
