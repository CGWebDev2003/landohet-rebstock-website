export interface PartnerLogo {
  /** Pfad zur Datei unter /public/partner. */
  readonly src: string;
  /**
   * Maße für next/image: das Seitenverhältnis der Originaldatei, skaliert auf
   * die doppelte Darstellungsgröße im Footer. Die endgültige Größe begrenzt
   * das CSS des Footers.
   */
  readonly width: number;
  readonly height: number;
}

export interface Partner {
  readonly name: string;
  readonly logo: PartnerLogo;
  /** Ziel des Logos — wird im Footer in einem neuen Tab geöffnet. */
  readonly href: string;
}

/**
 * Qualitätssiegel „Wanderbares Deutschland" — wird prominenter gezeigt als die
 * Partner-Logos (Hero unten rechts, Footer rechts neben der Partner-Reihe).
 * Die Originaldatei ist 553 × 640 px; die Maße an den Einsatzorten halten
 * dieses Seitenverhältnis.
 */
export const qualitySeal = {
  src: "/qualitaetssiegel-wanderbares-deutschland-2-663x767-553x640.png",
  alt: "Qualitätssiegel Wanderbares Deutschland",
} as const;

export const partners: readonly Partner[] = [
  {
    name: "Renchtal Tourismus",
    logo: { src: "/partner/logo-renchtal.png", width: 132, height: 80 },
    href: "https://www.renchtal-tourismus.de/",
  },
  {
    name: "Schwarzwald Tourismus",
    logo: { src: "/partner/stg-logo_front_large.png", width: 80, height: 80 },
    href: "https://www.schwarzwald-tourismus.info/",
  },
  {
    name: "Bett+Bike",
    logo: { src: "/partner/bett-bike.png", width: 64, height: 80 },
    href: "https://www.bettundbike.de/",
  },
  {
    name: "Nationalpark Schwarzwald",
    logo: { src: "/partner/logo-nationalpark.png", width: 160, height: 80 },
    href: "https://www.nationalpark-schwarzwald.de/",
  },
  {
    name: "booking.com",
    logo: { src: "/partner/logobooking-com.jpg", width: 166, height: 48 },
    href: "https://www.booking.com/hotel/de/landhotel-rebstock-oberkirch.de.html",
  },
];
