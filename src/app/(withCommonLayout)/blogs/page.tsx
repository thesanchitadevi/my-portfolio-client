import BlogBanner from "@/components/ui/Blog/BlogBanner";
import BlogCard from "@/components/ui/Blog/BlogCard";
import { IBlog } from "@/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blogs | Sanchita Devi",
  description: "Check out the latest on demand blogs",
};

const BlogPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/blogs`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const data = await res.json();
  const blogs = data.data.result;
  return (
    <div>
      <BlogBanner />
      <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: IBlog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
