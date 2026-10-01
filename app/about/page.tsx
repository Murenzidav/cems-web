import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import PageHead from "@/components/PageHead";
import WhyChoose from "@/components/WhyChoose";
import CTABanner from "@/components/CTABanner";
import { about } from "@/content/about";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "About Us",
  description: "About CEMS LTD, a civil engineering and multi-services company in Kigali, Rwanda: our mission, values and the services we provide.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHead eyebrow={site.full} title="About CEMS LTD" text="Integrated civil engineering, construction and multi-service solutions in Rwanda." />

      <section className="section" aria-labelledby="who-title">
        <div className="wrap split">
          <div data-reveal>
            <p className="eyebrow">Who we are</p>
            <h2 id="who-title">Engineering Solutions Built Around Your Project</h2>
            <p className="lead">{about.intro}</p>
            <ul className="checks">
              {services.map((s) => <li key={s.slug}><Icon name="check" size={18} /><Link href={`/services/${s.slug}`}>{s.title}</Link></li>)}
            </ul>
          </div>
          <div className="imgbox tall" data-reveal>
            <Image src="/images/site-blockwork.jpg" alt="CEMS team building blockwork walls on a steel-frame building site" fill sizes="(max-width:900px) 100vw, 560px" className="cover" />
          </div>
        </div>
      </section>

      <section className="section soft" aria-labelledby="mission-title">
        <div className="wrap split top">
          <div data-reveal>
            <p className="eyebrow">Our mission</p>
            <h2 id="mission-title">Better living conditions for all Rwandans</h2>
            <p className="lead">{about.mission}</p>
          </div>
          <ul className="values" data-reveal>
            {about.values.map((v) => <li key={v.title}><h3>{v.title}</h3><p>{v.text}</p></li>)}
          </ul>
        </div>
      </section>

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
