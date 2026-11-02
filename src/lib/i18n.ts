export type Lang = 'en' | 'hi';

export const nav: Record<Lang, { label: string; href: string }[]> = {
  en: [
    { label: 'Products', href: '/products/' },
    { label: 'Brands', href: '/brands/' },
    { label: 'Services', href: '/services/' },
    { label: 'For Contractors', href: '/contractors/' },
    { label: 'Guides', href: '/guides/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ],
  hi: [
    { label: 'होम', href: '/hi/' },
    { label: 'उत्पाद', href: '/hi/products/' },
    { label: 'संपर्क', href: '/hi/contact/' },
    { label: 'ब्रांड (English)', href: '/brands/' },
    { label: 'गाइड (English)', href: '/guides/' },
  ],
};

export const ui = {
  en: {
    menu: 'Menu',
    call: 'Call',
    whatsapp: 'WhatsApp',
    directions: 'Directions',
    callNow: 'Call now',
    switchLang: 'हिंदी',
    switchLangLabel: 'हिंदी में पढ़ें',
    skip: 'Skip to content',
    home: 'Home',
    defaultWa: 'Hi, I want to know about products at Cee Bee Enterprises (CB Decor).',
  },
  hi: {
    menu: 'मेनू',
    call: 'कॉल',
    whatsapp: 'व्हाट्सऐप',
    directions: 'रास्ता',
    callNow: 'कॉल करें',
    switchLang: 'English',
    switchLangLabel: 'Read in English',
    skip: 'मुख्य सामग्री पर जाएँ',
    home: 'होम',
    defaultWa: 'नमस्ते, मुझे Cee Bee Enterprises (CB Decor) के सामान के बारे में जानकारी चाहिए।',
  },
} as const;
