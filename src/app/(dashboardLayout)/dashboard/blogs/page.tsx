// app/dashboard/blogs/page.tsx

import DashboardTableBlogs from "@/components/ui/Dashboard/DashboardBlog";

const DashboardBlogs = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/blogs`, {
    next: { tags: ["blogs"], revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const data = await res.json();
  const blogs = data.data.result;

  return <DashboardTableBlogs blogs={blogs} />;
};

export default DashboardBlogs;
