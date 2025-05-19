const JoinPage = () => {
  return (
    <div className=" bg-gray-100 py-18">
      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Image */}
        <div className="md:w-1/2 w-full flex justify-center gap-6">
          <img
            src="/public/join.png"
            alt="Join Us"
            className="rounded-2xl object-cover max-w-full h-auto"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:max-w-[560px] w-full md:pl-10">
          <h1 className="text-3xl font-semibold text-[#2A4E62] mb-8 leading-[43px]">
            Code Your Future: Master Python with Confidence
          </h1>
          <p className="text-lg text-[#5E5E5E ] mb-6">
            Master Python with hands-on projects and expert mentors. Build apps,
            automate tasks, and dive into data science. Perfect for beginners or
            pros. Limited spots!
          </p>

          <h2 className="text-xl font-[500] text-[#174159] mb-[12px]">
            Why Join?
          </h2>
          <ul className="list-disc list-outside pl-6 text-[#5E5E5E] text-[16px] max-w-[455px]">
            <li>Build real-world projects, like web apps and data tools.</li>
            <li>Learn at your pace with interactive lessons and support</li>
            <li>Connect with mentors who’ve worked at top tech companies.</li>
          </ul>

          <button className="px-6 mt-14 py-3 text-lg bg-[#0B293A] hover:bg-[#0B293B] text-white rounded-lg shadow">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
