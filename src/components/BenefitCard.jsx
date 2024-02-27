import React from "react";
import '../css/components/benefitcard.css'


const BenefitCard = ({ number, title, description }) => {
  return (
    <div className="benefit-card">
      <div className="benefit-number">{number}</div>
      <h3 className="benefit-title">{title}</h3>
      <p className="benefit-description">{description}</p>
    </div>
  );
};

const benefitsData = [
  {
    number: "01",
    title: "Flexible Learning Schedule",
    description: "Learn at your own pace and on your own schedule.",
  },
  {
    number: "02",
    title: "Updated Curriculum",
    description: "Access courses with up-to-date content.",
  },
  {
    number: "03",
    title: "Interactive Learning Environment",
    description:
      "Collaborate with fellow students, exchanging ideas and feedback.",
  },
  {
    number: "04",
    title: "Flexible Learning Schedule",
    description: "Learn at your own pace and on your own schedule.",
  },
  {
    number: "05",
    title: "Expert Instruction",
    description:
      "Learn from experienced instructors with a wealth of knowledge in design and development.",
  },
  {
    number: "06",
    title: "Practical Projects and Assignments",
    description:
      "Develop a portfolio showcasing your skills and accomplishments.",
  },
  {
    number: "07",
    title: "Diverse Course Offerings",
    description:
      "Choose from a variety of courses to suit your interests and goals.",
  },
];

const Benefits = () => {
  return (
    <div className="benefits">
      {benefitsData.map((benefit, index) => (
        <BenefitCard key={index} {...benefit} />
      ))}
    </div>
  );
};

export default Benefits;
