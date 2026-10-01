import Icon from "./Icon";
import SectionHead from "./SectionHead";
import { reasons } from "@/content/about";

export default function WhyChoose() {
  return (
    <section className="section navy-sec" aria-labelledby="why-title">
      <div className="wrap">
        <SectionHead id="why-title" light center eyebrow="Why choose CEMS" title="A dependable partner from planning to handover"
          text="What clients can expect when they work with CEMS LTD." />
        <ul className="why">
          {reasons.map((r) => (
            <li key={r.title} data-reveal>
              <span className="why-icon"><Icon name={r.icon} size={26} /></span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
