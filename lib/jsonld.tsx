import { site } from "@/content/site";
import { rooms } from "@/content/rooms";

/**
 * Strukturierte Daten (schema.org) für die Startseite.
 * Rendert ein <script type="application/ld+json"> mit Hotel/LodgingBusiness.
 */
export function HotelJsonLd(): React.ReactElement {
  const data = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: site.name,
    description:
      "Familiengeführtes Bed-&-Breakfast-Hotel zwischen Wein und Wald im Winzerdorf Bottenau am Fuß des Schwarzwalds.",
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "€€",
    petsAllowed: true,
    numberOfRooms: 12,
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, EC Card, Credit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      postalCode: site.zip,
      addressLocality: "Oberkirch",
      addressRegion: "Baden-Württemberg",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.mapsUrl,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Kostenfreies WLAN", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kostenfreie Parkplätze", value: true },
      { "@type": "LocationFeatureSpecification", name: "E-Auto-Ladestation", value: true },
      { "@type": "LocationFeatureSpecification", name: "Balkon", value: true },
      { "@type": "LocationFeatureSpecification", name: "Aufzug", value: true },
      { "@type": "LocationFeatureSpecification", name: "Frühstücksbuffet", value: true },
    ],
    makesOffer: rooms.map((room) => ({
      "@type": "Offer",
      name: room.name,
      priceCurrency: "EUR",
      price: room.priceFrom.replace(/[^0-9]/g, ""),
      description: `${room.persons} · ${room.priceFrom} ${room.priceUnit}`,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "EUR",
        price: room.priceFrom.replace(/[^0-9]/g, ""),
        unitText: room.priceUnit,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // schema.org-Daten sind statisch und werden serverseitig gerendert.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
