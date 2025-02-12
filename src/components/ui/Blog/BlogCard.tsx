"use client";

import { IBlog } from "@/types";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dot } from "lucide-react";
import { cardVariants } from "../Project/ProjectCard";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: IBlog }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, setIsOpen] = useState(false);

  const blogDate = new Date(blog?.createdAt ?? "").toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <Link href={`/blogs/${blog._id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        variants={cardVariants}
        className="rounded-lg overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover"
          width={500}
          height={500}
        />
        <div className="flex items-center text-lg text-gray-500 my-3">
          <span>{blogDate}</span>
          <Dot size={24} />
          <span>{blog.category}</span>
        </div>
        <h2 className="text-2xl font-extrabold text-gray-800 mb-4">
          {blog.title}
        </h2>
      </motion.div>
    </Link>
  );
};

export default BlogCard;
