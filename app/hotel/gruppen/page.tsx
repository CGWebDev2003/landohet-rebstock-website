import type { Metadata } from "next";
import styles from "./gruppen.module.css";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section, SectionHeader } from "@/components/Section/Section";
import { Button } from "@/components/Button/Button";
import { Placeholder } from "@/components/Placeholder/Placeholder";
import { SplitBlock } from "@/components/SplitBlock/SplitBlock";
import { Icon } from "@/components/Icon/Icon";
import { hotelNav } from "@/content/nav";
import { groupsIntro, groupsPoints } from "@/content/arrangements";

export const metadata: Metadata = {
  title: "Gruppen",
  description:
    "Gute Anfahrtsbedingungen und großflächige Parkmöglichkeiten — auch für Busse. Das Landhotel Rebstock ist ein dankbarer Ausgangspunkt für Reisegruppen im Schwarzwald.",
};

export default function GruppenPage(): React.ReactElement {
  return (
    <>
      <PageHeader
        eyebrow="Hotel"
        title="Gruppen & Busreisen"
        lead={groupsIntro}
        subnav={hotelNav}
        activePath="/hotel/gruppen"
      />

      <Section>
        <SplitBlock
          media={
            <Placeholder
              label="Großzügiger Parkplatz am Landhotel Rebstock mit Platz für Reisebusse"
              ratio="4/3"
              rounded="lg"
            />
          }
        >
          <SectionHeader eyebrow="Für Reisegruppen" title="Gut ankommen, bequem parken" />
          <ul className={styles.points}>
            {groupsPoints.map((p) => (
              <li key={p.text} className={styles.point}>
                <span className={styles.icon}>
                  <Icon name={p.icon} />
                </span>
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
          <p className={styles.muted}>
            Sprechen Sie uns an — wir stellen Ihrer Gruppe ein individuelles Angebot
            zusammen, abgestimmt auf Ihre Reiseplanung und die gewünschten Zimmer.
          </p>
          <div className={styles.actions}>
            <Button href="/kontakt" variant="secondary" icon="mail">
              Gruppenangebot anfragen
            </Button>
            <Button href="/feiern" variant="ghost">
              Feiern & Tagungen
            </Button>
          </div>
        </SplitBlock>
      </Section>
    </>
  );
}
