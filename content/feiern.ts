import type { IconName } from "@/components/Icon/Icon";

export const feiernIntro =
  "Unser Restaurant ist geschlossen — für Gruppen, Feiern, Tagungen, Seminare und Veranstaltungen sind wir aber weiterhin gern für Sie da. Von der kleinen Familienfeier bis zur großen Gesellschaft mit 100 Gästen.";

export interface EventRoom {
  readonly icon: IconName;
  readonly name: string;
  readonly capacity: string;
  readonly text: string;
  readonly highlight?: boolean;
}

export const eventRooms: readonly EventRoom[] = [
  {
    icon: "coffee",
    name: "Ofenstüble",
    capacity: "bis 25 Personen",
    text: "Gemütlicher Raum für kleinere Runden, Taufen und Familienfeiern.",
  },
  {
    icon: "users",
    name: "Fürsteneckzimmer",
    capacity: "bis 60 Personen (bestuhlt)",
    text: "Unser Saal für Hochzeiten und größere Gesellschaften.",
    highlight: true,
  },
  {
    icon: "users",
    name: "Fürsteneck & Restaurant",
    capacity: "bis 100 Personen",
    text: "Für große Feiern öffnen wir zusätzlich das Restaurant — Platz für bis zu 100 Gäste.",
  },
];

export interface EventOccasion {
  readonly icon: IconName;
  readonly title: string;
  readonly text: string;
}

export const eventOccasions: readonly EventOccasion[] = [
  {
    icon: "drinks",
    title: "Sektempfang",
    text: "Empfang im Kastaniengarten unter alten Bäumen.",
  },
  {
    icon: "coffee",
    title: "Kaffee & Kuchen",
    text: "Auf der Panoramaterrasse mit weitem Blick.",
  },
  {
    icon: "wedding",
    title: "Hochzeit",
    text: "Feiern Sie im festlichen Fürsteneckraum.",
  },
  {
    icon: "family",
    title: "Taufe",
    text: "Im gemütlichen Ofenstüble im kleinen Kreis.",
  },
];

export const feiernForKids =
  "An die kleinen Gäste ist gedacht: ein Spielplatz auf der Wiese und ein Spielzimmer sorgen dafür, dass sich Kinder rundum wohlfühlen.";

export interface WeddingCar {
  readonly name: string;
  readonly detail: string;
}

export const weddingCars: readonly WeddingCar[] = [
  {
    name: "Rote Ente (Citroën 2CV)",
    detail: "Bei schönem Wetter offen als Cabrio — Fahrspaß mit Charakter.",
  },
  {
    name: "Citroën Traction Avant 11CV",
    detail: "Baujahr 1952, petrolblau — ein eleganter Klassiker.",
  },
];

export const weddingCarNote =
  "Beide Hochzeitsautos fahren mit Chauffeur und individuellem Blumenschmuck vor.";

/** Menüvorschläge als PDF-Download. */
export const menuPdf = {
  label: "Menüvorschläge mit begleitenden Weinen",
  // TODO: PDF hinterlegen und Pfad eintragen (z. B. /downloads/menuevorschlaege.pdf)
  href: null as string | null,
};
