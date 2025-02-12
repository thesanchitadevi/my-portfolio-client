import { createBlog } from "@/actions/CreateBlog";
import { ImageIcon, Text } from "lucide-react";
import Form from "next/form";

const BlogForm = () => {
  return (
    <div>
      <Form action={createBlog} className="max-w-2xl space-y-6">
        {/* Title Input */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Text size={18} />
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Project Title"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Text size={18} />
            Blog category
          </label>
          <input
            type="text"
            id="category"
            name="ticategorytle"
            placeholder="Blog Category"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>

        {/* Description Input */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Text size={18} />
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows={4}
            placeholder="Blog content"
            className="w-full p-2 border rounded-md h-32 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>

        {/* Image URL Input */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <ImageIcon size={18} />
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            placeholder="https://example.com/image"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600"
        >
          Save Blog
        </button>
      </Form>
    </div>
  );
};

export default BlogForm;
//
