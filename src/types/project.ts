export type ProjectStatus = "Completed" | "In Progress";

export interface Project {
  id: string;
  title: string;
  hook: string;
  problem: string;
  approach: string;
  stack: string[];
  status: ProjectStatus;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}
