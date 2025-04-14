import projectsData from "@/data/projects.json";
import type { Project } from "@/types/project";

export function getAllProjects(): Project[] {
  return projectsData as Project[];
}

export function getFeaturedProjects(count = 4): Project[] {
  const projects = getAllProjects();
  return projects.slice(0, count);
}

export function getProjectById(id: string): Project | undefined {
  const projects = getAllProjects();
  return projects.find((project) => project.id === id);
}
