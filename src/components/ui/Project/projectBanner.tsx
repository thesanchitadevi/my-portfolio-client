// components/ProjectsBanner.tsx
"use client";

import { motion } from "framer-motion";

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const shapeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

export default function ProjectsBanner() {
  const title = "Projects";

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-orange-200 to-purple-200 py-20 px-4">
      {/* Animated background shapes */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 bg-orange-500/40 rounded-full blur-7xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-500/40 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={shapeVariants}
          className="mb-8"
        >
          <motion.h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
            {title.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                custom={i}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl font-bold text-gray-500/70 mt-4"
          >
            Exploring Digital Innovation and Creative Solutions
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
