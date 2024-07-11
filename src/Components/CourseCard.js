import React from "react";
import { Link } from "react-router-dom";


const CourseCard = ({ course, term }) => {

  return (
    <article className="course-card" id={`course-card-${course.id}`}>
      <img src={course.img} alt={course.courseName} className="course-img" />
      <div className="card-text">
        <h4 className="course-name">{course.courseName}</h4>
        <p className="instructor-name">{course.instructor}</p>
        <Link
          to={{ pathname: `/courses/${term}/${course.id}` }}
          className="cta-btn"
        >
          Visit Course
        </Link>
      </div>
    </article>
  );
};

export default CourseCard;
