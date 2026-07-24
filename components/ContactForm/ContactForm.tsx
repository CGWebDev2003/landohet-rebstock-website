"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";
import { Icon } from "@/components/Icon/Icon";

/**
 * Kontaktformular — reine UI ohne Backend.
 *
 * TODO (Backend-Anbindung): Beim Absenden aktuell nur eine lokale
 * Bestätigung. Später an eine Route Handler / einen Mail-Service anbinden
 * (z. B. /api/kontakt) und Server-seitige Validierung ergänzen.
 */
export function ContactForm(): React.ReactElement {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // TODO: Formulardaten an das Backend senden.
    setSent(true);
  };

  if (sent) {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon}>
          <Icon name="check" />
        </span>
        <h3 className={styles.successTitle}>Vielen Dank für Ihre Nachricht!</h3>
        <p className={styles.successText}>
          Hinweis: Dieses Formular ist noch nicht an ein Backend angebunden. Bitte
          kontaktieren Sie uns bis dahin direkt telefonisch oder per E-Mail — wir
          melden uns schnellstmöglich bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            Name<span aria-hidden="true"> *</span>
          </label>
          <input id="name" name="name" type="text" required className={styles.input} autoComplete="name" />
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            E-Mail<span aria-hidden="true"> *</span>
          </label>
          <input id="email" name="email" type="email" required className={styles.input} autoComplete="email" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="phone" className={styles.label}>
            Telefon
          </label>
          <input id="phone" name="phone" type="tel" className={styles.input} autoComplete="tel" />
        </div>
        <div className={styles.field}>
          <label htmlFor="topic" className={styles.label}>
            Anliegen
          </label>
          <select id="topic" name="topic" className={styles.input} defaultValue="Zimmeranfrage">
            <option>Zimmeranfrage</option>
            <option>Feier / Veranstaltung</option>
            <option>Gruppenreise</option>
            <option>Gutschein</option>
            <option>Sonstiges</option>
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Ihre Nachricht<span aria-hidden="true"> *</span>
        </label>
        <textarea id="message" name="message" rows={5} required className={styles.textarea} />
      </div>

      <div className={styles.consent}>
        <input id="consent" name="consent" type="checkbox" required className={styles.checkbox} />
        <label htmlFor="consent" className={styles.consentLabel}>
          Ich habe die <a href="/datenschutz">Datenschutzhinweise</a> gelesen und bin
          mit der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage
          einverstanden.
        </label>
      </div>

      <button type="submit" className={styles.submit}>
        Nachricht senden
        <Icon name="arrowRight" />
      </button>
      <p className={styles.note}>* Pflichtfelder</p>
    </form>
  );
}
