const JoinPage = () => {
  return (
    <div className="bg-[#EFF9FF] py-12 sm:py-18 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Left Side - Image */}
        <div className=" w-full flex justify-center">
          <img
            src="/join.png"
            alt="Join Us"
            className="rounded-2xl object-cover max-w-full h-auto"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:max-w-[560px] w-full md:pl-10 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#2A4E62] mb-6 sm:mb-8 leading-tight sm:leading-[43px]">
            Code Your Future: Master Python with Confidence
          </h1>
          <p className="text-base sm:text-lg text-[#5E5E5E] mb-6 max-w-full sm:max-w-[455px] mx-auto md:mx-0">
            Master Python with hands-on projects and expert mentors. Build apps,
            automate tasks, and dive into data science. Perfect for beginners or
            pros. Limited spots!
          </p>

          <h2 className="text-lg sm:text-xl font-[500] text-[#174159] mb-3 sm:mb-4">
            Why Join?
          </h2>
          <ul className="list-disc list-outside pl-6 text-[#5E5E5E] text-left text-sm sm:text-[16px] max-w-full sm:max-w-[455px] mx-auto md:mx-0 mb-10 sm:mb-14">
            <li className="mb-2">
              Build real-world projects, like web apps and data tools.
            </li>
            <li className="mb-2">
              Learn at your pace with interactive lessons and support
            </li>
            <li>Connect with mentors who’ve worked at top tech companies.</li>
          </ul>

          <button className="px-6 py-3 text-base sm:text-lg bg-[#0B293A] hover:bg-[#0B293B] text-white rounded-lg shadow w-full md:w-auto max-w-xs mx-auto md:mx-0">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
