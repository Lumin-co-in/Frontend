import React from 'react';
import "../index.css";

const CoursesEnrolled = ({ courses }) => {
  return (
    <div className="container2">
      <h2 className='courses-enrolled'>Courses Enrolled</h2>
      <ul className='cname'>
        {courses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesEnrolled;
