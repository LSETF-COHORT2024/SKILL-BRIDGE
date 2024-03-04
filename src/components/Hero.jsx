import React from "react";
import "../css/components/hero.css";
import "../css/styleguide.css";
import OurPartners from "../components/ourPartners";

const App = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            <span role="img" aria-label="lightning">
              ⚡
            </span>{" "}
            <strong className="highlight-text">Unlock</strong> Your Creative
            Potential
          </h1>
        </div>
        <h3 className="subtext">with Online Design and Development Courses.</h3>
        <p className="sub">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
        <div className="buttons">
          <button className="explore">Explore Courses</button>
          <button className="pricing">View Pricing</button>
        </div>
      </div>
    </div>
  );
};

export default App;
