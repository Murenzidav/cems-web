import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const paths = ["", "/services", "/projects", "/about", "/contact", "/privacy",
    ...services.map((s) => `/services/${s.slug}`), ...projects.filter((p) => !p.sample).map((p) => `/projects/${p.slug}`)];
  return paths.map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
}
