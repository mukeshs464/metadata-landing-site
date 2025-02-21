import { useState } from "react";

// Array of product options with titles and descriptions
const productOptions = [
  {
    title: "ChatLLM",
    description: "AI super assistant with access to all the SOTA LLMs",
    features: [
      "Access all the SOTA LLMs",
      "Web search and image generation",
      "Build your chatbots",
    ],
  },
  {
    title: "Forecasting and Planning",
    description: "Predict future trends and make informed decisions",
    features: [
      "Time Series Analysis",
      "Demand Forecasting",
      "Resource Allocation",
    ],
  },
  {
    title: "Vision AI",
    description: "Advanced computer vision capabilities",
    features: ["Object Detection", "Image Classification", "Facial Recognition"],
  },
  // Add more products like AI Agents, Anomaly Detection, etc.
];

const Architecture1 = () => {
  const [activeProductIndex, setActiveProductIndex] = useState(0);

  const handleHover = (index) => {
    setActiveProductIndex(index);
  };

  return (
    <div className="w-1/3 p-4">
      {productOptions.map((product, index) => (
        <button
          key={index}
          onMouseEnter={() => handleHover(index)}
          className={`flex items-center mb-4 text-left hover:text-blue-400 transition duration-300 ${
            activeProductIndex === index ? "text-blue-400" : "text-gray-300"
          }`}
        >
          {/* Animated placeholder for the icon */}
          <div
            className="w-12 h-12 mr-4 bg-gray-500 rounded-full animate-pulse"
            aria-hidden="true"
          ></div>
          <span className="text-lg">{product.title}</span>
        </button>
      ))}
    </div>
  );
};

export default Architecture1;
