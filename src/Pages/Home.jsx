import React from "react";
import TopNav from "../components/TopNav";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import OurPartners from "../components/ourPartners";
import "../css/home/home.css";
import SubPage from "../components/SubPage";
import HeroImg from "../components/HeroImg";
import CoursesCard from "../components/CoursesCard";
import CourseTest from "../components/CourseTest";

const Home = () => {
  return (
    <>
      <TopNav />
      <Navbar />
      <div className="body">
        <Hero />
        <OurPartners />
        <HeroImg />
        <SubPage />
        <CoursesCard />
        {/* <CourseTest /> */}
      </div>
    </>
  );
};

export default Home;
