import { useEffect } from "react";
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
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up Lenis instance on unmount
    };
  }, []);

  return (
    <section className="py-4 md:py-18 px-4 sm:py-12 sm:px-8 md:px-12 bg-[#EFF9FF] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 sm:mb-20 sticky top-20"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold text-[#2A4E62] leading-tight sm:leading-[3.5rem]">
              Pioneering Progress:
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-[44px] font-bold custom-outline-2 mb-4 sm:mb-6">
              Our Innovations, Research, and Projects
            </h3>
          </div>
          <p className="text-[#5E5E5E] mb-8 sm:mb-12 max-w-full sm:max-w-4xl md:max-w-6xl leading-relaxed text-base sm:text-lg">
            We inspire thriving futures by sparking innovative solutions,
            uncovering insights through impactful research, and leading
            transformative projects with youth and partners to build smarter,
            sustainable towns.
          </p>

          <div className="grid grid-cols-1 gap-6 ">
            {projects.map((project, index) => (
              <ProjectCard key={index} index={index} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
