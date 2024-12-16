import React from "react";
import Header from "../components/Header";
import Tutorial from "../components/Tutorial";
import Description from "../components/Description";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div>
      <Header />
      <Tutorial />
      <Description />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
