import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ courseId, term }) => {
  const [courseInfo, setCourseInfo] = useState(null);

  useEffect(() => {
    // Fetch course information based on courseId from your API
    fetch(`https://lumin-backend-v1.onrender.com/api/user/courses/all`)
      .then((response) => response.json())
      .then((data) => {
        const course = data.find((course) => course.id === courseId && course.term === term);
        setCourseInfo(course);
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
      });
  }, [courseId, term]);

  if (!courseInfo) {
    return <p>Loading...</p>; // Add a loading state while fetching data
  }

  const { title, instructor, img } = courseInfo;

  return (
    <article className="course-card" id={`course-card-${courseId}`}>
      <img src={img} alt={title} className="course-img" />
      <div className="card-text">
        <h4 className="course-name">{title}</h4>
        <p className="instructor-name">{instructor?.name}</p>
        <Link
          to={{ pathname: `/courses/${term}/${courseId}` }}
          className="cta-btn"
        >
          Visit Course
        </Link>
      </div>
    </article>
  );
};

export default CourseCard;




