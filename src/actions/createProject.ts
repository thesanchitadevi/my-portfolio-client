import { redirect } from "next/navigation";

export const createProject = async (data: FormData) => {
  const title = data.get("title") as string;
  const description = data.get("description") as string;
  const liveLink = data.get("liveLink") as string;
  const techStack = data.getAll("techStack") as string[];
  const image = data.get("image") as string;

  const projectData = {
    title,
    description,
    liveLink,
    techStack,
    image,
  };

  console.log({ projectData });

  const res = await fetch(`${process.env.BACKEND_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectData),
  });

  const projectInfo = await res.json();

  if (projectInfo) {
    redirect("/dashboard/projects");
  }
  return projectInfo;
};
