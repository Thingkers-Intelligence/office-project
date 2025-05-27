import { motion } from "framer-motion";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const FutureTech = () => {
  return (
    <div className="bg-[#EFF9FF]">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <motion.div
          className="pt-10 md:pt-16 pb-12 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariant}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] text-[#2A4E62] font-semibold leading-snug">
            From Beginners to Experts – We Shape
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold uppercase mt-1 text-[#0099EC] custom-outline-2 py-1 tracking-wide leading-snug">
            Future Tech Leaders
          </h1>
          <p className="text-base sm:text-lg text-[#5E5E5E] mt-4 sm:mt-6 max-w-3xl mx-auto md:mx-0">
            Gain in-demand tech skills through hands-on training, real-world
            projects, and expert mentorship. Whether you're a beginner or an
            aspiring professional, our structured programs will equip you with
            the knowledge and experience to thrive in the digital world.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 py-10"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cardData.map((card, i) => (
            <motion.div
              key={i}
              className={`lg:col-span-${card.colSpan} p-6 sm:p-8 rounded-xl shadow-md flex flex-col justify-between h-full`}
              style={{
                background:
                  "linear-gradient(220.72deg, #D5FFD4 3.28%, rgba(171, 222, 251, 0.5) 48.18%, #ABDEFB 95.79%)",
              }}
              variants={cardVariant}
            >
              <img
                src={card.img}
                alt={`frame-${i + 1}`}
                className="w-16 sm:w-20"
              />
              <div className="mt-4">
                <h3 className="text-xl sm:text-2xl text-[#0B293A] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-[#0B293A]">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FutureTech;

// Card Data Array (Below the component)
const cardData = [
  {
    title: "Coding Bootcamps",
    text: "Intensive training in Python, JavaScript, and full-stack development.",
    img: "/Frame-1.png",
    colSpan: 3,
  },
  {
    title: "AI & Automation",
    text: "Build intelligent solutions with machine learning and automation tools.",
    img: "/Frame-2.png",
    colSpan: 4,
  },
  {
    title: "App & Web Development",
    text: "Master in-demand tech skills with hands-on training, expert mentorship, and real-world projects—your gateway to a thriving tech career!",
    img: "/Frame-3.png",
    colSpan: 5,
  },
  {
    title: "IoT & Robotics Automation",
    text: "We specialize in IoT & Robotics Automation, delivering smart and efficient automation solutions.",
    img: "/Frame-4.png",
    colSpan: 5,
  },
  {
    title: "UI/UX Design",
    text: "Master user experience and design systems for digital platforms.",
    img: "/Frame-5.png",
    colSpan: 4,
  },
  {
    title: "Career & Internships",
    text: "Hands-on projects and mentorship to guide you towards job placement.",
    img: "/Frame-6.png",
    colSpan: 3,
  },
];
