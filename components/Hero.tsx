import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/content/site";
import { services } from "@/content/services";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image src="/images/site-earthworks.jpg" alt="" fill priority sizes="100vw" className="hero-img" />
      <div className="hero-shade" />
      <div className="wrap hero-in">
        <p className="eyebrow eyebrow-light">{site.full} &middot; Kigali, Rwanda</p>
        <h1 id="hero-title">Building Today for Rwanda&apos;s Tomorrow.</h1>
        <p className="hero-text">Reliable civil engineering, construction, infrastructure and multi-service solutions delivered with quality, professionalism and commitment.</p>
        <div className="btns">
          <Link className="btn btn-primary" href="/contact#quote">Request a Quote <Icon name="arrow" size={18} /></Link>
          <Link className="btn btn-ghost" href="/services">Explore Our Services</Link>
        </div>
      </div>
      <div className="hero-strip">
        <ul className="wrap hero-strip-in" aria-label="What we do">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`}><span className="strip-icon"><Icon name={s.icon} size={22} /></span>{s.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
