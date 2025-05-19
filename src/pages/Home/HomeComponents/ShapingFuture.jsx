export default function ThinkgersTimeline() {
  return (
    <div className="bg-[#0B293A] text-white py-12 px-6 md:px-16 relative">
      <div className="w-full">
        <img className="absolute right-0 top-1/4" src="/Ellipse-2.png" alt="" />
        <img
          className="absolute left-16 bottom-1/6"
          src="/Ellipse-1.png"
          alt=""
        />
      </div>
      <div className="text-center w-[962px] mx-auto mb-16">
        <h1 className="text-3xl text-[#B1B1B1] tracking-[-2%] md:text-5xl font-bold">
          Shaping the Future with:{" "}
          <span className="custom-outline">Thinkgers</span>
        </h1>
        <p className="mt-4 text-lg text-[#959595]">
          Our vision is to empower local talent, foster innovation, and create
          sustainable solutions that <br /> transform communities and build a
          smarter, connected future.
        </p>
      </div>

      <div className="relative flex flex-col items-center">
        <div className="absolute w-1 h-full bg-gradient-to-b from-[#328CBF] to-[#328CBF] left-1/2 transform -translate-x-1/2 z-0"></div>

        {timelineData.map((item, index) => {
          const isRight = index % 2 === 0;
          return (
            <div
              key={index}
              className={`relative w-full flex flex-col md:flex-row items-center justify-center gap-6 mb-12 z-10`}
            >
              {/* Left Card */}
              {isRight ? (
                <div className="md:w-[465px]"></div>
              ) : (
                <div className="md:w-[465px] h-[177px] bg-[#103950B2] px-6 rounded-xl shadow-inner text-sm md:text-base backdrop-blur-md text-center flex items-center justify-center">
                  <div>
                    <h3 className="text-[#05E100] font-[500] text-2xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#959595] text-[16px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Circle */}
              <div className="w-5 h-5 bg-gradient-to-r from-[#174159] to-[#328CBF] rounded-full z-20"></div>

              {/* Right Card */}
              {isRight ? (
                <div className="md:w-[465px] h-[177px] bg-[#103950B2] px-6 flex items-center justify-center rounded-xl shadow-inner text-sm md:text-base backdrop-blur-md text-center">
                  <div>
                    <h3 className="text-[#05E100] font-[500] text-2xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#959595] px-2">{item.description}</p>
                  </div>
                </div>
              ) : (
                <div className="md:w-[465px]"></div>
              )}
            </div>
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
      "Solutions tailored to unique community needs, with platforms for residents to shape town governance.",
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
