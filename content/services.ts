import type { IconName } from "@/components/Icon";

export type Service = {
  slug: string;
  title: string;
  /** Short name for menus and the footer. */
  label: string;
  icon: IconName;
  short: string;
  intro: string;
  points: string[];
  image?: { src: string; alt: string };
  /** Background photo for the service tile (decorative). */
  tile: string;
};

export const services: Service[] = [
  {
    slug: "building-construction",
    tile: "/images/site-blockwork.jpg",
    title: "Building Construction & Design",
    label: "Construction",
    icon: "building",
    short: "Commercial, industrial, administrative and residential buildings, with interior and exterior design.",
    intro: "We construct buildings for businesses, institutions and families, and can also take care of the interior and exterior design.",
    points: ["Commercial buildings", "Industrial buildings", "Administrative buildings", "Residential buildings", "Interior design", "Exterior design"],
    image: { src: "/images/site-blockwork.jpg", alt: "CEMS team laying blockwork walls on a steel-frame building site" },
  },
  {
    slug: "rehabilitation-maintenance",
    tile: "/images/site-road-grading.jpg",
    title: "Infrastructure Construction, Rehabilitation & Maintenance",
    label: "Infrastructure",
    icon: "road",
    short: "Construction, rehabilitation and maintenance of roads and buildings, including MEP works.",
    intro: "We build, rehabilitate and maintain roads, buildings and other infrastructure so they stay safe, useful and in good condition.",
    points: ["Road construction", "Road rehabilitation", "Building rehabilitation", "Infrastructure maintenance", "Mechanical, electrical and plumbing (MEP) works"],
    image: { src: "/images/site-road-grading.jpg", alt: "Motor graders levelling a road base beside industrial buildings" },
  },
  {
    slug: "wastewater-treatment",
    tile: "/images/site-drainage.jpg",
    title: "Wastewater Treatment",
    label: "Wastewater Treatment",
    icon: "water",
    short: "Installation and maintenance of wastewater treatment plant (WWTP) systems.",
    intro: "We install wastewater treatment plant (WWTP) systems and keep them running through regular maintenance.",
    points: ["Wastewater treatment plant installation", "WWTP systems", "Maintenance of wastewater treatment systems"],
  },
  {
    slug: "construction-materials",
    tile: "/images/site-steel-install.jpg",
    title: "Construction Materials",
    label: "Construction Materials",
    icon: "bricks",
    short: "Wholesale and retail supply of construction materials, in bulk or in small quantities.",
    intro: "We supply construction materials to contractors, businesses and individuals, in bulk or in small quantities.",
    points: ["Wholesale construction materials", "Retail construction materials", "Construction-material supply"],
  },
];
