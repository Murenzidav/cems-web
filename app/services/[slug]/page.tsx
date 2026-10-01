import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import PageHead from "@/components/PageHead";
import QuoteSection from "@/components/QuoteSection";
import { services } from "@/content/services";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.title, description: `${s.short} ${site.name}, Kigali, Rwanda.`, alternates: { canonical: `/services/${s.slug}` } } : {};
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);
  return (
    <>
      <PageHead eyebrow="Service" title={s.title} text={s.intro} crumbs={[{ href: "/services", label: "Services" }]} />
      <section className="section">
        <div className="wrap detail">
          <div>
            {s.image ? (
              <div className="imgbox wide">
                <Image src={s.image.src} alt={s.image.alt} fill priority sizes="(max-width:900px) 100vw, 720px" className="cover" />
              </div>
            ) : (
              <div className="icon-panel"><Icon name={s.icon} size={64} /></div>
            )}
            <h2>What is included</h2>
            <ul className="checks two">{s.points.map((p) => <li key={p}><Icon name="check" size={18} />{p}</li>)}</ul>
          </div>
          <aside className="side">
            <div className="side-card dark">
              <h2>Need this service?</h2>
              <p>Tell us about your project and our team will get back to you.</p>
              <Link className="btn btn-primary btn-block" href="#quote">Request a Quote</Link>
              <a className="side-phone" href={site.phoneHref}><Icon name="phone" size={18} /> {site.phone}</a>
            </div>
            <div className="side-card">
              <h2>Other services</h2>
              <ul className="side-links">
                {others.map((o) => <li key={o.slug}><Link href={`/services/${o.slug}`}><Icon name={o.icon} size={20} />{o.title}</Link></li>)}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <QuoteSection defaultService={s.title} />
    </>
  );
}
