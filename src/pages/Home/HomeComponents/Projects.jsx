import { useEffect, useRef } from "react";
import ProjectCard from "../../../components/ProjectCard";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const projects = [
  {
    category: "E-Commerce",
    title: "Pabna Bike Bazar Live",
    features: [
      "Year-Make-Model filters for easy part matching.",
      "Zoomable images and quick videos for trust.",
      "Fast, touch-ready design for mobile users.",
    ],
    duration: "8 Weeks",
    acquisition: "43%",
    image: "/bike-1.png",
    bgColor: "bg-[#C6CFFF]",
    tagColor: "text-[#9CA3FF]",
  },
  {
    category: "E-Commerce",
    title: "Pabna Bike Bazar Live",
    features: [
      "Year-Make-Model filters for easy part matching.",
      "Zoomable images and quick videos for trust.",
      "Fast, touch-ready design for mobile users.",
    ],
    duration: "8 Weeks",
    acquisition: "43%",
    image: "/bike-1.png",
    bgColor: "bg-[#ABF5FF]",
    tagColor: "text-[#94E6FF]",
  },
  {
    category: "E-Commerce",
    title: "Pabna Bike Bazar Live",
    features: [
      "Year-Make-Model filters for easy part matching.",
      "Zoomable images and quick videos for trust.",
      "Fast, touch-ready design for mobile users.",
    ],
    duration: "8 Weeks",
    acquisition: "43%",
    image: "/bike-1.png",
    bgColor: "bg-[#FEB8AF]",
    tagColor: "text-[#FF8B80]",
  },
];

export default function Projects() {
  const container = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <section className="py-12 px-4 md:px-12 bg-[#EAF6FF] min-h-screen">
      <div ref={container} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className=" mb-20 sticky top-20"
        >
          <div>
            <h2 className="text-3xl md:text-[44px] font-bold text-[#2A4E62] leading-14">
              Pioneering Progress:
            </h2>
            <h3 className="text-2xl md:text-[44px] font-bold custom-outline-2 mb-6">
              Our Innovations, Research, and Projects
            </h3>
          </div>
          <p className="text-[#5E5E5E] mb-12 max-w-6xl">
            We inspire thriving futures by sparking innovative solutions,
            uncovering insights through impactful research, and leading
            transformative projects with youth and partners to build smarter,
            sustainable towns.
          </p>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => {
              return (
                <ProjectCard key={index} index={index} project={project} />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
