import React from "react";
import Hero from "./HomeComponents/Hero";
import FutureTech from "./HomeComponents/FutureTech";
import ThinkgersTimeline from "./HomeComponents/ShapingFuture";
import Projects from "./HomeComponents/Projects";
import ThingkersBuzz from "./HomeComponents/Testimonials";
import JoinPage from "./HomeComponents/RegisterSection";
import Footer from "./HomeComponents/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <FutureTech />
      <ThinkgersTimeline />
      <Projects />
      <ThingkersBuzz />
      <JoinPage />
      <Footer />
    </div>
  );
};

export default Home;
