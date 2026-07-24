import type { Metadata } from "next";
import styles from "./wissenswertes.module.css";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { Icon } from "@/components/Icon/Icon";
import { hotelNav } from "@/content/nav";
import { facts } from "@/content/hotel";

export const metadata: Metadata = {
  title: "Wissenswertes",
  description:
    "An- und Abreise, buchbare Zimmerkategorien, Zahlungsarten, Kurtaxe, Hunde und die KONUS-Gästekarte — alles Wichtige rund um Ihren Aufenthalt im Landhotel Rebstock.",
};

export default function WissenswertesPage(): React.ReactElement {
  return (
    <>
      <PageHeader
        eyebrow="Hotel"
        title="Wissenswertes"
        lead="Damit Ihr Aufenthalt reibungslos beginnt: die wichtigsten Informationen rund um An- und Abreise, Zahlung und Aufenthalt."
        subnav={hotelNav}
        activePath="/hotel/wissenswertes"
      />

      <Section>
        <div className={styles.grid}>
          {facts.map((f) => (
            <article key={f.title} className={styles.card}>
              <span className={styles.icon}>
                <Icon name={f.icon} />
              </span>
              <h2 className={styles.title}>{f.title}</h2>
              <p className={styles.text}>{f.text}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
