import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { architectureOptions } from "../constants";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";

const Architecture = () => {
  // Card animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 30, rotateX: 10 },
    animate: { opacity: 1, y: 0, rotateX: 0 },
    hover: {
      scale: 1.05,
      rotateX: 5,
      boxShadow: "0 0 12px rgba(45, 212, 191, 0.3)",
    },
  };

  return (
    <section
      id="architecture"
      className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden"
    >
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
            Project{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400">
              Architecture
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the innovative frameworks powering Meta's ML solutions.
          </p>
        </motion.div>

        {/* Architecture Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {architectureOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/90 backdrop-blur-sm shadow-md border border-teal-200/30 hover:border-teal-400/50 transition-all duration-300"
            >
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-200 mb-3">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 leading-relaxed mb-4">
                  {option.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {option.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Popover>
                  <PopoverTrigger>
                    <button className="inline-flex justify-center items-center text-center w-full h-10 px-4 py-2 mt-4 text-sm font-medium text-teal-600 bg-teal-100/50 hover:bg-teal-200/70 border border-teal-400/50 rounded-lg transition-all duration-200">
                      View Details
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="bg-white/30 backdrop-blur-sm">
                    <div className="mt-4 text-gray-600">
                      <h4 className="text-base font-semibold text-gray-800 mb-2">
                        Details
                      </h4>
                      <ul className="space-y-2">
                        {option.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle2 className="w-4 h-4 text-teal-400 mr-2" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
