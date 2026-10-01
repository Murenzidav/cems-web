import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Icon from "@/components/Icon";
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

      <section className="section" aria-labelledby="intro-title">
        <div className="wrap split">
          <div className="intro-media" data-reveal>
            <div className="imgbox">
              <Image src="/images/site-slab-pour.jpg" alt="CEMS team placing a concrete floor slab inside a large steel-frame building" fill sizes="(max-width:900px) 100vw, 560px" className="cover" />
            </div>
            <div className="imgbox inset">
              <Image src="/images/site-steel-columns.jpg" alt="CEMS engineers setting out steel columns on site" fill sizes="240px" className="cover" />
            </div>
          </div>
          <div data-reveal>
            <p className="eyebrow">About CEMS LTD</p>
            <h2 id="intro-title">Engineering Solutions Built Around Your Project</h2>
            <p className="lead">{about.intro}</p>
            <ul className="checks">
              {services.map((s) => <li key={s.slug}><Icon name="check" size={18} />{s.title}</li>)}
            </ul>
            <Link className="btn btn-outline" href="/about">Learn More About CEMS <Icon name="arrow" size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section soft" aria-labelledby="services-title">
        <div className="wrap">
          <SectionHead id="services-title" eyebrow="What we do" title="Our Services"
            text="Four areas of work, delivered by one civil engineering team.">
            <Link className="btn btn-outline" href="/services">All services</Link>
          </SectionHead>
          <div className="svc-grid">
            {services.map((s, i) => <ServiceCard key={s.slug} s={s} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="projects-title">
        <div className="wrap">
          <SectionHead id="projects-title" eyebrow="Our work" title="Selected Projects">
            <Link className="btn btn-outline" href="/projects">All projects</Link>
          </SectionHead>
          <ProjectsGrid limit={6} />
        </div>
      </section>

      <WhyChoose />
      <QuoteSection />
    </>
  );
}
