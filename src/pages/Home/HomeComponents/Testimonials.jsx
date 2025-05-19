import React from "react";
import { PlayCircle } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/Card";

const testimonials = Array(10).fill({
  name: "Shajib Hasan",
  title: "Assistant Professor, AIUB",
  image: "/video-img.png", // Replace with real image URL
});

export default function ThingkersBuzz() {
  return (
    <div className="bg-[#0B293A] text-white p-8 overflow-hidden relative">
      <div className="absolute top-1/5 left-0">
        <img src="/Ellipse-1.png" alt="" />
      </div>
      <div className="max-w-6xl mx-auto mt-16">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-semibold mb-2 text-[#B1B1B1] tracking-[-2%]">
            Everyone’s Buzzing About:{" "}
            <span className="custom-outline font-semibold">Thingkers</span>
          </h2>
          <p className="text-[18px] max-w-4xl md:text-base text-[#959595] mt-4 ">
            From students and youth to our dedicated partners, people can’t stop
            talking about the incredible impact we’re making together!
          </p>
        </div>

        {/* Marquee container */}
        <div className="relative w-full overflow-hidden marquee-container">
          <div className="marquee-track space-x-4 mt-4">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="max-w-[300px] max-h-[500px] rounded-2xl overflow-hidden border border-white bg-[#DDF7F1] text-center"
              >
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full object-cover h-full"
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div className="size-14 bg-white/30 backdrop-blur-sm rounded-full  shadow-lg flex items-center justify-center">
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="red"
                          className="w-8 h-8"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <CardContent className="bg-[#0B1D2A] text-white rounded-2xl py-4 absolute bottom-0 right-0 left-0">
                    <h3 className="text-lg font-[500] tracking-[4%]">
                      {testimonial.name}
                    </h3>
                    <p className="text-[18px] text-[#959595]">
                      {testimonial.title}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
