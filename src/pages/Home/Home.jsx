import React from "react";
import Hero from "./HomeComponents/Hero";
import FutureTech from "./HomeComponents/FutureTech";
import ThinkgersTimeline from "./HomeComponents/ShapingFuture";
import Projects from "./HomeComponents/Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <FutureTech />
      <ThinkgersTimeline />
      <Projects />
    </div>
  );
};

export default Home;
