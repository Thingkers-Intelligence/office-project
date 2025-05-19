import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/Card";
import { useRef } from "react";

const ProjectCard = ({ project, index }) => {
  const container = useRef(null);

  return (
    <div ref={container} className="sticky top-44">
      <motion.div
        key={index}
        style={{ top: ` ${index * 250}px)` }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
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
    </div>
  );
};
export default ProjectCard;
