import { CheckCircle2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { checklistItems } from "../constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "backOut"
    }
  }
};

const Workflow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="workflow"
      ref={ref}
      className="py-0 px-2 sm:px-6 lg:px-8 md:py-0 bg-transparent min-h-screen flex items-center"
      role="region"
      aria-labelledby="workflow-title"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-4"
        >
          <h2 
            id="workflow-title"
            className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Our <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">Workflow</span> Process
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Optimized with ML-driven precision for exceptional results
          </p>
        </motion.div>

        <div className="block lg:hidden px-4">
          <div className="relative">
            <div className="absolute left-6 top-0 w-1 bg-gray-200 rounded-full overflow-hidden" 
                 style={{ height: `${checklistItems.length * 200}px` }}>
              <motion.div
                className="w-full bg-gradient-to-b from-teal-500 via-blue-500 to-purple-500 rounded-full"
                initial={{ height: "0%" }}
                animate={isInView ? { height: "100%" } : { height: "0%" }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
                aria-hidden="true"
              />
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-12"
            >
              {checklistItems.map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <motion.div
                    variants={dotVariants}
                    className={`absolute left-6 transform -translate-x-1/2 z-10 w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                      index % 2 === 0 ? "bg-teal-500" : "bg-purple-500"
                    }`}
                    whileHover={{ 
                      scale: 1.3,
                      boxShadow: "0 0 20px rgba(0,0,0,0.3)"
                    }}
                    aria-hidden="true"
                  />

                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                    transition={{ delay: 1 + index * 0.3, duration: 0.4 }}
                    className={`absolute left-9 w-8 h-0.5 ${
                      index % 2 === 0 ? "bg-teal-400" : "bg-purple-400"
                    } rounded-full origin-left`}
                    aria-hidden="true"
                  />

                  <motion.div
                    variants={cardVariants}
                    className="ml-20 flex-1"
                    whileHover={{ 
                      x: 10,
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className={`bg-white rounded-2xl shadow-xl p-6 border-l-4 ${
                      index % 2 === 0 ? "border-teal-500" : "border-purple-500"
                    } hover:shadow-2xl transition-all duration-300 group`}>
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-full transition-all duration-300 ${
                          index % 2 === 0 
                            ? "bg-teal-100 group-hover:bg-teal-200" 
                            : "bg-purple-100 group-hover:bg-purple-200"
                        }`}>
                          <CheckCircle2
                            className={`w-6 h-6 transition-all duration-300 ${
                              index % 2 === 0 
                                ? "text-teal-600 group-hover:text-teal-700" 
                                : "text-purple-600 group-hover:text-purple-700"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative min-h-[500px] flex items-center">
            <div className="absolute top-1/2 left-16 right-16 h-1 bg-gray-200 rounded-full overflow-hidden transform -translate-y-1/2">
              <motion.div
                className="h-full bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-full"
                initial={{ width: "0%" }}
                animate={isInView ? { width: "100%" } : { width: "0%" }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
                aria-hidden="true"
              />
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="w-full relative"
            >
              <div className={`grid grid-cols-4 gap-0 relative`}>
                {checklistItems.map((item, index) => {
                  const isTop = index % 2 === 0;
                  
                  return (
                    <div key={index} className="relative flex justify-center">
                      <motion.div
                        variants={cardVariants}
                        className={`absolute w-72 ${
                          isTop 
                            ? "bottom-8 transform translate-y-0" 
                            : "top-8 transform translate-y-0"
                        }`}
                        whileHover={{ 
                          y: isTop ? -10 : 10, 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div className={`bg-white rounded-2xl shadow-xl p-6 border-l-4 ${
                          index % 2 === 0 ? "border-teal-500" : "border-purple-500"
                        } hover:shadow-2xl transition-all duration-300 group`}>
                          <div className="flex items-start space-x-4">
                            <div className={`p-3 rounded-full transition-all duration-300 ${
                              index % 2 === 0 
                                ? "bg-teal-100 group-hover:bg-teal-200" 
                                : "bg-purple-100 group-hover:bg-purple-200"
                            }`}>
                              <CheckCircle2
                                className={`w-6 h-6 transition-all duration-300 ${
                                  index % 2 === 0 
                                    ? "text-teal-600 group-hover:text-teal-700" 
                                    : "text-purple-600 group-hover:text-purple-700"
                                }`}
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        variants={dotVariants}
                        className={`absolute -top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                          index % 2 === 0 ? "bg-teal-500" : "bg-purple-500"
                        }`}
                        whileHover={{ 
                          scale: 1.3,
                          boxShadow: "0 0 20px rgba(0,0,0,0.3)"
                        }}
                        aria-hidden="true"
                      />
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;