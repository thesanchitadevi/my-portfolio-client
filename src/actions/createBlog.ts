"use server";

import { redirect } from "next/navigation";

export const createBlog = async (data: FormData) => {
  const blogData = Object.fromEntries(data.entries());

  const res = await fetch(`${process.env.BACKEND_URL}/blogs`, {
    method: "POST",
    body: JSON.stringify(blogData),
  });

  const blogInfo = await res.json();

  if (blogInfo) {
    redirect("/dashboard/blogs");
  }

  return blogInfo;
};
