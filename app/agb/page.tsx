import type { Metadata } from "next";
import styles from "./agb.module.css";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { Prose } from "@/components/Prose/Prose";
import { Icon } from "@/components/Icon/Icon";

export const metadata: Metadata = {
  title: "AGB",
  description:
    "Allgemeine Geschäftsbedingungen des Landhotel Rebstock auf Basis der DEHOGA-Empfehlungen, mit Stornobedingungen und Allergenhinweis nach LMIV.",
  robots: { index: true, follow: false },
};

const stornoStaffel = [
  { when: "Bis 3 Tage vor Anreise", fee: "kostenfrei", note: "Gruppen ab 5 Zimmern: bis 1 Woche vor Anreise" },
  { when: "2 Tage vor Anreise", fee: "50 %", note: "der Reisesumme" },
  { when: "1 Tag vorher, am Anreisetag & bei No-Show", fee: "80 %", note: "der Reisesumme" },
] as const;

export default function AgbPage(): React.ReactElement {
  return (
    <>
      <PageHeader
        eyebrow="Rechtliches"
        title="Allgemeine Geschäftsbedingungen"
        lead="Unsere AGB basieren auf den Empfehlungen des DEHOGA. Nachfolgend die wichtigsten Punkte — insbesondere unsere Stornobedingungen."
      />

      {/* Storno prominent hervorgehoben */}
      <Section width="narrow">
        <div className={styles.stornoBox}>
          <div className={styles.stornoHead}>
            <span className={styles.stornoIcon}>
              <Icon name="calendar" />
            </span>
            <h2 className={styles.stornoTitle}>Stornobedingungen im Überblick</h2>
          </div>
          <ul className={styles.stornoList}>
            {stornoStaffel.map((s) => (
              <li key={s.when} className={styles.stornoRow}>
                <span className={styles.stornoWhen}>{s.when}</span>
                <span className={styles.stornoFee}>{s.fee}</span>
                <span className={styles.stornoNote}>{s.note}</span>
              </li>
            ))}
          </ul>
          <p className={styles.stornoHint}>
            Maßgeblich ist der Eingang Ihrer Stornierung bei uns. Wir empfehlen eine
            Stornierung in Textform (E-Mail).
          </p>
        </div>
      </Section>

      <Section width="narrow" className={styles.textSection}>
        <Prose>
          <h2>1. Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für Verträge über die
            mietweise Überlassung von Hotelzimmern zur Beherbergung sowie für alle
            weiteren in diesem Zusammenhang für den Gast erbrachten Leistungen. Sie
            beruhen auf den Empfehlungen des DEHOGA.
          </p>

          <h2>2. Vertragsabschluss</h2>
          <p>
            Der Vertrag kommt durch die Annahme des Antrags des Gastes durch das Hotel
            zustande. Buchbar sind Zimmerkategorien, nicht einzelne Zimmernummern oder
            Etagen.
          </p>

          <h2>3. Leistungen, Preise, Zahlung</h2>
          <p>
            Die vereinbarten Preise verstehen sich inklusive der jeweils geltenden
            Mehrwertsteuer und beinhalten das Frühstücksbuffet. Die Kurtaxe in Höhe von
            2 € pro Person und Nacht (ab 15 Jahren) wird gesondert erhoben; beruflich
            Reisende in Oberkirch sind hiervon befreit. Die Zahlung ist per EC-Karte,
            Kreditkarte oder in bar möglich. Bei Kostenübernahme durch Dritte berechnen
            wir eine Bearbeitungsgebühr von 5 €.
          </p>

          <h2>4. An- und Abreise</h2>
          <p>
            Gebuchte Zimmer stehen dem Gast ab 15:00 Uhr am Anreisetag zur Verfügung.
            Am Abreisetag sind die Zimmer bis 11:00 Uhr zu räumen. Frühere Anreise oder
            spätere Abreise sind nach Absprache möglich.
          </p>

          <h2>5. Rücktritt des Gastes (Stornierung)</h2>
          <p>
            Es gelten die oben aufgeführten Stornobedingungen. Ein kostenfreier Rücktritt
            ist bis 3 Tage vor Anreise möglich (bei Gruppen ab 5 Zimmern bis 1 Woche vor
            Anreise). Bei Rücktritt 2 Tage vor Anreise berechnen wir 50 %, bei Rücktritt
            1 Tag vorher, am Anreisetag sowie bei Nichtanreise (No-Show) 80 % der
            Reisesumme. Ersparte Aufwendungen werden angerechnet.
          </p>

          <h2>6. Haustiere</h2>
          <p>
            Hunde sind nach vorheriger Absprache mit der Rezeption willkommen. Wir
            berechnen 8 € pro Tag (ohne Futter).
          </p>

          <h2>7. Haftung</h2>
          <p>
            Das Hotel haftet für seine Verpflichtungen aus dem Vertrag im Rahmen der
            gesetzlichen Bestimmungen. Für eingebrachte Sachen haftet das Hotel nach den
            gesetzlichen Vorschriften.
          </p>

          <h2>8. Allergenhinweis nach LMIV</h2>
          <p>
            Unser Frühstücksangebot kann Zutaten und Zusatzstoffe enthalten, die
            Allergien oder Unverträglichkeiten auslösen können. Informationen zu
            kennzeichnungspflichtigen Allergenen gemäß der Lebensmittelinformations-
            verordnung (LMIV, EU-VO 1169/2011) erhalten Sie auf Nachfrage direkt bei
            uns. Bitte sprechen Sie uns bei Allergien oder Unverträglichkeiten an.
          </p>

          <h2>9. Schlussbestimmungen</h2>
          <p>
            Änderungen oder Ergänzungen des Vertrags bedürfen der Textform. Sollten
            einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen
            Bestimmungen unberührt.
          </p>
        </Prose>
      </Section>
    </>
  );
}
