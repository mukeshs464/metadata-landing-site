import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { faculty_contributors } from "../constants";

const FacultyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const contributors = faculty_contributors.filter(
    (faculty) => faculty.id === parseInt(id, 10)
  );

  return (
    <div className="team-details bg-white py-12 px-6 relative">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center justify-center w-12 h-12 bg-white text-black rounded-full border border-black hover:bg-black hover:text-white transition duration-300 fixed top-32 left-2 z-50"
      >
        <ArrowLeft size={20} />
      </button>

      <div className="w-4/5 m-auto">
        <h1 className="text-3xl sm:text-5xl mb-6 text-center">
          Faculty Contributors
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {contributors.map((contributor, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center border border-gray-200 p-4 rounded-lg shadow-md"
            >
              <img
                src={contributor.photo || "/path/to/default-image.jpg"}
                alt={contributor.name}
                className="w-full h-64 object-cover mb-6"
              />
              <h3 className="text-lg font-semibold">{contributor.name}</h3>
              <p className="text-gray-600">{contributor.department || "N/A"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyDetails;
