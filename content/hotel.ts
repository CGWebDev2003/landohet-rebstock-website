import type { IconName } from "@/components/Icon/Icon";

export interface Feature {
  readonly icon: IconName;
  readonly title: string;
  readonly text: string;
  /** Ein grün hervorgehobenes Element pro Kachelreihe als Fokuspunkt. */
  readonly highlight?: boolean;
}

/** Zimmerausstattung — gilt für alle Zimmer (Anzahl: {@link roomCount} in content/site.ts). */
export const roomAmenities: readonly { icon: IconName; label: string }[] = [
  { icon: "balcony", label: "Balkon mit Talblick" },
  { icon: "tv", label: "Dusche/WC & TV" },
  { icon: "phone", label: "Telefon" },
  { icon: "hairdryer", label: "Föhn" },
  { icon: "fridge", label: "Kühlschrank" },
  { icon: "safe", label: "Tresor" },
  { icon: "radio", label: "Radiowecker" },
  { icon: "lift", label: "Per Lift erreichbar" },
];

/** Leistungen, die im Preis enthalten sind. */
export const includedServices: readonly Feature[] = [
  {
    icon: "parking",
    title: "Parken inklusive",
    text: "Kostenfreie Stellplätze direkt am Haus, auch für größere Fahrzeuge.",
  },
  {
    icon: "wifi",
    title: "WLAN inklusive",
    text: "Kostenfreies WLAN im ganzen Haus.",
  },
  {
    icon: "bus",
    title: "KONUS-Gästekarte",
    text: "Freie Fahrt mit Bus und Bahn von Basel bis Karlsruhe — inklusive.",
    highlight: true,
  },
  {
    icon: "sun",
    title: "Freibad Oberkirch",
    text: "Freier Eintritt ins Freibad Oberkirch mit der Gästekarte.",
  },
  {
    icon: "evCharging",
    title: "E-Auto-Ladestation",
    text: "Laden Sie Ihr Elektrofahrzeug bequem direkt am Haus.",
  },
  {
    icon: "gift",
    title: "Gästekarten-Vorteile",
    text: "Vergünstigungen bei zahlreichen Ausflugszielen der Region.",
  },
];

/** Startseiten-Highlights zur Positionierung. */
export const homeHighlights: readonly Feature[] = [
  {
    icon: "leaf",
    title: "Zwischen Wein und Wald",
    text: "Ruhig gelegen im Winzerdorf Bottenau, abseits vom Durchgangsverkehr — zwischen Rheinebene und den Rebhängen am Fuß des Schwarzwalds.",
  },
  {
    icon: "drinks",
    title: "Getränke rund um die Uhr",
    text: "Wir führen kein Restaurant — für Ihr Wohl mit Getränken ist aber bestens gesorgt. Auf ein Gläschen Badischer Wein sind Sie herzlich eingeladen.",
    highlight: true,
  },
  {
    icon: "family",
    title: "Familiär geführt",
    text: "Familie Noack empfängt Sie persönlich und mit dem Blick fürs Detail, der ein kleines Haus ausmacht.",
  },
];

export interface FactItem {
  readonly icon: IconName;
  readonly title: string;
  readonly text: string;
}

/** „Wissenswertes“ für die Unterseite. */
export const facts: readonly FactItem[] = [
  {
    icon: "clock",
    title: "An- & Abreise",
    text: "Anreise ab 15:00 Uhr, Abreise bis 11:00 Uhr. Frühere Anreise oder spätere Abreise gern nach Absprache.",
  },
  {
    icon: "key",
    title: "Zimmerkategorien",
    text: "Buchbar sind Zimmerkategorien — nicht einzelne Zimmernummern oder Etagen.",
  },
  {
    icon: "wallet",
    title: "Zahlung",
    text: "Bezahlung per EC-Karte, Kreditkarte oder bar. Bei Kostenübernahme durch Dritte fällt eine Bearbeitungsgebühr von 5 € an.",
  },
  {
    icon: "mapPin",
    title: "Kurtaxe",
    text: "2 € pro Person und Nacht ab 15 Jahren. Beruflich Reisende in Oberkirch sind von der Kurtaxe befreit.",
  },
  {
    icon: "dog",
    title: "Hunde willkommen",
    text: "Hunde nach Absprache mit der Rezeption — 8 € pro Tag, ohne Futter.",
  },
  {
    icon: "bus",
    title: "KONUS-Gästekarte",
    text: "Mit der Gästekarte nutzen Sie Bus und Bahn im gesamten Schwarzwald kostenlos.",
  },
];
