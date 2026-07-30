# Changelog

Alle nennenswerten Änderungen an diesem Projekt werden hier dokumentiert.
Das Format orientiert sich an [Keep a Changelog](https://keepachangelog.com/de/),
die Versionierung folgt [Semantic Versioning](https://semver.org/lang/de/).

## [0.5.0] – 2026-07-30

### Added

- **404-Seite** (`app/not-found.tsx`): Eigene „Seite nicht gefunden"-Ansicht im
  Design der Website — Seitenkopf mit Eyebrow „Fehler 404", direkter CTA zurück
  zur Startseite und zur Telefonnummer, Karten mit den fünf Hauptbereichen
  (Hotel, Feiern, Region, Impressionen, Kontakt) sowie ein Waldgrün-Abschluss
  mit Telefon- und E-Mail-Kontakt. Header und Footer bleiben erhalten, da die
  Seite innerhalb des Root-Layouts gerendert wird.
- **PageHeader**: Optionale Prop `actions` für Buttons direkt unter dem
  Lead-Text.
- **Qualitätssiegel „Wanderbares Deutschland"**: neu im Hero unten rechts
  und im Footer rechtsbündig neben der Partner-Reihe, dort mit doppelter
  Logo-Höhe. Beide Male steht das Bild frei, ohne Kachel dahinter. Der Hero
  reserviert auf schmalen Screens Platz für das Siegel, damit es nicht über
  der Hero-Card liegt.
- **Footer**: Die Partner-Logos aus `/public/partner` werden jetzt über
  `next/image` als helle Kacheln ausgegeben (Renchtal Tourismus, Schwarzwald
  Tourismus, Bett+Bike, Nationalpark Schwarzwald, booking.com). Alle Logos
  laufen auf einheitlicher Höhe und verlinken in einem neuen Tab auf die
  jeweilige Partnerseite, inklusive Hover- und Active-State. `Partner.logo`
  ist dafür ein `PartnerLogo`-Objekt aus Pfad, Breite und Höhe; `logo` und
  `href` sind jetzt Pflichtfelder.

### Changed

- **Kontaktseite**: Der Abschnitt „Anfahrt" zeigt die Wege mit Auto und mit
  Bus & Bahn jetzt als zwei Icon-Kacheln (`IconTile`) statt in einem
  zweispaltigen Layout neben dem Lageplan. Der Link zur Karten-App heißt
  jetzt „Route in Karten-App öffnen".
- **Stammdaten**: Neues Feld `site.mapsUrl` mit dem Google-Maps-Kurzlink des
  Hauses. Der Anfahrts-Button verlinkt darauf statt auf eine aus der Adresse
  zusammengesetzte Maps-Suche; die strukturierten Daten (`HotelJsonLd`)
  geben den Link zusätzlich als `hasMap` aus.

### Removed

- **Kontaktseite**: Der Lageplan-Platzhalter im Abschnitt „Anfahrt" wurde
  entfernt (inkl. des zugehörigen TODO für eine eingebettete Karte).
- **Footer**: „Wanderbares Deutschland" aus den Partnern entfernt. Damit
  entfällt auch der Text-Badge-Fallback für Partner ohne Logo.
- **Faxnummer**: `site.fax` und alle Ausgaben davon entfernt — die
  Kontaktkarte auf der Kontaktseite, die Kontaktangaben im Impressum und
  `faxNumber` in den strukturierten Daten.

## [0.4.3] – 2026-07-25

### Fixed

- **Region-Seite**: Das Stern-Icon der Tipp-Boxen sitzt jetzt auf der ersten
  Titelzeile, auch wenn der Titel über zwei Zeilen umbricht (statt vertikal
  zentriert zwischen beiden Zeilen).

## [0.4.2] – 2026-07-25

### Fixed

- **Region-Seite**: Die beiden Tipp-Boxen der Aktivitäten-Karten (Wandern,
  Radfahren) stehen jetzt unabhängig von der Länge des Intro-Textes auf
  gleicher Höhe (`margin-top: auto`).

## [0.4.1] – 2026-07-25

### Changed

- **Region-Seite**: Die Ausflugsziel-Karten „Oberkirch mit der Schauenburg"
  und „Durbach & Schloss Staufenberg" zeigen jetzt echte Fotos
  (`schauenburg1.jpg`, `staufenburg.jpg`) via `next/image` (`fill`, `sizes`)
  statt des Platzhalters. Ziele ohne Foto behalten den Platzhalter.

## [0.4.0] – 2026-07-25

### Added

- **Cookie-Consent**: Voll funktionsfähiges Einwilligungsbanner mit den
  Optionen „Alle akzeptieren", „Nur notwendige" und „Einstellungen". Über
  einen modalen Dialog lassen sich die optionalen Kategorien (Statistik,
  Marketing) einzeln zu- oder abwählen; notwendige Cookies sind fest aktiv.
  Die Auswahl wird als First-Party-Cookie (`rebstock-consent`, 180 Tage)
  gespeichert und ist die einzige Quelle der Wahrheit (`useSyncExternalStore`).
- **Footer**: Neuer Link „Cookie-Einstellungen" in der Spalte „Rechtliches",
  über den sich der Einstellungen-Dialog jederzeit erneut öffnen lässt.

### Changed

- **Footer**: Impressum, Datenschutz und AGB stehen jetzt in einer eigenen
  Spalte „Rechtliches" im oberen Footer. An ihrer bisherigen Stelle im unteren
  Footer steht „Designed & Developed by **Grahm Digital**" mit externem Link
  auf `https://grahmdigital.de`.
- **Hotel-Seite**: Der Bild-Platzhalter im Willkommens-Block wurde durch das
  echte Bild (`public/impressionen/17-region_1.jpg`) via `next/image`
  (`fill`, `sizes`) ersetzt.

## [0.3.2] – 2026-07-24

### Changed

- **Hero-Section (Startseite)**: Der Bild-Platzhalter wurde durch das echte
  Hintergrundbild (`public/01-startseite_3.jpg`) via `next/image` (`fill`,
  `priority`) ersetzt.

## [0.3.1] – 2026-07-24

### Changed

- **Hero-Section (Startseite)**: Das separate Bild neben dem Textblock wurde
  entfernt. Stattdessen füllt das Hero-Bild jetzt als Hintergrund die gesamte
  Section, die Textbox liegt darüber links positioniert (mit Verlaufs-Scrim
  für Lesbarkeit).

## [0.3.0] – 2026-07-24

### Removed

- **Dark Mode**: Die `prefers-color-scheme: dark`-Belegung der Design-Tokens
  in `app/globals.css` sowie die zugehörigen Overrides in `Button` und
  `Header` wurden entfernt. Die Seite wird ausschließlich im hellen
  Farbschema (`color-scheme: light`) ausgeliefert.

## [0.2.0] – 2026-07-24

### Added

- **Design-System**: Design-Tokens (Farben, Radien, Schatten, Spacing,
  Typografie) als CSS Custom Properties in `app/globals.css`, inklusive
  Dark-Mode-Belegung über `prefers-color-scheme`.
- **Fonts**: Serif (Cormorant Garamond) für Überschriften und Sans (Inter)
  für Fließtext via `next/font/google`.
- **Basiskomponenten**: `Button`, `Card`, `Section`/`SectionHeader`, `Marquee`
  (Laufband, respektiert `prefers-reduced-motion`), `IconTile`/`IconTileGrid`,
  `Icon` (Inline-Outline-Icon-Set), `Placeholder` (Bildplatzhalter mit
  korrektem Seitenverhältnis), `PageHeader`, `Header` (Floating-Nav + mobiles
  Menü), `Footer`, `Prose`, `CheckList`, `SplitBlock`, `DownloadLink`,
  `Gallery` (Lightbox) und `ContactForm` (UI, ohne Backend).
- **Typisierte Content-Schicht** unter `content/`: Stammdaten, Buchungs-
  konstante, Navigation, Zimmer, Preise, Frühstück, Arrangements, Feiern,
  Region und Partner.
- **Seiten**: Startseite sowie `/hotel` (+ `zimmer`, `preise`, `fruehstueck`,
  `wissenswertes`, `arrangements`, `gruppen`), `/feiern`, `/region`,
  `/impressionen`, `/kontakt` (inkl. Anfahrt), `/impressum`, `/datenschutz`
  (Gerüst mit TODO) und `/agb` (DEHOGA-Basis mit hervorgehobenen
  Stornobedingungen und LMIV-Allergenhinweis).
- **SEO/Metadaten**: Titel, Description und OpenGraph pro Seite, `Hotel`-
  JSON-LD auf der Startseite mit Adresse, Geodaten, Kontakt und `Offer`-
  Angaben für die Zimmerpreise.
- **Barrierefreiheit**: semantische Landmarks, Skip-Link, sichtbarer Gold-
  Fokus-Ring, Touch-Targets ≥ 44 px, Respektieren von `prefers-reduced-motion`.

### Notes

- Buchungs-CTAs zeigen auf eine zentrale Konstante (`content/booking.ts`);
  bis zur finalen Buchungssystem-URL wird auf eine E-Mail-Anfrage verwiesen.
- Bilder sind als klar markierte Platzhalter mit passendem Seitenverhältnis
  angelegt und lassen sich später durch `next/image` ersetzen (siehe
  `BILDER-TODO`-Kommentare).
- Datenschutztext, PDF-Downloads (Menü/Region) und Partner-Logos sind als
  TODO-Platzhalter markiert und vom Betreiber zu ergänzen.
