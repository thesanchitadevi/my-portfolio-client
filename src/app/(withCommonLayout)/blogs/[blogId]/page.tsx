import BlogDetailsCard from "@/components/ui/Blog/BlogDetailsCard";

const BlogDetailPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const res = await fetch(`${process.env.BACKEND_URL}/blogs/${blogId}`, {});
  const blog = await res.json();

  return (
    <div className="w-[90%] mx-auto my-10">
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailPage;
