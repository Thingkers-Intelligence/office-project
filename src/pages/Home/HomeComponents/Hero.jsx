import React from "react";
import circle1 from "../../../assets/images/circle1.png";
import circle2 from "../../../assets/images/circle2.png";
import grid from "../../../assets/images/grid.png";
import heroImage from "../../../assets/images/heroImage.png";

const Hero = () => {
  return (
    <>
      <div className="relative bg-[#0B293A] text-white py-16 px-4 md:px-12 lg:px-16 overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute top-0 left-0 w-[50%] h-full bg-no-repeat bg-right bg-cover z-0 opacity-30"
          style={{ backgroundImage: `url(${grid})` }}
        ></div>

        {/* Background circles */}
        <img
          src={circle1}
          className="absolute top-0 right-0 w-[400px] md:w-[600px] lg:w-[672px] opacity-50"
          alt="Circle Background 1"
        />
        <img
          src={circle2}
          className="absolute bottom-10 right-0 w-[120px] md:w-[180px] lg:w-[205px] opacity-50"
          alt="Circle Background 2"
        />

        {/* Main Content */}
        <div className="relative max-w-5xl mx-auto text-center z-10 px-2">
          <h1 className="text-4xl sm:text-5xl lg:text-[80px] font-extrabold leading-tight text-gray-400 ">
            Building the{" "}
            <span className="uppercase custom-outline font-bold">
              Next Wave
            </span>
            <br />
            <span className="text-gray-400">of Tech Innovators</span>
          </h1>

          <p className="text-base sm:text-lg mt-6 sm:mt-8 max-w-2xl mx-auto text-[#959595] px-4">
            Bridging the gap between education and industry by training students
            and youth in cutting-edge technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
            <button className="bg-[#05EB00] text-black hover:bg-green-600 px-6 py-3 rounded-md transition">
              Get Started
            </button>
            <button className="border border-[#05EB00] text-[#05EB00] px-6 py-3 rounded-md hover:bg-[#05EB00] hover:text-[#0B293A] transition">
              Join Our Community
            </button>
          </div>
        </div>

        {/* Hero Image with play button */}
        <div className="mt-12 sm:mt-16 flex justify-center relative px-4">
          <img
            src={heroImage}
            className="w-full max-w-3xl rounded-3xl"
            alt="Students Learning"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
              <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="red"
                  className="w-8 h-8"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Glance Section */}
      <div className="relative bg-[#0B293A] pb-16 px-4">
        {/* Bottom Grid BG */}
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] sm:w-[50%] md:w-[33%] h-[200px] bg-no-repeat bg-right bg-cover z-0 opacity-30"
          style={{ backgroundImage: `url(${grid})` }}
        ></div>

        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-[#B1B1B1]">
            <span className="uppercase custom-outline">Thingkers</span>:{" "}
            <span className="tracking-tight">At a Glance</span>
          </h1>

          <p className="text-[#959595] mt-6 sm:mt-10 text-sm sm:text-base px-2">
            We are a dedicated IT-based Organization committed to{" "}
            <span className="font-bold">empowering students and youth</span>{" "}
            with the skills and knowledge needed to excel in the world of
            technology. Our focus is on{" "}
            <span className="font-bold">school and college</span> students, as
            well as young professionals, providing them with industry-relevant
            training in{" "}
            <span className="font-bold">
              programming, web development, app development, AI, and automation.
            </span>
          </p>
          <p className="text-[#959595] mt-4 text-sm sm:text-base px-2">
            We bridge the gap between{" "}
            <span className="font-bold">education and the job market</span> by
            offering hands-on learning experiences, mentorship from industry
            experts, and real-world project opportunities. By fostering
            innovation and practical skill development, we prepare the next
            generation of tech leaders to contribute meaningfully to{" "}
            <span className="font-bold">
              government and commercial projects.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
