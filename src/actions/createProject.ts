"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createProject = async (data: FormData) => {
  const techStack = data.getAll("techStack");
  const projectData = {
    title: data.get("title") as string,
    description: data.get("description") as string,
    liveLink: data.get("liveLink") as string,
    techStack: techStack.filter(
      (item) => typeof item === "string" && item.trim() !== ""
    ),
    image: data.get("image") as string,
  };

  // console.log({ projectData });

  const res = await fetch(`${process.env.BACKEND_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectData),
  });

  const contentType = res.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    await res.json();
  }

  // Revalidate the projects page cache
  revalidatePath("/dashboard/projects");

  // Redirect after successful creation and revalidation
  redirect("/dashboard/projects");
};
