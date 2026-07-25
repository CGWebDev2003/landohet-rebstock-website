import type { Metadata } from "next";
import Image from "next/image";
import styles from "./region.module.css";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section, SectionHeader } from "@/components/Section/Section";
import { Card } from "@/components/Card/Card";
import { Placeholder } from "@/components/Placeholder/Placeholder";
import { DownloadLink } from "@/components/DownloadLink/DownloadLink";
import { Icon } from "@/components/Icon/Icon";
import { activities, destinations, regionPdf } from "@/content/region";

export const metadata: Metadata = {
  title: "Region",
  description:
    "450 km Wanderwege und über 500 km MTB-Strecken direkt am Rebstock. Ausflugsziele von Straßburg über die Schwarzwaldhochstraße bis zum Europa-Park Rust.",
};

export default function RegionPage(): React.ReactElement {
  return (
    <>
      <PageHeader
        eyebrow="Region"
        title="Schwarzwald & Ortenau vor der Tür"
        lead="Der Rebstock liegt mitten in einer der schönsten Wander- und Radregionen Deutschlands. Viele Touren starten direkt bei uns am Haus."
      />

      {/* Aktivitäten */}
      <Section>
        <div className={styles.activities}>
          {activities.map((a) => (
            <Card key={a.title} as="article" className={styles.actCard}>
              <div className={styles.actHead}>
                <span className={styles.actIcon}>
                  <Icon name={a.icon} />
                </span>
                <div>
                  <p className={styles.actStat}>{a.stat}</p>
                  <p className={styles.actStatLabel}>{a.statLabel}</p>
                </div>
              </div>
              <h2 className={styles.actTitle}>{a.title}</h2>
              <p className={styles.actIntro}>{a.intro}</p>
              <div className={styles.tip}>
                <p className={styles.tipTitle}>
                  <Icon name="star" className={styles.tipStar} />
                  {a.tipTitle}
                </p>
                <p className={styles.tipText}>{a.tip}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className={styles.download}>
          <DownloadLink label={regionPdf.label} href={regionPdf.href} />
        </div>
      </Section>

      {/* Ausflugsziele */}
      <Section variant="card" width="wide">
        <SectionHeader
          eyebrow="Ausflugsziele"
          title="Lohnende Ziele rund um Bottenau"
          text="Von der nahen Schauenburg bis zum Europa-Park — die Ortenau und ihre Nachbarschaft haben viel zu bieten."
        />
        <div className={styles.destGrid}>
          {destinations.map((d) => (
            <article key={d.name} className={styles.destCard}>
              <div className={styles.destMedia}>
                {d.image ? (
                  <div className={styles.destImageWrap}>
                    <Image
                      src={d.image}
                      alt={d.name}
                      fill
                      sizes="(min-width: 960px) 33vw, (min-width: 560px) 50vw, 100vw"
                      className={styles.destImage}
                    />
                  </div>
                ) : (
                  <Placeholder label={d.name} ratio="3/2" rounded="md" />
                )}
              </div>
              <div className={styles.destBody}>
                <div className={styles.destTitleRow}>
                  <h3 className={styles.destName}>{d.name}</h3>
                  {d.distance ? <span className={styles.destDist}>{d.distance}</span> : null}
                </div>
                <p className={styles.destText}>{d.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
