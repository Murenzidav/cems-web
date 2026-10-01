import Icon, { type IconName } from "./Icon";
import { site, siteHost } from "@/content/site";

const items: { icon: IconName; label: string; value: React.ReactNode }[] = [
  { icon: "phone", label: "Phone", value: <a href={site.phoneHref}>{site.phone}</a> },
  { icon: "whatsapp", label: "WhatsApp", value: <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">Chat with us</a> },
  { icon: "mail", label: "Email", value: <a href={`mailto:${site.email}`}>{site.email}</a> },
  { icon: "globe", label: "Website", value: <a href={site.url}>{siteHost}</a> },
  { icon: "pin", label: "Office", value: <>{site.street}, {site.area}<br />{site.city}, {site.country}</> },
  { icon: "mailbox", label: "Postal address", value: site.pobox },
];

export default function ContactDetails({ compact }: { compact?: boolean }) {
  return (
    <ul className={`cdetails${compact ? " compact" : ""}`}>
      {items.map((i) => (
        <li key={i.label}>
          <span className="cd-icon"><Icon name={i.icon} size={20} /></span>
          <span><b>{i.label}</b><span>{i.value}</span></span>
        </li>
      ))}
    </ul>
  );
}
