import React from "react";
import TopNav from "./TopNav";
import Navigation from "./Navigation";
import "../css/components/topnavbars.css";

const TopNavbars = () => {
  return (
    <>
      <div className="top-navbars">
        <TopNav />
        <Navigation />
      </div>
    </>
  );
};

export default TopNavbars;
