import React from "react";
import { Link } from 'react-router-dom';
import CourseCard from "../Components/CourseCard";

import { courses } from "../data";
import examImage from '../Assets/exam.jpg';
import '../index.css';
import videoi from '../Assets/video.jpg';
import notes1 from '../Assets/notes1.jpg';
import notes2 from '../Assets/notes2.jpg';
import cases from '../Assets/case.jpg';


const Home = () => {
 
  return (
    <>
    
      <section className="container">
        <div className="container-content">
          <div className="right-section" >
            <h2 className="title">
              Welcome to <span className="comp-name">LUMIN</span>
            </h2>
            <p className="container-text">
            We offer semester exam preparation guides for LL.B. students Delhi
          University. We simplify the exam preparation journey by offering
          interactive video lectures which are specific to exams and previous
          year question papers, concise case summaries and lecture notes, and
          sample answers to previous year exam questions.
              <br /> <br />
              We provide top-tier education in an accessible format, ensuring that
          learning is both enriching and enjoyable. Our dedicated instructors
          are deeply committed to empowering students to thrive academically.
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
      <p className="course-desp-text">We offer exam preparation guide for LLB students of Delhi University</p>
      <div className="slabs-container">
        <article className="row-slab" id="row-slab1">
          <section className="left-sec">
            <img src={videoi} alt="video-lecture" />
          </section>
          <section className="right-sec">
            <h3 className="slab-title">Video Lectures</h3>
            <p className="slab-text"> Video lectures designed
              specifically for LLB semester exams to help student excel
              academically.</p>
          </section>
        </article>
        <article className="row-slab" id="row-slab2">
          <section className="left-sec">
            <img src={notes1} alt="notes" />
          </section>
          <section className="right-sec">
            <h3 className="slab-title">Topic Notes</h3>
            <p className="slab-text">Comprehensive and clear topic notes for effortless learning.</p>
          </section>
        </article>
        <article className="row-slab" id="row-slab3">
          <section className="left-sec">
            <img src={cases} alt="case-summary" />
          </section>
          <section className="right-sec">
            <h3 className="slab-title">Case Summaries</h3>
            <p className="slab-text">Concise summaries of cases essential for final exams.</p>
          </section>
        </article>
        <article className="row-slab" id="row-slab4">
          <section className="left-sec">
            <img src={notes2} alt="sample-paper" />
          </section>
          <section className="right-sec">
            <h3 className="slab-title">Sample Answers</h3>
            <p className="slab-text">Sample answers guide for the past five years of question papers.</p>
          </section>
        </article>
      </div>
    </section>
    <section className="center-section" id="courses">
        <h2 className="section-title">Our Courses</h2>
        {courses.map((c) => {
          return (
            <div className="course-container" key={c.id} id={`term-${c.id}`}>
              <h2 className="course-term">{c.term} Term</h2>
              <div className="course-cards-container">
                {c.courses.map((e) => {
                  return <CourseCard key={e.id} course={e} term={c.id} />;
                })}
              </div>
            </div>
          );
        })}
      </section>
  
  </>
  );
};

export default Home;


