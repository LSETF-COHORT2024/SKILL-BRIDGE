import React from "react";
import TopNav from "../components/TopNav";
import NavBar from "../components/Navigation";
import Hero from "../components/Hero";
import OurPartners from "../components/ourPartners";
import "../css/home/home.css";
import SubPage from "../components/SubPage";
import HeroImg from "../components/HeroImg";
import CoursesCard from "../components/CoursesCard";
import CourseTest from "../components/CourseTest";
import Testimonials from "../components/Testimonials";
import PriceCard from "../components/PriceCard";

const Home = () => {
  return (
    <>
      <TopNav />
      <NavBar />
      <div className="body">
        <Hero />
        <OurPartners />
        <HeroImg />
        <SubPage />
        <CoursesCard />
        <Testimonials />
        <PriceCard/>
      </div>
    </>
  );
};

export default Home;
