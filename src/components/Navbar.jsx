import React from "react";
import { CheckCircle2, ArrowUpRight, Mail } from "lucide-react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-10 px-4 sm:px-6 lg:px-8 border-t border-teal-500/20 overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/5 via-transparent to-indigo-900/5"></div>
        
        {/* Animated Orbs */}
        <motion.div
          className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-radial from-teal-600/8 via-teal-600/4 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-radial from-indigo-600/8 via-indigo-600/4 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            rotate: [360, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(45, 212, 191, 0.15) 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Brand Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-indigo-600 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-white font-bold text-lg">M</span>
                  </motion.div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-teal-500/20 to-indigo-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400">
                    Meta Data
                  </span>
                </h2>
              </div>
              
              <p className="text-gray-400 leading-relaxed max-w-md text-sm">
                Revolutionizing machine learning with intelligent, no-code solutions. 
                <span className="text-teal-300 font-medium"> Transform data into insights</span> 
                {" "}and build the future with AI.
              </p>
            </div>

            {/* Enhanced Newsletter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400" />
                <h3 className="text-sm font-semibold text-gray-200">Join Our Newsletter</h3>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-indigo-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative flex bg-gray-900/80 rounded-lg border border-gray-700/50 overflow-hidden backdrop-blur-sm">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 text-sm bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition-colors"
                  />
                  <motion.button 
                    className="px-6 py-3 bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-500 hover:to-indigo-500 text-white text-sm font-semibold transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Subscribe</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.button>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Get updates on new features, AI insights, and exclusive content.
              </p>
            </div>
          </motion.div>

          {/* Links Sections - Enhanced */}
          {[
            { title: "Resources", links: resourcesLinks, delay: 0.1 },
            { title: "Platform", links: platformLinks, delay: 0.2 },
            { title: "Community", links: communityLinks, delay: 0.3 }
          ].map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: section.delay, ease: "easeOut" }}
              className="lg:col-span-2 space-y-4"
            >
              <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.slice(0, 5).map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: section.delay + (index * 0.1) }}
                  >
                    <motion.a
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-gray-400 hover:text-teal-300 transition-all duration-300 relative"
                      whileHover={{ x: 4 }}
                    >
                      <div className="relative">
                        <CheckCircle2 className="w-3 h-3 text-teal-500/60 group-hover:text-teal-400 transition-colors duration-300" />
                        <div className="absolute inset-0 w-3 h-3 bg-teal-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
                      </div>
                      <span className="relative">
                        {link.text}
                        <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-teal-400 to-indigo-400 group-hover:w-full transition-all duration-300"></div>
                      </span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0" />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gradient-to-r from-transparent via-gray-800/50 to-transparent"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Enhanced Copyright */}
            <div className="flex flex-col lg:flex-row items-center gap-4 text-xs text-gray-500">
              <p>© {new Date().getFullYear()} Meta. All rights reserved.</p>
              <div className="hidden lg:block w-px h-4 bg-gray-700"></div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-teal-400 transition-colors">Cookie Policy</a>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-500 mr-3">Follow us:</span>
              {[
              
                { 
                  name: "LinkedIn",
                  href: "https://linkedin.com", 
                  icon: "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93v5.67H9.35V8.5h3.41v1.56h.05c.48-.91 1.65-1.87 3.39-1.87 3.62 0 4.29 2.38 4.29 5.48v6.78zM5.34 7.25c-1.15 0-2.08-.93-2.08-2.08s.93-2.08 2.08-2.08 2.08.93 2.08 2.08-.93 2.08-2.08 2.08zm1.78 13.2H3.56V8.5h3.56v11.95zM22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z",
                  color: "hover:text-blue-500"
                },
                { 
                  name: "GitHub",
                  href: "https://github.com", 
                  icon: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.19.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.48 5.94.43.37.81 1.09.81 2.2v3.26c0 .32.22.69.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z",
                  color: "hover:text-gray-300"
                },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    boxShadow: "0 0 20px rgba(45, 212, 191, 0.3)" 
                  }}
                  className={`group relative p-2 text-gray-500 ${social.color} transition-all duration-300 rounded-lg hover:bg-gray-800/50`}
                  aria-label={social.name}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600/0 via-teal-600/10 to-indigo-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 relative z-10"
                  >
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

