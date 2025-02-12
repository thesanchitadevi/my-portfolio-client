// app/actions.ts

"use server";

import { revalidateTag } from "next/cache";

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
