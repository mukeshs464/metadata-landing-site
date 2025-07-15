import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { teams } from "../constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Team = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-12 left-12 w-64 h-64 bg-teal-600/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-12 right-12 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1.3, 1.1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400">Team</span>
          </h1>
          <p className="mt-3 text-base text-gray-300 max-w-2xl mx-auto">
            Discover the experts driving innovation at Meta with cutting-edge ML solutions.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teams.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, rotateX: 5, boxShadow: "0 0 12px rgba(45, 212, 191, 0.4)" }}
              className="rounded-lg bg-gray-800/70 backdrop-blur-md border border-teal-500/20 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 w-full rounded-t-lg">
                <img
                  src={item.cover}
                  alt={`${item.title} Cover`}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>

              {/* Text Content */}
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-300">{item.lessons}</span>
                  <CheckCircle2 className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <div className="flex items-center">
                  <img
                    src={item.profileImg || "/single-page-app/images/default-profile.png"}
                    alt={`${item.members} Profile`}
                    className="rounded-full h-8 w-8 object-cover mr-2"
                  />
                  <span className="text-sm text-gray-300">{item.members}</span>
                </div>
              </div>

              {/* Link to Details */}
              <div className="border-t border-teal-500/20 p-4">
                <Link
                  to={`/team-details/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-center text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors duration-200"
                >
                  Know Details
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};