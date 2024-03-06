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
import Footer from "../components/Footer";
import FaqCard from "../components/FaqCard";
import TopNavbars from "../components/TopNavbars";

const Home = () => {
  return (
    <>
    <TopNavbars/>
      <div className="body">
        <Hero />
        <OurPartners />
        <HeroImg />
        <SubPage />
        <CoursesCard />
        <Testimonials />
        <PriceCard />
        <FaqCard />
      </div>
      <Footer />
    </>
  );
};

export default Home;
