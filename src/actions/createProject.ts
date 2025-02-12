"use server";

import { redirect } from "next/navigation";

export const createProject = async (data: FormData) => {
  const projectData = Object.fromEntries(data.entries());
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
    redirect("/dahboard/projects");
  }
  return projectInfo;
};
