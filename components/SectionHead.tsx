export default function SectionHead({ eyebrow, title, text, center, light, id, children }: {
  eyebrow: string; title: string; text?: string; center?: boolean; light?: boolean; id?: string; children?: React.ReactNode;
}) {
  return (
    <div className={`shead${center ? " center" : ""}${children ? " with-action" : ""}`} data-reveal>
      <div>
        <p className={`eyebrow${light ? " eyebrow-light" : ""}`}>{eyebrow}</p>
        <h2 id={id}>{title}</h2>
        {text && <p className="lead">{text}</p>}
      </div>
      {children}
    </div>
  );
}
