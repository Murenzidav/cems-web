import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import { site } from "@/content/site";

/** "Let's Discuss Your Project": quote form plus contact details and office location. */
export default function QuoteSection({ defaultService, map }: { defaultService?: string; map?: boolean }) {
  return (
    <section className="section soft" id="quote" aria-labelledby="quote-title">
      <div className="wrap quote">
        <div className="quote-side" data-reveal>
          <p className="eyebrow">Request a quote</p>
          <h2 id="quote-title">Let&apos;s Discuss Your Project</h2>
          <p className="lead">Tell us about your project and our team will get back to you.</p>
          <div className="office-card">
            <h3>Head office</h3>
            <ContactDetails compact />
            {map && (
              <iframe className="map" title={`Map showing the ${site.name} office in ${site.area}, ${site.city}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`} />
            )}
            {!map && (
              <a className="more" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`} target="_blank" rel="noopener noreferrer">
                Open in Google Maps
              </a>
            )}
          </div>
        </div>
        <ContactForm defaultService={defaultService} />
      </div>
    </section>
  );
}
