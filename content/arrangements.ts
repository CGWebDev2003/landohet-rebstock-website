import type { IconName } from "@/components/Icon/Icon";

export interface Arrangement {
  readonly icon: IconName;
  readonly name: string;
  readonly description: string;
  readonly details: readonly string[];
  readonly highlight?: boolean;
}

export const arrangements: readonly Arrangement[] = [
  {
    icon: "family",
    name: "Familienarrangement",
    description:
      "Ein individuell auf Ihre Familie zugeschnittenes Angebot — sprechen Sie uns einfach an, wir stellen Ihnen gern etwas zusammen.",
    details: ["Individuelles Angebot auf Anfrage", "Kinderermäßigung möglich"],
  },
  {
    icon: "calendar",
    name: "Sparwoche",
    description:
      "Sieben Tage bleiben, sechs bezahlen — ideal, um die Region in Ruhe zu erkunden.",
    details: [
      "7 Tage buchen, 6 Nächte bezahlen",
      "Inklusive Gästepass",
      "Buchbar 1. November bis 31. März",
      "Ausgenommen Weihnachts- und Silvesterwoche",
    ],
    highlight: true,
  },
];

export const groupsIntro =
  "Für Reisegruppen ist der Rebstock ein dankbarer Ausgangspunkt: gut erreichbar, ruhig gelegen und mit reichlich Platz zum Parken.";

export const groupsPoints: readonly { icon: IconName; text: string }[] = [
  { icon: "car", text: "Gute Anfahrtsbedingungen" },
  {
    icon: "parking",
    text: "Großflächige Parkmöglichkeiten — auch für Busse",
  },
  { icon: "gift", text: "Individuelle Angebote für Ihre Gruppe" },
];
