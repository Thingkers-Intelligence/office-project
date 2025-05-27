import React from "react";
import { motion } from "framer-motion";
import circle1 from "../../../assets/images/circle1.png";
import circle2 from "../../../assets/images/circle2.png";
import grid from "../../../assets/images/grid.png";
import heroImage from "../../../assets/images/heroImage.png";

const Hero = () => {
  return (
    <>
      <div className="relative bg-[#0B293A] text-white py-6 md:py-16 px-4 md:px-12 lg:px-16 overflow-hidden">
        {/* Background grid */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-[50%] h-full bg-no-repeat bg-right bg-cover z-0"
          style={{ backgroundImage: `url(${grid})` }}
        />

        {/* Background circles */}
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          src={circle1}
          className="absolute top-0 right-0 w-[400px] md:w-[600px] lg:w-[672px]"
          alt="Circle Background 1"
        />
        <motion.img
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.5 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          src={circle2}
          className="absolute bottom-10 right-0 w-[120px] md:w-[180px] lg:w-[205px]"
          alt="Circle Background 2"
        />

        {/* Main Content */}
        <motion.div
          className="relative max-w-5xl mx-auto text-center z-10 px-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-[80px] font-bold leading-tight text-gray-400"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Building the{" "}
            <span className="uppercase custom-outline font-bold">
              Next Wave
            </span>{" "}
            <span className="text-gray-400">of Tech Innovators</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg mt-6 sm:mt-8 max-w-2xl mx-auto text-[#959595] px-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Bridging the gap between education and industry by training students
            and youth in cutting-edge technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#05EB00] text-black hover:bg-green-600 px-6 py-3 rounded-md transition"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#05EB00] text-[#05EB00] px-6 py-3 rounded-md hover:bg-[#05EB00] hover:text-[#0B293A] transition"
            >
              Join Our Community
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Hero Image with play button */}
        <motion.div
          className="mt-12 sm:mt-16 flex justify-center relative px-4"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.img
            src={heroImage}
            className="w-full max-w-3xl rounded-3xl"
            alt="Students Learning"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute inset-0 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="red"
                  className="w-8 h-8"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Glance Section */}
      <div className="relative bg-[#0B293A] pb-16 px-4">
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] sm:w-[50%] md:w-[33%] h-[200px] bg-no-repeat bg-right bg-cover z-0 opacity-30"
          style={{ backgroundImage: `url(${grid})` }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="max-w-5xl mx-auto text-center z-10 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-4xl sm:text-5xl font-[600] leading-tight text-[#B1B1B1] tracking-[-2%]">
            <span className="uppercase custom-outline">Thingkers</span>:{" "}
            <span className="tracking-tight">At a Glance</span>
          </h1>

          <p className="text-[#959595] mt-6 sm:mt-10 text-sm sm:text-base md:px-6 lg:px-24">
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
          <p className="text-[#959595] mt-4 text-sm sm:text-base md:px-6 lg:px-24">
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
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
