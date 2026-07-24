import type { Metadata } from "next";
import styles from "./feiern.module.css";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section, SectionHeader } from "@/components/Section/Section";
import { Card } from "@/components/Card/Card";
import { Button } from "@/components/Button/Button";
import { Placeholder } from "@/components/Placeholder/Placeholder";
import { SplitBlock } from "@/components/SplitBlock/SplitBlock";
import { DownloadLink } from "@/components/DownloadLink/DownloadLink";
import { Icon } from "@/components/Icon/Icon";
import {
  feiernIntro,
  eventRooms,
  eventOccasions,
  feiernForKids,
  weddingCars,
  weddingCarNote,
  menuPdf,
} from "@/content/feiern";

export const metadata: Metadata = {
  title: "Feste feiern",
  description:
    "Hochzeiten, Taufen, Tagungen und Feiern für 20 bis 100 Gäste im Landhotel Rebstock. Ofenstüble, Fürsteneckzimmer, Sektempfang im Kastaniengarten und historische Hochzeitsautos.",
};

export default function FeiernPage(): React.ReactElement {
  return (
    <>
      <PageHeader eyebrow="Feiern" title="Feste feiern im Rebstock" lead={feiernIntro} />

      {/* Räume */}
      <Section>
        <SectionHeader
          eyebrow="Unsere Räume"
          title="Platz für 20 bis 100 Gäste"
          text="Vom gemütlichen Ofenstüble bis zum großen Saal — wir haben den passenden Rahmen für Ihre Feier."
        />
        <div className={styles.roomGrid}>
          {eventRooms.map((r) => (
            <article
              key={r.name}
              className={`${styles.roomCard} ${r.highlight ? styles.highlight : ""}`}
            >
              <span className={styles.roomIcon}>
                <Icon name={r.icon} />
              </span>
              <p className={styles.capacity}>{r.capacity}</p>
              <h3 className={styles.roomName}>{r.name}</h3>
              <p className={styles.roomText}>{r.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Anlässe */}
      <Section variant="card" width="wide">
        <SectionHeader
          eyebrow="Für jeden Anlass"
          title="Vom Sektempfang bis zur Hochzeitstafel"
          align="center"
        />
        <div className={styles.occGrid}>
          {eventOccasions.map((o) => (
            <div key={o.title} className={styles.occ}>
              <span className={styles.occIcon}>
                <Icon name={o.icon} />
              </span>
              <h3 className={styles.occTitle}>{o.title}</h3>
              <p className={styles.occText}>{o.text}</p>
            </div>
          ))}
        </div>
        <Card variant="forest" className={styles.kidsCard}>
          <Icon name="family" className={styles.kidsIcon} />
          <p className={styles.kidsText}>{feiernForKids}</p>
        </Card>
      </Section>

      {/* Menü-Download */}
      <Section>
        <SplitBlock
          mediaSide="right"
          media={
            <Placeholder
              label="Festlich angerichteter Teller mit begleitendem Badischen Wein"
              ratio="4/3"
              rounded="lg"
            />
          }
        >
          <SectionHeader eyebrow="Kulinarik" title="Menüvorschläge mit begleitenden Weinen" />
          <p className={styles.muted}>
            Für Ihre Feier stellen wir Ihnen gern Menüs mit passenden Weinen zusammen.
            Unsere Vorschläge können Sie hier als PDF herunterladen — die endgültige
            Auswahl stimmen wir persönlich mit Ihnen ab.
          </p>
          <DownloadLink label={menuPdf.label} href={menuPdf.href} />
          <div className={styles.actions}>
            <Button href="/kontakt" variant="secondary" icon="mail">
              Feier anfragen
            </Button>
          </div>
        </SplitBlock>
      </Section>

      {/* Hochzeitsautos */}
      <Section variant="forest" width="wide">
        <SectionHeader
          eyebrow="Standesgemäß vorfahren"
          title="Unsere Hochzeitsautos"
          text={weddingCarNote}
        />
        <div className={styles.carGrid}>
          {weddingCars.map((c) => (
            <article key={c.name} className={styles.carCard}>
              <Placeholder label={`Hochzeitsauto: ${c.name}`} ratio="16/10" rounded="lg" />
              <div className={styles.carBody}>
                <span className={styles.carIcon}>
                  <Icon name="car" />
                </span>
                <h3 className={styles.carName}>{c.name}</h3>
                <p className={styles.carText}>{c.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
