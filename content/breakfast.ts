export const breakfastIntro =
  "Der Tag beginnt bei uns am Frühstücksbuffet — mit Zeit, Aussicht und Zutaten aus der Region. Vieles ist hausgemacht oder kommt direkt aus dem Dorf.";

export const breakfastItems: readonly string[] = [
  "Hausgemachte Marmeladen",
  "Honig vom Imker aus der Region",
  "Frische Eier vom Dorf",
  "Fruchtige Säfte",
  "Frisches Obst",
  "Vollwert-Müsli",
  "Verschiedene Brötchen",
  "Schinken, Wurst und Käse aus der Region",
];

export interface BreakfastTime {
  readonly label: string;
  readonly time: string;
}

export const breakfastTimes: readonly BreakfastTime[] = [
  { label: "Montag bis Freitag", time: "7:00 – 10:00 Uhr" },
  { label: "Wochenende", time: "7:30 – 10:30 Uhr" },
  { label: "Berufstätige", time: "auf Wunsch auch früher" },
];

export const breakfastTerraceNote =
  "Sobald das Wetter es zulässt, frühstücken Sie auf unserer Terrasse mit Aussicht ins Renchtal.";
