import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import CountUp from "react-countup";
import { ChevronDown, Sparkles, Brain, Zap, Users, TrendingUp, Code, Database } from "lucide-react";

// Import your existing components
import FeatureSection from "./FeatureSection";
import { AboutUs } from "./AboutUs";
import { Team } from "./Team";
import Workflow from "./Workflow";
import Team1 from "./Team1";
import Testimonials from "./Testimonials";
import { Architecture } from "./Architecture";

const activeUsers = 1200;
const totalProjects = 5600;
const modelsDeployed = 890;

const Home = () => {
  return (
    <>
      <HomeContent />
      <div className="px-6 mx-auto max-w-7xl">
        <FeatureSection />
      </div>
      <AboutUs />
      <div className="px-6 mx-auto max-w-7xl">
        <Workflow />
        <Team1 />
      </div>
      <Team />
      <div className="px-6 mx-auto max-w-7xl">
        <Testimonials />
        {/* <Architecture /> */}
      </div>
    </>
  );
};

const HomeContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    controls.start("visible");
  }, [controls]);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="Home"
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gray-900 pt-10 pb-20 px-4"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 -z-10"></div>
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [-20, 20, -20],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-32 left-16 text-blue-400/40"
        animate={floatingAnimation}
      >
        <Brain size={32} />
      </motion.div>
      <motion.div
        className="absolute top-40 right-24 text-indigo-400/40"
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
      >
        <Code size={28} />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-32 text-purple-400/40"
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
      >
        <Database size={24} />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-400/40 backdrop-blur-sm mb-8"
        >
          <Sparkles size={16} className="text-blue-300" />
          <span className="text-sm font-medium text-gray-200">
            Trusted by {activeUsers}+ developers worldwide
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold text-center tracking-tight mb-8"
        >
          <span className="block text-gray-100">ML tools</span>
          <span className="block bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 text-transparent bg-clip-text">
            for developers
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          Transform your data into actionable insights with our{" "}
          <span className="text-blue-300 font-semibold">preloaded ML algorithms</span>.
          Build smarter applications and make data-driven decisions effortlessly.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300">
              <CountUp end={activeUsers} duration={2} />+
            </div>
            <div className="text-sm text-gray-300">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-300">
              <CountUp end={totalProjects} duration={2} />+
            </div>
            <div className="text-sm text-gray-300">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300">
              <CountUp end={modelsDeployed} duration={2} />+
            </div>
            <div className="text-sm text-gray-300">Models Deployed</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.button
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap size={20} />
            Get Started Free
            <motion.div
              className="w-0 h-0.5 bg-white/30 group-hover:w-full transition-all duration-300"
              initial={{ width: 0 }}
            />
          </motion.button>
          
          <motion.button
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm border border-purple-400/50 text-purple-200 text-lg font-semibold hover:from-purple-600/40 hover:to-pink-600/40 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Users size={20} />
            Join Community
          </motion.button>
        </motion.div>

        {/* Features Preview */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16"
        >
          <motion.div
            className="group p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-400/40 backdrop-blur-sm hover:from-blue-600/30 hover:to-indigo-600/30 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            {/* <div className="w-12 h-12 rounded-full bg-blue-500/30 flex items-center justify-center mb-4 group-hover:bg-blue-500/40 transition-colors">
              
            </div> */}
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Smart Algorithms</h3>
            <p className="text-gray-300 text-sm">Pre-trained models ready to use</p>
          </motion.div>
          
          <motion.div
            className="group p-6 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-400/40 backdrop-blur-sm hover:from-indigo-600/30 hover:to-purple-600/30 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            {/* <div className="w-12 h-12 rounded-full bg-indigo-500/30 flex items-center justify-center mb-4 group-hover:bg-indigo-500/40 transition-colors">
              
            </div> */}
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Lightning Fast</h3>
            <p className="text-gray-300 text-sm">Deploy in minutes, not hours</p>
          </motion.div>
          
          <motion.div
            className="group p-6 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-400/40 backdrop-blur-sm hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            {/* <div className="w-12 h-12 rounded-full bg-purple-500/30 flex items-center justify-center mb-4 group-hover:bg-purple-500/40 transition-colors">
              <Code className="text-purple-300" size={24} />
            </div> */}
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Developer First</h3>
            <p className="text-gray-300 text-sm">Built for seamless integration</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-gray-300 hover:text-gray-100 transition-colors cursor-pointer" size={24} />
      </motion.div>
    </section>
  );
};

export default Home;
