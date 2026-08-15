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

  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-6 py-16 md:py-32 flex flex-col gap-10"
    >
      <Reveal>
        <p className="font-mono-brand text-xs uppercase tracking-wider text-brand-accent">
          // projects
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
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
