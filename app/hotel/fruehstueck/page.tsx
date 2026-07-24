import type { Metadata } from "next";
import styles from "./fruehstueck.module.css";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section, SectionHeader } from "@/components/Section/Section";
import { Card } from "@/components/Card/Card";
import { Placeholder } from "@/components/Placeholder/Placeholder";
import { SplitBlock } from "@/components/SplitBlock/SplitBlock";
import { CheckList } from "@/components/CheckList/CheckList";
import { Icon } from "@/components/Icon/Icon";
import { hotelNav } from "@/content/nav";
import {
  breakfastIntro,
  breakfastItems,
  breakfastTimes,
  breakfastTerraceNote,
} from "@/content/breakfast";

export const metadata: Metadata = {
  title: "Frühstück",
  description:
    "Frühstücksbuffet mit hausgemachten Marmeladen, Honig vom Imker, frischen Eiern vom Dorf und regionalem Schinken, Wurst und Käse. Bei schönem Wetter mit Terrassenblick.",
};

export default function FruehstueckPage(): React.ReactElement {
  return (
    <>
      <PageHeader
        eyebrow="Hotel"
        title="Frühstück mit Aussicht"
        lead={breakfastIntro}
        subnav={hotelNav}
        activePath="/hotel/fruehstueck"
      />

      <Section>
        <SplitBlock
          mediaSide="right"
          media={
            <Placeholder
              label="Frühstücksbuffet mit Brötchen, Marmeladen, Obst und Kaffee"
              ratio="4/3"
              rounded="lg"
            />
          }
        >
          <SectionHeader eyebrow="Vom Buffet" title="Aus der Region auf den Tisch" />
          <p className={styles.muted}>
            Vieles kommt bei uns aus der unmittelbaren Nachbarschaft — vom Honig des
            Imkers bis zu den Eiern aus dem Dorf. So schmeckt der Morgen nach
            Schwarzwald.
          </p>
          <CheckList items={breakfastItems} columns={2} icon="check" />
        </SplitBlock>
      </Section>

      <Section variant="card" width="wide">
        <div className={styles.timesLayout}>
          <div>
            <SectionHeader eyebrow="Frühstückszeiten" title="Wann Sie zu uns kommen können" />
            <ul className={styles.times}>
              {breakfastTimes.map((t) => (
                <li key={t.label} className={styles.timeRow}>
                  <span className={styles.timeLabel}>
                    <Icon name="clock" className={styles.timeIcon} />
                    {t.label}
                  </span>
                  <span className={styles.timeValue}>{t.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card variant="sand" className={styles.terraceCard}>
            <Icon name="sun" className={styles.terraceIcon} />
            <h3 className={styles.terraceTitle}>Terrassenfrühstück</h3>
            <p className={styles.terraceText}>{breakfastTerraceNote}</p>
          </Card>
        </div>
      </Section>
    </>
  );
}
