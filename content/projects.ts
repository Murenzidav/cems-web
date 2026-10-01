// TODO: These are PLACEHOLDER projects so the layout can be seen. The photos are real
// CEMS site photos, but the titles and text are not. Before launch, replace each entry
// with a real project: change the text, set `location` and `year`, and remove `sample: true`.
export const categories = ["Buildings", "Roads", "Infrastructure", "Water & Wastewater"] as const;
export type Category = (typeof categories)[number];

export type Project = {
  slug: string;
  title: string;
  category: Category;
  /** Leave out to show a neutral "photo coming soon" panel. */
  image?: string;
  summary: string;
  description: string;
  location?: string; // shown only if set
  year?: string; // shown only if set
  sample?: boolean; // shows a "Placeholder" badge
};

export const projects: Project[] = [
  { slug: "sample-steel-frame-building", title: "Steel-frame building", category: "Buildings", image: "/images/site-blockwork.jpg", sample: true,
    summary: "Placeholder entry. Replace with the real project name, location and scope.",
    description: "This is a placeholder used to show the layout. Replace this text with the real scope, challenges and results of the project." },
  { slug: "sample-industrial-floor-slab", title: "Industrial floor slab", category: "Buildings", image: "/images/site-slab-pour.jpg", sample: true,
    summary: "Placeholder entry. Replace with the real project name, location and scope.",
    description: "This is a placeholder used to show the layout. Replace this text with the real scope, challenges and results of the project." },
  { slug: "sample-road-works", title: "Road works", category: "Roads", image: "/images/site-road-grading.jpg", sample: true,
    summary: "Placeholder entry. Replace with the real project name, location and scope.",
    description: "This is a placeholder used to show the layout. Replace this text with the real scope, challenges and results of the project." },
  { slug: "sample-site-drainage", title: "Site drainage", category: "Infrastructure", image: "/images/site-drainage.jpg", sample: true,
    summary: "Placeholder entry. Replace with the real project name, location and scope.",
    description: "This is a placeholder used to show the layout. Replace this text with the real scope, challenges and results of the project." },
  { slug: "sample-earthworks-and-steel-erection", title: "Earthworks and steel erection", category: "Infrastructure", image: "/images/site-earthworks.jpg", sample: true,
    summary: "Placeholder entry. Replace with the real project name, location and scope.",
    description: "This is a placeholder used to show the layout. Replace this text with the real scope, challenges and results of the project." },
  { slug: "sample-wastewater-treatment-plant", title: "Wastewater treatment plant", category: "Water & Wastewater", sample: true,
    summary: "Placeholder entry. Replace with a real WWTP project and photo.",
    description: "This is a placeholder used to show the layout. Replace this text with the real details of a wastewater treatment project and add a photo." },
];
