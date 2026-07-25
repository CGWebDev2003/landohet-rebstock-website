"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import {
  defaultConsent,
  fullConsent,
  getConsentServerSnapshot,
  getConsentSnapshot,
  subscribeConsent,
  writeConsent,
  type ConsentState,
} from "@/lib/consent";
import { CookieBanner } from "./CookieBanner";
import { CookieSettings } from "./CookieSettings";

interface ConsentContextValue {
  /** Aktueller Einwilligungsstand (Default, solange keine Entscheidung vorliegt). */
  readonly consent: ConsentState;
  /** true, sobald der Client hydriert ist — verhindert Banner-Flackern beim SSR. */
  readonly ready: boolean;
  /** true, wenn noch keine Entscheidung getroffen wurde (Banner sichtbar). */
  readonly needsDecision: boolean;
  /** true, wenn der Einstellungen-Dialog geöffnet ist. */
  readonly settingsOpen: boolean;
  readonly acceptAll: () => void;
  readonly rejectAll: () => void;
  readonly save: (state: ConsentState) => void;
  readonly openSettings: () => void;
  readonly closeSettings: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

/**
 * Stellt den Cookie-Consent-Zustand bereit und rendert Banner sowie
 * Einstellungen-Dialog. Umschließt die App im Root-Layout.
 *
 * Der Einwilligungsstand wird per useSyncExternalStore direkt aus dem Cookie
 * gelesen — so bleibt das Cookie die einzige Quelle der Wahrheit und es gibt
 * keinen Hydration-Mismatch.
 */
export function ConsentProvider({
  children,
}: {
  readonly children: React.ReactNode;
}): React.ReactElement {
  const stored = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getConsentServerSnapshot,
  );
  // Nach der Hydration true; vermeidet, dass das Banner serverseitig gerendert wird.
  const ready = useSyncExternalStore(
    subscribeConsent,
    () => true,
    () => false,
  );

  const [settingsOpen, setSettingsOpen] = useState(false);

  const consent = stored ?? defaultConsent();
  const needsDecision = stored === null;

  const acceptAll = useCallback((): void => {
    writeConsent(fullConsent());
    setSettingsOpen(false);
  }, []);

  const rejectAll = useCallback((): void => {
    writeConsent(defaultConsent());
    setSettingsOpen(false);
  }, []);

  const save = useCallback((state: ConsentState): void => {
    writeConsent(state);
    setSettingsOpen(false);
  }, []);

  const openSettings = useCallback((): void => setSettingsOpen(true), []);
  const closeSettings = useCallback((): void => setSettingsOpen(false), []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      consent,
      ready,
      needsDecision,
      settingsOpen,
      acceptAll,
      rejectAll,
      save,
      openSettings,
      closeSettings,
    }),
    [
      consent,
      ready,
      needsDecision,
      settingsOpen,
      acceptAll,
      rejectAll,
      save,
      openSettings,
      closeSettings,
    ],
  );

  return (
    <ConsentContext.Provider value={value}>
      {children}
      {ready && needsDecision && !settingsOpen ? <CookieBanner /> : null}
      {settingsOpen ? <CookieSettings /> : null}
    </ConsentContext.Provider>
  );
}

/** Zugriff auf den Cookie-Consent-Zustand innerhalb des Providers. */
export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent muss innerhalb von <ConsentProvider> genutzt werden.");
  }
  return ctx;
}
