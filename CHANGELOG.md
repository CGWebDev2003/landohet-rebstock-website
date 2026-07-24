# Changelog

Alle nennenswerten Änderungen an diesem Projekt werden hier dokumentiert.
Das Format orientiert sich an [Keep a Changelog](https://keepachangelog.com/de/),
die Versionierung folgt [Semantic Versioning](https://semver.org/lang/de/).

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
