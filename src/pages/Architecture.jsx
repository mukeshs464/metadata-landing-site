import React from "react";
import { GraduationCap, Users, BookOpen, Globe } from "lucide-react"; 

export const Architecture = () => {
  return (
    <>
      <section className="instructor mb-16">
        <div className="container">
          <div className="heading py-12 text-center w-2/3 m-auto md:w-full">
            <h1 className="text-3xl font-semibold text-black">
              Architecture
            </h1>
            <span className="text-[14px] mt-2 block">
              
            </span>
          </div>
          <div className="content grid grid-cols-2 gap-5 md:grid-cols-1">
            <div className="images rounded-lg relative overflow-hidden h-72 w-ful before:bg-backbg before:h-72 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10">
              <img
                src="/single-page-app/images/instructor2.jpg"
                alt=""
                className="rounded-t-lg object-cover w-full h-72"
              />
              <div className="categ flex flex-col gap-4 absolute top-5 z-30 m-3 p-8 items-center justify-center text-center">
                <h2 className="text-3xl text-white font-semibold">
                  
                </h2>
                <button className="text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white">
                  
                </button>
              </div>
            </div>
            <div className="images rounded-lg relative overflow-hidden h-72 w-ful before:bg-backbg before:h-72 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10">
              <img
                src="/single-page-app/images/instructor.jpg"
                alt=""
                className="rounded-t-lg object-cover w-full h-72 relative"
              />
              <div className="categ flex flex-col gap-4 absolute top-5 z-30 m-3 p-8 items-center justify-center text-center">
                <h2 className="text-3xl text-white font-semibold">
                  
                </h2>
                <button className="text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white">
                  
                </button>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="heading py-12 text-center w-2/3 m-auto md:w-full">
              <h1 className="text-3xl font-semibold text-black">
                
              </h1>
              <span className="text-[14px] mt-2 block">
                
              </span>
            </div>
            <div className="content grid grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1">
              <Card
                color="text-red-500"
                icon={<Users size={40} />} // Lucide Users icon
                title="63"
                desc="Students Enrolled"
              />
              <Card
                color="text-orange-500"
                icon={<BookOpen size={40} />} // Lucide BookOpen icon
                title="20"
                desc="Total Courses"
              />
              <Card
                color="text-purple-500"
                icon={<GraduationCap size={40} />} // Lucide GraduationCap icon
                title="4"
                desc="Online Learners"
              />
              <Card
                color="text-indigo-500"
                icon={<Globe size={40} />} // Lucide Globe icon
                title="4"
                desc="Online Learners"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Card = (props) => {
  return (
    <div className={`box p-5 py-5 rounded-md`}>
      <div className={`${props.color}`}>{props.icon}</div>
      <div className="text mt-2">
        <h4 className="text-lg font-semibold text-black">{props.title}</h4>
        <p className="text-[15px]">{props.desc}</p>
      </div>
    </div>
  );
};
