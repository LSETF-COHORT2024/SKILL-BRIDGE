import React from "react";
import "../css/buttons/genbtn.css";

const GenBtn
 = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};

export default GenBtn;
