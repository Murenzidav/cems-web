import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHead from "@/components/SectionHead";
import ServiceCard from "@/components/ServiceCard";
import ProjectsGrid from "@/components/ProjectsGrid";
import WhyChoose from "@/components/WhyChoose";
import QuoteSection from "@/components/QuoteSection";
import { services } from "@/content/services";
import { about } from "@/content/about";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <Hero />

      <section className="feature" id="intro" aria-labelledby="intro-title">
        <div className="feature-media">
          <Image src="/images/site-slab-pour.jpg" alt="CEMS team placing a concrete floor slab inside a large steel-frame building" fill sizes="(max-width:900px) 100vw, 50vw" className="cover" />
        </div>
        <div className="feature-text" data-reveal>
          <p className="eyebrow">About CEMS LTD</p>
          <h2 id="intro-title">Engineering Solutions Built Around Your Project</h2>
          <p className="lead">{about.intro}</p>
          <Link className="more" href="/about">Learn more about CEMS</Link>
        </div>
      </section>

      <section className="section navy-sec" aria-labelledby="services-title">
        <div className="wrap">
          <SectionHead id="services-title" light eyebrow="What we do" title="Our Services">
            <Link className="more more-light" href="/services">All services</Link>
          </SectionHead>
          <div className="svc-grid">
            {services.map((s, i) => <ServiceCard key={s.slug} s={s} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="projects-title">
        <div className="wrap">
          <SectionHead id="projects-title" eyebrow="Our work" title="Selected Projects">
            <Link className="more" href="/projects">All projects</Link>
          </SectionHead>
          <ProjectsGrid limit={6} />
        </div>
      </section>

      <WhyChoose />
      <QuoteSection />
    </>
  );
}
