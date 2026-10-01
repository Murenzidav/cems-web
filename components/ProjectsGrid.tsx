"use client";
import { useState } from "react";
import { categories, projects } from "@/content/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  const shown = limit ? filtered.slice(0, limit) : filtered;
  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects by category">
        {["All", ...categories].map((c) => (
          <button key={c} type="button" aria-pressed={active === c} onClick={() => setActive(c)}>{c}</button>
        ))}
      </div>
      <div className="pgrid" aria-live="polite">
        {shown.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>
      {shown.length === 0 && <p className="empty">No projects in this category yet.</p>}
    </>
  );
}
