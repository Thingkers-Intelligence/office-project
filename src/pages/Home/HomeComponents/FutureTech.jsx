const FutureTech = () => {
  return (
    <div className="bg-[#EFF9FF]">
      <div className=" container mx-auto">
        <div className="pt-20 pb-16">
          <h1 className="text-[44px] text-[#2A4E62] font-semibold leading-[57px]">
            From Beginners to Experts – We Shape
          </h1>
          <h1 className="text-[44px] font-bold uppercase mt-[2px] text-[#0099EC] custom-outline-2 py-1 leading-[57px] tracking-[4%]">
            {" "}
            Future Tech Leaders
          </h1>{" "}
          <p className="text-lg text-[#5E5E5E] mt-6">
            Gain in-demand tech skills through hands-on training, real-world
            projects, and expert mentorship. Whether you're a beginner or an
            aspiring professional, our structured programs will equip you with
            the knowledge and experience to thrive in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-12 grid-rows-2 gap-[26px] py-10">
          <div
            className="col-span-12 md:col-span-3 
            p-8 rounded-xl shadow-md h-[300px] flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(220.72deg, #D5FFD4 3.28%, rgba(171, 222, 251, 0.5) 48.18%, #ABDEFB 95.79%)",
            }}
          >
            <div>
              <img src="/Frame-1.png" alt="frame-1" />
            </div>
            <div className="pr-6 ">
              <h3 className="text-[24px] font-normal text-[#0B293A] mb-3">
                Coding&nbsp;Bootcamps
              </h3>
              <p className="text-base text-[#3C5A6A] py-1">
                Intensive training in Python, JavaScript, and full-stack
                development.
              </p>
            </div>
          </div>
          <div
            className="col-span-12 md:col-span-4 bg-gray-100 p-8 rounded-xl shadow-md flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(220.72deg, #D5FFD4 3.28%, rgba(171, 222, 251, 0.5) 48.18%, #ABDEFB 95.79%)",
            }}
          >
            <div>
              <img src="/Frame-2.png" alt="frame-2" />
            </div>
            <div className="max-w-[300px] ">
              <h3 className="text-[24px] font-normal text-[#0B293A] mb-3">
                AI & Automation
              </h3>
              <p className="text-sm text-[#0B293A]">
                Build intelligent solutions with machine learning and automation{" "}
                tools.
              </p>
            </div>
          </div>
          <div
            className="col-span-12 md:col-span-5 bg-gray-100 p-8 rounded-xl shadow-md flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(220.72deg, #D5FFD4 3.28%, rgba(171, 222, 251, 0.5) 48.18%, #ABDEFB 95.79%)",
            }}
          >
            <div>
              <img src="/Frame-3.png" alt="frame-3" />
            </div>
            <div className="max-w-[428px]">
              <h3 className="text-[24px] font-normal text-[#0B293A] mb-3">
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
            className="col-span-12 md:col-span-5 bg-gray-100 p-8 rounded-xl shadow-md flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(220.72deg, #D5FFD4 3.28%, rgba(171, 222, 251, 0.5) 48.18%, #ABDEFB 95.79%)",
            }}
          >
            <div>
              <img src="/Frame-4.png" alt="frame-4" />
            </div>
            <div className="max-w-[428px] ">
              <h3 className="text-[24px] font-normal text-[#0B293A] tracking-[4%] mb-3">
                IOT & Robotics&nbsp;Automation
              </h3>
              <p className="text-sm text-[#0B293A]">
                We specialize in IoT & Robotics Automation, delivering smart and
                efficient automation solutions.
              </p>
            </div>
          </div>
          <div
            className="col-span-12 md:col-span-4 bg-gray-100 p-8 rounded-xl shadow-md flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(220.72deg, #D5FFD4 3.28%, rgba(171, 222, 251, 0.5) 48.18%, #ABDEFB 95.79%)",
            }}
          >
            <div>
              <img src="/Frame-5.png" alt="frame-5" />
            </div>
            <div className="max-w-[300px] ">
              <h3 className="text-[24px] font-normal text-[#0B293A] mb-3">
                UI/UX Design
              </h3>
              <p className="text-sm text-[#0B293A]">
                Master user experience and design systems for digital platforms.
              </p>
            </div>
          </div>
          <div
            className="col-span-12 md:col-span-3 bg-gray-100 p-8 rounded-xl shadow-md flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(220.72deg, #D5FFD4 3.28%, rgba(171, 222, 251, 0.5) 48.18%, #ABDEFB 95.79%)",
            }}
          >
            <div>
              <img src="/Frame-6.png" alt="frame-6" />
            </div>
            <div className="max-w-[300px] ">
              <h3 className="text-[24px] font-normal text-[#0B293A] mb-3">
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
