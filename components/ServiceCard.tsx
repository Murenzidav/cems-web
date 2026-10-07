import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/content/services";

export default function ServiceCard({ s, index }: { s: Service; index?: number }) {
  return (
    <article className="svc" data-reveal>
      <Image src={s.tile} alt="" fill sizes="(max-width:640px) 100vw, (max-width:1100px) 50vw, 300px" className="svc-img" />
      <div className="svc-body">
        {index !== undefined && <span className="svc-num" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>}
        <h3>{s.title}</h3>
        <p>{s.short}</p>
        <Link href={`/services/${s.slug}`} className="more more-light">
          Learn more<span className="sr-only"> about {s.title}</span>
        </Link>
      </div>
    </article>
  );
}
