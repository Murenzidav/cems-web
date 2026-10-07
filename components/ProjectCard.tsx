import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import type { Project } from "@/content/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="pcard">
      <div className="pic">
        {p.image ? (
          <Image src={p.image} alt={p.title} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 400px" className="cover" />
        ) : (
          <div className="pic-empty"><Icon name="image" size={34} /><span>Photo coming soon</span></div>
        )}
        {p.sample && <span className="badge">Placeholder</span>}
      </div>
      <div className="pbody">
        <p className="cat">{p.category}{p.location && <> &middot; {p.location}</>}</p>
        <h3>{p.title}</h3>
        <p className="psum">{p.summary}</p>
        <Link href={`/projects/${p.slug}`} className="more">
          View project<span className="sr-only">: {p.title}</span>
        </Link>
      </div>
    </article>
  );
}
