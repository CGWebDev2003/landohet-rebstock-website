import type { Metadata } from "next";
import styles from "./preise.module.css";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section, SectionHeader } from "@/components/Section/Section";
import { Card } from "@/components/Card/Card";
import { Button } from "@/components/Button/Button";
import { CheckList } from "@/components/CheckList/CheckList";
import { hotelNav } from "@/content/nav";
import { priceRows, priceNotes, includedInPrice } from "@/content/prices";
import { bookingUrl, bookingIsExternal, directBookingNote } from "@/content/booking";

export const metadata: Metadata = {
  title: "Preise",
  description:
    "Übernachtungspreise pro Person und Nacht inklusive Frühstücksbuffet und MwSt. Ab 4 Nächten 3 % Rabatt, KONUS-Gästekarte und Parken inklusive. Kurtaxe 2 € pro Person/Nacht.",
};

export default function PreisePage(): React.ReactElement {
  return (
    <>
      <PageHeader
        eyebrow="Hotel"
        title="Preise & Leistungen"
        lead="Alle Preise verstehen sich pro Person und Nacht (sofern nicht anders angegeben), inklusive reichhaltigem Frühstücksbuffet und Mehrwertsteuer."
        subnav={hotelNav}
        activePath="/hotel/preise"
      />

      <Section>
        <SectionHeader eyebrow="Übernachtung" title="Unsere Zimmerpreise" />

        {/* Preistabelle — auf kleinen Screens horizontal scrollbar */}
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Kategorie</th>
                <th>Belegung</th>
                <th className={styles.priceCol}>Preis</th>
              </tr>
            </thead>
            <tbody>
              {priceRows.map((row, i) => (
                <tr key={`${row.category}-${i}`}>
                  <td>
                    <span className={styles.cat}>{row.category}</span>
                    {row.note ? <span className={styles.note}>{row.note}</span> : null}
                  </td>
                  <td className={styles.occ}>{row.occupancy}</td>
                  <td className={styles.priceCol}>
                    <strong>{row.price}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.notesGrid}>
          {priceNotes.map((n) => (
            <div key={n.label} className={styles.noteCard}>
              <span className={styles.noteLabel}>{n.label}</span>
              <span className={styles.noteValue}>{n.value}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="card" width="wide">
        <div className={styles.included}>
          <div>
            <SectionHeader
              eyebrow="Immer inklusive"
              title="Das ist im Preis enthalten"
            />
            <CheckList items={includedInPrice} />
          </div>
          <Card variant="forest" className={styles.directCard}>
            <h3 className={styles.directTitle}>Direkt buchen lohnt sich</h3>
            <p className={styles.directText}>{directBookingNote}</p>
            <Button href={bookingUrl} external={bookingIsExternal} variant="primary" icon="arrowRight">
              Jetzt direkt buchen
            </Button>
            <p className={styles.directHint}>
              Buchbar sind Zimmerkategorien, nicht einzelne Zimmernummern oder Etagen.
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
