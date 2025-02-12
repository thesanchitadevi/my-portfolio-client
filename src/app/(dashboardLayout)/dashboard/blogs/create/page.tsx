import BlogForm from "@/components/ui/Blog/BlogForm";
import Link from "next/link";
import React from "react";

const BlogCreatePage = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden p-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        <Link href="/dashboard">Dashboard /</Link>
        <Link href="/dashboard/blogs"> Projects /</Link>{" "}
        <span className="text-xl font-bold text-orange-600">Add New Blog</span>
      </h2>
      <BlogForm />
    </div>
  );
};

export default BlogCreatePage;
