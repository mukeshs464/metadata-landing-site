import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Info } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../components/ui/popover";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {
  student_contributors_b,
  faculty_contributors,
  industrial_contributors,
  student_contributors_a,
} from "../constants";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import UnivSection from "../components/custom/univ";
import { FloatingDock } from "../components/ui/floating-dock";


const TeamDetails = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const contributorsMap = {
    "student-team-b": student_contributors_b,
    "student-team-a": student_contributors_a,
    "faculty-team": faculty_contributors,
    "industrial-team": industrial_contributors,
  };

  const selectedContributors = contributorsMap[category] || [];

  const formattedCategory = category
    .replace("-", " ")
    .replace("team", "")
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const type = formattedCategory;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-4 px-4 sm:px-8 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center justify-center w-10 h-10 bg-white text-black rounded-full border border-black hover:bg-black hover:text-white transition duration-300 fixed top-8 left-4 z-50"
      >
        <ArrowLeft size={20} />
      </button>

      {type === "Faculty" ? (<UnivSection />) : (<></>)}

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12 mt-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight">
          {formattedCategory} Contributors
        </h1>
        <p className="text-gray-600 text-lg mt-2 italic">{formattedCategory === "Core" ? "“Not just code. We built blueprints, pipelines, systems — and solved problems that didn’t have StackOverflow answers.”" : formattedCategory === "Industry" ? "“Students need feedback loops — from people who’ve built, failed, and scaled real products.”" : formattedCategory === "Faculty" ? "“The best ideas don’t just emerge  they’re sparked, guided, and nurtured.”" : "“The quiet force behind MetaData’s evolution.”"}</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch">
        {selectedContributors.length > 0 ? (
          type !== "Faculty" ? (
            selectedContributors.map((item, idx) => (
              console.log(item.photo),
              <Card
                key={idx}
                className="relative w-full h-full flex flex-col justify-between bg-white/70 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl transition-all group overflow-hidden"
              >
                <div className="absolute top-3 right-3 z-10">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        className="p-2 bg-white shadow-sm border border-gray-300 rounded-full hover:bg-blue-600 hover:text-blue-300 transition"
                        aria-label="More Info"
                      >
                        <Info size={18} />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-72 shadow-lg rounded-lg p-4 bg-white">
                      <h4 className="font-semibold text-md mb-1">{item.name}</h4>
                      <p className="text-md text-gray-600 mb-2">
                        {item?.role}
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        {item?.desc || "No additional info available."}
                      </p>
                    </PopoverContent>
                  </Popover>
                </div>

                <CardHeader className="p-4">
                  <div className="relative overflow-hidden rounded-lg h-44 w-full mb-4">
                    <img
                      src={"/placeholder.jpg"}
                      alt={item.name}
                      className="object-cover h-full w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardTitle className="text-lg text-gray-800">{item.name}</CardTitle>
                  {category === "student-team" && item.degree && (
                    <CardDescription className="text-sm text-gray-600">
                      {item.degree}
                    </CardDescription>
                  )}
                </CardHeader>
                <FloatingDock
                  items={item.links}
                  mobileClassName="!ml-4"
                />
              </Card>
            ))
          ) : (
            <AnimatedTooltip items={selectedContributors} />
          )
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No contributors found.
          </p>
        )}
      </div>

    </div>
  );
};

export default TeamDetails;
