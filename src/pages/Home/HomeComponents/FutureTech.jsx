const FutureTech = () => {
  return (
    <div className="bg-[#EFF9FF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 pb-12 text-center md:text-left">
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 py-10">
          {/* Card 1 */}
          <div
            className="lg:col-span-3 p-6 sm:p-8 rounded-xl shadow-md flex flex-col justify-between h-full"
            style={{
              background:
                "linear-gradient(220.72deg, #D5FFD4 3.28%, rgba(171, 222, 251, 0.5) 48.18%, #ABDEFB 95.79%)",
            }}
          >
            <img src="/Frame-1.png" alt="frame-1" className="w-16 sm:w-20" />
            <div className="mt-4">
              <h3 className="text-xl sm:text-2xl text-[#0B293A] mb-2">
                Coding Bootcamps
              </h3>
              <p className="text-sm sm:text-base text-[#3C5A6A]">
                Intensive training in Python, JavaScript, and full-stack
                development.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="lg:col-span-4 p-6 sm:p-8 rounded-xl shadow-md flex flex-col justify-between h-full"
            style={{
              background:
                "linear-gradient(220.72deg, #D5FFD4 3.28%, rgba(171, 222, 251, 0.5) 48.18%, #ABDEFB 95.79%)",
            }}
          >
            <img src="/Frame-2.png" alt="frame-2" className="w-16 sm:w-20" />
            <div className="mt-4 max-w-md">
              <h3 className="text-xl sm:text-2xl text-[#0B293A] mb-2">
                AI & Automation
              </h3>
              <p className="text-sm sm:text-base text-[#0B293A]">
                Build intelligent solutions with machine learning and automation
                tools.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="lg:col-span-5 p-6 sm:p-8 rounded-xl shadow-md flex flex-col justify-between h-full"
            style={{
              background:
                "linear-gradient(220.72deg, #D5FFD4 3.28%, rgba(171, 222, 251, 0.5) 48.18%, #ABDEFB 95.79%)",
            }}
          >
            <img src="/Frame-3.png" alt="frame-3" className="w-16 sm:w-20" />
            <div className="mt-4 max-w-lg">
              <h3 className="text-xl sm:text-2xl text-[#0B293A] mb-2">
                App & Web Development
              </h3>
              <p className="text-sm sm:text-base text-[#0B293A]">
                Master in-demand tech skills with hands-on training, expert
                mentorship, and real-world projects—your gateway to a thriving
                tech career!
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="lg:col-span-5 p-6 sm:p-8 rounded-xl shadow-md flex flex-col justify-between h-full"
            style={{
              background:
                "linear-gradient(220.72deg, #D5FFD4 3.28%, rgba(171, 222, 251, 0.5) 48.18%, #ABDEFB 95.79%)",
            }}
          >
            <img src="/Frame-4.png" alt="frame-4" className="w-16 sm:w-20" />
            <div className="mt-4 max-w-lg">
              <h3 className="text-xl sm:text-2xl text-[#0B293A] mb-2">
                IoT & Robotics Automation
              </h3>
              <p className="text-sm sm:text-base text-[#0B293A]">
                We specialize in IoT & Robotics Automation, delivering smart and
                efficient automation solutions.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div
            className="lg:col-span-4 p-6 sm:p-8 rounded-xl shadow-md flex flex-col justify-between h-full"
            style={{
              background:
                "linear-gradient(220.72deg, #D5FFD4 3.28%, rgba(171, 222, 251, 0.5) 48.18%, #ABDEFB 95.79%)",
            }}
          >
            <img src="/Frame-5.png" alt="frame-5" className="w-16 sm:w-20" />
            <div className="mt-4 max-w-md">
              <h3 className="text-xl sm:text-2xl text-[#0B293A] mb-2">
                UI/UX Design
              </h3>
              <p className="text-sm sm:text-base text-[#0B293A]">
                Master user experience and design systems for digital platforms.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div
            className="lg:col-span-3 p-6 sm:p-8 rounded-xl shadow-md flex flex-col justify-between h-full"
            style={{
              background:
                "linear-gradient(220.72deg, #D5FFD4 3.28%, rgba(171, 222, 251, 0.5) 48.18%, #ABDEFB 95.79%)",
            }}
          >
            <img src="/Frame-6.png" alt="frame-6" className="w-16 sm:w-20" />
            <div className="mt-4 max-w-md">
              <h3 className="text-xl sm:text-2xl text-[#0B293A] mb-2">
                Career & Internships
              </h3>
              <p className="text-sm sm:text-base text-[#0B293A]">
                Hands-on projects and mentorship to guide you towards job
                placement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTech;
