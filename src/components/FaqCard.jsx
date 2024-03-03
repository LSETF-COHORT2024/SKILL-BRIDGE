// FaqCard.js

import React from "react";
import "../css/components/faqcard.css";

const FaqCard = () => {

  const faqs = [
    {
      question: "Can I enroll in multiple courses at once?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      question: "Enrollment Process for Different Courses",
      answer:
        "Our enrollment process is simple and straightforward. Once you select the course you want to enroll in, you will be prompted to create an account and provide payment information. After that, you will have immediate access to the course materials and can start learning at your own pace.",
    },
    {
      question: "What kind of support can I expect from instructors?",
      answer:
        "Our instructors are dedicated to providing support and guidance throughout your learning journey. They are available to answer questions, provide feedback, and help you overcome any challenges you may encounter.",
    },
    {
      question:
        "Are the courses self-paced or do they have specific start and end dates?",
      answer:
        "Our courses are self-paced, which means you can start and stop them at any time. However, we do recommend planning your learning schedule to make the most of your educational experience.",
    },
  ];

  return (
    <div className="faq-section">
      <div className="faq-card">
        <h2>Frequently Asked Questions</h2>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FaqCard;
