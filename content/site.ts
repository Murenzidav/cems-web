export const site = {
  name: "CEMS LTD",
  full: "Civil Engineering & Multi-Services",
  tagline: "High Commitment",
  description:
    "CEMS LTD is a civil engineering and construction company in Kigali, Rwanda, delivering buildings, roads and infrastructure, wastewater treatment plants and construction materials.",
  phone: "+250 788 452 068",
  phoneHref: "tel:+250788452068",
  whatsapp: "https://wa.me/250788452068",
  email: "cemsltd2023@gmail.com",
  street: "KK 8 Avenue",
  area: "Kicukiro",
  city: "Kigali",
  country: "Rwanda",
  pobox: "P.O. Box 852",
  mapQuery: "KK 8 Avenue, Kicukiro, Kigali, Rwanda",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cemsltd.rw",
  logo: "/images/cems-logo.jpg",
  /** Logo with white lettering on a transparent background, for dark backgrounds. */
  logoLight: "/images/cems-logo-light.png",
  // Add social links here when you have them, e.g. { label: "LinkedIn", href: "https://..." }
  social: [] as { label: string; href: string }[],
};

/** Website address without the protocol, for display. */
export const siteHost = site.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
