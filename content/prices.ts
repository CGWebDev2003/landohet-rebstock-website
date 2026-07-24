export interface PriceRow {
  readonly category: string;
  readonly occupancy: string;
  readonly price: string;
  readonly note?: string;
}

/** Preise pro Person/Nacht bzw. gesamt, inkl. Frühstücksbuffet und MwSt. */
export const priceRows: readonly PriceRow[] = [
  {
    category: "Doppelzimmer mit Balkon",
    occupancy: "pro Person / Nacht (Wochenende)",
    price: "ab 54 €",
  },
  {
    category: "Doppelzimmer mit Balkon",
    occupancy: "pro Person / Nacht (unter der Woche)",
    price: "ab 52 €",
  },
  {
    category: "Dreibettzimmer mit Balkon",
    occupancy: "3 Personen / Nacht",
    price: "ab 126 €",
  },
  {
    category: "Familienzimmer",
    occupancy: "3 Personen / Nacht",
    price: "ab 126 €",
    note: "2 getrennte DZ ohne Balkon, gemeinsames Bad · 4. Person 20 €",
  },
  {
    category: "XL-Familienzimmer",
    occupancy: "4 Personen / Nacht",
    price: "ab 158 €",
    note: "2 getrennte DZ, kleines Wohnzimmer, Bad, Balkon, max. 6 Pers. · jede weitere Person 20 €",
  },
];

export interface PriceNote {
  readonly label: string;
  readonly value: string;
}

/** Auf- und Abschläge sowie Nebenkosten. */
export const priceNotes: readonly PriceNote[] = [
  { label: "Ab 4 Nächten", value: "3 % Rabatt auf den Übernachtungspreis" },
  { label: "Einzelzimmeraufpreis", value: "18 € / 20 € pro Nacht" },
  { label: "Kurtaxe", value: "2 € pro Person / Nacht ab 15 Jahren" },
  { label: "Hund", value: "8 € pro Tag (ohne Futter), nach Absprache" },
];

/** Immer im Preis enthalten. */
export const includedInPrice: readonly string[] = [
  "Reichhaltiges Frühstücksbuffet",
  "Kostenfreies Parken direkt am Haus",
  "Kostenfreies WLAN",
  "KONUS-Gästekarte: freie Fahrt mit Bus & Bahn von Basel bis Karlsruhe",
  "Freier Eintritt ins Freibad Oberkirch",
  "Vergünstigungen mit der Gästekarte",
];
