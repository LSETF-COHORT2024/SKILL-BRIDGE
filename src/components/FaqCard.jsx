// FaqCard.js
import React, { useState } from "react";
import "../css/components/faqcard.css";

const FaqCard = () => {
  const [expanded, setExpanded] = useState(null);
  const faqItems = [
    {
      question: "Can I enroll in multiple courses at once?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    // Add more FAQ items here...
  ];

  const handleItemClick = (index) => {
    setExpanded(index === expanded ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <p>Still have questions? Contact our Team via support@skillbridge.com</p>
      <a href="#all-faqs">See All FAQs</a>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${expanded === index ? "expanded" : ""}`}
            onClick={() => handleItemClick(index)}
          >
            <div className="faq-question">{item.question}</div>
            {expanded === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqCard;
