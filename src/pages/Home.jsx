import React from "react";
import AppNavbar from "../components/AppNavbar";
import HomeCarousel from "../components/HomeCarousel";
import Testimonial from "../components/Testimonial";
import BestsellerPlants from "../components/BestsellerPlants";

// example plant data (replace with your real data or JSON)
import plants from "../jsonDatas/plants.json"

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <BestsellerPlants plants={plants} />
      <Testimonial />
    </div>
  );
};

export default Home;
