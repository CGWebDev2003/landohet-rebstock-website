"use client";

import Link from "next/link";
import styles from "./CookieBanner.module.css";
import { useConsent } from "./ConsentProvider";

/**
 * Einwilligungsbanner am unteren Bildschirmrand. Erscheint, solange keine
 * Cookie-Entscheidung getroffen wurde.
 */
export function CookieBanner(): React.ReactElement {
  const { acceptAll, rejectAll, openSettings } = useConsent();

  return (
    <div
      className={styles.banner}
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-text"
    >
      <div className={styles.inner}>
        <div className={styles.text}>
          <p id="cookie-banner-title" className={styles.title}>
            Wir verwenden Cookies
          </p>
          <p id="cookie-banner-text" className={styles.body}>
            Für den Betrieb der Website setzen wir notwendige Cookies. Optionale
            Cookies für Statistik und Marketing nutzen wir nur mit Ihrer
            Einwilligung. Mehr dazu in unserer{" "}
            <Link href="/datenschutz" className={styles.link}>
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.button} ${styles.ghost}`}
            onClick={openSettings}
          >
            Einstellungen
          </button>
          <button
            type="button"
            className={`${styles.button} ${styles.secondary}`}
            onClick={rejectAll}
          >
            Nur notwendige
          </button>
          <button
            type="button"
            className={`${styles.button} ${styles.primary}`}
            onClick={acceptAll}
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
