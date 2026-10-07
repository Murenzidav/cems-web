import Image from "next/image";
import Link from "next/link";

type Crumb = { href: string; label: string };

export default function PageHead({ title, text, eyebrow, crumbs = [], image = "/images/site-structure-wide.jpg" }: {
  title: string; text?: string; eyebrow?: string; crumbs?: Crumb[]; image?: string;
}) {
  return (
    <div className="pagehead">
      <Image src={image} alt="" fill priority sizes="100vw" className="ph-img" />
      <div className="wrap">
        <nav aria-label="Breadcrumb" className="crumbs">
          <ol>
            <li><Link href="/">Home</Link></li>
            {crumbs.map((c) => <li key={c.href}><Link href={c.href}>{c.label}</Link></li>)}
            <li aria-current="page">{title}</li>
          </ol>
        </nav>
        {eyebrow && <p className="eyebrow eyebrow-light">{eyebrow}</p>}
        <h1>{title}</h1>
        {text && <p className="ph-text">{text}</p>}
      </div>
    </div>
  );
}
