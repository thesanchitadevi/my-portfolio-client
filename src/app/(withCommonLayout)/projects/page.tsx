import ProjectsBanner from "@/components/ui/Project/projectBanner";
import ProjectsGrid from "@/components/ui/Project/ProjectGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Sanchita Devi",
  description: "Check out the latest projects",
};

const ProjectsPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/projects`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await res.json();
  const projects = data.data.result;

  // console.log(projects);

  return (
    <div>
      <ProjectsBanner />
      <ProjectsGrid projects={projects} />
    </div>
  );
};

export default ProjectsPage;
