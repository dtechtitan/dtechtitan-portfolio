"use client";

import { useState } from "react";
import { projects } from "@/lib/projects-data";
import { Project } from "@/types/project";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import Reveal from "@/components/motion/Reveal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const handleCardClick = (project: Project) => {
    setSelected(project);
    setOpen(true);
  };

  const featured = projects.find((p) => p.id === "lagos-real-estate");
  const rest = projects.filter((p) => p.id !== "lagos-real-estate");

  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-6 py-16 md:py-32 flex flex-col gap-10"
    >
      <Reveal>
        <p className="font-mono-brand text-xs uppercase tracking-wider text-brand-accent">
          // projects
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-text-primary mt-2">
          Projects
        </h2>
      </Reveal>

      {featured && (
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono-brand text-xs uppercase tracking-wider text-brand-accent">
              Featured
            </span>
            <div className="h-px flex-1 bg-brand-border" />
          </div>
          <ProjectCard
            project={featured}
            onClick={() => handleCardClick(featured)}
          />
        </Reveal>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {rest.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.08}>
            <ProjectCard
              project={project}
              onClick={() => handleCardClick(project)}
            />
          </Reveal>
        ))}
      </div>

      <ProjectModal project={selected} open={open} onOpenChange={setOpen} />
    </section>
  );
}
