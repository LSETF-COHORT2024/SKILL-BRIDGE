import React from "react";
import "../css/components/pricecard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const PriceCard = () => {
  return (
    <>
      <div className="pricing-header">
        <h2>Our Pricing</h2>
        <div className="pricing-header-text">
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt eget elit
            id imperdiet et. Cras et sit dignissim lorem nibh et. Ac cum eget
            habitasse in velit fringilla feugiat senectus in.
          </p>
          <div className="button-header">
            <button className="btn  monthly">Monthly</button>
            <button className="btn  yearly">Yearly</button>
          </div>
        </div>
      </div>
      <div className="pricing-container">
        <div className="pricing-card">
          <h6 className="plan">Basic Plan</h6>
          <h2 className="price">
            $0<span>/month</span>
          </h2>
          <div className="features">
            {/* <h6 className="feature-heading">Available Features</h6> */}
            <ul className="features-list">
              <h6 className="feature-heading">Available Features</h6>

              <li>
                <FontAwesomeIcon icon={faCheck} className="icon" />
                Access to selected free courses.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon" />
                Limited course materials and .
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon" />
                Basic community support.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon" />
                No certification upon completion.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon" />
                Ad-supported platform.
              </li>
              <li>
                <FontAwesomeIcon icon={faTimes} className="icon" />
                Access to exclusive Pro Plan community forums.
              </li>
              <li>
                <FontAwesomeIcon icon={faTimes} className="icon" />
                Early access to new courses and updates.
              </li>
            </ul>

            <button className="get-started-button">Get Started</button>
          </div>
        </div>

        <div className="pricing-card">
          <h6 className="plan">Pro Plan</h6>
          <h2 className="price">
            $79<span>/month</span>
          </h2>
          <div className="features">
            {/* <h6 className="feature-heading">Available Features</h6> */}
            <ul className="features-list">
              <h6 className="feature-heading">Available Features</h6>

              <li>
                <FontAwesomeIcon icon={faCheck} className="icon" />
                Unlimited access to all courses.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon" /> Unlimited
                course materials and resources.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon" /> Priority
                support with instructors.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon" /> Course
                completion certificates.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon" /> Ad-free
                experience.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon" /> Access to
                exclusive Pro Plan community forums.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon" /> Early access
                to new courses and updates.
              </li>
            </ul>
          </div>
          <button className="get-started-button">Get Started</button>
        </div>
      </div>
    </>
  );
};

export default PriceCard;
