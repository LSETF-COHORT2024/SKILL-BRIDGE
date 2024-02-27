import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../css/components/navbar.css"; // Import your external CSS file for styling

const Navbar = () => {
  // State to toggle the menu
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src="https://res.cloudinary.com/dgtsw62j3/image/upload/v1706884147/E-Learning%20Educational/Logo_1_dkyiun.png" />
        </div>

        {/* Hamburger Icon */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>

        {/* Navigation Links */}
        <div className={isMenuOpen ? "nav-links show" : "nav-links"}>
          <a href="/home">Home</a>
          <a href="/courses">Courses</a>
          <a href="/about">About Us</a>
          <a href="/pricing">Pricing</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Action Buttons */}
        <div className={isMenuOpen ? "nav-actions show" : "nav-actions"}>
          <a href="/signup" className="button">
            Sign Up
          </a>
          <a href="/login" className="button">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
