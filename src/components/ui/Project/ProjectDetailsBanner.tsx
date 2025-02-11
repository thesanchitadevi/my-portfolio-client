import { motion } from "framer-motion";

const ProjectDetailsBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-blue-900 min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Content Container */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white md:w-1/2"
        >
          <div className="mb-4 text-blue-400 font-mono">PRODUCT SHOWCASE</div>

          {/* Product Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-lg mb-8 text-gray-300"
          >
            Next-generation smart display with AI-powered visual optimization
            and seamless ecosystem integration
          </motion.p>

          {/* Tech Specs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="flex gap-4 flex-wrap"
          >
            {["4K AMOLED", "Quantum X2", "8GB RAM", "Smart AI"].map(
              (spec, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-blue-800/30 backdrop-blur-sm rounded-full border border-blue-400 text-sm"
                >
                  {spec}
                </span>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="md:w-1/2 relative"
        >
          <motion.img
            src="https://example.com/product-image.png"
            alt="NexaVision Pro"
            className="w-full max-w-[500px] mx-auto"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailsBanner;
