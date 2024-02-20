import React from "react";
import HeroSection from "./Components/HeroSection";
import Features from "./Components/Features";
import Companies from "./Components/Companies";

const Home = () => {
  return (
    <>
      <HeroSection heading={"Store"} />
      <Features />
      <Companies />
    </>
  );
};

export default Home;
