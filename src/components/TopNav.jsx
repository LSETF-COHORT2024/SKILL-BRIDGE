import React from "react";
import "../css/components/topnav.css";
import "../css/styleguide.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TopNav = () => {
  return (
    <>
      <div className="top-nav">
        <p>
          Free Courses 🌟 Sale Ends Soon, Get It Now
          <FontAwesomeIcon className="right-icon" icon={faArrowRight} />
        </p>
      </div>
    </>
  );
};

export default TopNav;
