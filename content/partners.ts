export interface Partner {
  readonly name: string;
  /**
   * TODO: Echte Partner-Logos (SVG) unter /public/partners ablegen und hier
   * verlinken. Bis dahin wird der Name als Text-Badge dargestellt.
   */
  readonly logo: string | null;
  readonly href: string | null;
}

export const partners: readonly Partner[] = [
  { name: "Renchtal Tourismus", logo: null, href: null },
  { name: "Schwarzwald Tourismus", logo: null, href: null },
  { name: "Wanderbares Deutschland", logo: null, href: null },
  { name: "Bett+Bike", logo: null, href: null },
  { name: "Nationalpark Schwarzwald", logo: null, href: null },
  { name: "booking.com", logo: null, href: null },
];
