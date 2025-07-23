import React from "react";
import { motion } from "framer-motion";
import { features } from "../constants";
import { CheckCircle2 } from "lucide-react";

const FeatureSection = () => {
  // Card animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 30, rotateX: 10 },
    animate: { opacity: 1, y: 0, rotateX: 0 },
    hover: { scale: 1.05, rotateX: 5, boxShadow: "0 0 12px rgba(45, 212, 191, 0.3)" },
  };

  return (
    <section id="features" className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Motion Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-8 left-8 w-80 h-80 bg-teal-200/20 rounded-full shadow-lg opacity-15 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [-10, 15, -10],
            y: [0, 25, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-8 right-8 w-72 h-72 bg-indigo-200/20 rounded-full shadow-lg opacity-15 blur-3xl"
          animate={{
            scale: [1.1, 0.95, 1.1],
            x: [0, -25, 0],
            y: [-10, 10, -10],
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-200/20 rounded-full shadow-lg opacity-10 blur-3xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
            Discover Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400">Features</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Unleash the power of your data with our intuitive, cutting-edge platform.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-white/90 backdrop-blur-sm shadow-md border border-teal-200/30 hover:border-teal-400/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-100 to-indigo-100 flex items-center justify-center mb-4 group-hover:from-teal-200 group-hover:to-indigo-200 transition-all duration-300">
                  <div className="text-teal-600 group-hover:text-teal-700 text-xl">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-200">
                  {feature.text}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;