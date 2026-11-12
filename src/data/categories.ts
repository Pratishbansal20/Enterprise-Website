// Product categories. The ranges listed under `range` were taken from the
// shop's own stock list (reference/stock-items.json), so they describe what
// is actually carried. No prices: prices change with company rates, so every
// page asks customers to WhatsApp for today's rate.

export type Group = 'boards' | 'hardware' | 'interiors' | 'home';

export interface Category {
  slug: string;
  name: string;
  short: string;
  group: Group;
  /** ≤ 60 characters */
  title: string;
  /** ≤ 155 characters, ends with a call to action */
  description: string;
  h1: string;
  keyword: string;
  /** First paragraph. Must contain the primary keyword within 100 words. */
  intro: string;
  range: { label: string; items: string }[];
  sections: { h2: string; html: string }[];
  brands: string[]; // brand ids from brands.ts
  photos: { name: string; alt: string }[];
  faqs: { q: string; a: string }[];
  wa: string;
  guides: string[];
  related: string[];
}

export const groups: Record<Group, { name: string; blurb: string }> = {
  boards: { name: 'Boards, sheets & laminates', blurb: 'Plywood, blockboard, MDF, laminates, PVC/WPC boards, ACP and acrylic.' },
  hardware: { name: 'Hardware & fittings', blurb: 'Door locks and handles, modular kitchen hardware, furniture fittings and adhesives.' },
  interiors: { name: 'Interiors & décor', blurb: 'Wall panels, louvers, false ceiling, wallpaper, flooring, blinds and curtain rods.' },
  home: { name: 'Bedroom', blurb: 'King Koil mattresses and pillows.' },
};

