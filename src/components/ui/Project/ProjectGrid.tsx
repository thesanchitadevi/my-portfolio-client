// components/ProjectsGrid.tsx
import { IProject } from "@/types";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects }: { projects: IProject[] }) {
  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
