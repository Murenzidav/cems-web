import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/content/site";

export default function CTABanner() {
  return (
    <section className="band" aria-labelledby="band-title">
      <div className="wrap band-in" data-reveal>
        <div>
          <h2 id="band-title">Planning a building, road or water project?</h2>
          <p>Tell us what you need and we will reply with next steps.</p>
        </div>
        <div className="btns">
          <Link className="btn btn-primary" href="/contact#quote">Request a Quote <Icon name="arrow" size={18} /></Link>
          <a className="btn btn-ghost" href={site.phoneHref}><Icon name="phone" size={18} /> {site.phone}</a>
        </div>
      </div>
    </section>
  );
}
