import type { Metadata } from "next";
import styles from "./hotel.module.css";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section, SectionHeader } from "@/components/Section/Section";
import { Card } from "@/components/Card/Card";
import { Button } from "@/components/Button/Button";
import { Placeholder } from "@/components/Placeholder/Placeholder";
import { SplitBlock } from "@/components/SplitBlock/SplitBlock";
import { CheckList } from "@/components/CheckList/CheckList";
import { IconTile, IconTileGrid } from "@/components/IconTile/IconTile";
import { Icon } from "@/components/Icon/Icon";
import { hotelNav } from "@/content/nav";
import { roomAmenities, includedServices } from "@/content/hotel";

export const metadata: Metadata = {
  title: "Das Hotel",
  description:
    "Zwölf Zimmer mit Balkon und Talblick, regionales Frühstück und ruhige Lage: Alles Wissenswerte zum Landhotel Rebstock in Bottenau auf einen Blick.",
};

const overviewLinks = [
  { href: "/hotel/zimmer", icon: "key", title: "Zimmer", text: "12 Zimmer mit Balkon, alle per Lift erreichbar." },
  { href: "/hotel/preise", icon: "wallet", title: "Preise", text: "Übernachtung inkl. Frühstücksbuffet und MwSt." },
  { href: "/hotel/fruehstueck", icon: "breakfast", title: "Frühstück", text: "Buffet mit regionalen Produkten und Terrassenblick." },
  { href: "/hotel/arrangements", icon: "calendar", title: "Arrangements", text: "Sparwoche & individuelle Familienangebote." },
  { href: "/hotel/gruppen", icon: "users", title: "Gruppen", text: "Viel Platz zum Parken — auch für Busse." },
  { href: "/hotel/wissenswertes", icon: "mapPin", title: "Wissenswertes", text: "An- und Abreise, Zahlung, Kurtaxe, Hunde." },
] as const;

export default function HotelPage(): React.ReactElement {
  return (
    <>
      <PageHeader
        eyebrow="Das Hotel"
        title="Ihr Zuhause zwischen Reben und Wald"
        lead="Der Rebstock ist ein familiengeführtes Bed-&-Breakfast-Hotel mit zwölf Zimmern — ruhig gelegen im Winzerdorf Bottenau, abseits vom Durchgangsverkehr und doch mitten in der Ortenau."
        subnav={hotelNav}
        activePath="/hotel"
      />

      <Section>
        <SplitBlock
          media={
            <Placeholder
              label="Blick vom Balkon eines Zimmers ins Renchtal und in den Schwarzwald"
              ratio="4/3"
              rounded="lg"
            />
          }
        >
          <SectionHeader
            eyebrow="Willkommen"
            title="Ankommen und durchatmen"
          />
          <p className={styles.lead}>
            Zwischen Rheinebene und den Rebhängen am Fuß des Schwarzwalds heißt Sie
            Familie Noack persönlich willkommen. Unsere Zimmer bieten Blick ins
            Renchtal und in den Schwarzwald — und die Ruhe, die ein Ort abseits der
            großen Straßen mit sich bringt.
          </p>
          <p className={styles.muted}>
            Wir sind ein reines Bed-&-Breakfast-Haus und führen kein Restaurant. Für
            Getränke ist bei uns aber bestens gesorgt — auf ein Gläschen Badischen
            Wein sind Sie herzlich eingeladen.
          </p>
          <div className={styles.actions}>
            <Button href="/hotel/zimmer" icon="arrowRight">
              Zimmer entdecken
            </Button>
            <Button href="/kontakt" variant="ghost">
              Kontakt & Anfahrt
            </Button>
          </div>
        </SplitBlock>
      </Section>

      <Section variant="card" width="wide">
        <SectionHeader
          eyebrow="Ausstattung"
          title="Alle Zimmer, alle gleich gut ausgestattet"
          text="Unabhängig von der Kategorie gehört diese Ausstattung bei jedem unserer zwölf Zimmer dazu."
        />
        <CheckList items={roomAmenities.map((a) => a.label)} columns={2} />
      </Section>

      <Section>
        <SectionHeader eyebrow="Überblick" title="Alles zum Hotel im Detail" />
        <div className={styles.linkGrid}>
          {overviewLinks.map((l) => (
            <Card key={l.href} as="article" variant="outline" className={styles.linkCard}>
              <span className={styles.linkIcon}>
                <Icon name={l.icon} />
              </span>
              <h3 className={styles.linkTitle}>{l.title}</h3>
              <p className={styles.linkText}>{l.text}</p>
              <Button href={l.href} variant="ghost" icon="arrowRight" className={styles.linkBtn}>
                Mehr erfahren
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section variant="forest" width="wide">
        <SectionHeader eyebrow="Inklusive" title="Vieles ist schon dabei" />
        <IconTileGrid columns={3}>
          {includedServices.map((s) => (
            <IconTile key={s.title} icon={s.icon} title={s.title} text={s.text} highlight={s.highlight} />
          ))}
        </IconTileGrid>
      </Section>
    </>
  );
}
