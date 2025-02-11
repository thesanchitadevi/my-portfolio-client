import ProjectDetailsCard from "@/components/ui/Project/ProjectDetailsCard";

const ProjectDetailPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;

  const res = await fetch(
    `${process.env.BACKEND_URL}/projects/${projectId}`,
    {}
  );
  const project = await res.json();

  return (
    <div className="w-[90%] mx-auto my-10">
      <ProjectDetailsCard project={project} />
    </div>
  );
};

export default ProjectDetailPage;
