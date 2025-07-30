import { motion } from "framer-motion";
import aboutImg from "../assets/metalogo.jpg";
import {
  Lightbulb,
  BookOpen,
  Users,
  PlayCircle,
  CheckCircle2,
} from "lucide-react";

export const AboutUs = () => {
  return (
    <section id="about-us" className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-16 left-16 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-16 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1.3, 1.1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [-20, 20, -20], y: [-10, 10, -10] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400">Meta</span> Shines
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Transform your data into insights with our intuitive ML platform, designed for simplicity and power.
          </p>
        </motion.div>

        {/* About Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: <Lightbulb size={40} />,
              title: "Instant Models",
              desc: "Upload data and use pre-trained models immediately.",
              color: "from-teal-500 to-teal-700",
            },
            {
              icon: <BookOpen size={40} />,
              title: "Code-Free Experience",
              desc: "Accessible ML for technical and non-technical users alike.",
              color: "from-indigo-500 to-indigo-700",
            },
            {
              icon: <Users size={40} />,
              title: "Model Versatility",
              desc: "Supports classification, regression, and clustering.",
              color: "from-purple-500 to-purple-700",
            },
            {
              icon: <PlayCircle size={40} />,
              title: "Seamless Data Flow",
              desc: "Handles diverse data formats effortlessly.",
              color: "from-emerald-500 to-emerald-700",
            },
          ].map((card, index) => (
            <AboutCard
              key={index}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
              color={card.color}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Content Section */}
        <div className="mt-20 flex flex-col lg:flex-row items-center gap-12">
          {/* Left - Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <img
              src={aboutImg}
              alt="Meta Logo"
              className="w-2/3 lg:w-3/4 rounded-2xl shadow-2xl border border-indigo-500/30"
            />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-1/2 bg-gray-800/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-teal-500/30"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Empower Your Decisions</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              With Meta, your data becomes a catalyst for innovation. Our platform streamlines machine learning, delivering insights through pre-trained models with ease.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Simplify complex data processing",
                "Access advanced ML models instantly",
                "Make informed decisions faster",
                "Optimize workflows with automation",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-teal-400" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-semibold rounded-md shadow-md transition-all duration-300">
              Explore Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const AboutCard = ({ icon, title, desc, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, rotateX: 5, boxShadow: "0 0 15px rgba(45, 212, 191, 0.5)" }}
      className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-md border border-teal-500/20 transition-all duration-300"
    >
      <div
        className={`w-14 h-14 flex items-center justify-center mx-auto mb-4 rounded-full bg-gradient-to-br ${color} text-white shadow-md`}
      >
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-white text-center mb-2">{title}</h4>
      <p className="text-sm text-gray-300 text-center">{desc}</p>
    </motion.div>
  );
};