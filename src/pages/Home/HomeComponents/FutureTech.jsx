const FutureTech = () => {
  return (
    <div className="bg-[#EFF9FF]">
      <div className="p-10 max-w-7xl mx-auto">
        <div>
          <h1 className="text-4xl text-gray-600 font-semibold">
            From Beginners to Experts – We Shape
          </h1>
          <h1 className="text-3xl font-bold uppercase text-[#0099EC] custom-outline-2 py-1">
            {" "}
            Future Tech Leaders
          </h1>{" "}
          <p className="text-sm text-gray-600 py-2">
            Gain in-demand tech skills through hands-on training, real-world
            projects, and expert mentorship. Whether you're a beginner or an
            aspiring professional, our structured programs will equip you with
            the knowledge and experience to thrive in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-12 grid-rows-2 gap-4 py-10">
          <div
            className="col-span-12 md:col-span-3 
            p-4 rounded-xl shadow-md h-[300px] flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(220.72deg, #D5FFD4 3.28%, rgba(171, 222, 251, 0.5) 48.18%, #ABDEFB 95.79%)",
            }}
          >
            <div>
              <img src="/Frame-1.png" alt="frame-1" />
            </div>
            <div className="pr-6 py-2">
              <h3 className="text-xl font-semibold text-[#0B293A]">
                Coding Bootcamps
              </h3>
              <p className="text-sm text-[#0B293A]">
                Intensive training in Python, JavaScript, and full-stack
                development.
              </p>
            </div>
          </div>
          <div
            className="col-span-12 md:col-span-4 bg-gray-100 p-4 rounded-xl shadow-md flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(220.72deg, #D5FFD4 3.28%, rgba(171, 222, 251, 0.5) 48.18%, #ABDEFB 95.79%)",
            }}
          >
            <div>
              <img src="/Frame-2.png" alt="frame-2" />
            </div>
            <div className="max-w-[300px] py-2">
              <h3 className="text-xl font-semibold text-[#0B293A]">
                AI & Automation
              </h3>
              <p className="text-sm text-[#0B293A]">
                Build intelligent solutions with machine learning and automation{" "}
                tools.
              </p>
            </div>
          </div>
          <div
            className="col-span-12 md:col-span-5 bg-gray-100 p-4 rounded-xl shadow-md flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(220.72deg, #D5FFD4 3.28%, rgba(171, 222, 251, 0.5) 48.18%, #ABDEFB 95.79%)",
            }}
          >
            <div>
              <img src="/Frame-3.png" alt="frame-3" />
            </div>
            <div className=" py-2">
              <h3 className="text-xl font-semibold text-[#0B293A]">
                App & Web Development
              </h3>
              <p className="text-sm text-[#0B293A]">
                Master in-demand tech skills with hands-on training, expert
                mentorship, and real-world projects—your gateway to a thriving
                tech career!
              </p>
            </div>
          </div>
          <div
            className="col-span-12 md:col-span-5 bg-gray-100 p-4 rounded-xl shadow-md flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(220.72deg, #D5FFD4 3.28%, rgba(171, 222, 251, 0.5) 48.18%, #ABDEFB 95.79%)",
            }}
          >
            <div>
              <img src="/Frame-4.png" alt="frame-4" />
            </div>
            <div className="max-w-[300px] py-2">
              <h3 className="text-xl font-semibold text-[#0B293A]">
                IOT & Robotics Automation
              </h3>
              <p className="text-sm text-[#0B293A]">
                We specialize in IoT & Robotics Automation, delivering smart and
                efficient automation solutions.
              </p>
            </div>
          </div>
          <div
            className="col-span-12 md:col-span-4 bg-gray-100 p-4 rounded-xl shadow-md flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(220.72deg, #D5FFD4 3.28%, rgba(171, 222, 251, 0.5) 48.18%, #ABDEFB 95.79%)",
            }}
          >
            <div>
              <img src="/Frame-5.png" alt="frame-5" />
            </div>
            <div className="max-w-[300px] py-2">
              <h3 className="text-xl font-semibold text-[#0B293A]">
                UI/UX Design
              </h3>
              <p className="text-sm text-[#0B293A]">
                Master user experience and design systems for digital platforms.
              </p>
            </div>
          </div>
          <div
            className="col-span-12 md:col-span-3 bg-gray-100 p-4 rounded-xl shadow-md flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(220.72deg, #D5FFD4 3.28%, rgba(171, 222, 251, 0.5) 48.18%, #ABDEFB 95.79%)",
            }}
          >
            <div>
              <img src="/Frame-6.png" alt="frame-6" />
            </div>
            <div className="max-w-[300px] py-2">
              <h3 className="text-xl font-semibold text-[#0B293A]">
                Career & Internships
              </h3>
              <p className="text-sm text-[#0B293A]">
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
