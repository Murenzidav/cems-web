import type { IconName } from "@/components/Icon";

export const about = {
  intro:
    "CEMS LTD provides integrated civil engineering, construction, infrastructure, wastewater treatment and construction-material solutions. From new buildings and roads to rehabilitation, MEP works and WWTP systems, one team handles your project and supplies the materials it needs.",
  // From the company's previous website. Keep these two numbers accurate.
  experienceYears: 15, // years of construction experience
  operatingYears: "over 10", // years the company has existed
  story: [
    "CEMS LTD (Civil Engineering & Multi-Services) is a Rwandan private company that brings a passion for excellence to every project, so that each challenge is handled successfully. We aim to provide the best construction experience, through relationships built on integrity and success built on performance.",
    "We are committed to bringing professionalism, good service and trust to building repair and maintenance, supply, installation and plumbing, and we take great pride in sending experienced, professional engineers to build and repair your buildings.",
  ],
  mission:
    "To develop, build and service the needs of Rwandans so that quality of life improves for everyone. We keep to professional standards within the civil engineering industry and put our clients first, building long-term relationships with private and public sector clients.",
  // TODO: Add the company's vision statement here. The Vision block on the About page appears only when this is filled.
  vision: "",
  values: [
    { title: "Professional standards", text: "Work done properly, to the standards of the civil engineering industry." },
    { title: "Clients first", text: "Your requirements shape every decision we make on your project." },
    { title: "Long-term relationships", text: "We build lasting partnerships with private and public sector clients." },
    { title: "High commitment", text: "Our motto. We stay engaged with every project from the first visit to handover." },
  ],
};

/**
 * Registrations, certificates and memberships, shown as a logo grid on the About page.
 * The section appears only when this list has entries. Add real ones only, e.g.
 * { name: "RDB company registration", detail: "Rwanda Development Board", logo: "/images/cert-rdb.png" }
 */
export const certifications: { name: string; detail?: string; logo?: string }[] = [];

/** "Why choose CEMS". Keep every claim here backed by real company information. */
export const reasons: { icon: IconName; title: string; text: string }[] = [
  { icon: "layers", title: "Integrated engineering services", text: "Design, construction, maintenance and materials supply from a single company." },
  { icon: "shield", title: "Quality-focused work", text: "We work to the professional standards of the civil engineering industry." },
  { icon: "calendar", title: "High commitment", text: "Our motto. We stay engaged with every project from the first visit to handover." },
  { icon: "wrench", title: "Multi-service capability", text: "Buildings, roads, MEP works, wastewater treatment and construction materials." },
  { icon: "pin", title: "Local knowledge", text: "Based in Kicukiro, Kigali, and focused on the needs of Rwandans." },
  { icon: "users", title: "Clients first", text: "Your requirements shape every decision, and we aim for long-term relationships." },
];
