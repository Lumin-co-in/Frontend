import { Link } from 'react-router-dom';

const CourseCard = ({
  courseId,
  term,
  courseName,
  instructorName,
  courseImage,
}) => {
  return (
    <article className="course-card" id={`course-card-${courseId}`}>
      <img src={courseImage} alt="courseImage" className="course-img" />
      <div className="card-text">
        <h4 className="course-name">{courseName}</h4>
        <p className="instructor-name">{instructorName}</p>
        <Link to={{ pathname: `/user/course/${term}` }} className="cta-btn">
          Visit Course
        </Link>
      </div>
    </article>
  );
};

export default CourseCard;
