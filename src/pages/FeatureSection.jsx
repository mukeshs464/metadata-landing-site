import { motion } from "framer-motion";
import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-neutral-800 min-h-[800px]">
      {/* Header Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="bg-indigo-800 text-white rounded-full h-6 text-sm font-2xl px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build test you data{" "}
          <span className="bg-gradient-to-r from-blue-300 to-blue-800 text-transparent bg-clip-text">
            on models
          </span>
        </h2>
      </motion.div>

      {/* Features Grid */}
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2, // Stagger effect for each feature
            }}
            viewport={{ once: true }}
          >
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-white text-indigo-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-1 text-xl">{feature.text}</h5>
                <p className="text-md p-0 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
