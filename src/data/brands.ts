// Brands Cee Bee Enterprises is an AUTHORISED DEALER for (confirmed by the
// owner). Do not add a brand here unless the shop really holds the
// dealership. Other brands that are stocked but not authorised belong in a
// category's `alsoStocked` list, never here.

export interface Brand {
  id: string;
  name: string;
  /** What the brand is known for, in plain words. */
  makes: string;
  /** What we sell from this brand. */
  weStock: string;
  categories: string[]; // category slugs
}

export const brands: Brand[] = [
  {
    id: 'century',
    name: 'Century (CenturyPly)',
    makes: 'plywood, blockboard, MDF, laminates and flush doors',
    weStock:
      'Century plywood in BWP, MR and commercial grades (including the Club Prime range), Century laminates, Century MDF and Century flush doors.',
    categories: ['plywood-shop-hazaribag', 'laminate-shop-hazaribag'],
  },
  {
    id: 'greenply',
    name: 'Greenply',
    makes: 'plywood, blockboard and MDF',
    weStock: 'Greenply plywood and Greenply interior-grade MDF boards.',
    categories: ['plywood-shop-hazaribag'],
  },
  {
    id: 'royale-touche',
    name: 'Royale Touche',
    makes: 'plywood, blockboard and decorative laminates',
    weStock: 'Royale Touche ProMaxx plywood (6 mm to 19 mm), Royale Touche blockboard and laminates.',
    categories: ['plywood-shop-hazaribag', 'laminate-shop-hazaribag'],
  },
  {
    id: 'merino',
    name: 'Merino',
    makes: 'decorative laminates and Merino Lam Veneer',
    weStock: 'Merino decorative laminates and Merino Lam Veneer.',
    categories: ['laminate-shop-hazaribag'],
  },
  {
    id: 'godrej',
    name: 'Godrej',
    makes: 'locks, door hardware, kitchen and furniture fittings',
    weStock:
      'Godrej door locks and handle sets, auto hinges, stainless-steel kitchen baskets, aluminium glass-shutter profiles and bed fittings.',
    categories: ['door-handles-locks-hazaribag', 'modular-kitchen-hardware-hazaribag', 'furniture-fittings-hazaribag'],
  },
  {
    id: 'ebco',
    name: 'Ebco',
    makes: 'furniture and kitchen hardware',
    weStock: 'Ebco furniture and kitchen fittings, including friction stays.',
    categories: ['modular-kitchen-hardware-hazaribag', 'furniture-fittings-hazaribag'],
  },
  {
    id: 'pidilite',
    name: 'Pidilite',
    makes: 'Fevicol, Araldite, Dr. Fixit and other adhesives and sealants',
    weStock: 'Fevicol SH and other Fevicol grades, Araldite epoxy, Feviseal sealants and Dr. Fixit waterproofing.',
    categories: ['adhesives-fevicol-hazaribag'],
  },
  {
    id: 'excel',
    name: 'Excel',
    makes: 'wallpaper, flooring and window blinds',
    weStock: 'Excel wallpapers, flooring and blinds.',
    categories: ['wallpaper-flooring-blinds-hazaribag'],
  },
  {
    id: 'king-koil',
    name: 'King Koil',
    makes: 'mattresses and pillows',
    weStock: 'King Koil mattresses and pillows.',
    categories: ['king-koil-mattress-hazaribag'],
  },
];

export const brandById = (id: string) => brands.find((b) => b.id === id)!;
