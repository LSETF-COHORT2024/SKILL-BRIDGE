import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import '../css/components/footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter,faLinkedin} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="contact-info">
          <p>Email: hello@skillbridge.com</p>
          <p>Phone: +91 98123 23209</p>
          <p>Location: Somewhere in the World</p>
        </div>
        <div className="footer-links">
          <div className="column">
            <a href="/">Home</a>
            <a href="/">Benefits</a>
            <a href="/">Our Courses</a>
            <a href="/">Our Testimonials</a>
          </div>
          <div className="column">
            <a href="/">About Us</a>
            <a href="/">Company</a>
            <a href="/">Achievements</a>
            <a href="/">Our Goals</a>
          </div>
        </div>
        <div className="social-icons">
          {/* Add social media icons */}
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <p className="copyright">© 2023 Skillbridge. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
