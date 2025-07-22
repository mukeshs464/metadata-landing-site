import React, { useState, useEffect } from 'react';
import { Zap, Globe, Lightbulb } from 'lucide-react';

const UnivSection = () => {
  const [activeConnection, setActiveConnection] = useState(0);

  const universities = [
    { name: "AUN", fullName: "American University of Nigeria", color: "bg-red-500", position: "top-left" },
    { name: "Amrita", fullName: "Amrita Vishwa Vidyapeetham", color: "bg-orange-500", position: "top-right" },
    { name: "KITS", fullName: "Karunya Institute", color: "bg-blue-500", position: "bottom" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConnection((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-transparent relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Institutional Partnership
          </h2>
          <p className="text-gray-600 text-lg">A collaborative initiative bridging academic excellence across three continents</p>
        </div>

        {/* Creative Triangular Connection Layout */}
        <div className="relative max-w-4xl mx-auto h-80 mb-12">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
            {/* Animated connection lines */}
            <line x1="-120" y1="25" x2="520" y2="25" stroke="#000" strokeWidth="5" strokeDasharray="5,5" className="opacity-40">
              <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite"/>
            </line>
            <line x1="-120" y1="20" x2="200" y2="220" stroke="#000" strokeWidth="3" strokeDasharray="5,5" className="opacity-40">
              <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite" begin="0.7s"/>
            </line>
            <line x1="520" y1="20" x2="200" y2="220" stroke="#000" strokeWidth="3" strokeDasharray="5,5" className="opacity-40">
              <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite" begin="1.4s"/>
            </line>
            
            {/* Gradients for lines */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor:'#ef4444', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#ef4444', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#f97316', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
              </linearGradient>
            </defs>
          </svg>

          {/* University Nodes */}
          <div className="absolute top-8 left-16 transform -translate-x-1/2 -translate-y-1/2">
            <div className="group cursor-pointer">
              <div className="relative">
                <div className="w-28 h-28 bg-white rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-red-300">
                  <div className="w-12 h-12 bg-red-50 rounded-lg mb-2 flex items-center justify-center">
                    <span className="text-2xl text-red-600 font-bold">A</span>
                  </div>
                  <span className="text-gray-700 font-semibold text-sm">AUN</span>
                </div>
              </div>
              <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                <p className="text-white text-sm font-medium">American University of Nigeria</p>
                <p className="text-red-300 text-xs">Yola, Nigeria</p>
              </div>
            </div>
          </div>

          <div className="absolute top-8 right-16 transform translate-x-1/2 -translate-y-1/2">
            <div className="group cursor-pointer">
              <div className="relative">
                <div className="w-28 h-28 bg-white rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-orange-300">
                  <div className="w-12 h-12 bg-orange-50 rounded-lg mb-2 flex items-center justify-center">
                    <span className="text-2xl text-orange-600">🕉️</span>
                  </div>
                  <span className="text-gray-700 font-semibold text-sm">Amrita</span>
                </div>
              </div>
              <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                <p className="text-white text-sm font-medium">Amrita Vishwa Vidyapeetham</p>
                <p className="text-orange-300 text-xs">Coimbatore, India</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="group cursor-pointer">
              <div className="relative">
                <div className="w-28 h-28 bg-white rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-blue-300">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg mb-2 flex items-center justify-center">
                    <span className="text-2xl text-blue-600">⚡</span>
                  </div>
                  <span className="text-gray-700 font-semibold text-sm">KITS</span>
                </div>
              </div>
              <div className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                <p className="text-white text-sm font-medium">Karunya Institute of Technology</p>
                <p className="text-blue-300 text-xs">Coimbatore, India</p>
              </div>
            </div>
          </div>

          {/* Center Innovation Icon */}
          <div className="absolute top-[34%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-xl animate-pulse">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnivSection;