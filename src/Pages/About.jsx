import React from "react";
import "../css/about/about.css";
import SecHeader from "../components/SecHeader";
import Benefits from "../components/BenefitCard";
import TopNav from "../components/TopNav";
import Navigation from "../components/Navigation";
import TopNavbars from "../components/TopNavbars";

const About = () => {
  return (
    <>
      <TopNavbars />x
      <div className="about-section">
        <h2>About Skillbridge</h2>
        <p>
          Welcome to our platform, where we are committed to fast-tracking
          individuals to become world-class experts at their desired fields in
          an average of 6 months! Specialized training materials are available
          exclusively designed by acclaimed professionals with years of
          experience.
        </p>
      </div>
      <div>
        <h5 className="achievement">Achievement</h5>
        <p>
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements"
        </p>
      </div>
      <Benefits />
      <div>
        <h5 className="achievement">Our Goals</h5>
        <p>
          At SkillBridge, our goal is to empower individuals from all
          backgrounds to thrive in the world of design and development. We
          believe that education should be accessible and transformative,
          enabling learners to pursue their passions and make a meaningful
          impact. Through our carefully crafted courses, we aim to
        </p>
      </div>
      <Benefits />
    </>
  );
};

export default About;
