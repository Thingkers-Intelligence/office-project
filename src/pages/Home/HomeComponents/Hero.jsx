import React from "react";
import circle1 from "../../../assets/images/circle1.png";
import circle2 from "../../../assets/images/circle2.png";
import grid from "../../../assets/images/grid.png";
import heroImage from "../../../assets/images/heroImage.png";
const Hero = () => {
  return (
    <>
      <div className=" relative bg-[#0B293A] text-white py-20 px-6 md:px-16">
        <div
          className="absolute top-0 left-0 w-[36%] h-full bg-no-repeat bg-right bg-cover z-0"
          style={{ backgroundImage: `url(${grid})` }}
        ></div>

        <img
          src={circle1}
          className="absolute top-0 right-0 w-[672px] opacity-50"
          alt="Circle Background 1"
        />
        <img
          src={circle2}
          className="absolute bottom-10 w-[205px] right-0 opacity-50"
          alt="Circle Background 2"
        />

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center z-50">
          <h1 className="text-[80px] md:text-5xl font-extrabold leading-tight text-gray-400">
            Building the{" "}
            <span className=" font-bold bg-transparent uppercase text-green-500 custom-outline ">
              Next Wave
            </span>
            <br />
            <span className="text-gray-400">of Tech Innovators</span>
          </h1>
          <p className="text-lg mt-8 w-[663px] mx-auto text-[#959595]">
            Bridging the gap between education and industry by training students
            and youth in cutting-edge technologies.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex justify-center gap-6">
            <button className="bg-[#05EB00] text-black hover:bg-green-600 px-6 py-3 rounded-md  ">
              Get Started
            </button>
            <button className="border border-[#05EB00] text-[#05EB00] px-6 py-3 rounded-md  ">
              Join Our Community
            </button>
          </div>
        </div>

        {/* hero img */}
        <div className="mt-16 flex justify-center relative">
          <img
            src={heroImage}
            className="w-full max-w-3xl rounded-[32px]"
            alt="Students Learning"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="size-16 bg-white/30 backdrop-blur-sm rounded-full  shadow-lg flex items-center justify-center">
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
      {/* glance section */}
      <div className="relative h-[620px] bg-[#0B293A] pb-10">
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-[200px] bg-no-repeat bg-right bg-cover z-0"
          style={{ backgroundImage: `url(${grid})` }}
        ></div>
        <div className="max-w-4xl mx-auto  z-50 flex flex-col justify-center h-full items-center">
          <h1 className="text-[80px]  md:text-5xl text-[#B1B1B1] font-extrabold leading-tight">
            {" "}
            <span className="font-bold bg-transparent uppercase text-green-500 custom-outline leading-[100%]">
              Thingkers
            </span>{" "}
            : <span className="tracking-[-2%]"> At a Glance</span>
          </h1>
          <p className="text-[#959595] mb-4 mt-10 text-center ">
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
          <p className="text-[#959595] mb-4 text-center">
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
