import React from "react";
import "../css/components/course-car.css";

function CoursesCard() {
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
      title: "UI/UX Design",
      instructor: "Emily Johnson",
      duration: "6 Weeks ",
      level: "Intermediate",
      image:
        "https://res.cloudinary.com/dgtsw62j3/image/upload/v1704278772/E-Learning%20Educational/82c7271a-8fb6-48a3-9f89-74ce5a0be659_nx8msi.png",
      description:
        "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX).",
    },
    // Add more courses here
  ];

  return (
    <div className="course-cards-container">
      {courses.map((course) => (
        <div className="course-card" key={course.title}>
          <img src={course.image} alt={course.title} className="course-image" />
          <div className="course-detail">
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <p className="course-instructor">By {course.instructor}</p>
            <p className="course-duration">{course.duration}</p>
            <p className="course-level">{course.level}</p>
            <button className="course-button">Get it Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CoursesCard;
