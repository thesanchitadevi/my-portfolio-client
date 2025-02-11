import ProjectsGrid from "@/components/ui/Project/ProjectGrid";

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
      <ProjectsGrid projects={projects} />
    </div>
  );
};

export default ProjectsPage;
