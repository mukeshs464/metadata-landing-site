import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { student_contributors, faculty_contributors, industrial_contributors } from "../constants";
import { Link } from "react-router-dom";

const TeamDetails = () => {
  const { category } = useParams(); // Extract category from URL
  const navigate = useNavigate();

  // Map categories to contributors
  const contributorsMap = {
    "student-team": student_contributors,
    "faculty-team": faculty_contributors,
    "industrial-team": industrial_contributors,
  };

  // Get contributors for the selected category
  const selectedContributors = contributorsMap[category] || [];

  return (
    <div className="team-details bg-white py-12 px-6 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center justify-center w-12 h-12 bg-white text-black rounded-full border border-black hover:bg-black hover:text-white transition duration-300 fixed top-32 left-2 z-50"
      >
        <ArrowLeft size={20} />
      </button>

      {/* Display Contributors */}
      <div className="w-4/5 m-auto">
        <h1 className="text-3xl sm:text-5xl mb-6 text-center">
          {category
            .replace("-", " ")
            .replace("team", "")
            .trim()
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}{" "}
          Contributors
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {selectedContributors.length > 0 ? (
            selectedContributors.map((contributor, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center border border-gray-200 p-3 rounded-lg shadow-md h-320px"
               // Adjusted height
              >
                <img
                  src={contributor.photo || "/path/to/default-image.jpg"}
                  alt={contributor.name}
                  className="w-full h-48 object-cover mb-4" // Reduced image height
                />
                <h3 className="text-lg font-semibold">{contributor.name}</h3>

                {/* Render Degree for Students */}
                {category === "student-team" && contributor.degree && (
                  <p className="text-sm text-gray-600 mt-1">{contributor.degree}</p>
                )}

                {contributor.link && (
                  <Link
                    to={contributor.link}
                    className="text-blue-600 text-sm flex items-center font-semibold mt-2"
                  >
                    View Details <ArrowRight className="ml-1" size={16} />
                  </Link>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No contributors found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
