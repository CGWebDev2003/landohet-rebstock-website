import type { Metadata } from "next";
import styles from "./zimmer.module.css";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { Button } from "@/components/Button/Button";
import { Placeholder } from "@/components/Placeholder/Placeholder";
import { SplitBlock } from "@/components/SplitBlock/SplitBlock";
import { CheckList } from "@/components/CheckList/CheckList";
import { Icon } from "@/components/Icon/Icon";
import { hotelNav } from "@/content/nav";
import { rooms } from "@/content/rooms";
import { bookingUrl, bookingIsExternal } from "@/content/booking";

export const metadata: Metadata = {
  title: "Zimmer",
  description:
    "Doppelzimmer, Dreibettzimmer, Familienzimmer und XL-Familienzimmer — alle mit Balkon oder Blick ins Renchtal, ausgestattet mit allem Komfort. Familienzimmer mit getrennten Schlafräumen.",
};

export default function ZimmerPage(): React.ReactElement {
  return (
    <>
      <PageHeader
        eyebrow="Hotel"
        title="Unsere Zimmer"
        lead="Zwölf Zimmer, alle mit Dusche/WC, TV, Telefon, Föhn, Kühlschrank, Tresor und Radiowecker — bequem per Lift erreichbar. Vom gemütlichen Doppelzimmer bis zum XL-Familienzimmer für sechs Personen."
        subnav={hotelNav}
        activePath="/hotel/zimmer"
      />

      <Section>
        <div className={styles.rooms}>
          {rooms.map((room, i) => (
            <SplitBlock
              key={room.slug}
              mediaSide={i % 2 === 0 ? "left" : "right"}
              media={
                <Placeholder
                  label={`${room.name} — ${room.description}`}
                  ratio={room.ratio}
                  rounded="lg"
                />
              }
            >
              <div className={styles.head}>
                <span className={styles.badge}>
                  <Icon name={room.balcony ? "balcony" : "family"} />
                  {room.persons}
                </span>
                {room.balcony ? (
                  <span className={styles.tag}>Mit Balkon</span>
                ) : (
                  <span className={styles.tag}>Getrennte Schlafräume</span>
                )}
              </div>
              <h2 className={styles.name}>{room.name}</h2>
              <p className={styles.price}>
                <strong>{room.priceFrom}</strong> {room.priceUnit}
              </p>
              <p className={styles.desc}>{room.description}</p>
              <CheckList items={room.details} />
              <div className={styles.actions}>
                <Button href={bookingUrl} external={bookingIsExternal} icon="arrowRight">
                  Verfügbarkeit anfragen
                </Button>
                <Button href="/hotel/preise" variant="ghost">
                  Alle Preise
                </Button>
              </div>
            </SplitBlock>
          ))}
        </div>
      </Section>

      <Section variant="card" width="narrow" className={styles.noteSection}>
        <h2 className={styles.noteTitle}>Familien & Gutscheine</h2>
        <p className={styles.noteText}>
          Für Kinder gewähren wir eine Ermäßigung — sprechen Sie uns einfach an.
          Unsere Familienzimmer bestehen aus zwei getrennten Schlafzimmern mit
          gemeinsamem Bad, sodass Eltern und Kinder ihren eigenen Rückzugsort haben.
          Gutscheine stellen wir Ihnen gerne auf Anfrage aus.
        </p>
        <div className={styles.actions}>
          <Button href="/kontakt" variant="secondary" icon="mail">
            Gutschein anfragen
          </Button>
        </div>
      </Section>
    </>
  );
}
