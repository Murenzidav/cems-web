import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import PageHead from "@/components/PageHead";
import CTABanner from "@/components/CTABanner";
import { projects } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  // Keep placeholder projects out of search results until they are replaced.
  return { title: p.title, description: p.summary, alternates: { canonical: `/projects/${p.slug}` }, ...(p.sample ? { robots: { index: false } } : {}) };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const meta = [
    { label: "Category", value: p.category },
    p.location && { label: "Location", value: p.location },
    p.year && { label: "Year", value: p.year },
  ].filter(Boolean) as { label: string; value: string }[];
  return (
    <>
      <PageHead eyebrow={p.category} title={p.title} crumbs={[{ href: "/projects", label: "Projects" }]} />
      <section className="section">
        <div className="wrap detail">
          <div>
            <div className="imgbox wide">
              {p.image
                ? <Image src={p.image} alt={p.title} fill priority sizes="(max-width:900px) 100vw, 720px" className="cover" />
                : <div className="pic-empty"><Icon name="image" size={40} /><span>Photo coming soon</span></div>}
              {p.sample && <span className="badge">Placeholder</span>}
            </div>
            <h2>Project overview</h2>
            <p className="lead">{p.description}</p>
          </div>
          <aside className="side">
            <div className="side-card">
              <h2>Project details</h2>
              <dl className="facts">
                {meta.map((m) => <div key={m.label}><dt>{m.label}</dt><dd>{m.value}</dd></div>)}
              </dl>
            </div>
            <div className="side-card dark">
              <h2>Planning something similar?</h2>
              <p>Tell us about your project and our team will get back to you.</p>
              <Link className="btn btn-primary btn-block" href="/contact#quote">Request a Quote</Link>
              <Link className="side-back" href="/projects">&larr; All projects</Link>
            </div>
          </aside>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
