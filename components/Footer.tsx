import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/content/site";
import { services } from "@/content/services";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap fcols">
        <div className="fbrand">
          <p className="fname">{site.name}</p>
          <p className="ffull">{site.full}</p>
          <p>Civil engineering and construction company in Kigali, delivering buildings, roads and infrastructure, wastewater treatment systems and construction materials.</p>
          {site.social.length > 0 && (
            <ul className="social">
              {site.social.map((s) => <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}
            </ul>
          )}
        </div>
        <nav aria-label="Footer">
          <h2>Company</h2>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div>
          <h2>Services</h2>
          <ul>
            {services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul className="fcontact">
            <li><Icon name="phone" size={17} /><a href={site.phoneHref}>{site.phone}</a></li>
            <li><Icon name="mail" size={17} /><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><Icon name="pin" size={17} /><span>{site.street}, {site.area}<br />{site.city}, {site.country}<br />{site.pobox}</span></li>
          </ul>
          <Link href="/contact#quote" className="btn btn-primary btn-sm">Request a Quote</Link>
        </div>
      </div>
      <div className="wrap">
        <div className="fbottom">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
