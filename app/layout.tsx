import type { Metadata, Viewport } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import Analytics from "@/components/Analytics";
import { site } from "@/content/site";
import { services } from "@/content/services";

const head = Archivo({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-head", display: "swap" });
const body = Public_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body", display: "swap" });

const title = `${site.name} | Civil Engineering & Construction Company in Kigali, Rwanda`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  keywords: ["CEMS LTD", "civil engineering Rwanda", "construction company Rwanda", "civil engineering Kigali", "infrastructure construction Rwanda", "wastewater treatment Rwanda", "construction materials Rwanda"],
  openGraph: {
    title, description: site.description, siteName: site.name, type: "website", locale: "en_RW",
    images: [{ url: "/images/site-earthworks.jpg", width: 1024, height: 768, alt: "CEMS LTD earthworks and steel structure on a construction site" }],
  },
  twitter: { card: "summary_large_image", title, description: site.description, images: ["/images/site-earthworks.jpg"] },
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
  image: new URL("/images/site-earthworks.jpg", site.url).toString(),
  telephone: site.phone,
  email: site.email,
  areaServed: { "@type": "Country", name: "Rwanda" },
  address: { "@type": "PostalAddress", streetAddress: `${site.street}, ${site.area}`, addressLocality: site.city, addressCountry: "RW", postOfficeBoxNumber: site.pobox },
  makesOffer: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable}`}>
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
