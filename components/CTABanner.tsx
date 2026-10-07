import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export default function CTABanner() {
  return (
    <section className="band" aria-labelledby="band-title">
      <Image src="/images/site-slab-pour.jpg" alt="" fill sizes="100vw" className="band-img" />
      <div className="wrap band-in" data-reveal>
        <p className="eyebrow eyebrow-light">{site.tagline}</p>
        <h2 id="band-title">Planning a building, road or water project?</h2>
        <p>Tell us what you need and we will reply with next steps.</p>
        <div className="btns">
          <Link className="btn btn-primary" href="/contact#quote">Request a Quote</Link>
          <a className="btn btn-ghost" href={site.phoneHref}>Call {site.phone}</a>
        </div>
      </div>
    </section>
  );
}
