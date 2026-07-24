import type { Metadata } from "next";
import styles from "./datenschutz.module.css";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { Prose } from "@/components/Prose/Prose";
import { site, emailHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung des Landhotel Rebstock.",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage(): React.ReactElement {
  return (
    <>
      <PageHeader
        eyebrow="Rechtliches"
        title="Datenschutz"
        lead="Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Seite ist als Gerüst angelegt — der finale, rechtlich geprüfte Text wird vom Betreiber ergänzt."
      />

      <Section width="narrow">
        {/* TODO: Diesen Platzhalter durch die vom Kunden gelieferte, rechtlich
            geprüfte Datenschutzerklärung ersetzen. Struktur unten dient nur als
            Gerüst und ist keine Rechtsberatung. */}
        <div className={styles.todo} role="note">
          <strong>Hinweis (intern):</strong> Der Datenschutztext wird vom Kunden
          geliefert und muss hier eingesetzt werden. Die folgende Gliederung ist ein
          unverbindliches Gerüst.
        </div>

        <Prose>
          <h2>1. Verantwortlicher</h2>
          <p>
            {site.name}, {site.owner}
            <br />
            {site.street}, {site.zip} {site.city}
            <br />
            Telefon: <a href={site.phoneHref}>{site.phone}</a> · E-Mail:{" "}
            <a href={emailHref}>{site.email}</a>
          </p>

          <h2>2. Allgemeines zur Datenverarbeitung</h2>
          <p>
            {/* TODO: Umfang, Zweck und Rechtsgrundlage der Verarbeitung beschreiben. */}
            Platzhalter — Umfang, Zweck und Rechtsgrundlagen der Verarbeitung
            personenbezogener Daten werden hier beschrieben.
          </p>

          <h2>3. Bereitstellung der Website und Server-Logfiles</h2>
          <p>Platzhalter — Beschreibung der Server-Logfiles und deren Speicherdauer.</p>

          <h2>4. Kontaktformular und Anfragen per E-Mail</h2>
          <p>
            Platzhalter — Verarbeitung der über das Kontaktformular übermittelten Daten.
            {/* TODO: An die tatsächliche Backend-Anbindung des Formulars anpassen. */}
          </p>

          <h2>5. Buchungsanfragen</h2>
          <p>Platzhalter — Datenverarbeitung im Rahmen von Reservierungen und Buchungen.</p>

          <h2>6. Ihre Rechte als betroffene Person</h2>
          <p>
            Platzhalter — Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch,
            Datenübertragbarkeit sowie Beschwerderecht bei einer Aufsichtsbehörde.
          </p>

          <h2>7. Cookies und Reichweitenmessung</h2>
          <p>Platzhalter — sofern Cookies oder Analysedienste eingesetzt werden.</p>
        </Prose>
      </Section>
    </>
  );
}
