import React from "react";
import { CheckCircle2 } from "lucide-react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  // Card tilt animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 20, rotateX: 10 },
    animate: { opacity: 1, y: 0, rotateX: 0 },
    hover: { scale: 1.05, rotateX: 5, boxShadow: "0 0 12px rgba(45, 212, 191, 0.5)" },
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 px-4 sm:px-6 lg:px-8 border-t border-teal-500/20">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-6 left-6 w-48 h-48 bg-teal-600/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-6 right-6 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1.25, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Branding and Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <motion.h2
            animate={{ scale: [1, 1.05, 1], rotate: [0, 3, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-2xl font-extrabold text-white"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400">
              Meta
            </span>
          </motion.h2>
          <p className="mt-2 text-sm text-gray-300 max-w-md mx-auto">
            Stay connected with the latest in machine learning innovation.
          </p>
          <div className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-60 bg-gray-800/70 backdrop-blur-md text-gray-300 rounded-l-md border border-teal-500/30 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-medium rounded-r-md transition-all duration-200 shadow-md">
              Join Now
            </button>
          </div>
        </motion.div>

        {/* Links Grid with Card Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gray-800/70 backdrop-blur-md p-5 rounded-lg border border-teal-500/20"
          >
            <h3 className="text-base font-semibold text-white mb-3">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    <CheckCircle2 className="w-3 h-3 text-teal-400" />
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-gray-800/70 backdrop-blur-md p-5 rounded-lg border border-teal-500/20"
          >
            <h3 className="text-base font-semibold text-white mb-3">Platform</h3>
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    <CheckCircle2 className="w-3 h-3 text-teal-400" />
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-gray-800/70 backdrop-blur-md p-5 rounded-lg border border-teal-500/20"
          >
            <h3 className="text-base font-semibold text-white mb-3">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    <CheckCircle2 className="w-3 h-3 text-teal-400" />
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Media and Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <div className="flex justify-center gap-4 mb-4">
            {[
              { href: "https://twitter.com", icon: "M22 4.01a8.04 8.04 0 0 1-2.3.63 4.01 4.01 0 0 0 1.76-2.21 8.02 8.02 0 0 1-2.54.97A4 4 0 0 0 15.94 2c-2.22 0-4 1.8-4 4 0 .31.04.62.1.92A11.36 11.36 0 0 1 3.5 2.79a4 4 0 0 0-.54 2.02c0 1.4.71 2.63 1.78 3.36a4 4 0 0 1-1.81-.5v.05c0 1.95 1.39 3.58 3.23 3.95a4.01 4.01 0 0 1-1.8.07c.51 1.6 2 2.77 3.77 2.8A8.03 8.03 0 0 1 2 16.58 11.32 11.32 0 0 0 7.28 18c7.42 0 11.47-6.14 11.47-11.47 0-.18 0-.35-.01-.52A8.17 8.17 0 0 0 22 4.01z" },
              { href: "https://linkedin.com", icon: "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93v5.67H9.35V8.5h3.41v1.56h.05c.48-.91 1.65-1.87 3.39-1.87 3.62 0 4.29 2.38 4.29 5.48v6.78zM5.34 7.25c-1.15 0-2.08-.93-2.08-2.08s.93-2.08 2.08-2.08 2.08.93 2.08 2.08-.93 2.08-2.08 2.08zm1.78 13.2H3.56V8.5h3.56v11.95zM22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" },
              { href: "https://github.com", icon: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.19.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.48 5.94.43.37.81 1.09.81 2.2v3.26c0 .32.22.69.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.2, boxShadow: "0 0 8px rgba(45, 212, 191, 0.5)" }}
                className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d={social.icon} />
                </svg>
              </motion.a>
            ))}
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Meta. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;