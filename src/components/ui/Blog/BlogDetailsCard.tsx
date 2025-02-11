"use client";

import { IBlog } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";

const BlogDetailsCard = ({ blog }: { blog: IBlog }) => {
  return (
    <div className="container mx-auto px-4 py-12">
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
            src={blog.image}
            alt={blog.title}
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
          <div className="flex justify-between text-gray-500 mb-4">
            <span>{blog.date}</span>
            <span>{blog.category}</span>
          </div>
          <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
          <p className="text-gray-700 leading-relaxed">{blog.description}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogDetailsCard;
