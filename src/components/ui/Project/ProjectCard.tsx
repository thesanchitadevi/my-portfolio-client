// components/ProjectCard.tsx
"use client";

import { IProject } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <motion.div
      className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative h-48 w-full">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="h-full w-full overflow-hidden"
        >
          <Image
            src={project.image}
            alt={project.title}
            // fill
            className="object-cover"
            width={500}
            height={500}
          />
        </motion.div>
      </div>

      <motion.div
        className="px-6 py-4"
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h3
          className="text-xl font-extrabold mb-2 text-gray-800 "
          variants={itemVariants}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="text-gray-400 text-lg mb-4"
          variants={itemVariants}
        >
          {project.description}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          variants={staggerVariants}
        >
          {project.techStack.map((tech) => (
            <motion.span
              key={tech}
              variants={itemVariants}
              className="px-3 py-1 bg-orange-100 text-orange-600  rounded-full text-sm"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div className="flex gap-4" variants={staggerVariants}>
          <motion.a
            href={project.liveLink}
            target="_blank"
            className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 font-medium"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo →
          </motion.a>
          {/* <motion.a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Source Code
          </motion.a> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
