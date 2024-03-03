import React from "react";
import "../css/components/pricecard.css";

const PriceCard = ({ title, price, features }) => {
  return (
    <div className="price-card">
      <div className="price-card-header">
        <h3 className="price-card-title">{title}</h3>
        <p className="price-card-price">{price}</p>
      </div>
      {features && features.length > 0 && (
        <ul className="price-card-features">
          {features.map((feature, index) => (
            <li key={index} className="price-card-feature">
              {feature}
            </li>
          ))}
        </ul>
      )}
      <button className="price-card-button">Get Started</button>
    </div>
  );
};

const freePlanFeatures = [
  "Access to selected courses",
  "Limited community support",
  "No certification upon completion",
  "Access to exclusive Pro Plan community forum",
  "Access to new courses and updates",
];

const proPlanFeatures = [
  "Priority support from instructors",
  "Course completion certificates",
  "Access to Pro Plan community forum",
  "Early access to new courses and updates",
];

const Pricing = () => {
  return (
    <div className="pricing">
      <h1>Our Pricing</h1>
      <div className="price-cards-container">
        <PriceCard title="Free Plan" price="$0" features={freePlanFeatures} />
        <PriceCard
          title="Pro Plan"
          price="$79/month"
          features={proPlanFeatures}
        />
      </div>
    </div>
  );
};

export default Pricing;
