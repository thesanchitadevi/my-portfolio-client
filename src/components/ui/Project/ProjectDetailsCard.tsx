"use client";

import { IProject } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";

const ProjectDetailsCard = ({ project }: { project: IProject }) => {
  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const staggerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const projectDate = new Date(project?.data?.createdAt).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  );

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto p-6">
      {/* Left Section - Details */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.2 }}
        className="md:w-1/3"
      >
        <p className="text-gray-400 text-medium font-semibold mb-2">
          {projectDate}
        </p>
        <motion.h1
          variants={variants}
          className="text-4xl font-extrabold text-gray-800 mb-4"
        >
          {project?.data?.title}
        </motion.h1>
        <motion.p variants={variants} className="text-gray-500 font-bold mb-6">
          {project?.data?.description}
        </motion.p>
      </motion.div>

      {/* Middle Section - Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="md:w-1/3"
      >
        <Image
          src={project?.data?.image}
          alt="CBD Shampoo"
          className="w-full h-96 object-contain"
          width={500}
          height={500}
        />
      </motion.div>

      {/* Right Section - Features */}
      {/* Right Section - Tech Stack */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="md:w-1/3 space-y-4"
      >
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <FiCode className="text-xl" />
          <h3 className="text-lg font-bold">Tech Stack</h3>
        </div>

        <div className="space-y-3">
          {project?.data?.techStack.map((tech, index) => (
            <motion.div
              key={tech}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={staggerVariants}
              className="flex items-center gap-3 text-gray-700"
            >
              <div className="h-px w-6 bg-gray-300" />
              <span className="font-mono text-gray-500">{tech}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailsCard;
