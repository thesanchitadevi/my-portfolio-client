"use client";

import { motion } from "framer-motion";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export type BlogDetailsCardProps = {
  data: {
    title: string;
    image: string;
    category: string;
    content: string;
    createdAt: string;
  };
};

const BlogDetailsCard = ({ blog }: { blog: BlogDetailsCardProps }) => {
  const blogDate = new Date(blog?.data?.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Typewriter Title */}
      <h1 className="md:text-xl text-sm font-bold mb-6 text-gray-700 dark:text-gray-100">
        <Link href="/blogs">Blogs / </Link>
        <Typewriter
          words={[blog?.data?.title]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col md:flex-row gap-8"
      >
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="md:w-1/2"
        >
          <Image
            src={blog?.data?.image}
            alt={blog?.data?.title}
            className="rounded-lg shadow-lg w-full h-96 object-cover"
            width={500}
            height={500}
          />
        </motion.div>

        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          className="md:w-1/2"
        >
          <div className="flex items-center text-lg text-gray-500 dark:text-gray-400 mb-2">
            <span>{blogDate}</span>
            <Dot size={24} />
            <span>{blog?.data?.category}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 md:w-1/2">
            {blog?.data?.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {blog?.data?.content}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogDetailsCard;
