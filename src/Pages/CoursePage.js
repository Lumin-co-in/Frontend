import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdTime, IoIosGlobe, IoMdAlarm } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import { MdOndemandVideo, MdNotes, MdCases, MdCheckCircleOutline } from "react-icons/md";
// import Accordion from "../Components/Accordion"; // Adjust this import according to your file structure

const CoursePage = () => {
  const { term: termId, id: courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch course information based on courseId and term from your API
    fetch(`https://lumin-backend-v1.onrender.com/api/user/courses/all`)
      .then((response) => response.json())
      .then((data) => {
        const course = data.find((course) => course.courseId === courseId && course.term === termId);
        setCourse(course);
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
      });
  }, [courseId, termId]);

  if (!course) {
    return <p>Loading...</p>; // Add a loading state while fetching data
  }

  const instructor = course?.instructor?.name;

  return (
    <section className="course-page center-section">
      <div className="col-left course-page-col">
        <div className="course-intro">
          <div className="course-page-nav">
            <Link to="/#courses" className="course-page-nav-link">
              Courses
            </Link>
            <span className="link-separator">{' > '}</span>
            <Link to={`/#term-${termId}`} className="course-page-nav-link">
              Term {termId}
            </Link>
            <span className="link-separator">{' > '}</span>
            <Link to={`/courses/${termId}/${courseId}`} className="course-page-nav-link">
              {course?.title}
            </Link>
          </div>
          <h1 className="course-page-course-title">{course.title}</h1>
          <p className="course-desc">
            Welcome to this course
          </p>
          <p className="instructor">
            Created By <span className="course-page-instructor-name">{instructor?.name}</span>
          </p>
          <div className="intro-bottom">
            <p className="text-with-icon">
              <IoMdTime /> Last Updated 15th June 2024
            </p>
            <p className="text-with-icon">
              <IoIosGlobe /> English with conversational Hindi
            </p>
          </div>
          <div className="course-page-sub-container">
            <h3>About the author</h3>
            <p className="about-author-text">{instructor?.bio}</p>
          </div>
        </div>
        <div className="course-structure-container">
          <div className="course-page-sub-container">
            <h3>This course includes:</h3>
            <div className="inclusions-container">
              <div className="text-with-icon">
                <MdOndemandVideo /> 11 hours of video lectures
              </div>
              <div className="text-with-icon">
                <MdNotes /> Lecture Notes
              </div>
              <div className="text-with-icon">
                <MdCases /> Case Summaries
              </div>
              <div className="text-with-icon">
                <MdCheckCircleOutline /> Solved PYQs
              </div>
            </div>
          </div>
          <div className="course-page-sub-container course-contents">
            <h3>Course Contents</h3>
            <div className="course-contents-container">
              <p>{course?.contents}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-right course-page-col">
        <div className="video-card">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/jNQXAC9IVRw?si=QwePvLpAO25GS3wb"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <div className="course-page-price-container">
              <span className="new-price">
                <FaRupeeSign /> 299
              </span>
              <span className="old-price">
                <FaRupeeSign /> 499
              </span>
              <span className="discount">40% off</span>
            </div>
            <div className="exclusive-msg">
              <IoMdAlarm /> Exclusive for first 300 students!
            </div>
          </div>
          <div className="cta-btn">Add to Cart</div>
          <div className="card-footer">
            <p className="accessible">Accessible till 31st July, 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePage;




// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { IoMdTime, IoIosGlobe, IoMdAlarm } from "react-icons/io";
// import { FaRupeeSign } from "react-icons/fa";
// import {
//   MdOndemandVideo,
//   MdNotes,
//   MdCases,
//   MdCheckCircleOutline,
// } from "react-icons/md";
// import { team, courses } from "../data";
// import Accordion from "../Components/Accordion";



// const CoursePage = () => {
//   const { term: termId, id: courseId } = useParams();

//   const course = courses.find((t) => t.id === termId)?.courses.find((c) => c.id === courseId);
//   const instructor = team.find((e) => e.id === course?.instructorID);

//   if (!course || !instructor) return null;

//   return (
//     <section className="course-page center-section">
//       <div className="col-left course-page-col">
//         <div className="course-intro">
//           <div className="course-page-nav">
//             <a href="/#courses" className="course-page-nav-link">
//               Courses
//             </a>
//             <span className="link-separator">{' > '}</span>
//             <a href={`/#term-${termId}`} className="course-page-nav-link">
//               Term {termId}
//             </a>
//             <span className="link-separator">{' > '}</span>
//             <Link to={`/courses/${termId}/${courseId}`} className="course-page-nav-link">
//               {course.courseName}
//             </Link>
//           </div>
//           <h1 className="course-page-course-title">{course.courseName}</h1>
//           <p className="course-desc">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis magnam sapiente non, porro facere eum ad odit sit distinctio iure eos voluptates nam reprehenderit explicabo reiciendis labore necessitatibus mollitia.
//           </p>
//           <p className="instructor">
//             Created By <span className="course-page-instructor-name">{instructor.name}</span>
//           </p>
//           <div className="intro-bottom">
//             <p className="text-with-icon">
//               <IoMdTime /> Last Updated 15th June 2024
//             </p>
//             <p className="text-with-icon">
//               <IoIosGlobe /> English with conversational Hindi
//             </p>
//           </div>
//           <div className="course-page-sub-container">
//             <h3>About the author</h3>
//             <p className="about-author-text">{instructor.bio}</p>
//           </div>
//         </div>
//         <div className="course-structure-container" >
//           <div className="course-page-sub-container">
//             <h3>This course includes:</h3>
//             <div className="inclusions-container">
//               <div className="text-with-icon">
//                 <MdOndemandVideo /> 11 hours of video lectures
//               </div>
//               <div className="text-with-icon">
//                 <MdNotes /> Lecture Notes
//               </div>
//               <div className="text-with-icon">
//                 <MdCases /> Case Summaries
//               </div>
//               <div className="text-with-icon">
//                 <MdCheckCircleOutline /> Solved PYQs
//               </div>
//             </div>
//           </div>
//           <div className="course-page-sub-container course-contents">
//             <h3>Course Contents</h3>
//             <div className="course-contents-container">
//               {course.contents.map((content) => (
//                 <Accordion key={content.topicName} props={content} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col-right course-page-col" >
//         <div className="video-card">
//           <div className="video-container">
//             <iframe
//               src="https://www.youtube.com/embed/jNQXAC9IVRw?si=QwePvLpAO25GS3wb"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//             ></iframe>
//           </div>
//           <div>
//             <div className="course-page-price-container">
//               <span className="new-price">
//                 <FaRupeeSign /> 299
//               </span>
//               <span className="old-price">
//                 <FaRupeeSign /> 499
//               </span>
//               <span className="discount">40% off</span>
//             </div>
//             <div className="exclusive-msg">
//               <IoMdAlarm /> Exclusive for first 300 students!
//             </div>
//           </div>
//           <div className="cta-btn">Add to Cart</div>
//           <div className="card-footer">
//             <p className="accessible">Accessible till 31st July, 2024</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoursePage;
