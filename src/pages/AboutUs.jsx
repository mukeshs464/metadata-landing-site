import React from "react";
import aboutImg from "../assets/metalogo.jpg";
import { Lightbulb, BookOpen, Users, PlayCircle, CheckCircle } from "lucide-react";

export const AboutUs = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="heading text-center py-12">
            <h1 className="text-3xl font-semibold text-black">
              Why Our Meta stands Out
            </h1>
            <span className="text-sm mt-2 block">
              You don't have to navigate machine learning alone—our platform simplifies the entire process, offering you powerful tools, guidance, and support every step of the way.
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
            <AboutCard
              color="bg-[#2D69F0]"
              icon={<Lightbulb size={50} />}
              title="Ready-to-Use Machine Learning Models"
              desc="No need to build or train models from scratch—simply upload your data."
            />
            <AboutCard
              color="bg-[#DD246E]"
              icon={<BookOpen size={50} />}
              title="No Coding Required"
              desc="Designed for both technical and non-technical users."
            />
            <AboutCard
              color="bg-[#8007E6]"
              icon={<Users size={50} />}
              title=" Versatile Model Selection"
              desc="Choose from a variety of preloaded models that cater to different use cases, such as classification, regression, and clustering."
            />
            <AboutCard
              color="bg-[#0CAE74]"
              icon={<PlayCircle size={50} />}
              title="Seamless Data Integration"
              desc="pload your datasets in various formats, and our platform will automatically process and prepare the data for analysis"
            />
          </div>
        </div>
      </section>
      <AboutContent />
    </>
  );
};

export const AboutCard = (props) => {
  return (
    <div
      className={`box w-auto shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300`}
    >
      <div className="icon">{props.icon}</div>
      <div className="text mt-5">
        <h4 className="text-lg font-semibold my-3">{props.title}</h4>
        <p className="text-sm">{props.desc}</p>
      </div>
    </div>
  );
};

export const AboutContent = () => {
  return (
    <section className="mb-16 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">

        <div className="left w-full lg:w-1/3 flex items-center justify-center lg:justify-start my-20 lg:mb-0">
          <img
            src={aboutImg}
            alt="aboutImg"
            className="rounded-xl w-1/2 lg:w-2/3"
          />
        </div>

        <div className="right w-full lg:w-2/3 lg:pl-12">
          <div className="heading">
            <h1 className="text-4xl font-semibold text-black mb-4">
              Make Data-Driven Decisions
            </h1>
            <span className="text-md block leading-7 mb-6">
              Upload your data and let our preloaded models do the heavy
              lifting. At Meta, we combine cutting-edge machine learning
              technology with user-friendly tools, making complex tasks
              effortless. Join us on a journey where innovation meets
              simplicity, and data transforms into actionable insights.
            </span>

            <ul className="my-6 space-y-5">
              <li className="text-md flex items-center gap-5">
                <CheckCircle className="text-green-500" /> Streamline your data processing
              </li>
              <li className="text-md flex items-center gap-5">
                <CheckCircle className="text-green-500" /> Leverage pre-trained ML models
              </li>
              <li className="text-md flex items-center gap-5">
                <CheckCircle className="text-green-500" /> Enhance decision-making
              </li>
              <li className="text-md flex items-center gap-5">
                <CheckCircle className="text-green-500" /> Accelerate your workflows
              </li>
            </ul>

            <button className="px-6 py-3 border border-gray-300 rounded-md text-md hover:bg-black hover:text-white transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
