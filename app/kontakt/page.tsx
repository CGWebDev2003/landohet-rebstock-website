import type { Metadata } from "next";
import styles from "./kontakt.module.css";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section, SectionHeader } from "@/components/Section/Section";
import { Card } from "@/components/Card/Card";
import { Button } from "@/components/Button/Button";
import { Placeholder } from "@/components/Placeholder/Placeholder";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { Icon } from "@/components/Icon/Icon";
import { site, emailHref } from "@/content/site";
import { bookingUrl, bookingIsExternal, directBookingNote } from "@/content/booking";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt",
  description:
    "Landhotel Rebstock, Meisenbühl 19, 77704 Oberkirch/Bottenau. Telefon +49 7802 3047. Kontaktformular, Anfahrt und Lage zwischen Rheinebene und Schwarzwald.",
};

export default function KontaktPage(): React.ReactElement {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Schreiben Sie uns"
        lead="Ob Zimmeranfrage, Feier oder Gruppenreise — wir freuen uns auf Ihre Nachricht. Am schnellsten erreichen Sie uns telefonisch."
      />

      <Section>
        <div className={styles.layout}>
          {/* Kontaktdaten */}
          <aside className={styles.info}>
            <Card className={styles.infoCard}>
              <h2 className={styles.infoTitle}>{site.name}</h2>
              <address className={styles.address}>
                {site.street}
                <br />
                {site.zip} {site.city}
              </address>

              <ul className={styles.contactList}>
                <li>
                  <a href={site.phoneHref} className={styles.contactRow}>
                    <span className={styles.contactIcon}>
                      <Icon name="phone" />
                    </span>
                    <span>
                      <span className={styles.contactLabel}>Telefon</span>
                      <span className={styles.contactValue}>{site.phone}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={emailHref} className={styles.contactRow}>
                    <span className={styles.contactIcon}>
                      <Icon name="mail" />
                    </span>
                    <span>
                      <span className={styles.contactLabel}>E-Mail</span>
                      <span className={styles.contactValue}>{site.email}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <div className={styles.contactRow}>
                    <span className={styles.contactIcon}>
                      <Icon name="clock" />
                    </span>
                    <span>
                      <span className={styles.contactLabel}>Fax</span>
                      <span className={styles.contactValue}>{site.fax}</span>
                    </span>
                  </div>
                </li>
              </ul>

              <Button href={bookingUrl} external={bookingIsExternal} variant="primary" icon="arrowRight">
                Direkt buchen
              </Button>
              <p className={styles.bookNote}>{directBookingNote}</p>
            </Card>
          </aside>

          {/* Formular */}
          <div className={styles.formWrap}>
            <SectionHeader eyebrow="Nachricht" title="Ihre Anfrage" />
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Anfahrt */}
      <Section variant="card" width="wide">
        <SectionHeader
          eyebrow="Anfahrt"
          title="So finden Sie zu uns"
          text="Ruhig gelegen im Winzerdorf Bottenau, abseits vom Durchgangsverkehr — zwischen Rheinebene und den Rebhängen am Fuß des Schwarzwalds."
        />
        <div className={styles.mapLayout}>
          <div className={styles.mapMedia}>
            {/* TODO: Statische Karte / eingebettete Karte einsetzen (z. B. OpenStreetMap-Statik oder Karten-Provider mit Consent). */}
            <Placeholder
              label={`Lageplan: ${site.street}, ${site.zip} ${site.city}`}
              ratio="16/10"
              rounded="lg"
            />
          </div>
          <div className={styles.mapInfo}>
            <div className={styles.directions}>
              <h3 className={styles.directionsTitle}>Mit dem Auto</h3>
              <p>
                Über die A5 (Ausfahrt Appenweier/Oberkirch) ins Renchtal, weiter nach
                Bottenau. Kostenfreie Parkplätze und eine E-Auto-Ladestation finden Sie
                direkt am Haus.
              </p>
            </div>
            <div className={styles.directions}>
              <h3 className={styles.directionsTitle}>Mit Bus & Bahn</h3>
              <p>
                Bahnhof Oberkirch, von dort weiter mit dem Bus nach Bottenau. Mit der
                KONUS-Gästekarte nutzen Sie Bus und Bahn im Schwarzwald kostenlos.
              </p>
            </div>
            <Button
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${site.name} ${site.street} ${site.zip} Oberkirch`,
              )}`}
              external
              variant="ghost"
              icon="mapPin"
            >
              In Karten öffnen
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
