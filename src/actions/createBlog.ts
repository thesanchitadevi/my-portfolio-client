"use server";

export const createBlog = async (data: FormData) => {
  const blogData = Object.fromEntries(data.entries());

  console.log({ blogData });

  const res = await fetch(`${process.env.BACKEND_URL}/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  });

  const blogInfo = await res.json();

  console.log({ blogInfo });

  return blogInfo;
};
