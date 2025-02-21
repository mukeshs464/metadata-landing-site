import CountUp from "react-countup";
import { motion } from "framer-motion";
import FeatureSection from "./FeatureSection";
import { AboutUs } from "./AboutUs";
import { Team } from "./Team";
import Workflow from "./Workflow";
import Team1 from "./Team1";
import Testimonials from "./Testimonials";
import { Architecture } from "./Architecture";


const activeUsers = 1200;
const Home = () => {
  return(
    <>
      <HomeContent />
      <FeatureSection />
      <AboutUs />
      <Workflow />
      <Team />
      <Team1 />
      <Testimonials />
      {/* <Architecture /> */}

    </>
  )
}


const HomeContent = () => {
  return (
    <section
      id="Home"
      className="flex flex-col items-center justify-center h-[80vh] mt-6 lg:mt-0 px-4"
    >
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ML tools
        <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </motion.h1>

      {/* Animated Subtext */}
      <motion.p
        className="mb-10 text-lg text-center text-neutral-500 max-w-4xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Easily feed your data into preloaded machine learning algorithms and
        unlock data-driven insights to make smarter, more informed decisions.
      </motion.p>

      {/* Buttons Section */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <button className="px-6 py-3 rounded-full bg-indigo-600 text-white text-lg font-medium hover:font-white hover:bg-black">
          Get Started
        </button>
        <button className="px-6 py-3 rounded-full bg-indigo-600 text-white text-lg font-medium hover:font-white hover:bg-black">
          Learn More
        </button>
        <button className="px-6 py-3 rounded-full bg-white text-black text-lg font-medium hover:bg-gray-200">
          Explore
        </button>
      </motion.div>
    </section>
  );
};


export default Home;