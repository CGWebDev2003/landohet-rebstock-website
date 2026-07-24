import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { Section, SectionHeader } from "@/components/Section/Section";
import { Card } from "@/components/Card/Card";
import { Button } from "@/components/Button/Button";
import { Placeholder } from "@/components/Placeholder/Placeholder";
import { Marquee } from "@/components/Marquee/Marquee";
import { IconTile, IconTileGrid } from "@/components/IconTile/IconTile";
import { Icon } from "@/components/Icon/Icon";
import { HotelJsonLd } from "@/lib/jsonld";
import { site } from "@/content/site";
import { bookingUrl, bookingIsExternal, directBookingNote, phoneHref } from "@/content/booking";
import { homeHighlights, includedServices } from "@/content/hotel";
import { rooms } from "@/content/rooms";
import { activities } from "@/content/region";

export const metadata: Metadata = {
  title: "Bed & Breakfast zwischen Wein und Wald",
  description:
    "Landhotel Rebstock in Oberkirch/Bottenau — familiengeführtes Bed-&-Breakfast am Fuß des Schwarzwalds. Zimmer mit Balkon, herzhaftes Frühstück, ruhige Lage zwischen Reben und Wald.",
  openGraph: {
    title: "Landhotel Rebstock — Bed & Breakfast zwischen Wein und Wald",
    description:
      "Ruhig gelegenes Landhotel im Winzerdorf Bottenau. Zimmer mit Talblick, regionales Frühstück, E-Ladestation und KONUS-Gästekarte inklusive.",
  },
};

