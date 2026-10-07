import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { services } from "@/content/services";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <Image src="/images/site-earthworks.jpg" alt="" fill priority sizes="100vw" className="hero-img" />
      </div>
      <div className="hero-shade" />
      <div className="wrap hero-in">
        <p className="eyebrow eyebrow-light">{site.full} &middot; Kigali, Rwanda</p>
        <h1 id="hero-title">Building Today for Rwanda&apos;s Tomorrow.</h1>
        <p className="hero-text">Reliable civil engineering, construction, infrastructure and multi-service solutions delivered with quality, professionalism and commitment.</p>
        <div className="btns">
          <Link className="btn btn-primary" href="/contact#quote">Request a Quote</Link>
          <Link className="btn btn-ghost" href="/services">Explore Our Services</Link>
        </div>
      </div>
      <ul className="hero-services" aria-label="What we do">
        {services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.label}</Link></li>)}
      </ul>
      <a href="#intro" className="scroll-cue" aria-label="Scroll to content"><span /></a>
    </section>
  );
}
