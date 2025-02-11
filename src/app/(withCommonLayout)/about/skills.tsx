"use client";

import { motion } from "framer-motion";
import { FaCode, FaServer, FaPaintBrush, FaCogs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiGit,
} from "react-icons/si";

const SkillsSection = () => {
  const skills = [
    { name: "Frontend", Icon: FaCode, level: 90 },
    { name: "Backend", Icon: FaServer, level: 85 },
    { name: "UI/UX", Icon: FaPaintBrush, level: 80 },
    { name: "DevOps", Icon: FaCogs, level: 75 },
  ];

  const techIcons = [
    { Icon: SiReact, color: "text-[#61DAFB]", name: "React" },
    { Icon: SiNextdotjs, color: "text-black", name: "Next.js" },
    { Icon: SiTailwindcss, color: "text-[#06B6D4]", name: "Tailwind" },
    { Icon: SiNodedotjs, color: "text-[#339933]", name: "Node.js" },
    { Icon: SiTypescript, color: "text-[#3178C6]", name: "TypeScript" },
    { Icon: SiGit, color: "text-[#F05032]", name: "Git" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 px-4 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h6 className="text-orange-500 font-extrabold uppercase">
            Technical Skills
          </h6>
          <h2 className="text-gray-800 text-2xl font-extrabold">
            I offer a Full-cycle of Web Development Services
          </h2>
          <p className="text-gray-400 text-bold">
            Equipped with a versatile tech stack spanning modern frontend
            frameworks, cloud-native architectures, and DevOps automation.
          </p>
        </motion.div>

        {/* Skill Progress Bars */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map(({ name, Icon, level }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Icon className="h-6 w-6 text-orange-700" />
                </div>
                <h3 className="ml-4 text-xl font-semibold">{name}</h3>
              </div>

              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-xs font-bold inline-block py-1 px-2 rounded-full text-gray-800">
                    {level}%
                  </span>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-orange-600 rounded h-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Icons Grid */}
        <motion.div
          className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-4 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techIcons.map(({ Icon, color, name }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-4"
            >
              <Icon className={`w-12 h-12 mx-auto ${color}`} />
              <span className="mt-2 block text-sm">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
