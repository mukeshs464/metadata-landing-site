import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";
import { motion } from "framer-motion"; // For animations

const Workflow = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our <span className="text-teal-600">Workflow</span> Process
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Optimized with ML-driven precision
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-teal-200 h-full"></div>

          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.3 }}
              className={`relative mb-12 flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Card */}
              <div
                className={`w-full md:w-5/12 bg-gray-50 rounded-xl shadow-lg p-6 border-l-4 ${
                  index % 2 === 0 ? "border-teal-500" : "border-purple-500"
                }`}
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle2
                    className={`w-6 h-6 ${
                      index % 2 === 0 ? "text-teal-500" : "text-purple-500"
                    }`}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 rounded-full ${
                  index % 2 === 0 ? "bg-teal-500" : "bg-purple-500"
                }`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;