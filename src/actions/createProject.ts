"use server";

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

  redirect("/dahboard/projects");
};
