import BlogCard from "../ui/Blog/BlogCard";
import { IBlog } from "@/types";

const FeaturedBlogs = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/blogs`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await res.json();
  const blogs = data.data.result;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="space-y-4">
          <h6 className="text-orange-500 font-extrabold uppercase">
            Featured Blogs
          </h6>
          <h2 className="text-gray-800 text-2xl font-extrabold">
            Check out the latest on demand blogs
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
          {blogs.slice(0, 3).map((blog: IBlog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
