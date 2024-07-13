import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../Components/CourseCard';
import examImage from '../Assets/exam.jpg';
import videoi from '../Assets/video.jpg';
import notes1 from '../Assets/notes1.jpg';
import cases from '../Assets/case.jpg';
import notes2 from '../Assets/notes2.jpg';
import axios from '../axios';

const Home = () => {
  // Filter courses based on terms 2, 4, 6
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const getCoursesData = async () => {
      const res = await axios.get('/user/courses/all');
      const courseData = res.data;
      setCourses(courseData);
    };
    getCoursesData();
  }, []);

  return (
    <>
      <section className="container">
        <div className="container-content">
          <div className="right-section">
            <h2 className="title">
              Welcome to <span className="comp-name">LUMIN</span>
            </h2>
            <p className="container-text">
              We offer semester exam preparation guides for LL.B. students at
              Delhi University. We simplify the exam preparation journey by
              offering interactive video lectures specifically tailored to
              exams, previous year question papers, concise case summaries, and
              lecture notes.
              <br /> <br />
              We provide top-tier education in an accessible format, ensuring
              that learning is enriching and enjoyable. Our dedicated
              instructors are deeply committed to empowering students to thrive
              academically.
            </p>
            <div className="c-button">
              <Link to="/courses">
                <button className="course-btn">Our Courses</button>
              </Link>
            </div>
          </div>
          <section className="left-section">
            <img src={examImage} alt="exam" />
          </section>
        </div>
      </section>

      <section className="course-desp-box" id="product">
        <h2 className="course-desp-title">In Our Courses, we will provide</h2>
        <p className="course-desp-text">
          We offer exam preparation guides for LLB students at Delhi University
        </p>
        <div className="slabs-container">
          <article className="row-slab" id="row-slab1">
            <section className="left-sec">
              <img src={videoi} alt="video-lecture" />
            </section>
            <section className="right-sec">
              <h3 className="slab-title">Video Lectures</h3>
              <p className="slab-text">
                Video lectures designed specifically for LLB semester exams to
                help students excel academically.
              </p>
            </section>
          </article>
          <article className="row-slab" id="row-slab2">
            <section className="left-sec">
              <img src={notes1} alt="notes" />
            </section>
            <section className="right-sec">
              <h3 className="slab-title">Topic Notes</h3>
              <p className="slab-text">
                Comprehensive and clear topic notes for effortless learning.
              </p>
            </section>
          </article>
          <article className="row-slab" id="row-slab3">
            <section className="left-sec">
              <img src={cases} alt="case-summary" />
            </section>
            <section className="right-sec">
              <h3 className="slab-title">Case Summaries</h3>
              <p className="slab-text">
                Concise summaries of cases essential for final exams.
              </p>
            </section>
          </article>
          <article className="row-slab" id="row-slab4">
            <section className="left-sec">
              <img src={notes2} alt="sample-paper" />
            </section>
            <section className="right-sec">
              <h3 className="slab-title">Sample Answers</h3>
              <p className="slab-text">
                Sample answers guide for the past five years of question papers.
              </p>
            </section>
          </article>
        </div>
      </section>

      <section className="center-section" id="courses">
        <div>
          <h2 className="section-title">Our Courses</h2>
          {/* <pre>{JSON.stringify(courses, null, 2)}</pre> */}
          <div className="course-card-container">
            <h2 className="term-title text-5xl font-bold p-2">Term-2</h2>
            <div className="flex justify-around">
              {courses &&
                courses.map((course) => (
                  <CourseCard
                    key={course._id}
                    courseName={course.title}
                    courseImage={course.img}
                    courseId={course.courseId}
                    instructorName={course.instructor.name}
                    term={course.term}
                  />
                ))}
            </div>
          </div>
          <div className="course-card-container">
            <h2 className="term-title text-5xl font-bold p-2">Term-4</h2>
            <div className="flex justify-around">
              {courses &&
                courses.map(
                  (course) =>
                    course.term === '4' && (
                      <CourseCard
                        key={course._id}
                        courseName={course.title}
                        courseImage={course.img}
                        courseId={course.courseId}
                        instructorName={course.instructor.name}
                        term={course.term}
                      />
                    )
                )}
            </div>
          </div>
          <div className="course-card-container">
            <h2 className="term-title text-5xl font-bold p-2">Term-6</h2>
            <div className="flex justify-around">
              {courses &&
                courses.map(
                  (course) =>
                    course.term === '6' && (
                      <CourseCard
                        key={course._id}
                        courseName={course.title}
                        courseImage={course.img}
                        courseId={course.courseId}
                        instructorName={course.instructor.name}
                        term={course.term}
                      />
                    )
                )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
