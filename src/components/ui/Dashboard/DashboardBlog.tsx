"use client";

import { useEffect, useState } from "react";
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { IBlog } from "@/types";
import { deleteBlog, updateBlog } from "@/actions/action";
import Form from "next/form";

const DashboardTableBlogs = ({ blogs }: { blogs: IBlog[] }) => {
  const [editingBlog, setEditingBlog] = useState<IBlog | null>(null);

  // Close modal when blogs data changes
  useEffect(() => {
    setEditingBlog(null);
  }, [blogs]);

  return (
    <div>
      <div className="w-full rounded-lg overflow-hidden p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          <Link href="/dashboard">Dashboard /</Link>
          <span className="text-orange-600"> Blogs</span>
        </h2>
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr>
              <th className="border border-gray-300 px-2 py-1">Title</th>
              <th className="border border-gray-300 px-2 py-1">Content</th>
              <th className="border border-gray-300 px-2 py-1">Category</th>
              <th className="border border-gray-300 px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id} className="border border-gray-300">
                <td className="border border-gray-300 px-2 py-1">
                  {blog.title}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {blog.content.slice(0, 50)}...
                  <Link
                    href={`/blogs/${blog._id}`}
                    className="text-orange-600 underline"
                  >
                    read more
                  </Link>
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {blog.category}
                </td>
                <td className="px-2 py-3 flex justify-center gap-2">
                  <button
                    onClick={() => setEditingBlog(blog)}
                    className="p-3 hover:bg-gray-100 rounded"
                  >
                    <Pencil size={16} className="text-gray-700" />
                  </button>
                  <Form action={deleteBlog}>
                    <input type="hidden" name="id" value={blog._id} />
                    <button
                      type="submit"
                      className="p-3 hover:bg-gray-100 rounded"
                    >
                      <Trash size={16} className="text-red-700" />
                    </button>
                  </Form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Edit Modal */}
        {editingBlog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-950 rounded-lg p-6 w-full max-w-lg">
              <h2 className="text-xl font-bold mb-4">Edit Blog</h2>
              <Form action={updateBlog} className="space-y-4">
                <input type="hidden" name="id" value={editingBlog._id} />

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Title
                  </label>
                  <input
                    name="title"
                    defaultValue={editingBlog.title}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Content
                  </label>
                  <textarea
                    name="content"
                    defaultValue={editingBlog.content}
                    className="w-full p-2 border rounded h-32"
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingBlog(null)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
                  >
                    Save Changes
                  </button>
                </div>
              </Form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardTableBlogs;
