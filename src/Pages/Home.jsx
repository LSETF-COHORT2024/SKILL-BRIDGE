import React from "react";
import TopNav from "../components/TopNav";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OurPartners from "../components/ourPartners";
import "../css/home/home.css";
// import HeroImg from "../components/HeroImg";

const Home = () => {
  return (
    <>
      <TopNav />
      <div className="body">
        <Navbar />
        <Hero />
        <OurPartners />
        {/* <HeroImg /> */}
      </div>
    </>
  );
};

export default Home;
