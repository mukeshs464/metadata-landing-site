import React, { useState } from "react";
import { motion } from "framer-motion";
import { testimonials } from "../constants";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pause, Play } from 'lucide-react';

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <section id="testimonials" className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Motion Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-8 left-8 w-80 h-80 bg-teal-200/20 rounded-full shadow-lg opacity-15 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [-10, 15, -10],
            y: [0, 25, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-8 right-8 w-72 h-72 bg-indigo-200/20 rounded-full shadow-lg opacity-15 blur-3xl"
          animate={{
            scale: [1.1, 0.95, 1.1],
            x: [0, -25, 0],
            y: [-10, 10, -10],
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-200/20 rounded-full shadow-lg opacity-10 blur-3xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
            What People Are <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400">Saying</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our community about their experiences with Meta's ML solutions.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Carousel 
            indicators={false} 
            controls={true}
            interval={isPaused ? null : 2000} // This is the fix
            pause={false} // We handle pause with the button
          >
            {testimonials.map((testimonial, i) => (
              <Carousel.Item key={i}>
                <div className="flex justify-center items-center" style={{ minHeight: '250px' }}>
                  <div className="p-6 rounded-2xl bg-white/90 backdrop-blur-sm shadow-md border border-teal-200/30 hover:border-teal-400/50 transition-all duration-300 max-w-lg">
                    <div className="flex flex-col">
                      <div className="flex items-start mb-4">
                        <p className="text-sm text-gray-600 group-hover:text-gray-700 leading-relaxed">
                          "{testimonial.text}"
                        </p>
                      </div>
                      <div className="flex items-center">
                        <img
                          className="w-10 h-10 mr-4 rounded-full border border-teal-400/30"
                          src={testimonial.image}
                          alt={testimonial.user}
                        />
                        <div>
                          <h6 className="text-base font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">
                            {testimonial.user}
                          </h6>
                          <span className="text-xs font-normal italic text-gray-500">
                            {testimonial.company}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="absolute bottom-4 right-4 z-20">
            <button onClick={togglePause} className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
              {isPaused ? <Play size={20} /> : <Pause size={20} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