export const categories: Category[] = [
  // ───────────────────────────────────────────────────────────── Plywood
  {
    slug: 'plywood-shop-hazaribagh',
    name: 'Plywood, Blockboard, MDF & Flush Doors',
    short: 'Plywood & boards',
    group: 'boards',
    title: 'Plywood Dealer in Hazaribagh | Century, Greenply',
    description:
      'Plywood shop in Hazaribagh near Bajrangi Chowk: Century, Greenply & Royale Touche BWP/MR ply, blockboard, MDF, flush doors. WhatsApp for today’s price.',
    h1: 'Plywood Dealer & Plywood Shop in Hazaribagh',
    keyword: 'plywood dealer in Hazaribagh',
    intro:
      'Cee Bee Enterprises & CB Decor is a plywood dealer in Hazaribagh, located near Bajrangi Chowk, and an authorised dealer for Century, Greenply and Royale Touche. We stock BWP, MR and commercial plywood from 3 mm to 25 mm, 19 mm blockboard, MDF, HDHMR and 30 mm flush doors in standard sheet sizes. Homeowners, carpenters and contractors across Hazaribagh district buy from us for kitchens, wardrobes, beds, TV units and doors.',
    range: [
      { label: 'Plywood grades', items: 'BWP (boiling water proof), MR (moisture resistant) and commercial' },
      { label: 'Thickness', items: '3, 4, 6, 9, 12, 16, 18, 19 and 25 mm' },
      { label: 'Sheet sizes', items: '8×4, 7×4, 8×3, 7×3, 6×4 and 6×3 ft' },
      { label: 'Blockboard', items: '19 mm, in 8×4, 7×4 and 7×3 ft' },
      { label: 'MDF & HDHMR', items: 'Interior-grade MDF from 2 mm to 16 mm; HDHMR in 12 mm and 18 mm' },
      { label: 'Flush doors', items: '30 mm flush doors, 78" high in 26", 32", 36" and 38" widths, plus larger sizes' },
    ],
    sections: [
      {
        h2: 'Which plywood should I buy for kitchen, wardrobe or bed?',
        html: `<p><strong>Use BWP plywood anywhere it can get wet, and MR plywood for dry rooms.</strong> Kitchen base cabinets, sink units and bathroom vanities should be BWP (boiling water proof), made with phenolic resin that holds up to water. Wardrobes, beds, TV units and study tables in bedrooms and halls are usually made in MR (moisture resistant) plywood, which costs less. Commercial plywood suits low-cost or temporary work where looks matter more than life.</p>
<p>Read our detailed guide: <a href="/guides/bwp-vs-mr-vs-commercial-plywood/">BWP vs MR vs commercial plywood</a>.</p>`,
      },
      {
        h2: 'What thickness of plywood do I need?',
        html: `<ul>
<li><strong>18–19 mm:</strong> cabinet sides, wardrobe carcass, shutters, bed boxes. The standard for furniture that carries weight.</li>
<li><strong>12 mm:</strong> light shelves, internal partitions and drawer sides.</li>
<li><strong>6–9 mm:</strong> cabinet backs and drawer bottoms.</li>
<li><strong>3–4 mm:</strong> panelling, curved work and backing.</li>
<li><strong>25 mm:</strong> heavy tables, counters and long spans.</li>
</ul>
<p>Not sure? Send your carpenter’s cutting list on WhatsApp and we will tell you how many sheets of each thickness you need.</p>`,
      },
      {
        h2: 'Blockboard, MDF or HDHMR: when should I use each?',
        html: `<p><strong>Blockboard</strong> has a core of wooden strips, so it stays straight over long lengths. It is a good choice for doors, long shelves and bed panels. <strong>MDF</strong> is smooth and even, ideal for painted or CNC-cut fronts, but it must stay dry. <strong>HDHMR</strong> is a denser, high-moisture-resistant board often used for kitchen and wardrobe shutters. For anything near water, BWP plywood is still the safest choice.</p>`,
      },
      {
        h2: 'How can I check that branded plywood is genuine?',
        html: `<p>Every genuine sheet carries the brand name, grade and IS standard printed or stamped on its face. Buy from an authorised dealer and keep the bill, because manufacturer warranties normally ask for it. We are an authorised dealer for Century, Greenply and Royale Touche.</p>`,
      },
    ],
    brands: ['century', 'greenply', 'royale-touche'],
    photos: [
      { name: 'plywood-shop-hazaribagh-plywood-stack', alt: 'Plywood sheets stacked in the Cee Bee Enterprises plywood shop in Hazaribagh' },
      { name: 'blockboard-flush-doors-hazaribagh', alt: 'Blockboard and flush doors in stock at Cee Bee Enterprises, Hazaribagh' },
    ],
    faqs: [
      {
        q: 'Where can I buy plywood in Hazaribagh?',
        a: 'You can buy plywood at Cee Bee Enterprises & CB Decor near Bajrangi Chowk, Hazaribagh. We are authorised dealers for Century, Greenply and Royale Touche and are open Tuesday to Sunday, 9:30 AM to 7:30 PM.',
      },
      {
        q: 'Which plywood is best for a kitchen?',
        a: 'BWP (boiling water proof) plywood is best for kitchens, especially sink and base units. Use 18 or 19 mm for the cabinet body and shutters.',
      },
      {
        q: 'What is the price of 19 mm plywood in Hazaribagh?',
        a: 'The price depends on brand, grade and current company rates, so we do not publish fixed prices. WhatsApp us the brand, grade, size and quantity and we will send today’s rate.',
      },
      {
        q: 'Do you deliver plywood?',
        a: 'Yes. We deliver plywood and boards across Hazaribagh district. Tell us your location and order size on WhatsApp for delivery details.',
      },
    ],
    wa: 'Hi, I want price and availability for plywood.',
    guides: ['bwp-vs-mr-vs-commercial-plywood', 'how-much-plywood-for-2bhk'],
    related: ['laminate-shop-hazaribagh', 'adhesives-fevicol-hazaribagh', 'pvc-wpc-board-hazaribagh'],
  },

  // ───────────────────────────────────────────────────────────── Laminates
  {
    slug: 'laminate-shop-hazaribagh',
    name: 'Laminates & Veneers',
    short: 'Laminates & veneers',
    group: 'boards',
    title: 'Laminate Shop in Hazaribagh | Century, Merino Laminates',
    description:
      'Laminate shop in Hazaribagh: Century, Merino & Royale Touche laminates, 0.7–1.5 mm, gloss, suede, textured & acrylic finishes. WhatsApp for shades.',
    h1: 'Laminate Shop in Hazaribagh',
    keyword: 'laminate shop in Hazaribagh',
    intro:
      'Cee Bee Enterprises & CB Decor is a laminate shop in Hazaribagh near Bajrangi Chowk and an authorised dealer for Century, Merino and Royale Touche. We stock decorative laminates from 0.7 mm to 1.5 mm in high-gloss, suede, matt, textured and acrylic finishes, inner liners, acrylic glass laminates, natural veneer sheets and Merino Lam Veneer, so you can finish wardrobes, kitchens and wall panelling from one shop.',
    range: [
      { label: 'Thickness', items: '0.7, 0.72, 0.8, 0.9, 1, 1.25 and 1.5 mm' },
      { label: 'Finishes', items: 'Suede, matt, high gloss, super high gloss, textured, acrylic and PU' },
      { label: 'Liners', items: 'Inner liner laminates for the inside of cabinets and wardrobes' },
      { label: 'Speciality', items: 'Acrylic glass laminates (1–2.5 mm) and stone-finish laminates' },
      { label: 'Veneers', items: 'Natural veneer sheets and Merino Lam Veneer' },
    ],
    sections: [
      {
        h2: 'Which laminate thickness should I use?',
        html: `<p><strong>Use 1 mm laminate on surfaces people see and touch, and a 0.7–0.8 mm liner inside.</strong> Shutters, table tops and visible sides look better and wear longer in 1 mm. Inside cabinets, a thinner liner saves money. For heavy-use tops or a premium feel, 1.25 mm or 1.5 mm is available.</p>`,
      },
      {
        h2: 'Gloss, suede or textured: which finish is right?',
        html: `<p>High-gloss and acrylic finishes look rich and are easy to wipe, but show fingerprints and fine scratches. Suede and matt finishes hide marks, which makes them practical for kitchens and children’s rooms. Textured wood-grain laminates feel close to real wood. See our guide on <a href="/guides/how-to-choose-laminate-finish/">how to choose a laminate finish</a>.</p>`,
      },
      {
        h2: 'Laminate or veneer?',
        html: `<p>Laminate is tough, low-maintenance and comes in hundreds of colours. Veneer is a thin slice of real wood: every sheet is unique, and it needs polishing after fixing. Many homes use veneer for a feature wall or main door and laminate everywhere else.</p>`,
      },
      {
        h2: 'How many laminate sheets do I need?',
        html: `<p>A standard 8×4 ft sheet covers 32 sq ft. Measure every surface you want covered, add about 10% for cutting waste, and remember the back face. A liner on the reverse side balances the board and stops it from bending.</p>`,
      },
    ],
    brands: ['century', 'merino', 'royale-touche'],
    photos: [
      { name: 'laminate-shop-hazaribagh-display', alt: 'Laminate sheets and shades on display at Cee Bee Enterprises laminate shop, Hazaribagh' },
      { name: 'veneer-sheets-hazaribagh', alt: 'Veneer sheets in stock at Cee Bee Enterprises, Hazaribagh' },
    ],
    faqs: [
      {
        q: 'Where can I buy laminates in Hazaribagh?',
        a: 'Cee Bee Enterprises & CB Decor near Bajrangi Chowk, Hazaribagh sells Century, Merino and Royale Touche laminates. Visit the showroom Tuesday to Sunday, 9:30 AM to 7:30 PM, or WhatsApp us for shades.',
      },
      {
        q: 'Which laminate finish is best for kitchen shutters?',
        a: 'Suede or matt laminates are the most practical for kitchens because they hide fingerprints and small scratches. Choose acrylic or high gloss if you want a shiny look and do not mind wiping more often.',
      },
      {
        q: 'What is a liner laminate?',
        a: 'A liner is a thinner, lower-cost laminate (around 0.7–0.8 mm) used on the inside of cabinets and wardrobes. It protects the plywood and balances the board.',
      },
      {
        q: 'Can I see laminate shades before buying?',
        a: 'Yes. Visit our showroom near Bajrangi Chowk to see shades in person, or WhatsApp us the colour or code you have in mind.',
      },
    ],
    wa: 'Hi, I want to see laminate shades and check availability.',
    guides: ['how-to-choose-laminate-finish'],
    related: ['plywood-shop-hazaribagh', 'adhesives-fevicol-hazaribagh', 'wall-panels-louvers-hazaribagh'],
  },

  // ───────────────────────────────────────────────────────────── Door hardware
  {
    slug: 'door-handles-locks-hazaribagh',
    name: 'Door Hardware & Locks',
    short: 'Door handles & locks',
    group: 'hardware',
    title: 'Door Handles and Locks in Hazaribagh | Godrej Dealer',
    description:
      'Door handles and locks in Hazaribagh: Godrej mortise locks, cylinders, knobs, tower bolts, door closers, floor springs. Near Bajrangi Chowk. WhatsApp us.',
    h1: 'Door Handles and Locks in Hazaribagh',
    keyword: 'door handles and locks in Hazaribagh',
    intro:
      'For door handles and locks in Hazaribagh, visit Cee Bee Enterprises & CB Decor near Bajrangi Chowk. We are an authorised Godrej dealer and stock mortise locks and handle sets, cylinders, knobs, tower bolts, door closers, door stoppers, latches, hinges, and floor springs for glass doors. Everything you need to finish a new door or replace old fittings is in one shop, in finishes from classic brass to rose gold, black and PVD gold.',
    range: [
      { label: 'Locks', items: 'Mortise locks and handle sets, cylinder locks, knob locks and bathroom locks' },
      { label: 'Handles & knobs', items: 'Mortise handles, pull handles and knobs in rose gold, black, matt, brass and PVD finishes' },
      { label: 'Bolts & stoppers', items: 'Tower bolts, door stoppers and latches' },
      { label: 'Closers & springs', items: 'Door closers and floor springs (60–150 kg) for heavy and glass doors' },
      { label: 'Glass door fittings', items: 'Patch fittings and glass-to-glass and glass-to-wall locks' },
      { label: 'Doors', items: '30 mm flush doors, WPC doors and PVC doors (see plywood and PVC pages)' },
    ],
    sections: [
      {
        h2: 'Which lock should I use for the main door, bedroom and bathroom?',
        html: `<ul>
<li><strong>Main door:</strong> a heavy-duty mortise lock with a good cylinder, plus tower bolts on the inside.</li>
<li><strong>Bedroom:</strong> a mortise lock with handle set, or a knob lock, with a privacy option.</li>
<li><strong>Bathroom:</strong> a bathroom lock that can be opened from outside in an emergency, or a simple latch with a tower bolt.</li>
</ul>`,
      },
      {
        h2: 'Mortise lock or knob lock: what is the difference?',
        html: `<p><strong>A mortise lock fits inside a pocket cut into the door edge and is stronger; a knob (cylindrical) lock is quicker to fit and cheaper.</strong> Mortise locks with lever handles are the common choice for main and bedroom doors in Hazaribagh homes. Knob locks suit internal doors.</p>`,
      },
      {
        h2: 'Which finish lasts longest?',
        html: `<p>PVD-coated hardware resists fading and tarnish better than ordinary plating, so it suits main doors and humid areas. Stainless steel is the most practical for bathrooms. Keep all the handles in one room in the same finish for a clean look.</p>`,
      },
      {
        h2: 'What should I measure before buying?',
        html: `<p>Note the door thickness, which side it opens from (left or right hand), and the size of any old lock you are replacing. A photo of the old fitting on WhatsApp is often enough for us to match it.</p>`,
      },
    ],
    brands: ['godrej'],
    photos: [
      { name: 'door-handles-locks-hazaribagh-display', alt: 'Door handles and mortise locks on display at Cee Bee Enterprises, Hazaribagh' },
      { name: 'godrej-locks-dealer-hazaribagh', alt: 'Godrej locks at Cee Bee Enterprises, authorised Godrej dealer in Hazaribagh' },
    ],
    faqs: [
      {
        q: 'Where can I buy Godrej locks in Hazaribagh?',
        a: 'Cee Bee Enterprises & CB Decor near Bajrangi Chowk, Hazaribagh is an authorised Godrej dealer and stocks Godrej door locks, handle sets and fittings.',
      },
      {
        q: 'Do you sell door closers and floor springs?',
        a: 'Yes. We stock door closers and floor springs in several load ratings, from about 60 kg up to 150 kg, for heavy wooden and glass doors.',
      },
      {
        q: 'Can you help me choose a lock for my main door?',
        a: 'Yes. Visit the shop or send us a photo of your door on WhatsApp, and we will suggest suitable lock and handle options.',
      },
      {
        q: 'Do you sell doors as well?',
        a: 'Yes. We sell 30 mm flush doors, WPC doors and PVC doors, along with all the hardware to fit them.',
      },
    ],
    wa: 'Hi, I want price and availability for door handles and locks.',
    guides: [],
    related: ['furniture-fittings-hazaribagh', 'plywood-shop-hazaribagh', 'pvc-wpc-board-hazaribagh'],
  },

  // ───────────────────────────────────────────────────────────── Kitchen
  {
    slug: 'modular-kitchen-hardware-hazaribagh',
    name: 'Modular Kitchen Hardware & Accessories',
    short: 'Kitchen hardware',
    group: 'hardware',
    title: 'Modular Kitchen Hardware in Hazaribagh | Godrej, Ebco',
    description:
      'Modular kitchen hardware in Hazaribagh: soft-close hinges, telescopic channels, SS baskets, gas lifts. Godrej & Ebco dealer. WhatsApp your list.',
    h1: 'Modular Kitchen Hardware & Kitchen Accessories in Hazaribagh',
    keyword: 'modular kitchen hardware Hazaribagh',
    intro:
      'Cee Bee Enterprises & CB Decor supplies modular kitchen hardware in Hazaribagh from our shop near Bajrangi Chowk. As authorised Godrej and Ebco dealers, we stock auto and soft-close hinges, full-extension telescopic channels from 10" to 24", stainless-steel thali, cutlery and plain baskets, gas lifts for overhead shutters, and profile handles. Send your carpenter’s kitchen list on WhatsApp and we will price the full set together.',
    range: [
      { label: 'Hinges', items: 'Auto hinges and soft-close hinges in 0 crank (full overlay), 8–9 crank (half overlay) and inset, including SS304 options' },
      { label: 'Drawer channels', items: 'Full-extension telescopic channels in 10" to 24" lengths, soft-close options, up to 45 kg rating' },
      { label: 'Baskets', items: 'Stainless-steel thali, cutlery, cup-and-saucer, plate and plain baskets in common widths' },
      { label: 'Lift systems', items: 'Gas lifts / gas pumps for lift-up shutters in several load ratings' },
      { label: 'Handles & profiles', items: 'Profile handles and aluminium glass-shutter profiles' },
    ],
    sections: [
      {
        h2: 'Which hinge do I need for my kitchen shutter?',
        html: `<p><strong>It depends on how the shutter sits on the cabinet.</strong> A shutter that covers the whole side panel needs a 0 crank (full overlay) hinge. Two shutters sharing one middle panel need 8–9 crank (half overlay) hinges. A shutter set inside the frame needs an inset hinge. Soft-close hinges close gently and quietly and protect the shutter. Most kitchen shutters need two hinges; tall ones need three or more.</p>
<p>More detail in our <a href="/guides/kitchen-hinges-and-channels-guide/">kitchen hinges and channels guide</a>.</p>`,
      },
      {
        h2: 'How do I choose the right drawer channel?',
        html: `<p>Pick a channel length close to the inside depth of the cabinet, usually 18" or 20" for a standard base unit. Full-extension channels let the drawer open all the way, so you can reach the back. For heavy pots and plates, choose a higher load rating or soft-close channels.</p>`,
      },
      {
        h2: 'Why choose SS304 baskets and hinges?',
        html: `<p>SS304 stainless steel resists rust better than lower grades, which matters in a wet, hot kitchen. It costs a little more but lasts much longer near the sink and stove.</p>`,
      },
    ],
    brands: ['godrej', 'ebco'],
    photos: [
      { name: 'modular-kitchen-hardware-hazaribagh-baskets', alt: 'Stainless steel modular kitchen baskets at Cee Bee Enterprises, Hazaribagh' },
      { name: 'kitchen-hinges-channels-hazaribagh', alt: 'Soft-close hinges and telescopic drawer channels at Cee Bee Enterprises, Hazaribagh' },
    ],
    faqs: [
      {
        q: 'Where can I buy modular kitchen hardware in Hazaribagh?',
        a: 'Cee Bee Enterprises & CB Decor near Bajrangi Chowk, Hazaribagh sells modular kitchen hardware including hinges, channels, baskets and gas lifts, and is an authorised Godrej and Ebco dealer.',
      },
      {
        q: 'Do you have soft-close hinges and channels?',
        a: 'Yes. We stock soft-close hinges in full and half overlay, and soft-close and full-extension telescopic channels in lengths from 10" to 24".',
      },
      {
        q: 'Can I get the full kitchen hardware list priced together?',
        a: 'Yes. WhatsApp us your carpenter’s list or kitchen drawing and we will send one combined quote for all the hardware.',
      },
    ],
    wa: 'Hi, I want price and availability for modular kitchen hardware.',
    guides: ['kitchen-hinges-and-channels-guide'],
    related: ['furniture-fittings-hazaribagh', 'plywood-shop-hazaribagh', 'acrylic-acp-sheet-hazaribagh'],
  },

  // ───────────────────────────────────────────────────────────── Furniture fittings
  {
    slug: 'furniture-fittings-hazaribagh',
    name: 'Furniture Fittings',
    short: 'Furniture fittings',
    group: 'hardware',
    title: 'Furniture Fittings in Hazaribagh | Handles, Bed Fittings',
    description:
      'Furniture fittings in Hazaribagh: handles, knobs, hydraulic bed fittings, sofa legs, sliding wardrobe fittings. Godrej & Ebco dealer. Ask on WhatsApp.',
    h1: 'Furniture Fittings in Hazaribagh',
    keyword: 'furniture fittings in Hazaribagh',
    intro:
      'Cee Bee Enterprises & CB Decor stocks furniture fittings in Hazaribagh at our shop near Bajrangi Chowk, as authorised Godrej and Ebco dealers. Choose from hundreds of cabinet and wardrobe handles and knobs, hydraulic lift-up bed fittings, wall-bed and sofa-cum-bed mechanisms, sofa legs, sliding and pocket-door wardrobe fittings, friction stays, brackets, hooks and screws, so your carpenter can finish every piece of furniture from one shop.',
    range: [
      { label: 'Handles & knobs', items: 'Cabinet and wardrobe handles from about 150 mm to 300 mm and longer, plus knobs, in rose gold, black, SS, brass and PVD finishes' },
      { label: 'Bed fittings', items: 'Hydraulic lift-up bed mechanisms, bed fittings, wall-bed and sofa-cum-bed fittings' },
      { label: 'Sofa & table', items: 'Sofa legs from 3" to 6" in steel and finished options' },
      { label: 'Wardrobe', items: 'Sliding and pocket-door fittings, soft-close sliding sets, hooks and rods' },
      { label: 'Others', items: 'Friction stays, brackets, screws and fixing accessories' },
    ],
    sections: [
      {
        h2: 'What size handle should I choose?',
        html: `<p><strong>As a rule of thumb, longer handles suit wider shutters and drawers.</strong> Small drawers look right with 96–160 mm handles or knobs, wardrobe shutters with 200–300 mm handles, and tall units with long profile handles. Check the hole-to-hole distance if you are replacing an old handle.</p>`,
      },
      {
        h2: 'Hydraulic bed fitting or drawer storage bed?',
        html: `<p>A hydraulic lift-up fitting lets you lift the whole mattress platform and use the full box under the bed for storage. Drawer beds are easier to reach daily but store less. For hydraulic fittings, tell us the bed size and mattress weight so we can suggest the right lift strength.</p>`,
      },
      {
        h2: 'Sliding or hinged wardrobe doors?',
        html: `<p>Sliding doors save space in small bedrooms because they don’t swing out. Hinged doors open fully and cost less. We stock fittings for both, including soft-close sliding sets.</p>`,
      },
    ],
    brands: ['godrej', 'ebco'],
    photos: [
      { name: 'furniture-handles-hazaribagh-display', alt: 'Cabinet and wardrobe handles on display at Cee Bee Enterprises, Hazaribagh' },
      { name: 'hydraulic-bed-fittings-hazaribagh', alt: 'Hydraulic bed fittings and sofa legs at Cee Bee Enterprises, Hazaribagh' },
    ],
    faqs: [
      {
        q: 'Where can I buy furniture fittings in Hazaribagh?',
        a: 'Cee Bee Enterprises & CB Decor near Bajrangi Chowk, Hazaribagh sells furniture fittings including handles, bed fittings, sofa legs and wardrobe fittings, and is an authorised Godrej and Ebco dealer.',
      },
      {
        q: 'Do you sell hydraulic bed fittings?',
        a: 'Yes. We stock hydraulic lift-up bed mechanisms, including Godrej bed fittings, as well as wall-bed and sofa-cum-bed fittings.',
      },
      {
        q: 'Can you match my old handle?',
        a: 'Usually, yes. Send a photo with the hole-to-hole measurement on WhatsApp and we will check what matches.',
      },
    ],
    wa: 'Hi, I want price and availability for furniture fittings.',
    guides: ['kitchen-hinges-and-channels-guide'],
    related: ['modular-kitchen-hardware-hazaribagh', 'door-handles-locks-hazaribagh', 'king-koil-mattress-hazaribagh'],
  },

  // ───────────────────────────────────────────────────────────── Adhesives
  {
    slug: 'adhesives-fevicol-hazaribagh',
    name: 'Adhesives, Sealants & Waterproofing',
    short: 'Adhesives (Fevicol)',
    group: 'hardware',
    title: 'Fevicol & Adhesives in Hazaribagh | Pidilite Dealer',
    description:
      'Fevicol, Araldite, Feviseal & Dr. Fixit in Hazaribagh. Authorised Pidilite dealer near Bajrangi Chowk. Small packs to bulk tins. WhatsApp for availability.',
    h1: 'Fevicol, Adhesives & Sealants in Hazaribagh',
    keyword: 'Fevicol and adhesives in Hazaribagh',
    intro:
      'Cee Bee Enterprises & CB Decor is an authorised Pidilite dealer selling Fevicol and adhesives in Hazaribagh from our shop near Bajrangi Chowk. We stock Fevicol SH and other Fevicol grades for wood and laminate work, Araldite epoxy for strong repairs, Feviseal and silicone sealants, and Dr. Fixit waterproofing, in sizes from small packs for home repairs to large tins for carpenters and contractors.',
    range: [
      { label: 'Wood adhesives', items: 'Fevicol SH and other Fevicol grades for plywood, laminate and veneer work' },
      { label: 'Epoxy', items: 'Araldite epoxy adhesives for metal, stone, ceramic and wood' },
      { label: 'Sealants', items: 'Feviseal and silicone sealants for joints, glass and gaps' },
      { label: 'Waterproofing', items: 'Dr. Fixit waterproofing products' },
      { label: 'Pack sizes', items: 'Small packs for home use up to large tins for site work' },
    ],
    sections: [
      {
        h2: 'Which Fevicol should I use for plywood and laminate?',
        html: `<p><strong>Fevicol SH is the standard choice carpenters use for joining wood and pressing laminate onto plywood.</strong> Spread an even coat on both surfaces and keep the job under pressure until it sets. Tell us the job and we will point you to the right grade.</p>`,
      },
      {
        h2: 'When should I use Araldite instead of Fevicol?',
        html: `<p>Use Araldite epoxy when you are joining metal, stone, ceramic or glass, or when you need a very strong, gap-filling repair. Fevicol is meant for wood and wood-based boards.</p>`,
      },
      {
        h2: 'Do you supply adhesives in bulk for contractors?',
        html: `<p>Yes. Contractors and carpenters buying for a full site can WhatsApp their quantity for a bulk quote. See our <a href="/contractors/">page for contractors and builders</a>.</p>`,
      },
    ],
    brands: ['pidilite'],
    photos: [
      { name: 'fevicol-adhesives-hazaribagh-shelf', alt: 'Fevicol and Pidilite adhesives on the shelf at Cee Bee Enterprises, Hazaribagh' },
    ],
    faqs: [
      {
        q: 'Where can I buy Fevicol in Hazaribagh?',
        a: 'Cee Bee Enterprises & CB Decor near Bajrangi Chowk, Hazaribagh is an authorised Pidilite dealer and stocks Fevicol SH and other Fevicol grades.',
      },
      {
        q: 'Which adhesive is best for sticking laminate on plywood?',
        a: 'Fevicol SH is the adhesive most carpenters use to press laminate onto plywood. Apply it evenly and keep the sheet under pressure while it sets.',
      },
      {
        q: 'Do you sell Dr. Fixit waterproofing?',
        a: 'Yes. We stock Dr. Fixit waterproofing products from Pidilite. WhatsApp us the area you want to waterproof and we will check the right product.',
      },
    ],
    wa: 'Hi, I want price and availability for Fevicol / adhesives.',
    guides: [],
    related: ['plywood-shop-hazaribagh', 'laminate-shop-hazaribagh', 'furniture-fittings-hazaribagh'],
  },

  // ───────────────────────────────────────────────────────────── PVC & WPC
  {
    slug: 'pvc-wpc-board-hazaribagh',
    name: 'PVC & WPC Boards and Doors',
    short: 'PVC & WPC boards',
    group: 'boards',
    title: 'PVC & WPC Board Dealer in Hazaribagh | Waterproof Boards',
    description:
      'PVC foam boards (5–19 mm), WPC boards (12–28 mm), WPC & PVC doors in Hazaribagh. Waterproof, termite-proof boards near Bajrangi Chowk. WhatsApp for rates.',
    h1: 'PVC Board & WPC Board Dealer in Hazaribagh',
    keyword: 'PVC board dealer in Hazaribagh',
    intro:
      'Cee Bee Enterprises & CB Decor is a PVC board and WPC board dealer in Hazaribagh, near Bajrangi Chowk. We stock PVC foam boards from 5 mm to 19 mm, WPC boards from 12 mm to 28 mm, and ready WPC and PVC doors. These boards do not swell with water or attract termites, which makes them popular for bathroom vanities, under-sink cabinets, balconies and damp walls.',
    range: [
      { label: 'PVC foam boards', items: '5, 6, 8, 11, 12, 18 and 19 mm' },
      { label: 'WPC boards', items: '12, 18, 19, 24 and 28 mm' },
      { label: 'Doors', items: 'WPC doors and PVC doors' },
      { label: 'Accessories', items: 'PVC jointers, mouldings, clips and solvent adhesive' },
    ],
    sections: [
      {
        h2: 'PVC board, WPC board or plywood: which should I use?',
        html: `<p><strong>Choose PVC or WPC where water is a constant problem, and plywood where strength matters most.</strong> PVC foam board is light, waterproof and termite-proof, but holds screws less firmly and can sag over long spans. WPC (wood plastic composite) is denser and stronger than PVC, so it is better for doors and load-bearing shelves. BWP plywood is still the strongest for heavy furniture.</p>`,
      },
      {
        h2: 'Where do PVC and WPC boards work best?',
        html: `<ul><li>Bathroom vanities and wash-basin cabinets</li><li>Under-sink kitchen cabinets</li><li>Balcony and utility storage</li><li>Bathroom and kitchen doors (WPC/PVC doors)</li><li>Wall panelling on damp walls</li></ul>`,
      },
      {
        h2: 'Tips for working with PVC boards',
        html: `<p>Use the right screws and don’t over-tighten. Support long shelves every 60 cm or so to stop sagging, and use PVC solvent adhesive rather than wood glue for joints.</p>`,
      },
    ],
    brands: [],
    photos: [
      { name: 'pvc-wpc-board-hazaribagh-stack', alt: 'PVC foam boards and WPC boards in stock at Cee Bee Enterprises, Hazaribagh' },
    ],
    faqs: [
      {
        q: 'Where can I buy PVC boards in Hazaribagh?',
        a: 'Cee Bee Enterprises & CB Decor near Bajrangi Chowk, Hazaribagh stocks PVC foam boards from 5 mm to 19 mm and WPC boards from 12 mm to 28 mm.',
      },
      {
        q: 'Is WPC better than plywood for a bathroom?',
        a: 'For bathrooms, yes. WPC does not swell with water or attract termites. For heavy furniture in dry rooms, plywood is stronger.',
      },
      {
        q: 'Do you sell WPC doors?',
        a: 'Yes. We sell WPC doors and PVC doors, which are popular for bathrooms and kitchens. WhatsApp us the size you need.',
      },
    ],
    wa: 'Hi, I want price and availability for PVC / WPC boards.',
    guides: ['bwp-vs-mr-vs-commercial-plywood'],
    related: ['plywood-shop-hazaribagh', 'wall-panels-louvers-hazaribagh', 'door-handles-locks-hazaribagh'],
  },

  // ───────────────────────────────────────────────────────────── ACP & acrylic
  {
    slug: 'acrylic-acp-sheet-hazaribagh',
    name: 'ACP Sheets & Acrylic Solid Surface',
    short: 'ACP & acrylic sheets',
    group: 'boards',
    title: 'ACP Sheet Dealer in Hazaribagh | Acrylic Solid Surface',
    description:
      'ACP sheets in Hazaribagh: 3 mm & 4 mm aluminium composite panels, 8×4 to 12×4 ft, plus acrylic solid surface & acrylic sheets. WhatsApp for colours.',
    h1: 'ACP Sheet Dealer & Acrylic Sheets in Hazaribagh',
    keyword: 'ACP sheet dealer in Hazaribagh',
    intro:
      'Cee Bee Enterprises & CB Decor is an ACP sheet dealer in Hazaribagh, near Bajrangi Chowk. We stock 3 mm and 4 mm aluminium composite panels in 8×4, 10×4 and 12×4 ft sizes for shop fronts, building elevations, signboards and interiors, along with 6 mm acrylic solid surface for countertops and vanities, and coloured and fluted acrylic sheets.',
    range: [
      { label: 'ACP thickness', items: '3 mm and 4 mm' },
      { label: 'ACP sizes', items: '8×4, 10×4 and 12×4 ft' },
      { label: 'ACP finishes', items: 'Glossy white, black, red, dark grey, silver, wood finishes and anodised colours' },
      { label: 'Acrylic solid surface', items: '6 mm, including ultra white' },
      { label: 'Acrylic sheets', items: 'Coloured acrylic sheets and 4 mm fluted acrylic (8×4 ft)' },
    ],
    sections: [
      {
        h2: 'Should I use 3 mm or 4 mm ACP?',
        html: `<p><strong>Use 4 mm ACP for outdoor elevations and shop fronts, and 3 mm for interiors and signboards.</strong> The thicker panel stays flatter over large areas and stands up better to wind and weather.</p>`,
      },
      {
        h2: 'What is the difference between interior and exterior ACP?',
        html: `<p>Exterior-grade ACP has a weather-resistant coating that keeps its colour in sun and rain. Interior panels cost less but fade faster outdoors. Tell us where the panel will go and we will suggest the right grade.</p>`,
      },
      {
        h2: 'Why choose acrylic solid surface for a countertop?',
        html: `<p>Acrylic solid surface can be joined almost invisibly, so tops and vanities look like one seamless piece. It is non-porous and easy to clean, and light scratches can be polished out.</p>`,
      },
    ],
    brands: [],
    photos: [
      { name: 'acp-sheet-dealer-hazaribagh-colours', alt: 'ACP sheets in different colours at Cee Bee Enterprises, ACP sheet dealer in Hazaribagh' },
    ],
    faqs: [
      {
        q: 'Where can I buy ACP sheets in Hazaribagh?',
        a: 'Cee Bee Enterprises & CB Decor near Bajrangi Chowk, Hazaribagh stocks 3 mm and 4 mm ACP sheets in 8×4, 10×4 and 12×4 ft sizes.',
      },
      {
        q: 'Which ACP is best for a shop front?',
        a: 'Use 4 mm exterior-grade ACP for shop fronts and elevations. It stays flatter and keeps its colour outdoors.',
      },
      {
        q: 'Do you sell acrylic solid surface for kitchen tops?',
        a: 'Yes. We stock 6 mm acrylic solid surface sheets, including ultra white. WhatsApp us your counter size for a quote.',
      },
    ],
    wa: 'Hi, I want price and availability for ACP / acrylic sheets.',
    guides: [],
    related: ['wall-panels-louvers-hazaribagh', 'laminate-shop-hazaribagh', 'pvc-wpc-board-hazaribagh'],
  },

  // ───────────────────────────────────────────────────────────── Wall panels
  {
    slug: 'wall-panels-louvers-hazaribagh',
    name: 'Wall Panels & Louvers',
    short: 'Wall panels & louvers',
    group: 'interiors',
    title: 'Wall Panels & Louvers in Hazaribagh | Charcoal, PVC, Fluted',
    description:
      'Wall panels and louvers in Hazaribagh: interior & exterior louvers, charcoal, PVC & fluted panels with profiles. Visit near Bajrangi Chowk or WhatsApp.',
    h1: 'Wall Panels & Louvers in Hazaribagh',
    keyword: 'wall panels and louvers in Hazaribagh',
    intro:
      'Give a TV wall, bedroom or shop a finished look with wall panels and louvers from Cee Bee Enterprises & CB Decor, Hazaribagh. At our showroom near Bajrangi Chowk we stock interior and exterior-grade louvers, charcoal panels in 8×2 and 8×4 ft sheets, PVC wall panels, fluted panels, and the profiles, clips and mouldings needed to fit them neatly.',
    range: [
      { label: 'Louvers', items: 'Interior louvers, exterior-grade louvers and PVC louvers' },
      { label: 'Charcoal panels', items: 'Wood, stone and metallic designs in 8×2 and 8×4 ft' },
      { label: 'PVC & fluted panels', items: 'PVC wall panels and PVC fluted panels' },
      { label: 'Fitting accessories', items: 'Profiles, louver clips, jointers and mouldings' },
    ],
    sections: [
      {
        h2: 'Louvers, fluted panels or charcoal panels: which look do I want?',
        html: `<p><strong>Louvers give a bold, ribbed look with real depth; fluted panels give a softer, finer rib; charcoal panels give a flat surface in wood, marble or metallic designs.</strong> Many TV walls mix them, for example louvers behind the TV and charcoal panels on either side.</p>`,
      },
      {
        h2: 'Can wall panels be used outdoors?',
        html: `<p>Only exterior-grade louvers should be used outside or in direct sun and rain. Interior panels are meant for rooms, shops and covered areas.</p>`,
      },
      {
        h2: 'How do I estimate quantity?',
        html: `<p>Measure the wall width and height, work out the area, and add about 10% for cutting and fitting. Send us the measurements on WhatsApp with the design you like and we will work out the number of panels and profiles.</p>`,
      },
    ],
    brands: [],
    photos: [
      { name: 'wall-panels-louvers-hazaribagh-display', alt: 'Louvers and charcoal wall panels on display at Cee Bee Enterprises showroom, Hazaribagh' },
    ],
    faqs: [
      {
        q: 'Where can I buy wall panels and louvers in Hazaribagh?',
        a: 'Cee Bee Enterprises & CB Decor near Bajrangi Chowk, Hazaribagh stocks louvers, charcoal panels, PVC and fluted wall panels, with fitting profiles.',
      },
      {
        q: 'What are charcoal panels?',
        a: 'Charcoal panels are thin, lightweight decorative sheets in wood, stone and metallic designs, used for feature walls and TV units. We stock them in 8×2 and 8×4 ft.',
      },
      {
        q: 'Do you have exterior louvers?',
        a: 'Yes. We stock exterior-grade louvers for outdoor and semi-open areas, as well as interior louvers.',
      },
    ],
    wa: 'Hi, I want price and availability for wall panels / louvers.',
    guides: [],
    related: ['gypsum-false-ceiling-hazaribagh', 'wallpaper-flooring-blinds-hazaribagh', 'laminate-shop-hazaribagh'],
  },

  // ───────────────────────────────────────────────────────────── False ceiling
  {
    slug: 'gypsum-false-ceiling-hazaribagh',
    name: 'Gypsum False Ceiling Material',
    short: 'False ceiling',
    group: 'interiors',
    title: 'Gypsum False Ceiling Material in Hazaribagh | Boards, Grid',
    description:
      'False ceiling material in Hazaribagh: gypsum boards, laminated ceiling tiles, PVC gypsum tiles, GI channels & grid, near Bajrangi Chowk. WhatsApp us.',
    h1: 'Gypsum False Ceiling Material in Hazaribagh',
    keyword: 'false ceiling material in Hazaribagh',
    intro:
      'Cee Bee Enterprises & CB Decor supplies gypsum false ceiling material in Hazaribagh from our shop near Bajrangi Chowk. We stock gypsum boards, laminated gypsum ceiling tiles, PVC gypsum tiles, GI ceiling and floor channels, ceiling sections, grids and drywall tape. Ceiling contractors and homeowners can get boards and framing together.',
    range: [
      { label: 'Boards', items: 'Gypsum boards for plain and designer ceilings' },
      { label: 'Ceiling tiles', items: 'Laminated gypsum ceiling tiles and 7 mm PVC gypsum tiles for grid ceilings' },
      { label: 'Framing', items: 'GI ceiling channels, floor channels, sections and grid' },
      { label: 'Finishing', items: 'Drywall tape and fixing accessories' },
    ],
    sections: [
      {
        h2: 'Gypsum board ceiling or grid ceiling: which should I choose?',
        html: `<p><strong>A gypsum board ceiling gives a smooth, seamless finish for homes; a grid (tile) ceiling is quicker to fit and easy to open for wiring, which suits offices and shops.</strong> Board ceilings can have coves, cut-outs and lighting designs. Grid ceilings let you lift a tile to reach AC ducts or cables.</p>`,
      },
      {
        h2: 'Which ceiling material is best for bathrooms and kitchens?',
        html: `<p>In damp areas, PVC gypsum tiles or moisture-resistant boards hold up better than standard gypsum. Make sure the space is ventilated, whatever you choose.</p>`,
      },
      {
        h2: 'What should I plan before fixing a false ceiling?',
        html: `<p>Decide the light positions, fan hooks and AC ducts first, so the framing can be laid out around them. Share your room size on WhatsApp and we will help list the boards, channels and accessories.</p>`,
      },
    ],
    brands: [],
    photos: [
      { name: 'gypsum-false-ceiling-material-hazaribagh', alt: 'Gypsum boards and ceiling channels in stock at Cee Bee Enterprises, Hazaribagh' },
    ],
    faqs: [
      {
        q: 'Where can I buy false ceiling material in Hazaribagh?',
        a: 'Cee Bee Enterprises & CB Decor near Bajrangi Chowk, Hazaribagh stocks gypsum boards, ceiling tiles, GI channels and grid for false ceilings.',
      },
      {
        q: 'Do you deliver false ceiling material to site?',
        a: 'We supply false ceiling material. Your ceiling contractor can collect it from the shop, or we can deliver it within Hazaribagh district.',
      },
      {
        q: 'Which false ceiling is best for a shop?',
        a: 'A grid ceiling with gypsum or PVC tiles is popular for shops and offices because it is quick to fit and easy to open for wiring.',
      },
    ],
    wa: 'Hi, I want price and availability for false ceiling material.',
    guides: [],
    related: ['wall-panels-louvers-hazaribagh', 'wallpaper-flooring-blinds-hazaribagh', 'pvc-wpc-board-hazaribagh'],
  },

  // ───────────────────────────────────────────────────────────── Wallpaper etc.
  {
    slug: 'wallpaper-flooring-blinds-hazaribagh',
    name: 'Wallpaper, Flooring, Blinds & Curtain Rods',
    short: 'Wallpaper, flooring & blinds',
    group: 'interiors',
    title: 'Wallpaper, Flooring & Blinds in Hazaribagh | Excel Dealer',
    description:
      'Wallpaper, flooring & blinds in Hazaribagh: authorised Excel dealer near Bajrangi Chowk. Roller blinds, wall putty, curtain rods. WhatsApp for designs.',
    h1: 'Wallpaper, Flooring & Window Blinds in Hazaribagh',
    keyword: 'wallpaper and blinds in Hazaribagh',
    intro:
      'Cee Bee Enterprises & CB Decor is an authorised Excel dealer for wallpaper, flooring and blinds in Hazaribagh, at our showroom near Bajrangi Chowk. Choose wallpapers from design catalogues, flooring for homes and offices, and roller, venetian and custom-printed window blinds, plus curtain rods and brackets to finish your windows. We don’t sell curtain fabric.',
    range: [
      { label: 'Wallpaper', items: 'Excel wallpapers and design catalogues' },
      { label: 'Flooring', items: 'Excel flooring' },
      { label: 'Blinds', items: 'Roller blinds, venetian blinds and customised printed blinds' },
      { label: 'Curtain hardware', items: 'Curtain rods, brackets and fittings (no curtain fabric)' },
      { label: 'Wall putty', items: 'Wall putty for a smooth, even wall before wallpaper or paint' },
    ],
    sections: [
      {
        h2: 'How much wallpaper do I need?',
        html: `<p><strong>Measure the wall width and height, multiply to get the area, and add 10–15% for pattern matching and trimming.</strong> Send the measurement and the design you like on WhatsApp and we will tell you how many rolls to order.</p>`,
      },
      {
        h2: 'Which blinds are right for my room?',
        html: `<p>Roller blinds are simple and neat for bedrooms and offices. Venetian blinds let you tilt the slats to control light. Customised printed blinds can carry a photo or pattern of your choice. For dark bedrooms, ask about blackout fabrics.</p>`,
      },
      {
        h2: 'How do I measure a window for blinds?',
        html: `<p>Decide whether the blind will sit inside the window recess or on the wall above it. For an inside fit, measure the recess width at the top, middle and bottom and use the smallest. For a wall fit, add a few inches on each side so light does not leak around the edges.</p>`,
      },
    ],
    brands: ['excel'],
    photos: [
      { name: 'wallpaper-catalogue-hazaribagh', alt: 'Wallpaper catalogues at Cee Bee Enterprises showroom, Hazaribagh' },
      { name: 'window-blinds-hazaribagh-display', alt: 'Roller window blinds on display at Cee Bee Enterprises, Hazaribagh' },
    ],
    faqs: [
      {
        q: 'Where can I buy wallpaper in Hazaribagh?',
        a: 'Cee Bee Enterprises & CB Decor near Bajrangi Chowk, Hazaribagh is an authorised Excel dealer for wallpaper, flooring and blinds. Visit the showroom to see the catalogues.',
      },
      {
        q: 'Do you make custom-size blinds?',
        a: 'Blinds are ordered to your window size, and we also offer customised printed blinds. WhatsApp us the window measurements and we will confirm the options.',
      },
      {
        q: 'Do you sell curtains?',
        a: 'We sell curtain rods, brackets and fittings, but not curtain fabric.',
      },
    ],
    wa: 'Hi, I want to see wallpaper / flooring / blinds designs.',
    guides: [],
    related: ['wall-panels-louvers-hazaribagh', 'gypsum-false-ceiling-hazaribagh', 'king-koil-mattress-hazaribagh'],
  },

  // ───────────────────────────────────────────────────────────── Mattresses
  {
    slug: 'king-koil-mattress-hazaribagh',
    name: 'King Koil Mattresses & Pillows',
    short: 'King Koil mattresses',
    group: 'home',
    title: 'King Koil Mattress Dealer in Hazaribagh | CB Decor',
    description:
      'Authorised King Koil mattress dealer in Hazaribagh, near Bajrangi Chowk. See mattresses & pillows in our showroom; delivery in Hazaribagh district.',
    h1: 'King Koil Mattress Dealer in Hazaribagh',
    keyword: 'King Koil mattress dealer in Hazaribagh',
    intro:
      'Cee Bee Enterprises & CB Decor is an authorised King Koil mattress dealer in Hazaribagh. Visit our showroom near Bajrangi Chowk to see King Koil mattresses and pillows, and get help choosing the right size and firmness for your bed. Since we also sell plywood and hydraulic bed fittings, you can plan a new bed and its mattress in one place.',
    range: [
      { label: 'Mattresses', items: 'King Koil mattresses in standard bed sizes' },
      { label: 'Pillows', items: 'King Koil pillows' },
      { label: 'For the bed', items: 'Plywood, hydraulic bed fittings and laminates for the bed itself' },
    ],
    sections: [
      {
        h2: 'What size mattress do I need?',
        html: `<p><strong>Measure the inside of your bed frame, length and width, and choose the mattress closest to it.</strong> Common Indian sizes are about 72×36 in (single), 72×48 in (double), 75×60 in (queen) and 78×72 in (king), but beds vary, so always measure.</p>`,
      },
      {
        h2: 'Soft, medium or firm: how do I choose?',
        html: `<p>Back sleepers usually prefer medium-firm support. Side sleepers often like a softer top for the shoulders and hips. If you share the bed, choose for the person who needs more support. Our team can walk you through the King Koil range in the showroom.</p>`,
      },
      {
        h2: 'How do I care for a new mattress?',
        html: `<p>Rotate the mattress head-to-foot every few months so it wears evenly, use a mattress protector, and keep it on a flat, well-supported base.</p>`,
      },
    ],
    brands: ['king-koil'],
    photos: [
      { name: 'king-koil-mattress-hazaribagh-showroom', alt: 'King Koil mattresses at Cee Bee Enterprises showroom, authorised dealer in Hazaribagh' },
    ],
    faqs: [
      {
        q: 'Where can I buy a King Koil mattress in Hazaribagh?',
        a: 'At Cee Bee Enterprises & CB Decor near Bajrangi Chowk, Hazaribagh, an authorised King Koil dealer. Open Tuesday to Sunday, 9:30 AM to 7:30 PM.',
      },
      {
        q: 'Do you deliver mattresses?',
        a: 'Yes. We deliver across Hazaribagh district. Tell us your location on WhatsApp for delivery details.',
      },
      {
        q: 'Can I get a mattress for a non-standard bed size?',
        a: 'Send us your bed’s inside measurements on WhatsApp and we will check which King Koil sizes or options fit.',
      },
    ],
    wa: 'Hi, I want price and availability for a King Koil mattress.',
    guides: [],
    related: ['furniture-fittings-hazaribagh', 'plywood-shop-hazaribagh', 'wallpaper-flooring-blinds-hazaribagh'],
  },
];

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug)!;
