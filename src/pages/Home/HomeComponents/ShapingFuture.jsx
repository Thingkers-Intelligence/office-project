import { motion } from "framer-motion";

export default function ThinkgersTimeline() {
  return (
    <div className="bg-[#0B293A] text-white py-6 md:py-28 px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-hidden">
      {/* Background Images */}
      <div className="w-full">
        <img
          className="absolute right-0 top-1/4 w-24 sm:w-32 md:w-auto"
          src="/Ellipse-2.png"
          alt=""
        />
        <img
          className="absolute left-4 sm:left-16 bottom-1/6 w-24 sm:w-32 md:w-auto"
          src="/Ellipse-1.png"
          alt=""
        />
      </div>

      {/* Header Section */}
      <div className="text-center max-w-[962px] mx-auto mb-16 px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#B1B1B1] tracking-[-0.02em] font-bold">
          Shaping the Future with:{" "}
          <span className="custom-outline">Thinkgers</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#959595] leading-relaxed">
          Our vision is to empower local talent, foster innovation, and create
          sustainable solutions that <br className="hidden sm:block" />
          transform communities and build a smarter, connected future.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative flex flex-col items-center">
        <div className="absolute w-1 h-full bg-gradient-to-b from-[#328CBF] to-[#328CBF] left-1/2 transform -translate-x-1/2 z-0"></div>

        {timelineData.map((item, index) => {
          const isRight = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className="relative w-full flex flex-col md:flex-row items-center justify-center gap-6 mb-12 z-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Left Card */}
              {isRight ? (
                <div className="hidden md:block md:w-[465px]"></div>
              ) : (
                <motion.div
                  className="w-full md:w-[465px] h-auto md:h-[177px] bg-[#103950B2] px-6 py-4 rounded-xl shadow-inner text-sm md:text-base backdrop-blur-md text-center flex items-center justify-center"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div>
                    <h3 className="text-[#05E100] font-[500] text-xl sm:text-2xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#959595] text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Circle */}
              <motion.div
                className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-[#174159] to-[#328CBF] rounded-full z-20"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              ></motion.div>

              {/* Right Card */}
              {isRight ? (
                <motion.div
                  className="w-full md:w-[465px] h-auto md:h-[177px] bg-[#103950B2] px-6 py-4 rounded-xl shadow-inner text-sm md:text-base backdrop-blur-md text-center flex items-center justify-center"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div>
                    <h3 className="text-[#05E100] font-[500] text-xl sm:text-2xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#959595] text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <div className="hidden md:block md:w-[465px]"></div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

const timelineData = [
  {
    title: "Technological Integration",
    description:
      "Utilize data-driven technologies to enhance urban infrastructure, improve services, and optimize energy use.",
  },
  {
    title: "Youth-Led & Innovators",
    description:
      "Students and youth come together to drive smart town progress with bold ideas, redefining communities.",
  },
  {
    title: "Local Innovation & Communities",
    description:
      "Solutions tailored to unique community needs, with platforms for residents to shape town town governance.",
  },
  {
    title: "Sustainable Core & Environment",
    description:
      "Eco-friendly systems and smart solutions for greener, more efficient towns with optimized resource use.",
  },
  {
    title: "Future-Ready Skills & Economies",
    description:
      "We equip youth with technology and innovation skills, working together for tech-driven individual and community growth.",
  },
  {
    title: "Collaboration & Bridging Gaps",
    description:
      "Through transparent partnerships, we achieve measurable success together, fostering inclusive progress across urban and rural areas.",
  },
];
