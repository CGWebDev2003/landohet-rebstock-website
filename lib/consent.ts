/**
 * Cookie-Consent-Kernlogik (framework-unabhängig).
 *
 * Speichert die Einwilligung als JSON in einem First-Party-Cookie. Neben den
 * technisch notwendigen Cookies (immer aktiv) lassen sich optionale Kategorien
 * einzeln zu- oder abwählen. Wird die Cookie-Struktur erweitert, sollte
 * CONSENT_VERSION erhöht werden, damit bestehende Einwilligungen neu abgefragt
 * werden.
 */

/** Optionale, zustimmungspflichtige Cookie-Kategorien. */
export type OptionalCategory = "analytics" | "marketing";

/** Vollständiger Einwilligungsstand inkl. der stets aktiven Kategorie. */
export interface ConsentState {
  readonly necessary: true;
  readonly analytics: boolean;
  readonly marketing: boolean;
}

interface StoredConsent extends ConsentState {
  readonly v: number;
}

export interface CategoryMeta {
  readonly key: OptionalCategory;
  readonly title: string;
  readonly description: string;
}

export const CONSENT_COOKIE = "rebstock-consent";
export const CONSENT_VERSION = 1;
const CONSENT_MAX_AGE_DAYS = 180;

/** Event, das nach jeder Speicherung im Browser ausgelöst wird. */
export const CONSENT_EVENT = "rebstock:consent-change";

/** Beschreibung der optionalen Kategorien für die Einstellungen-UI. */
export const consentCategories: readonly CategoryMeta[] = [
  {
    key: "analytics",
    title: "Statistik",
    description:
      "Anonyme Reichweitenmessung, um die Nutzung der Website zu verstehen und Inhalte zu verbessern.",
  },
  {
    key: "marketing",
    title: "Marketing",
    description:
      "Cookies von Drittanbietern, etwa für eingebettete Karten oder Videos und personalisierte Inhalte.",
  },
];

/** Standardzustand: nur notwendige Cookies aktiv. */
export function defaultConsent(): ConsentState {
  return { necessary: true, analytics: false, marketing: false };
}

/** Alles aktiviert. */
export function fullConsent(): ConsentState {
  return { necessary: true, analytics: true, marketing: true };
}

function isStoredConsent(value: unknown): value is StoredConsent {
  if (typeof value !== "object" || value === null) return false;
  const record = value as Record<string, unknown>;
  return (
    typeof record.v === "number" &&
    typeof record.analytics === "boolean" &&
    typeof record.marketing === "boolean"
  );
}

/**
 * Liest den gespeicherten Einwilligungsstand aus dem Cookie. Gibt null zurück,
 * wenn noch keine (gültige) Entscheidung getroffen wurde — dann muss das Banner
 * angezeigt werden.
 */
export function readConsent(): ConsentState | null {
  if (typeof document === "undefined") return null;

  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${CONSENT_COOKIE}=`));
  if (!match) return null;

  const raw = match.slice(CONSENT_COOKIE.length + 1);
  try {
    const parsed: unknown = JSON.parse(decodeURIComponent(raw));
    if (!isStoredConsent(parsed) || parsed.v !== CONSENT_VERSION) return null;
    return {
      necessary: true,
      analytics: parsed.analytics,
      marketing: parsed.marketing,
    };
  } catch {
    return null;
  }
}

/** Schreibt den Einwilligungsstand als First-Party-Cookie. */
export function writeConsent(state: ConsentState): void {
  if (typeof document === "undefined") return;

  const payload: StoredConsent = { v: CONSENT_VERSION, ...state };
  const value = encodeURIComponent(JSON.stringify(payload));
  const maxAge = CONSENT_MAX_AGE_DAYS * 24 * 60 * 60;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";

  document.cookie = `${CONSENT_COOKIE}=${value}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;
  notifyConsentChange();
}

/* --- External Store (für useSyncExternalStore) -------------------------- */

let cachedRaw: string | null = null;
let cachedState: ConsentState | null = null;

function rawCookie(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${CONSENT_COOKIE}=`));
  return match ? match.slice(CONSENT_COOKIE.length + 1) : null;
}

/**
 * Stabiler Snapshot des Einwilligungsstands. Gibt bei unveränderten Cookies
 * dieselbe Objekt-Referenz zurück, damit useSyncExternalStore keine Endlos-
 * Renders auslöst.
 */
export function getConsentSnapshot(): ConsentState | null {
  const raw = rawCookie();
  if (raw === cachedRaw) return cachedState;
  cachedRaw = raw;
  cachedState = readConsent();
  return cachedState;
}

/** Server-Snapshot: vor der Hydration ist keine Entscheidung bekannt. */
export function getConsentServerSnapshot(): ConsentState | null {
  return null;
}

/** Abonniert Änderungen am Einwilligungsstand innerhalb dieses Tabs. */
export function subscribeConsent(listener: () => void): () => void {
  window.addEventListener(CONSENT_EVENT, listener);
  return () => window.removeEventListener(CONSENT_EVENT, listener);
}

function notifyConsentChange(): void {
  cachedRaw = null; // Cache invalidieren, damit neu geparst wird.
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
  }
}
