import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { ConsentProvider } from "@/components/CookieConsent/ConsentProvider";
import { site } from "@/content/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Bed & Breakfast in Oberkirch/Bottenau`,
    template: `%s — ${site.name}`,
  },
  description:
    "Familiengeführtes Bed-&-Breakfast-Hotel zwischen Wein und Wald im Winzerdorf Bottenau. Ruhige Zimmer mit Balkon und Blick ins Renchtal, herzhaftes Frühstücksbuffet aus der Region.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
    title: `${site.name} — Bed & Breakfast im Schwarzwald`,
    description:
      "Ruhig gelegenes Landhotel zwischen Rheinebene und Rebhängen am Fuß des Schwarzwalds. Familie Noack heißt Sie herzlich willkommen.",
  },
  // Pre-Sales-Entwurf: darf nicht indexiert werden und nicht mit der
  // Produktivseite landhotel-rebstock.de konkurrieren.
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body>
        <a href="#inhalt" className="srOnly">
          Zum Inhalt springen
        </a>
        <ConsentProvider>
          <Header />
          <main id="inhalt">{children}</main>
          <Footer />
        </ConsentProvider>
      </body>
    </html>
  );
}
