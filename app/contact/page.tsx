import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import QuoteSection from "@/components/QuoteSection";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description: "Contact CEMS LTD in Kicukiro, Kigali. Request a quote for building construction, roads and infrastructure, wastewater treatment or construction materials in Rwanda.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHead eyebrow="Get in touch" title="Contact Us" text="Tell us what you need built, repaired or supplied. Call, WhatsApp, email or send a quote request below." />
      <QuoteSection map />
    </>
  );
}
