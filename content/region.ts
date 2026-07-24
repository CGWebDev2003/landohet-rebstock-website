import type { IconName } from "@/components/Icon/Icon";

export interface RegionActivity {
  readonly icon: IconName;
  readonly title: string;
  readonly stat: string;
  readonly statLabel: string;
  readonly intro: string;
  readonly tipTitle: string;
  readonly tip: string;
}

export const activities: readonly RegionActivity[] = [
  {
    icon: "hiking",
    title: "Wandern",
    stat: "450 km",
    statLabel: "ausgeschilderte Wanderwege",
    intro:
      "Vom Rebstock aus starten Sie direkt hinein in ein dichtes Netz markierter Wanderwege durch Reben und Wald.",
    tipTitle: "Tipp: Rundwanderung um das Bottenauer Tal",
    tip: "13,9 km, Start direkt am Rebstock — vorbei am Geigerskopf-Turm, Schloss Staufenburg, der Burg Fürsteneck und der St.-Wendelin-Kapelle, zurück über den Ortenauer Weinpfad.",
  },
  {
    icon: "bike",
    title: "Radfahren",
    stat: "500+ km",
    statLabel: "ausgeschilderte MTB-Strecken",
    intro:
      "Über 500 km markierte Mountainbike-Strecken mit Höhenunterschieden um 1.000 Meter warten rund ums Renchtal.",
    tipTitle: "Tipp: Runde durch Renchtal, Offenburg und Durbach",
    tip: "Die kürzeste der vier Wettkampfstrecken der Offenburger Worldclass-MTB-Challenge — Start und Ziel am Rebstock.",
  },
];

export interface Destination {
  readonly name: string;
  readonly text: string;
  readonly distance?: string;
}

export const destinations: readonly Destination[] = [
  {
    name: "Oberkirch mit der Schauenburg",
    text: "Fachwerkstädtchen im Renchtal mit malerischer Burgruine über den Reben.",
  },
  {
    name: "Durbach & Schloss Staufenberg",
    text: "Bekanntes Weindorf mit Schloss und weitem Blick in die Rheinebene.",
  },
  {
    name: "Elsass & Straßburg",
    text: "Münster, Gassen und Flair auf der französischen Rheinseite.",
    distance: "ca. 20 km",
  },
  {
    name: "Schwarzwaldhochstraße",
    text: "Panoramastraße zu Mummelsee und Hornisgrinde (1.146 m).",
  },
  {
    name: "Allerheiligen-Wasserfälle",
    text: "Rauschende Kaskaden und Klosterruine bei Oppenau.",
  },
  {
    name: "Maria Krönung, Lautenbach",
    text: "Spätgotische Wallfahrtskirche mit kostbarem Schnitzaltar.",
  },
  {
    name: "Freilichtmuseum Vogtsbauernhof",
    text: "Historische Schwarzwaldhöfe zum Anfassen in Gutach.",
  },
  {
    name: "Baden-Baden",
    text: "Kurstadt mit Thermen, Casino und Festspielhaus.",
  },
  {
    name: "Freudenstadt",
    text: "Größter Marktplatz Deutschlands am Rand des Nordschwarzwalds.",
  },
  {
    name: "Freiburg & Kaiserstuhl",
    text: "Lebendige Universitätsstadt und sonniges Weinbaugebiet.",
  },
  {
    name: "Gengenbach",
    text: "Romantische Altstadt, im Advent der große Adventskalender.",
  },
  {
    name: "Europa-Park Rust",
    text: "Deutschlands größter Freizeitpark mit „World of Living“.",
  },
];

/** Optionaler PDF-Download je Region-Sektion. */
export const regionPdf = {
  label: "Tourenkarte & Ausflugstipps",
  // TODO: PDF-Datei bereitstellen und Pfad eintragen.
  href: null as string | null,
};
