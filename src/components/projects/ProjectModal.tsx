"use client";

import Image from "next/image";
import { Project } from "@/types/project";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectModal({
  project,
  open,
  onOpenChange,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-brand-bg-elevated border border-brand-border text-brand-text-primary max-w-lg max-h-[85vh] overflow-y-auto">
        {project.image && (
          <div className="relative w-full h-48 rounded-lg overflow-hidden border border-brand-border -mt-2">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover"
            />
          </div>
        )}

        <DialogHeader>
          <div className="flex items-center gap-3">
            <span
              className={`w-2 h-2 rounded-full ${project.status === "Completed" ? "bg-brand-success" : "bg-brand-accent"}`}
            />
            <span className="font-mono-brand text-xs uppercase tracking-wider text-brand-text-secondary">
              {project.status}
            </span>
          </div>
          <DialogTitle className="font-heading text-2xl mt-2">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-5 mt-2">
          <div>
            <h4 className="font-mono-brand text-xs uppercase tracking-wider text-brand-accent mb-1">
              Problem
            </h4>
            <p className="font-sans text-sm text-brand-text-secondary leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="font-mono-brand text-xs uppercase tracking-wider text-brand-accent mb-1">
              Approach
            </h4>
            <p className="font-sans text-sm text-brand-text-secondary leading-relaxed">
              {project.approach}
            </p>
          </div>

          <div>
            <h4 className="font-mono-brand text-xs uppercase tracking-wider text-brand-accent mb-1">
              Stack
            </h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono-brand text-xs px-2 py-1 rounded-full border border-brand-border text-brand-text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 font-sans text-sm px-4 py-2.5 rounded-full bg-brand-accent text-brand-bg-base font-medium text-center hover:opacity-90 transition-opacity"
              >
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 font-sans text-sm px-4 py-2.5 rounded-full border border-brand-accent text-brand-accent font-medium text-center hover:bg-brand-accent hover:text-brand-bg-base transition-colors"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