export default function Home(): React.ReactElement {
  return (
    <>
      <HotelJsonLd />

      {/* ===== Hero ===== */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroMedia}>
          <Image
            src="/impressionen/01-startseite_3.jpg"
            alt="Landhotel Rebstock im goldenen Abendlicht, umgeben von Reben und Wald"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroScrim} aria-hidden="true" />
        </div>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1 id="hero-title" className={styles.heroTitle}>
              Ankommen, wo Wein und Wald sich begegnen.
            </h1>
            <p className={styles.heroLead}>
              Ein familiengeführtes Bed-&-Breakfast im ruhigen Winzerdorf Bottenau —
              abseits vom Durchgangsverkehr, mit Blick ins Renchtal und in den
              Schwarzwald. Herzlich willkommen bei Familie Noack.
            </p>
            <div className={styles.heroCtas}>
              <Button href={bookingUrl} external={bookingIsExternal} size="lg" icon="arrowRight">
                Direkt buchen
              </Button>
              <Button href={phoneHref} external variant="ghost" size="lg" icon="phone">
                {site.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Positionierung / Highlights ===== */}
      <Section>
        <SectionHeader
          eyebrow="Willkommen"
          title="Ein kleines Haus mit großem Blick"
          text="Zwölf Zimmer, viel Ruhe und die Herzlichkeit einer Familie, die ihr Haus selbst führt. Der Rebstock liegt dort, wo die Rheinebene in die Rebhänge des Schwarzwalds übergeht."
        />
        <IconTileGrid columns={3}>
          {homeHighlights.map((h) => (
            <IconTile
              key={h.title}
              icon={h.icon}
              title={h.title}
              text={h.text}
              highlight={h.highlight}
            />
          ))}
        </IconTileGrid>
      </Section>

      {/* ===== Kein Restaurant, aber Getränke — prominent & positiv ===== */}
      <Section width="wide">
        <Card variant="forest" className={styles.drinksCard}>
          <div className={styles.drinksText}>
            <p className={styles.drinksEyebrow}>Gut zu wissen</p>
            <h2 className={styles.drinksTitle}>
              Kein Restaurantbetrieb — für Ihr Wohl ist trotzdem gesorgt
            </h2>
            <p className={styles.drinksBody}>
              Wir sind ein reines Bed-&-Breakfast-Hotel und führen kein Restaurant.
              Für Getränke ist bei uns aber jederzeit gesorgt: Auf ein kühles Bier,
              einen Saft oder ein Gläschen Badischen Wein aus der Nachbarschaft sind
              Sie herzlich eingeladen. Für Ihr Abendessen empfehlen wir Ihnen gern die
              guten Adressen im Ort.
            </p>
            <div className={styles.drinksActions}>
              <Button href="/hotel/fruehstueck" variant="primary" icon="breakfast">
                Unser Frühstück
              </Button>
              <Link href="/region" className={styles.drinksLink}>
                Tipps für die Region <Icon name="arrowRight" />
              </Link>
            </div>
          </div>
          <div className={styles.drinksMedia}>
            <Image
              src="/impressionen/14-restaurant_1.jpg"
              alt="Gedeckter Tisch mit Badischem Wein und Gläsern im Abendlicht"
              fill
              sizes="(min-width: 860px) 45vw, 100vw"
              className={styles.drinksImage}
            />
          </div>
        </Card>
      </Section>

      {/* ===== Marquee-Brücke ===== */}
      <Marquee
        items={[
          "Ruhe",
          "Aussicht",
          "Regionales Frühstück",
          "Wein & Wald",
          "Familiär geführt",
          "Balkon mit Talblick",
        ]}
      />

      {/* ===== Zimmer-Vorschau (asymmetrisches Grid) ===== */}
      <Section>
        <SectionHeader
          eyebrow="Zimmer"
          title="Zwölf Zimmer, alle mit Balkon und Aussicht"
          text="Jedes Zimmer verfügt über Dusche/WC, Balkon, TV, Telefon, Föhn, Kühlschrank, Tresor und Radiowecker — bequem per Lift erreichbar."
        />
        <div className={styles.roomsGrid}>
          {rooms.slice(0, 4).map((room, i) => (
            <Card
              key={room.slug}
              as="article"
              className={`${styles.roomCard} ${i === 0 ? styles.roomCardWide : ""}`}
            >
              {room.image ? (
                <div
                  className={styles.roomMedia}
                  style={{ aspectRatio: (i === 0 ? "16/10" : "4/3").replace("/", " / ") }}
                >
                  <Image
                    src={room.image}
                    alt={`${room.name} mit Blick ins Renchtal`}
                    fill
                    sizes="(min-width: 720px) 50vw, 100vw"
                    className={styles.roomMediaImg}
                  />
                </div>
              ) : (
                <Placeholder
                  label={`${room.name} mit Blick ins Renchtal`}
                  ratio={i === 0 ? "16/10" : "4/3"}
                  rounded="md"
                />
              )}
              <div className={styles.roomBody}>
                <div className={styles.roomHead}>
                  <h3 className={styles.roomName}>{room.name}</h3>
                  <span className={styles.roomPersons}>{room.persons}</span>
                </div>
                <p className={styles.roomPrice}>
                  <strong>{room.priceFrom}</strong> {room.priceUnit}
                </p>
              </div>
            </Card>
          ))}
        </div>
        <div className={styles.roomsCta}>
          <Button href="/hotel/zimmer" variant="secondary" icon="arrowRight">
            Alle Zimmer ansehen
          </Button>
          <Button href="/hotel/preise" variant="ghost">
            Preise & Leistungen
          </Button>
        </div>
      </Section>

      {/* ===== Inklusivleistungen ===== */}
      <Section variant="card" width="wide">
        <SectionHeader
          eyebrow="Inklusive"
          title="Vieles ist bei uns schon dabei"
          align="center"
        />
        <IconTileGrid columns={3}>
          {includedServices.map((s) => (
            <IconTile
              key={s.title}
              icon={s.icon}
              title={s.title}
              text={s.text}
              highlight={s.highlight}
            />
          ))}
        </IconTileGrid>
      </Section>

      {/* ===== Region-Teaser ===== */}
      <Section>
        <SectionHeader
          eyebrow="Region"
          title="Direkt vor der Tür: Wandern, Radfahren, Genießen"
          text="Vom Rebstock aus starten Sie mitten hinein in den Schwarzwald — zu Fuß, mit dem Rad oder auf Entdeckungstour zu den schönsten Zielen der Ortenau."
        />
        <div className={styles.regionGrid}>
          {activities.map((a) => (
            <Card key={a.title} as="article" variant="outline" className={styles.regionCard}>
              <span className={styles.regionIcon}>
                <Icon name={a.icon} />
              </span>
              <p className={styles.regionStat}>
                {a.stat} <span>{a.statLabel}</span>
              </p>
              <h3 className={styles.regionTitle}>{a.title}</h3>
              <p className={styles.regionText}>{a.intro}</p>
            </Card>
          ))}
          <div className={styles.regionMedia}>
            <Image
              src="/impressionen/rebstockxxl-20b.jpg"
              alt="Panorama über die Rebhänge des Renchtals im Morgenlicht"
              fill
              sizes="(min-width: 860px) 33vw, 100vw"
              className={styles.regionMediaImg}
            />
          </div>
        </div>
        <div className={styles.regionCta}>
          <Button href="/region" variant="secondary" icon="arrowRight">
            Die Region entdecken
          </Button>
        </div>
      </Section>

      {/* ===== Feiern-Teaser ===== */}
      <Section width="wide">
        <Card variant="sand" className={styles.feiernCard}>
          <div>
            <p className={styles.feiernEyebrow}>Feste feiern</p>
            <h2 className={styles.feiernTitle}>
              Ihre Feier bei uns — von der Taufe bis zur großen Hochzeit
            </h2>
            <p className={styles.feiernText}>
              Auch ohne täglichen Restaurantbetrieb sind wir für Gruppen, Feiern,
              Tagungen und Veranstaltungen da. Für 20 bis 100 Gäste, mit Sektempfang
              im Kastaniengarten und Hochzeitsauto auf Wunsch.
            </p>
            <Button href="/feiern" variant="secondary" icon="arrowRight">
              Feiern im Rebstock
            </Button>
          </div>
          <div className={styles.feiernMedia}>
            <Image
              src="/impressionen/16-feste-feiern_1.jpg"
              alt="Festlich gedeckte Tafel im Fürsteneckraum"
              fill
              sizes="(min-width: 860px) 45vw, 100vw"
              className={styles.feiernImage}
            />
          </div>
        </Card>
      </Section>

      {/* ===== Abschluss-CTA ===== */}
      <Section variant="forest" width="narrow" className={styles.finalCta}>
        <p className={styles.finalEyebrow}>Ihr Aufenthalt</p>
        <h2 className={styles.finalTitle}>Wir freuen uns auf Ihren Besuch</h2>
        <p className={styles.finalText}>
          Fragen Sie unverbindlich an oder buchen Sie direkt — telefonisch oder per
          E-Mail. {directBookingNote}
        </p>
        <div className={styles.finalActions}>
          <Button href={bookingUrl} external={bookingIsExternal} size="lg" icon="arrowRight">
            Direkt buchen
          </Button>
          <Button
            href={phoneHref}
            external
            variant="ghost"
            size="lg"
            icon="phone"
            className={styles.finalGhost}
          >
            {site.phone}
          </Button>
        </div>
      </Section>
    </>
  );
}
