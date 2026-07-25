"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import styles from "./CookieSettings.module.css";
import { useConsent } from "./ConsentProvider";
import {
  consentCategories,
  defaultConsent,
  fullConsent,
  type ConsentState,
  type OptionalCategory,
} from "@/lib/consent";

/**
 * Modaler Dialog zum Feinjustieren der Cookie-Kategorien. Notwendige Cookies
 * sind fest aktiv; optionale Kategorien lassen sich einzeln umschalten.
 */
export function CookieSettings(): React.ReactElement {
  const { consent, save, acceptAll, closeSettings } = useConsent();
  const titleId = useId();
  const [draft, setDraft] = useState<ConsentState>(consent);

  // Body-Scroll sperren, solange der Dialog offen ist.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Schließen per Escape.
  useEffect(() => {
    const onKey = (event: KeyboardEvent): void => {
      if (event.key === "Escape") closeSettings();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeSettings]);

  const toggle = (key: OptionalCategory): void => {
    setDraft((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div
      className={styles.overlay}
      onClick={closeSettings}
      role="presentation"
    >
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 id={titleId} className={styles.title}>
            Cookie-Einstellungen
          </h2>
          <button
            type="button"
            className={styles.close}
            onClick={closeSettings}
            aria-label="Einstellungen schließen"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <p className={styles.intro}>
          Wählen Sie aus, welche optionalen Cookies Sie zulassen möchten. Ihre
          Auswahl können Sie jederzeit erneut anpassen. Details finden Sie in der{" "}
          <Link href="/datenschutz" className={styles.link} onClick={closeSettings}>
            Datenschutzerklärung
          </Link>
          .
        </p>

        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.itemText}>
              <p className={styles.itemTitle}>Notwendig</p>
              <p className={styles.itemDesc}>
                Erforderlich für den Betrieb der Website, etwa für Sicherheit und
                das Speichern Ihrer Cookie-Auswahl. Immer aktiv.
              </p>
            </div>
            <span className={styles.required}>Immer aktiv</span>
          </li>

          {consentCategories.map((category) => (
            <li key={category.key} className={styles.item}>
              <div className={styles.itemText}>
                <p className={styles.itemTitle}>{category.title}</p>
                <p className={styles.itemDesc}>{category.description}</p>
              </div>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  className={styles.switchInput}
                  checked={draft[category.key]}
                  onChange={() => toggle(category.key)}
                />
                <span className={styles.switchTrack} aria-hidden="true">
                  <span className={styles.switchThumb} />
                </span>
                <span className={styles.srOnly}>
                  {category.title} zulassen
                </span>
              </label>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.button} ${styles.secondary}`}
            onClick={() => save(defaultConsent())}
          >
            Nur notwendige
          </button>
          <button
            type="button"
            className={`${styles.button} ${styles.ghost}`}
            onClick={() => save(draft)}
          >
            Auswahl speichern
          </button>
          <button
            type="button"
            className={`${styles.button} ${styles.primary}`}
            onClick={() => {
              setDraft(fullConsent());
              acceptAll();
            }}
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
