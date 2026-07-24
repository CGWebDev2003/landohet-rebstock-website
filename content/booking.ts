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

/** Hinweis, der die Direktbuchung bewirbt. */
export const directBookingNote =
  "Direkt gebucht 3 % günstiger — ohne Umweg über Buchungsportale.";

export const phoneHref = site.phoneHref;
