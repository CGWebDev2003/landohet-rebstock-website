import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { Prose } from "@/components/Prose/Prose";
import { site, emailHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum des Landhotel Rebstock nach § 5 TMG.",
  robots: { index: true, follow: false },
};

export default function ImpressumPage(): React.ReactElement {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Impressum" />
      <Section width="narrow">
        <Prose>
          <p>Angaben gemäß § 5 TMG</p>

          <h2>{site.name}</h2>
          <p>
            Inhaber: {site.owner}
            <br />
            {site.street}
            <br />
            {site.zip} {site.city}
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: <a href={site.phoneHref}>{site.phone}</a>
            <br />
            E-Mail: <a href={emailHref}>{site.email}</a>
          </p>

          <h2>Umsatzsteuer / Steuernummer</h2>
          <p>Steuernummer: {site.taxId}</p>

          <h2>Zuständige Aufsichtsbehörde</h2>
          <p>
            {site.authority.name}
            <br />
            {site.authority.street}
            <br />
            {site.authority.zipCity}
          </p>

          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            {site.owner}
            <br />
            {site.street}
            <br />
            {site.zip} {site.city}
          </p>

          <h2>Verbraucherstreitbeilegung</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
            einer Verbraucherschlichtungsstelle teilzunehmen. Die Europäische Kommission
            stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              ec.europa.eu/consumers/odr
            </a>
            .
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
            diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
            TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
            forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h2>Bildnachweise</h2>
          <p>
            {/* TODO: Bildnachweise ergänzen, sobald finale Fotos eingesetzt sind. */}
            Die Bildnachweise werden ergänzt, sobald die finalen Fotografien eingebunden
            sind.
          </p>
        </Prose>
      </Section>
    </>
  );
}
