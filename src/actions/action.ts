// app/actions.ts

"use server";

import { revalidateTag } from "next/cache";

/* For Blog */
export const deleteBlog = async (formData: FormData) => {
  const id = formData.get("id");
  const res = await fetch(`${process.env.BACKEND_URL}/blogs/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete blog");
  }

  revalidateTag("blogs");
};

export const updateBlog = async (formData: FormData) => {
  const id = formData.get("id");
  const blogData = Object.fromEntries(formData.entries());

  const res = await fetch(`${process.env.BACKEND_URL}/blogs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  });

  if (!res.ok) {
    throw new Error("Failed to update blog");
  }

  revalidateTag("blogs");
};

/* For Project */
export const deleteProject = async (formData: FormData) => {
  const id = formData.get("id");
  const res = await fetch(`${process.env.BACKEND_URL}/projects/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete project");
  }

  revalidateTag("projects");
};

export const updateProject = async (formData: FormData) => {
  const id = formData.get("id");
  const projectData = Object.fromEntries(formData.entries());

  const res = await fetch(`${process.env.BACKEND_URL}/projects/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectData),
  });

  if (!res.ok) {
    throw new Error("Failed to update project");
  }

  revalidateTag("projects");
};
