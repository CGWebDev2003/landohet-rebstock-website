/**
 * Zentrale Stammdaten des Landhotel Rebstock.
 * Alle Kontakt- und Buchungsangaben laufen über dieses Modul, damit sie
 * an einer einzigen Stelle gepflegt werden können.
 */

export interface SiteInfo {
  readonly name: string;
  readonly owner: string;
  readonly url: string;
  readonly street: string;
  readonly zip: string;
  readonly city: string;
  readonly cityRegion: string;
  readonly phone: string;
  readonly phoneHref: string;
  readonly email: string;
  readonly taxId: string;
  readonly geo: { readonly lat: number; readonly lng: number };
  /** Google-Maps-Kurzlink auf den Eintrag des Hauses. */
  readonly mapsUrl: string;
  readonly authority: {
    readonly name: string;
    readonly street: string;
    readonly zipCity: string;
  };
}

export const site: SiteInfo = {
  name: "Landhotel Rebstock",
  owner: "Axel Noack",
  // TODO: Finale Produktions-Domain eintragen, sobald bekannt.
  url: "https://www.landhotel-rebstock.de",
  street: "Meisenbühl 19",
  zip: "77704",
  city: "Oberkirch/Bottenau",
  cityRegion: "Bottenau",
  phone: "+49 7802 3047",
  phoneHref: "tel:+4978023047",
  email: "info@landhotel-rebstock.de",
  taxId: "DE178338199",
  geo: { lat: 48.5289, lng: 8.045 },
  mapsUrl: "https://maps.app.goo.gl/z6h7YJ51sr6CNSWY8",
  authority: {
    name: "Stadtverwaltung Oberkirch",
    street: "Eisenbahnstraße 1",
    zipCity: "77704 Oberkirch",
  },
};

export const emailHref = `mailto:${site.email}`;
