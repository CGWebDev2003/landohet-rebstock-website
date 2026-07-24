@AGENTS.md

Kernregeln
1. Responsiveness
- Jede Komponente wird mobile-first gebaut. Media Queries via min-width, aufsteigend.
- Breakpoints kommen aus zentralen Custom Properties bzw. der Breakpoint-Definition — keine losen Pixelwerte in einzelnen Modulen.
- Kein fixes width/height in px für Layout-Container. Stattdessen max-width, %, Flex/Grid, clamp().
- Nach jeder UI-Änderung gegen 375px, 768px und 1440px prüfen.
- Touch-Targets mindestens 44×44px.
- Keine horizontalen Overflows — lange Strings mit overflow-wrap / text-overflow abfangen.

2. Einheitliches Design
- Styling ausschließlich über .module.css. Kein Tailwind, keine Utility-Klassen, kein styled-components, keine Inline-Styles für statisches Styling.
- Ein CSS Module pro Komponente, direkt daneben: Button.tsx → Button.module.css.
- Design Tokens als CSS Custom Properties in der globalen Stylesheet-Ebene. Farben, Spacing, Radien, Schatten, Typografie nur über var(--token). Keine Hex-Werte, keine Magic Numbers in Komponenten-Modulen.
- Spacing folgt der 4px-Skala, abgebildet über Spacing-Tokens.
- Klassennamen im Modul in camelCase, semantisch benannt (.cardHeader, nicht .mt16).
- Vor dem Bauen einer neuen Komponente prüfen, ob es bereits eine passende gibt. Wiederverwenden statt duplizieren.
- Interaktive Elemente brauchen alle States: default, hover, focus-visible, active, disabled, loading.
- Kein Dark Mode. Die Seite wird ausschließlich im hellen Farbschema ausgeliefert (`color-scheme: light`); keine `prefers-color-scheme: dark`-Blöcke.
- Globale Styles nur für Reset, Tokens und Typografie-Basis. Alles andere ist scoped.

3. Versionierung
- Semantic Versioning (MAJOR.MINOR.PATCH) in der package.json.
- Conventional Commits: feat:, fix:, chore:, refactor:, docs:, style:, test:.
- CHANGELOG.md wird bei jeder Version aktualisiert (Added / Changed / Fixed / Removed).
- Feature-Branches statt direkter Commits auf main.
- Breaking Changes im Commit-Body mit BREAKING CHANGE: markieren.

4. Performance
- Server Components sind der Default. "use client" nur, wenn tatsächlich State, Effects, Browser-APIs oder Event-Handler gebraucht werden — und dann so weit unten im Baum wie möglich.
- Client-Boundaries klein halten: statt eine ganze Seite zum Client zu machen, den interaktiven Teil in eine eigene kleine Client-Komponente auslagern.
- Bilder immer über next/image mit gesetzten width/height bzw. fill + sizes. Kein rohes <img>.
- Fonts über next/font — keine externen Font-Requests, kein FOUT.
- Schwere oder selten sichtbare Komponenten via next/dynamic lazy laden.
- Keine Barrel-Imports großer Libraries (import { x } from "lib" statt des gesamten Pakets), wenn es Tree-Shaking verhindert.
- Vor dem Hinzufügen einer Dependency: Ist sie nötig? Wie groß ist sie? Gibt es eine native Lösung?
- Data Fetching serverseitig, mit bewusster Caching-Strategie. Keine Client-Fetches für Daten, die zur Render-Zeit verfügbar sind.
- Bundle-Größe im Blick behalten; bei spürbarem Zuwachs kurz begründen oder Alternative vorschlagen.

5. TypeScript
- strict: true. Wird nicht gelockert.
- Kein any. Wenn der Typ unbekannt ist: unknown plus Narrowing.
- Kein @ts-ignore. Wenn es unvermeidbar ist: @ts-expect-error mit einer Zeile Begründung direkt darüber.
- Keine unbegründeten Type Assertions (as). Type Guards bevorzugen.
- Kein ! (Non-null Assertion) ohne echten Grund — lieber explizit prüfen.
- Props-Typen exportieren, wenn die Komponente wiederverwendbar ist.
- Rückgabetypen bei exportierten Funktionen explizit annotieren.
- Keine impliziten any in Callbacks oder Destructuring.

6. Arbeitsweise
- Bei Unklarheiten nachfragen statt raten.
- Bestehende Patterns im Projekt übernehmen, keine neuen Konventionen ohne Absprache einführen.
- Änderungen so klein wie möglich halten.