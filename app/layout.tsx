import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import Analytics from "@/components/Analytics";
import { site } from "@/content/site";
import { services } from "@/content/services";

// Fonts are self-hosted (Latin variable files from Google Fonts, SIL Open Font License) so builds never depend on fetching them.
const serif = localFont({ src: "./fonts/playfair-display.woff2", weight: "400 600", variable: "--font-serif", display: "swap" });
const body = localFont({ src: "./fonts/public-sans.woff2", weight: "400 700", variable: "--font-body", display: "swap" });

const title = `${site.name} | Civil Engineering & Construction Company in Kigali, Rwanda`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  keywords: ["CEMS LTD", "civil engineering Rwanda", "construction company Rwanda", "civil engineering Kigali", "infrastructure construction Rwanda", "wastewater treatment Rwanda", "construction materials Rwanda"],
  openGraph: {
    title, description: site.description, siteName: site.name, type: "website", locale: "en_RW",
    images: [{ url: "/images/site-structure-wide.jpg", width: 2169, height: 585, alt: "CEMS LTD reinforced-concrete building under construction" }],
  },
  twitter: { card: "summary_large_image", title, description: site.description, images: ["/images/site-structure-wide.jpg"] },
};

export const viewport: Viewport = { themeColor: "#0A2A5A" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.name,
  alternateName: `${site.name}, ${site.full}`,
  description: site.description,
  url: site.url,
  logo: new URL(site.logo, site.url).toString(),
  image: new URL("/images/site-structure-wide.jpg", site.url).toString(),
  telephone: site.phone,
  email: site.email,
  areaServed: { "@type": "Country", name: "Rwanda" },
  address: { "@type": "PostalAddress", streetAddress: `${site.street}, ${site.area}`, addressLocality: site.city, addressCountry: "RW", postOfficeBoxNumber: site.pobox },
  makesOffer: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollReveal />
        <Analytics />
      </body>
    </html>
  );
}
