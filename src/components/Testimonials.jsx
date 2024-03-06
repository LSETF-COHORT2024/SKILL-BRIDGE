import React from "react";
import "../css/components/testimonials.css";
import "../css/styleguide.css";
import SecHeader from "./SecHeader";

const testimonialsData = [
  {
    name: "Sarah L",
    text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    image:
      "https://res.cloudinary.com/dgtsw62j3/image/upload/v1704776382/E-Learning%20Educational/d7bb6d02-6cd9-4f85-8cb0-286195d96aab_v0kbhq.png",
    story: "Read full story",
  },

  {
    name: "Jason M",
    text: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    image:
      "https://res.cloudinary.com/dgtsw62j3/image/upload/v1704776546/E-Learning%20Educational/ea119a89-979f-4fb8-b7cf-93dd6aae8ee0_umijmw.png",
    story: "Read full story",
  },
  {
    name: "Emily R",
    text: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
    image:
      "https://res.cloudinary.com/dgtsw62j3/image/upload/v1704776504/E-Learning%20Educational/50a95422-1b3a-4283-b6f4-6a7735fda82a_m55p5w.png",
    story: "Read full story",
  },
  {
    name: "Michael K",
    text: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
    image:
      "https://res.cloudinary.com/dgtsw62j3/image/upload/v1704776565/E-Learning%20Educational/dbd61092-3a3a-4e11-afe0-bbf401faece8_prolb8.png",
    story: "Read full story",
  },
  //   testimonials objects
];

const Testimonial = ({ name, text, image, story }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <p className="testimonial-text">{text}</p>
      </div>
      <div className="lower">
        <div className="testimonial-author">
          <img
            src={image}
            alt={`${name}'s image`}
            className="testimonial-image"
          />
          <p className="author-name">{name}</p>
        </div>
        <button className="author-story-btn">{story}</button>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <>
      <div className="testimonials">
        <div className="header">
          <div className="header-text">
            <SecHeader
              headerTitle="Testimonial"
              headerText="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum  eget habitasse in velit fringilla feugiat senectus in. asd"
            />
          </div>
        </div>
        {testimonialsData.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </>
  );
};

export default Testimonials;
