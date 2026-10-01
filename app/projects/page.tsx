import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import ProjectsGrid from "@/components/ProjectsGrid";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Projects",
  description: "Building, road, infrastructure and wastewater projects by CEMS LTD, a civil engineering and construction company in Rwanda.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHead eyebrow="Our work" title="Projects" text="Browse our work by category." />
      <section className="section"><div className="wrap"><ProjectsGrid /></div></section>
      <CTABanner />
    </>
  );
}
