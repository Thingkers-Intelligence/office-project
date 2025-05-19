import { Card, CardContent } from "../../../components/ui/Card";
import { motion } from "framer-motion";

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
  return (
    <section className="py-12 px-4 md:px-12 bg-[#EAF6FF] min-h-screen">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid gap-8 md:grid-cols-1">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className={`rounded-2xl shadow-lg ${project.bgColor} p-6`}>
                <CardContent className="h-full">
                  <div className="flex flex-col md:flex-row h-full gap-6">
                    {/* Text Section */}
                    <div className="flex-1 flex flex-col justify-center ">
                      <div className="p-4">
                        <span
                          className={`inline-block text-xs font-semibold uppercase px-3 py-1 rounded-full ${project.tagColor} bg-white mb-1`}
                        >
                          {project.category}
                        </span>
                        <h4 className="text-2xl font-semibold text-[#0B293A] mb-4">
                          {project.title}
                        </h4>
                        <div>
                          <p className="text-[#174159] text-[18px] font-[500] mb-4">
                            Features
                          </p>
                          <ul className="text-[#5E5E5E] list-disc text-[16px] pl-5 space-y-1 mb-6">
                            {project.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex justify-between text-sm font-medium text-gray-800 mt-auto px-4">
                        <div>
                          <p className="font-semibold text-2xl mb-1 text-[#174159]">
                            {project.duration}
                          </p>
                          <p className="text-[16px] text-[#5E5E5E]">
                            Project Durations
                          </p>
                        </div>
                        <div className="lg:mr-12">
                          <p className="font-semibold text-2xl mb-1 text-[#174159]">
                            {project.acquisition}
                          </p>
                          <p className="text-[16px] text-[#5E5E5E]">
                            Customer Acquisition
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 h-[390px] md:mt-0 rounded-xl overflow-hidden bg-white flex justify-center items-center p-2">
                      <img
                        src={project.image}
                        alt="Bike preview"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
