// Dealer certificates and awards shown in the scrolling strip on the home
// and brands pages.
//
// To add a picture: save it in src/assets/certificates/ with the exact
// `file` name below (any of .jpg .jpeg .png .webp). Items without a picture
// are hidden on the live site and shown as dashed placeholders in `npm run dev`.
//
// Awards: copy an award entry, give it a file name and the real award title
// and year. Never add an award the shop has not actually received.

export interface Certificate {
  file: string;
  title: string;
  kind: 'dealer' | 'award';
}

export const certificates: Certificate[] = [
  { file: 'century-authorised-dealer-certificate', title: 'Century — Authorised Dealer', kind: 'dealer' },
  { file: 'greenply-authorised-dealer-certificate', title: 'Greenply — Authorised Dealer', kind: 'dealer' },
  { file: 'royale-touche-authorised-dealer-certificate', title: 'Royale Touche — Authorised Dealer', kind: 'dealer' },
  { file: 'merino-authorised-dealer-certificate', title: 'Merino — Authorised Dealer', kind: 'dealer' },
  { file: 'godrej-authorised-dealer-certificate', title: 'Godrej — Authorised Dealer', kind: 'dealer' },
  { file: 'ebco-authorised-dealer-certificate', title: 'Ebco — Authorised Dealer', kind: 'dealer' },
  { file: 'pidilite-authorised-dealer-certificate', title: 'Pidilite — Authorised Dealer', kind: 'dealer' },
  { file: 'excel-authorised-dealer-certificate', title: 'Excel — Authorised Dealer', kind: 'dealer' },
  { file: 'king-koil-authorised-dealer-certificate', title: 'King Koil — Authorised Dealer', kind: 'dealer' },
  { file: 'award-1', title: '{{FILL: award name, given by, year}}', kind: 'award' },
  { file: 'award-2', title: '{{FILL: award name, given by, year}}', kind: 'award' },
  { file: 'award-3', title: '{{FILL: award name, given by, year}}', kind: 'award' },
];
