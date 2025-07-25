import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Team = () => {
  const [showStudentSubteams, setShowStudentSubteams] = useState(false);

  // Define the three teams
  const teams = [
    {
      id: 1,
      title: "Industrial Team",
      cover: "industrial team.jpg",
      lessons: "Industry Solutions",
      members: "Industry Experts",
      profileImg: "/single-page-app/images/industrial-profile.png"
    },
    {
      id: 2,
      title: "Faculty Team",
      cover: "faculty team.jpg",
      lessons: "Academic Excellence",
      members: "Faculty Members",
      profileImg: "/single-page-app/images/faculty-profile.png"
    },
    {
      id: 3,
      title: "Student Team",
      cover: "students team.jpg",
      lessons: "Innovation Hub",
      members: "Student Leaders",
      profileImg: "/single-page-app/images/student-profile.png"
    }
  ];

  // Student subteams
  const studentSubteams = [
    {
      id: 1,
      title: "Team A",
      cover: "/single-page-app/images/team-a-cover.jpg",
      lessons: "Research & Development",
      members: "Team A Members",
      profileImg: "/single-page-app/images/team-a-profile.png"
    },
    {
      id: 2,
      title: "Team B",
      cover: "/single-page-app/images/team-b-cover.jpg",
      lessons: "Product Innovation",
      members: "Team B Members",
      profileImg: "/single-page-app/images/team-b-profile.png"
    }
  ];

  const handleStudentTeamClick = (e) => {
    e.preventDefault();
    setShowStudentSubteams(true);
  };

  const handleBackClick = () => {
    setShowStudentSubteams(false);
  };

  return (
    
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            Meet Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400">
              {showStudentSubteams ? "Student Teams" : "Team"}
            </span>
          </h1>
          <div className="mt-4">
            <p className="text-base text-gray-300">
              {showStudentSubteams 
                ? "Explore our specialized student teams and their focus areas."
                : "Discover the experts driving innovation at Meta with cutting-edge ML solutions."
              }
            </p>
          </div>
          
          {/* Back Button */}
          {showStudentSubteams && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleBackClick}
              className="mt-4 inline-flex items-center text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors duration-200"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to All Teams
            </motion.button>
          )}
        </motion.div>

        {/* Team Cards */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-5xl mx-auto">
            {!showStudentSubteams ? (
              // Main Teams Grid (1x3 or responsive)
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                {teams.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30, rotateX: 15 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 10px 25px rgba(45, 212, 191, 0.1)"
                    }}
                    className="group rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300 shadow-lg hover:shadow-xl transform-gpu w-72"
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-36 w-full rounded-t-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-indigo-600/10 z-10"></div>
                      <img
                        src={item.cover}
                        alt={`${item.title} Cover`}
                        className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent z-20"></div>
                      
                      {/* Floating Badge */}
                      <div className="absolute top-3 right-3 z-30">
                        <CheckCircle2 className="w-4 h-4 text-teal-400" />
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="p-4 space-y-3">
                      {/* Header Info */}
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-teal-400">
                          {item.lessons}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Member Info */}
                      <div className="flex items-center space-x-2">
                        <img
                          src={item.profileImg || "/single-page-app/images/default-profile.png"}
                          alt={`${item.members} Profile`}
                          className="rounded-full h-6 w-6 object-cover border border-gray-600"
                        />
                        <span className="text-xs text-gray-300">
                          {item.members}
                        </span>
                      </div>

                      {/* Action Link */}
                      <div className="border-t border-gray-700/50 pt-3 mt-4">
                        {item.title === "Student Team" ? (
                          <button
                            onClick={handleStudentTeamClick}
                            className="flex items-center text-teal-400 hover:text-teal-300 text-xs font-medium transition-colors duration-200"
                          >
                            <span>Know Details</span>
                            <ArrowRight className="ml-1 w-3 h-3" />
                          </button>
                        ) : (
                          <Link
                            to={`/team-details/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                            className="flex items-center text-teal-400 hover:text-teal-300 text-xs font-medium transition-colors duration-200"
                          >
                            <span>Know Details</span>
                            <ArrowRight className="ml-1 w-3 h-3" />
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Subtle Corner Accent */}
                    <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-teal-500/20 to-transparent rounded-tl-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                  </motion.div>
                ))}
              </div>
            ) : (
              // Student Subteams Grid (2 teams)
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center">
                {studentSubteams.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30, rotateX: 15 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 10px 25px rgba(45, 212, 191, 0.1)"
                    }}
                    className="group rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300 shadow-lg hover:shadow-xl transform-gpu w-72"
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-36 w-full rounded-t-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-indigo-600/10 z-10"></div>
                      <img
                        src={item.cover}
                        alt={`${item.title} Cover`}
                        className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent z-20"></div>
                      
                      {/* Floating Badge */}
                      <div className="absolute top-3 right-3 z-30">
                        <CheckCircle2 className="w-4 h-4 text-teal-400" />
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="p-4 space-y-3">
                      {/* Header Info */}
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-teal-400">
                          {item.lessons}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Member Info */}
                      <div className="flex items-center space-x-2">
                        <img
                          src={item.profileImg || "/single-page-app/images/default-profile.png"}
                          alt={`${item.members} Profile`}
                          className="rounded-full h-6 w-6 object-cover border border-gray-600"
                        />
                        <span className="text-xs text-gray-300">
                          {item.members}
                        </span>
                      </div>

                      {/* Action Link */}
                      <div className="border-t border-gray-700/50 pt-3 mt-4">
                        <Link
                          to={`/team-details/student-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                          className="flex items-center text-teal-400 hover:text-teal-300 text-xs font-medium transition-colors duration-200"
                        >
                          <span>Know Details</span>
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Link>
                      </div>
                    </div>

                    {/* Subtle Corner Accent */}
                    <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-teal-500/20 to-transparent rounded-tl-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Optional Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-xs">
            Want to join our team? 
            <Link to="/careers" className="text-teal-400 hover:text-teal-300 ml-1 transition-colors duration-200">
              View positions →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
    
  );
};