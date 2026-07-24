export interface Room {
  readonly slug: string;
  readonly name: string;
  readonly persons: string;
  readonly priceFrom: string;
  readonly priceUnit: string;
  readonly balcony: boolean;
  readonly description: string;
  readonly details: readonly string[];
  /** Seitenverhältnis des Platzhalterbildes bzw. von `image`. */
  readonly ratio: "4/3" | "3/2" | "16/10";
  readonly image?: string;
}

export const rooms: readonly Room[] = [
  {
    slug: "doppelzimmer",
    name: "Doppelzimmer mit Balkon",
    persons: "2 Personen",
    priceFrom: "ab 52 €",
    priceUnit: "pro Person / Nacht",
    balcony: true,
    description:
      "Unser klassisches Zimmer mit eigenem Balkon und Blick ins Renchtal und in den Schwarzwald. Ideal für Paare und Wanderer.",
    details: [
      "Dusche/WC, TV, Telefon, Föhn",
      "Kühlschrank, Tresor, Radiowecker",
      "Balkon mit Aussicht, per Lift erreichbar",
      "Einzelbelegung gegen Aufpreis möglich",
    ],
    ratio: "4/3",
  },
  {
    slug: "dreibettzimmer",
    name: "Dreibettzimmer mit Balkon",
    persons: "bis 3 Personen",
    priceFrom: "ab 126 €",
    priceUnit: "für 3 Personen / Nacht",
    balcony: true,
    description:
      "Großzügiges Zimmer mit Balkon für kleine Familien oder Freunde, die zusammen reisen.",
    details: [
      "Drei vollwertige Betten",
      "Dusche/WC, TV, Telefon, Föhn",
      "Kühlschrank, Tresor, Radiowecker",
      "Balkon mit Blick in Tal und Wald",
    ],
    ratio: "3/2",
  },
  {
    slug: "familienzimmer",
    name: "Familienzimmer",
    persons: "bis 4 Personen",
    priceFrom: "ab 126 €",
    priceUnit: "für 3 Personen / Nacht",
    balcony: false,
    description:
      "Zwei getrennte Doppelzimmer mit gemeinsamem Bad — Rückzugsraum für Eltern und Kinder unter einem Dach.",
    details: [
      "2 getrennte Schlafzimmer",
      "Gemeinsames Bad mit Dusche/WC",
      "4. Person gegen Aufpreis (20 €)",
      "Kinderermäßigung möglich",
    ],
    ratio: "4/3",
    image: "/impressionen/familienzimmer20.jpg",
  },
  {
    slug: "xl-familienzimmer",
    name: "XL-Familienzimmer",
    persons: "bis 6 Personen",
    priceFrom: "ab 158 €",
    priceUnit: "für 4 Personen / Nacht",
    balcony: true,
    description:
      "Unsere größte Einheit: zwei getrennte Doppelzimmer, ein kleines Wohnzimmer, eigenes Bad und Balkon. Für große Familien und Reisegruppen.",
    details: [
      "2 getrennte Doppelzimmer",
      "Kleines Wohnzimmer & eigenes Bad",
      "Balkon mit Aussicht",
      "Jede weitere Person gegen Aufpreis (20 €)",
    ],
    ratio: "16/10",
  },
];
