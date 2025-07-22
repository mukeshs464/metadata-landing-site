import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import CountUp from "react-countup";
import { ChevronDown, Sparkles, Brain, Zap, Users, TrendingUp, Code, Database, Star } from "lucide-react";

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
      <Team1 />
      <Testimonials />
      {/* <Architecture /> */}
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
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gray-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      
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
          className="text-3xl sm:text-6xl lg:text-5xl font-bold text-center tracking-tight mb-8"
        >
          <span className="block text-gray-100">Train,Predict,Deliver</span>
          <span className="block mt-3 text-4xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 text-transparent bg-clip-text">
            All in One ML Platform
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl sm:max-w-4xl mx-auto mb-8 leading-relaxed text-center px-4"
        >
          Meta data lets you upload datasets, train models, and run real predictions{" "}
          <span className="text-blue-300 font-semibold">with or without code</span>. 
          Build smarter workflows, test ideas fast, and turn raw data into meaningful insights.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-400 italic mb-8 text-center px-4"
        >
          Insights, not just output.
        </motion.p>

        {/* Early Access Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600/20 to-blue-600/20 border border-emerald-400/40 backdrop-blur-sm mb-12"
        >
          <Star size={18} className="text-emerald-300" />
          <span className="text-base font-semibold text-gray-200">
            <span className="text-emerald-300">Early Access.</span>{" "}
            <span className="text-blue-300">Real Innovation.</span>
          </span>
          <div className="hidden sm:block w-px h-4 bg-gray-600 mx-2"></div>
          <span className="hidden sm:inline text-sm text-gray-300">
            Get exclusive updates and be part of our founding community
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-16"
        >
          {/* Primary CTA */}
          <motion.button
            className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 flex items-center gap-3 overflow-hidden min-w-[240px] justify-center"
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
            <Zap size={22} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Join the Waitlist</span>
            <motion.div
              className="relative z-10 w-2 h-2 bg-white/40 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.button>
          
          {/* Secondary CTA */}
          <motion.button
            className="group relative px-8 py-5 rounded-2xl bg-gray-800/60 backdrop-blur-xl border border-gray-600/50 text-gray-100 text-lg font-semibold hover:bg-gray-700/70 hover:border-gray-500/60 transition-all duration-400 flex items-center gap-3 min-w-[220px] justify-center shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-600/0 via-gray-400/10 to-gray-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
            <TrendingUp size={20} className="relative z-10 group-hover:text-blue-300 transition-colors duration-300" />
            <span className="relative z-10">Get Notified at Launch</span>
          </motion.button>
          
          {/* Tertiary CTA */}
          <motion.button
            className="group relative px-6 py-5 rounded-2xl bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20 backdrop-blur-xl border border-purple-400/40 text-purple-200 text-lg font-semibold hover:from-purple-600/30 hover:via-pink-600/30 hover:to-indigo-600/30 hover:border-purple-400/60 transition-all duration-400 flex items-center gap-3 min-w-[200px] justify-center shadow-lg hover:shadow-purple-500/20"
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/0 via-purple-300/10 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
            <Users size={20} className="relative z-10 group-hover:text-pink-300 transition-colors duration-300" />
            <span className="relative z-10">See How It Works</span>
            <motion.div
              className="relative z-10 text-purple-300 group-hover:text-pink-300 transition-colors duration-300"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Launch Notice */}
<motion.p
 variants={itemVariants}
 className="text-sm sm:text-base text-gray-400 text-center px-4 mb-16 max-w-lg mx-auto leading-relaxed"
>
 <span className="text-blue-300 font-semibold">Meta data  goes live soon.</span>{" "}
 Sign up to stay in the loop and get priority access when we launch.
</motion.p>



        {/* Features Preview */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <motion.div
            className="group p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-400/40 backdrop-blur-sm hover:from-blue-600/30 hover:to-indigo-600/30 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Smart Algorithms</h3>
            <p className="text-gray-300 text-sm">Pre-trained models ready to use</p>
          </motion.div>
          
          <motion.div
            className="group p-6 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-400/40 backdrop-blur-sm hover:from-indigo-600/30 hover:to-purple-600/30 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-lg font-semibold text-gray-100 mb-2">Lightning Fast</h3>
            <p className="text-gray-300 text-sm">Deploy in minutes, not hours</p>
          </motion.div>
          
          <motion.div
            className="group p-6 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-400/40 backdrop-blur-sm hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
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
