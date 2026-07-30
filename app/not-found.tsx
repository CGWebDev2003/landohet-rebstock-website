import styles from "./not-found.module.css";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section, SectionHeader } from "@/components/Section/Section";
import { Card } from "@/components/Card/Card";
import { Button } from "@/components/Button/Button";
import { Icon } from "@/components/Icon/Icon";
import { site, emailHref } from "@/content/site";

/** Die Bereiche der Hauptnavigation, kurz erklärt. */
const suggestions = [
  {
    href: "/hotel",
    icon: "key",
    title: "Das Hotel",
    text: "Zimmer, Preise, Frühstück und alles Wissenswerte zur Anreise.",
  },
  {
    href: "/feiern",
    icon: "wedding",
    title: "Feiern",
    text: "Hochzeiten, Familienfeste und Tagungen für 20 bis 100 Gäste.",
  },
  {
    href: "/region",
    icon: "mountain",
    title: "Region",
    text: "Wandern, Radfahren und die schönsten Ziele der Ortenau.",
  },
  {
    href: "/impressionen",
    icon: "star",
    title: "Impressionen",
    text: "Bilder vom Haus, den Zimmern und der Landschaft ringsum.",
  },
  {
    href: "/kontakt",
    icon: "mail",
    title: "Kontakt & Anfahrt",
    text: "Anfrage schreiben oder direkt zu uns nach Bottenau finden.",
  },
] as const;

/**
 * Globale 404-Seite. Next.js rendert sie für alle unbekannten Pfade sowie für
 * `notFound()`-Aufrufe. Sie liegt innerhalb des Root-Layouts, Header und Footer
 * bleiben also wie auf allen anderen Seiten erhalten.
 *
 * Hinweis: `not-found.tsx` ist keine Page — ein `metadata`-Export wird hier
 * nicht ausgewertet (das kann nur `global-not-found`). Es gilt der Standardtitel
 * aus dem Root-Layout; Next.js setzt für 404-Antworten automatisch `noindex`.
 */
export default function NotFound(): React.ReactElement {
  return (
    <>
      <PageHeader
        eyebrow="Fehler 404"
        title="Diese Seite haben wir leider nicht gefunden"
        lead="Vielleicht wurde die Seite umbenannt oder es hat sich ein Tippfehler in die Adresse geschlichen. Von hier aus finden Sie schnell zurück — oder Sie rufen uns einfach an."
        actions={
          <>
            <Button href="/" icon="arrowRight">
              Zur Startseite
            </Button>
            <Button href={site.phoneHref} external variant="ghost" icon="phone">
              {site.phone}
            </Button>
          </>
        }
      />

      <Section variant="card" width="wide">
        <SectionHeader
          eyebrow="Weiter zu"
          title="Vielleicht suchen Sie das hier"
          text="Die wichtigsten Bereiche des Landhotel Rebstock auf einen Blick."
        />
        <div className={styles.linkGrid}>
          {suggestions.map((s) => (
            <Card key={s.href} as="article" variant="outline" className={styles.linkCard}>
              <span className={styles.linkIcon}>
                <Icon name={s.icon} />
              </span>
              <h3 className={styles.linkTitle}>{s.title}</h3>
              <p className={styles.linkText}>{s.text}</p>
              <Button href={s.href} variant="ghost" icon="arrowRight" className={styles.linkBtn}>
                Ansehen
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section variant="forest" width="narrow" className={styles.help}>
        <p className={styles.helpEyebrow}>Wir helfen weiter</p>
        <h2 className={styles.helpTitle}>Lieber persönlich?</h2>
        <p className={styles.helpText}>
          Rufen Sie uns an oder schreiben Sie uns eine kurze Nachricht — wir sagen
          Ihnen gern, wo Sie finden, was Sie suchen.
        </p>
        <div className={styles.helpActions}>
          <Button href={site.phoneHref} external size="lg" icon="phone">
            {site.phone}
          </Button>
          <Button
            href={emailHref}
            external
            variant="ghost"
            size="lg"
            icon="mail"
            className={styles.helpGhost}
          >
            {site.email}
          </Button>
        </div>
      </Section>
    </>
  );
}
