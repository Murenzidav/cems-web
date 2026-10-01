import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import ServiceCard from "@/components/ServiceCard";
import WhyChoose from "@/components/WhyChoose";
import CTABanner from "@/components/CTABanner";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Building construction and design, infrastructure construction and rehabilitation, wastewater treatment plants and construction materials in Kigali, Rwanda.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHead eyebrow="What we do" title="Our Services" text="Building, infrastructure, wastewater treatment and construction materials, all from one company." />
      <section className="section">
        <div className="wrap svc-grid">{services.map((s, i) => <ServiceCard key={s.slug} s={s} index={i} />)}</div>
      </section>
      <WhyChoose />
      <CTABanner />
    </>
  );
}
