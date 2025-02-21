import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { architectureOptions } from "../constants";


const Team1 = () => {
  const [showDetails, setShowDetails] = useState(
    Array(architectureOptions.length).fill(false)
  );

  const toggleDetails = (index) => {
    const updatedDetails = [...showDetails];
    updatedDetails[index] = !updatedDetails[index];
    setShowDetails(updatedDetails);
  };

  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Project Architecture
      </h2>
      <div className="flex flex-wrap">
        {architectureOptions.map((option, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-2 transition duration-300"
          >
            <div className="p-10 h-full border border-neutral-700 rounded-xl hover:bg-black hover:text-white transition duration-300">
              <p className="text-4xl mb-4">{option.title}</p>
              <p className="text-xl mb-8 text-neutral-400">
                {option.description}
              </p>
              <ul>
                {option.features.map((feature, idx) => (
                  <li key={idx} className="mt-4 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => toggleDetails(index)}
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-8 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                {showDetails[index] ? "Hide Details" : "View Details"}
              </button>
              {showDetails[index] && (
                <div className="mt-6 text-neutral-400">
                  <h4 className="text-2xl mb-4">Details</h4>
                  <ul className="space-y-2">
                    {option.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle2 className="mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team1;
