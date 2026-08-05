import { site, emailHref } from "./site";

/**
 * Buchungs-CTAs zeigen auf eine zentrale, leicht austauschbare Konstante.
 *
 * TODO: Sobald das Online-Buchungssystem feststeht, hier die echte URL
 * eintragen und `bookingIsExternal` auf true setzen. Bis dahin führt der
 * Direktbuchungs-CTA auf eine Buchungsanfrage per E-Mail.
 */
const BOOKING_SYSTEM_URL: string | null = null;

export const bookingIsExternal: boolean = BOOKING_SYSTEM_URL !== null;

export const bookingUrl: string =
  BOOKING_SYSTEM_URL ??
  `${emailHref}?subject=${encodeURIComponent(
    "Buchungsanfrage Landhotel Rebstock",
  )}`;

/** Rabatt für Direktbuchungen — zentral, damit er sich an einer Stelle ändern lässt. */
export const directBookingDiscountPercent = 3;

/** Hinweis, der die Direktbuchung bewirbt. */
export const directBookingNote = `Direkt gebucht ${directBookingDiscountPercent} % günstiger — ohne Umweg über Buchungsportale.`;

/** Kurzform für Preiszeilen, z. B. in Zimmerkarten. */
export const directBookingShort = `direkt gebucht ${directBookingDiscountPercent} % günstiger`;

export const phoneHref = site.phoneHref;
