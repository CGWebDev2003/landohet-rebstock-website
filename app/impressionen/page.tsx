import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { Gallery, type GalleryItem } from "@/components/Gallery/Gallery";

export const metadata: Metadata = {
  title: "Impressionen",
  description:
    "Bildergalerie des Landhotel Rebstock: Zimmer mit Balkon, Frühstück auf der Terrasse, Kastaniengarten und Ausblicke ins Renchtal und den Schwarzwald.",
};

/**
 * BILDER-TODO: Diese Liste beschreibt die geplanten Galeriemotive. Sobald echte
 * Fotos vorliegen, hier Bildpfade ergänzen und die Placeholder in der Gallery
 * durch next/image ersetzen.
 */
const impressions: readonly GalleryItem[] = [
  { label: "Landhotel Rebstock im Abendlicht", ratio: "3/2" },
  { label: "Doppelzimmer mit Balkon und Talblick", ratio: "4/3" },
  { label: "Frühstücksbuffet mit regionalen Produkten", ratio: "1/1" },
  { label: "Blick von der Terrasse ins Renchtal", ratio: "16/10" },
  { label: "Kastaniengarten im Sommer", ratio: "3/4" },
  { label: "Rebhänge rund um Bottenau", ratio: "3/2" },
  { label: "Panoramaterrasse bei Sonnenuntergang", ratio: "4/3" },
  { label: "Fürsteneckraum festlich gedeckt", ratio: "3/2" },
  { label: "Wanderweg am Ortenauer Weinpfad", ratio: "3/4" },
  { label: "Hochzeitsauto vor dem Haus", ratio: "16/10" },
  { label: "Spielwiese für Kinder", ratio: "1/1" },
  { label: "Winterstimmung über den Reben", ratio: "4/3" },
];

export default function ImpressionenPage(): React.ReactElement {
  return (
    <>
      <PageHeader
        eyebrow="Impressionen"
        title="Ein Blick zu uns"
        lead="Zimmer, Terrasse, Garten und die Landschaft ringsum — klicken Sie sich durch unsere Eindrücke aus dem Rebstock und der Region."
      />
      <Section>
        <Gallery items={impressions} />
      </Section>
    </>
  );
}
