import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import PageHead from "@/components/PageHead";
import WhyChoose from "@/components/WhyChoose";
import CTABanner from "@/components/CTABanner";
import { about, certifications } from "@/content/about";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "About Us",
  description: "About CEMS LTD, a Rwandan civil engineering and multi-services company with 15 years of construction experience: our story, mission and values.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHead eyebrow={site.full} title="About CEMS LTD" text="A Rwandan civil engineering and multi-services company with a passion for excellence on every project." />

      <section className="section" aria-labelledby="who-title">
        <div className="wrap split">
          <div data-reveal>
            <p className="eyebrow">Who we are</p>
            <h2 id="who-title">{about.experienceYears} Years of Construction Experience</h2>
            {about.story.map((p) => <p key={p.slice(0, 24)} className="lead">{p}</p>)}
            <p className="lead">With {about.operatingYears} years in operation, we provide:</p>
            <ul className="checks">
              {services.map((s) => <li key={s.slug}><Icon name="check" size={18} /><Link href={`/services/${s.slug}`}>{s.title}</Link></li>)}
            </ul>
          </div>
          <div className="about-media" data-reveal>
            <div className="imgbox tall">
              <Image src="/images/site-structure.jpg" alt="CEMS engineers on a reinforced-concrete building under construction" fill sizes="(max-width:900px) 100vw, 560px" className="cover" />
            </div>
            <p className="exp-badge"><b>{about.experienceYears}</b><span>Years of construction experience</span></p>
          </div>
        </div>
      </section>

      <section className="section soft" aria-labelledby="mvv-title">
        <div className="wrap mvv">
          <div className="mvv-media" data-reveal>
            <div className="imgbox">
              <Image src="/images/site-slab-pour.jpg" alt="CEMS team placing a concrete floor slab inside a steel-frame building" fill sizes="(max-width:900px) 100vw, 520px" className="cover" />
            </div>
            <p className="mvv-motto"><span>Our motto</span>{site.tagline}</p>
          </div>
          <div data-reveal>
            <p className="eyebrow">What drives us</p>
            <h2 id="mvv-title">Mission{about.vision ? ", Vision" : ""} &amp; Values</h2>
            <div className="mvv-block">
              <h3>Our mission</h3>
              <p>{about.mission}</p>
            </div>
            {about.vision && (
              <div className="mvv-block">
                <h3>Our vision</h3>
                <p>{about.vision}</p>
              </div>
            )}
            <div className="mvv-block">
              <h3>Our values</h3>
              <ol className="values">
                {about.values.map((v) => <li key={v.title}><h4>{v.title}</h4><p>{v.text}</p></li>)}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {certifications.length > 0 && (
        <section className="section" aria-labelledby="certs-title">
          <div className="wrap">
            <div className="shead center" data-reveal>
              <p className="eyebrow">Registrations &amp; recognition</p>
              <h2 id="certs-title">Certified to work</h2>
            </div>
            <ul className="certs">
              {certifications.map((c) => (
                <li key={c.name} data-reveal>
                  {c.logo
                    ? <span className="cert-logo"><Image src={c.logo} alt="" width={160} height={90} /></span>
                    : <span className="cert-logo cert-icon"><Icon name="shield" size={34} /></span>}
                  <h3>{c.name}</h3>
                  {c.detail && <p>{c.detail}</p>}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {team.length > 0 && (
        <section className="section" aria-labelledby="team-title">
          <div className="wrap">
            <h2 id="team-title">Our team</h2>
            <div className="team">
              {team.map((m) => (
                <div key={m.name}>
                  {m.photo && <div className="imgbox"><Image src={m.photo} alt={m.name} fill sizes="(max-width:640px) 100vw, 280px" className="cover" /></div>}
                  <h3>{m.name}</h3><p className="note">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <WhyChoose />
      <CTABanner />
    </>
  );
}
