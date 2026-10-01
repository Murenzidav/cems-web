import type { IconName } from "@/components/Icon";

export const about = {
  intro:
    "CEMS LTD provides integrated civil engineering, construction, infrastructure, wastewater treatment and construction-material solutions. From new buildings and roads to rehabilitation, MEP works and WWTP systems, one team handles your project and supplies the materials it needs.",
  mission:
    "To develop, build and service the needs of Rwandans so that quality of life improves for everyone. We keep to professional standards within the civil engineering industry and put our clients first, building long-term relationships with private and public sector clients.",
  values: [
    { title: "Professional standards", text: "Work done properly, to the standards of the civil engineering industry." },
    { title: "Clients first", text: "Your requirements shape every decision we make on your project." },
    { title: "Long-term relationships", text: "We build lasting partnerships with private and public sector clients." },
  ],
};

/** "Why choose CEMS". Keep every claim here backed by real company information. */
export const reasons: { icon: IconName; title: string; text: string }[] = [
  { icon: "layers", title: "Integrated engineering services", text: "Design, construction, maintenance and materials supply from a single company." },
  { icon: "shield", title: "Quality-focused work", text: "We work to the professional standards of the civil engineering industry." },
  { icon: "calendar", title: "High commitment", text: "Our motto. We stay engaged with every project from the first visit to handover." },
  { icon: "wrench", title: "Multi-service capability", text: "Buildings, roads, MEP works, wastewater treatment and construction materials." },
  { icon: "pin", title: "Local knowledge", text: "Based in Kicukiro, Kigali, and focused on the needs of Rwandans." },
  { icon: "users", title: "Clients first", text: "Your requirements shape every decision, and we aim for long-term relationships." },
];
