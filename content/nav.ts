export interface NavItem {
  readonly label: string;
  readonly href: string;
}

/** Hauptnavigation über dem Hero. */
export const mainNav: readonly NavItem[] = [
  { label: "Hotel", href: "/hotel" },
  { label: "Feiern", href: "/feiern" },
  { label: "Region", href: "/region" },
  { label: "Impressionen", href: "/impressionen" },
  { label: "Kontakt", href: "/kontakt" },
];

/** Untermenü des Bereichs „Hotel“. */
export const hotelNav: readonly NavItem[] = [
  { label: "Übersicht", href: "/hotel" },
  { label: "Zimmer", href: "/hotel/zimmer" },
  { label: "Preise", href: "/hotel/preise" },
  { label: "Frühstück", href: "/hotel/fruehstueck" },
  { label: "Arrangements", href: "/hotel/arrangements" },
  { label: "Gruppen", href: "/hotel/gruppen" },
  { label: "Wissenswertes", href: "/hotel/wissenswertes" },
];

/** Rechtliches / Footer-Navigation. */
export const legalNav: readonly NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
];
