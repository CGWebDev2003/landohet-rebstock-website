"use client";

import { useConsent } from "./ConsentProvider";

/**
 * Footer-Link, der den Cookie-Einstellungen-Dialog erneut öffnet, damit
 * Besucher ihre Einwilligung jederzeit anpassen können.
 */
export function CookieSettingsLink({
  className,
}: {
  readonly className?: string;
}): React.ReactElement {
  const { openSettings } = useConsent();

  return (
    <button type="button" className={className} onClick={openSettings}>
      Cookie-Einstellungen
    </button>
  );
}
