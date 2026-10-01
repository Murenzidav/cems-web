import Link from "next/link";
import Icon from "./Icon";
import type { Service } from "@/content/services";

export default function ServiceCard({ s, index }: { s: Service; index?: number }) {
  return (
    <article className="svc" data-reveal>
      <div className="svc-top">
        <span className="svc-icon"><Icon name={s.icon} size={28} /></span>
        {index !== undefined && <span className="svc-num" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>}
      </div>
      <h3>{s.title}</h3>
      <p>{s.short}</p>
      <Link href={`/services/${s.slug}`} className="more">
        Learn more<span className="sr-only"> about {s.title}</span> <Icon name="arrow" size={16} />
      </Link>
    </article>
  );
}
