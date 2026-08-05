"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { mainNav } from "@/content/nav";
import { site } from "@/content/site";
import { bookingUrl, bookingIsExternal, directBookingNote } from "@/content/booking";
import { Icon } from "@/components/Icon/Icon";

/**
 * Floating-Navigation über dem Hero mit persistentem Gold-CTA „Direkt buchen".
 * Client-Komponente wegen mobilem Menü, aktivem Zustand (Pathname) und
 * Scroll-Verhalten (Wechsel auf feste, deckende Leiste).
 */
export function Header(): React.ReactElement {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body-Scroll sperren, wenn das mobile Menü offen ist.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string): boolean =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
        open ? styles.menuOpen : ""
      }`}
    >
      <div className={styles.bar}>
        <Link href="/" className={styles.brand} aria-label={`${site.name}, zur Startseite`}>
          <Image
            src="/logo.png"
            alt={site.name}
            width={700}
            height={145}
            priority
            className={styles.brandLogo}
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Hauptnavigation">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${isActive(item.href) ? styles.navActive : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={site.phoneHref} className={styles.phone}>
            <Icon name="phone" className={styles.phoneIcon} />
            <span className={styles.phoneText}>{site.phone}</span>
          </a>
          <div className={styles.bookWrap}>
            <a
              href={bookingUrl}
              className={styles.book}
              {...(bookingIsExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              Direkt buchen
            </a>
            <span className={styles.bookNote}>{directBookingNote}</span>
          </div>
          <button
            type="button"
            className={styles.burger}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="srOnly">Menü {open ? "schließen" : "öffnen"}</span>
            <span className={styles.burgerBox} data-open={open}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {/* Mobiles Menü */}
      <div id="mobile-nav" className={styles.mobilePanel} hidden={!open}>
        <nav className={styles.mobileNav} aria-label="Mobile Navigation">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.mobileLink} ${isActive(item.href) ? styles.navActive : ""}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
              <Icon name="arrowRight" className={styles.mobileArrow} />
            </Link>
          ))}
        </nav>
        <div className={styles.mobileFooter}>
          <a
            href={site.phoneHref}
            className={styles.mobilePhone}
            onClick={() => setOpen(false)}
          >
            <Icon name="phone" /> {site.phone}
          </a>
          <a
            href={bookingUrl}
            className={styles.mobileBook}
            onClick={() => setOpen(false)}
            {...(bookingIsExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            Direkt buchen
          </a>
          <p className={styles.mobileNote}>{directBookingNote}</p>
        </div>
      </div>
    </header>
  );
}
