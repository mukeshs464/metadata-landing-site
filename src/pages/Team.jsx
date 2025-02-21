import React from "react";
import { ArrowRight } from "lucide-react";
import { teams } from "../constants";
import { Link } from "react-router-dom";

export const Team = () => {
  return (
    <>
      <section className="courses bg-white py-12">
        <div className="w-4/5 m-auto">
          {/* Enhanced Header */}
          <div className="heading mb-16 text-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
              Our Team
            </h1>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teams.map((item) => (
              <div
                key={item.id}
                className="box rounded-lg shadow-lg bg-white transition transform hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="images rounded-t-lg relative overflow-hidden h-40 w-full">
                  <img
                    src={item.cover}
                    alt={`${item.title} Cover`}
                    className="rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-110 duration-300"
                  />
                </div>

                {/* Text Content */}
                <div className="text p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 text-sm">{item.lessons}</span>
                  </div>
                  <h3 className="text-black mt-3 mb-2 font-medium text-lg">
                    {item.title}
                  </h3>
                  <div className="user flex items-center mt-2">
                    <img
                      className="rounded-full h-8 w-8 object-cover"
                      src="/single-page-app/images/default-profile.png"
                      alt={`${item.members} Profile`}
                    />
                    <span className="text-sm text-gray-600 ml-2">
                      {item.members}
                    </span>
                  </div>
                </div>

                {/* Link to Details */}
                <div className="flex items-center justify-between border-t border-gray-200 p-3">
                <Link
                  to={`/team-details/${item.title.toLowerCase().replace(/\s+/g, "-")}`} // Pass only category
                  className="text-blue-600 text-sm flex items-center font-semibold"
                >
                  Know Details <ArrowRight className="ml-1" size={16} />
                </Link>


                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
