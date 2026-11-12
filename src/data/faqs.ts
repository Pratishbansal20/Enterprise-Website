// Sitewide FAQ. Answer first, 1–3 sentences. These same ten Q&As are
// reused in docs/google-business-profile.md for the GBP Q&A section.
import { SITE } from '../config/site';

export const siteFaqs: { q: string; a: string }[] = [
  {
    q: 'Where is Cee Bee Enterprises & CB Decor in Hazaribagh?',
    a: `We are at ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}. Search “Cee Bee Enterprises” on Google Maps for directions.`,
  },
  {
    q: 'What are your shop timings?',
    a: `We are open ${SITE.hoursDisplay}`,
  },
  {
    q: 'What does Cee Bee Enterprises sell?',
    a: 'We sell plywood, blockboard, MDF, flush doors, laminates and veneers, door handles and locks, modular kitchen hardware, furniture fittings, Fevicol and adhesives, PVC/WPC boards, ACP and acrylic sheets, wall panels and louvers, false ceiling material, wallpaper, wall putty, flooring, blinds, curtain rods, chandeliers and decorative lights, and King Koil mattresses.',
  },
  {
    q: 'Which brands are you an authorised dealer for?',
    a: 'We are an authorised dealer for Century, Greenply, Royale Touche, Merino, Godrej, Ebco, Pidilite, Excel and King Koil.',
  },
  {
    q: 'Where can I buy plywood in Hazaribagh?',
    a: 'You can buy plywood at Cee Bee Enterprises & CB Decor near Bajrangi Chowk, Hazaribagh. We stock Century, Greenply and Royale Touche BWP, MR and commercial plywood from 3 mm to 25 mm.',
  },
  {
    q: 'Do you deliver?',
    a: 'Yes. We deliver across Hazaribagh district. WhatsApp us your location and material list for delivery details.',
  },
  {
    q: 'Do you supply contractors and builders in bulk?',
    a: 'Yes. Contractors, builders, architects and interior designers can send their material list on WhatsApp for a bulk quote, with delivery to site.',
  },
  {
    q: 'Can you recommend a carpenter?',
    a: 'Yes. If you need a carpenter for your furniture or kitchen, ask us and we can refer you to carpenters we know.',
  },
  {
    q: 'How can I get today’s price?',
    a: 'WhatsApp us the product, brand, size and quantity and we will reply with today’s price. Prices change with company rates, so we do not publish fixed prices online.',
  },
  {
    q: 'Do you sell King Koil mattresses?',
    a: 'Yes. Cee Bee Enterprises is an authorised King Koil dealer in Hazaribagh and sells King Koil mattresses and pillows.',
  },
];
