import Link from "next/link";
import styles from "./Footer.module.css";
import { site, emailHref } from "@/content/site";
import { mainNav, hotelNav, legalNav } from "@/content/nav";
import { partners } from "@/content/partners";
import { bookingUrl, bookingIsExternal, directBookingNote } from "@/content/booking";
import { Icon } from "@/components/Icon/Icon";
import { CookieSettingsLink } from "@/components/CookieConsent/CookieSettingsLink";

/** Globaler Footer mit Kontaktdaten, Navigation, Partner-Logos und Recht. */
export function Footer(): React.ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandCol}>
          <p className={styles.brandName}>{site.name}</p>
          <address className={styles.address}>
            {site.street}
            <br />
            {site.zip} {site.city}
          </address>
          <div className={styles.contactLinks}>
            <a href={site.phoneHref} className={styles.contactLink}>
              <Icon name="phone" /> {site.phone}
            </a>
            <a href={emailHref} className={styles.contactLink}>
              <Icon name="mail" /> {site.email}
            </a>
          </div>
          <a
            href={bookingUrl}
            className={styles.book}
            {...(bookingIsExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            Direkt buchen
          </a>
          <p className={styles.bookNote}>{directBookingNote}</p>
        </div>

        <nav className={styles.linkCol} aria-label="Seiten">
          <p className={styles.colTitle}>Entdecken</p>
          <ul>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.linkCol} aria-label="Hotel">
          <p className={styles.colTitle}>Hotel</p>
          <ul>
            {hotelNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.linkCol} aria-label="Rechtliches">
          <p className={styles.colTitle}>Rechtliches</p>
          <ul>
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <CookieSettingsLink className={styles.linkButton} />
            </li>
          </ul>
        </nav>
      </div>

      {/* Partner-Logos */}
      <div className={styles.partners}>
        <p className={styles.partnersTitle}>Partner & Mitgliedschaften</p>
        <ul className={styles.partnerList}>
          {partners.map((p) => (
            <li key={p.name} className={styles.partner}>
              {/* TODO: Sobald Logos vorliegen, Text-Badge durch next/image ersetzen. */}
              {p.name}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} {site.name} · Inhaber {site.owner}
        </p>
        <p className={styles.credit}>
          Designed &amp; Developed by{" "}
          <a
            href="https://grahmdigital.de"
            className={styles.creditLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Grahm Digital
          </a>
        </p>
      </div>
    </footer>
  );
}
