"use client";

import { IBlog } from "@/types";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dot } from "lucide-react";

const FeaturedBlogCard = ({ blog }: { blog: IBlog }) => {
  const [isOpen, setIsOpen] = useState(false);

  const blogDate = new Date(blog?.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
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

      {/* Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-lg max-w-2xl w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover mb-4"
              width={500}
              height={500}
            />
            <div className="flex items-center text-lg text-gray-500 mb-2">
              <span>{blogDate}</span>
              <Dot size={24} />
              <span>{blog.category}</span>
            </div>
            <h2 className="text-2xl font-extrabold text-gray-800 mb-4">
              {blog.title}
            </h2>
            <p className="text-gray-600">{blog.content}</p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default FeaturedBlogCard;
