import { readdirSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { Gallery, type GalleryItem } from "@/components/Gallery/Gallery";

export const metadata: Metadata = {
  title: "Impressionen",
  description:
    "Bildergalerie des Landhotel Rebstock: Zimmer mit Balkon, Frühstück auf der Terrasse, Kastaniengarten und Ausblicke ins Renchtal und den Schwarzwald.",
};

const IMAGE_DIR = "impressionen";
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const RATIOS = ["3/2", "4/3", "1/1", "16/10", "3/4"] as const;

function labelFromFilename(filename: string): string {
  const withoutExt = filename.replace(/\.[^.]+$/, "");
  const withoutPrefix = withoutExt.replace(/^\d+-/, "").replace(/[_-]\d+$/, "");
  const words = withoutPrefix.replace(/[_-]+/g, " ").trim();
  if (!words) return "Impression";
  return words
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function getImpressions(): readonly GalleryItem[] {
  const dir = path.join(process.cwd(), "public", IMAGE_DIR);
  const files = readdirSync(dir)
    .filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()))
    .sort();

  return files.map((file, i) => ({
    src: `/${IMAGE_DIR}/${file}`,
    label: labelFromFilename(file),
    ratio: RATIOS[i % RATIOS.length],
  }));
}

export default function ImpressionenPage(): React.ReactElement {
  const impressions = getImpressions();
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
