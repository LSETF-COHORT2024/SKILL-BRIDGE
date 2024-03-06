import React from "react";
import "../css/components/coursescard.css";

const CoursesCard = () => {
  const courses = [
    {
      title: "Web Design Fundamentals",
      instructor: "John Smith",
      duration: "4 Weeks ",
      level: "Beginner",
      image:
        "https://res.cloudinary.com/dgtsw62j3/image/upload/v1704220571/E-Learning%20Educational/e7c0f69c-171a-4797-9690-3a6de2860257_g9m5cn.png",
      description:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles.",
    },
    {
      title: "UI/UX Design",
      instructor: "Emily Johnson",
      duration: "6 Weeks ",
      level: "Intermediate",
      image:
        "https://res.cloudinary.com/dgtsw62j3/image/upload/v1704278772/E-Learning%20Educational/82c7271a-8fb6-48a3-9f89-74ce5a0be659_nx8msi.png",
      description:
        "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX).",
    },
    {
      title: "Mobile App Development",
      instructor: "David Brown",
      duration: "8 Weeks",
      level: "Intermediate",

      image:
        "https://res.cloudinary.com/dgtsw62j3/image/upload/v1704280217/E-Learning%20Educational/53ccc90e-fa79-4cfa-9781-56d7600e8503_lgafde.png",
      description:
        "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    },
    {
      title: "Graphic Design for Beginners",
      instructor: "Sarah Thompson",
      duration: "10 Weeks",
      level: "Beginners",

      image:
        "https://res.cloudinary.com/dgtsw62j3/image/upload/v1704280260/E-Learning%20Educational/55c7d5cd-76e5-4485-9f9b-d3d928bd4c8e_ulhjxb.png",
      description:
        "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
    },
    {
      title: "Front-End Web Development",
      instructor: "Michael Adams",
      duration: "10 Weeks",
      level: "Intermediate",

      image:
        "https://res.cloudinary.com/dgtsw62j3/image/upload/v1704280494/E-Learning%20Educational/423d34ca-6b17-403b-bfa0-5e607c7d56b1_xilhyc.png",
      description:
        "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites..",
    },
    {
      title: "Advanced JavaScript",
      instructor: "Jennifer Wilson",
      duration: "6 Weeks",
      level: "Advanced",

      image:
        "https://res.cloudinary.com/dgtsw62j3/image/upload/v1704280557/E-Learning%20Educational/a2f789f3-4201-419a-9f0f-c884cbfaaa26_mi2pbw.png",
      description:
        "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
    },
    // Add more courses here
  ];

  return (
    <div className="course-cards-container">
      {courses.map((course) => (
        <div className="course-card" key={course.title}>
          <img src={course.image} alt={course.title} className="course-image" />
          <div className="course-detail">
            <p className="course-duration">{course.duration}</p>
            <p className="course-level">{course.level}</p>{" "}
            <p className="course-instructor">By {course.instructor}</p>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <button className="course-button">Get it Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CoursesCard;
