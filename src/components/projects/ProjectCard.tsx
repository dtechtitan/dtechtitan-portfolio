"use client";

import Image from "next/image";
import { Project } from "@/types/project";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <Card
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View case study: ${project.title}`}
      className="bg-brand-bg-elevated border border-brand-border rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-all duration-200 ease-out hover:border-brand-accent/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg-base"
    >
      <div className="relative w-full h-40 bg-brand-bg-base border-b border-brand-border">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-mono-brand text-xs text-brand-text-secondary">
              preview coming soon
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-center justify-between">
          <span className="font-mono-brand text-xs uppercase tracking-wider text-brand-text-secondary">
            {project.status}
          </span>
          <span
            className={`w-2 h-2 rounded-full ${project.status === "Completed" ? "bg-brand-success" : "bg-brand-accent"}`}
          />
        </div>

        <h3 className="font-heading text-xl font-semibold text-brand-text-primary">
          {project.title}
        </h3>

        <p className="font-sans text-sm text-brand-text-secondary leading-relaxed">
          {project.hook}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="font-mono-brand text-xs px-2 py-1 rounded-full border border-brand-border text-brand-text-secondary"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="font-mono-brand text-xs px-2 py-1 text-brand-text-secondary">
              +{project.stack.length - 3}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
