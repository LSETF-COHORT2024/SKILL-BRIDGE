import React from "react";
import "../css/components/secheader.css";
import "../css/styleguide.css";

const SecHeader = ({ headerTitle, headerText }) => {
  return (
    <>
      <div className="page-headers">
        <h2 className="header-title">{headerTitle}</h2>
        <div className="title-content">
          <p className="header-text">{headerText}</p>
          <button className="view-all-button">View All</button>
        </div>
      </div>
    </>
  );
};

export default SecHeader;
