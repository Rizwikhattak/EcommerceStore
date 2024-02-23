import React from "react";
import HeroSection from "./Components/HeroSection";
import Features from "./Components/Features";
import Companies from "./Components/Companies";
import FeaturedProducts from "./Components/FeaturedProducts";

const Home = () => {
  return (
    <>
      <HeroSection heading={"Store"} />
      <FeaturedProducts />
      <Features />
      <Companies />
    </>
  );
};

export default Home;
