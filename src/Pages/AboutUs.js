import React from "react";
import ProfileCard from "../Components/ProfileCard";
import { team } from "../data";


const AboutUs = () => {

  return (
    <>
      <section className="center-section" id="team" >
        <h2 className="section-title">Our Team</h2>
        <div className="team-container">
          {team
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((el) => (
              <ProfileCard key={el.id} {...el} className="profile-card" />
            ))}
        </div>
        <a href="#values" className="cta-btn">
          Our Values
        </a>
      </section>
      <section className="center-section" id="values">
        <h2 className="section-title">Our Values</h2>
        <div className="three-card-container">
          <article className="values-column">
            <h3 className="article-title">Mission oriented</h3>
            <p className="article-text">
              Our goal is to empower every person to have access to quality
              learning. We are deeply committed to making a meaningful impact in
              the world. It's about aligning our goals, strategies, and
              resources to our mission, ensuring that every endeavor we do
              contribute towards that goal.
            </p>
          </article>
          <article className="values-column">
            <h3 className="article-title">Diversity</h3>
            <p className="article-text">
              We embrace people from various backgrounds as we believe that
              through providing access to knowledge we can reduce cultural
              divides in the world. Together, we stand committed to building a
              workplace and society where everyone has the opportunity to
              succeed and thrive.
            </p>
          </article>
          <article className="values-column">
            <h3 className="article-title">Excellence</h3>
            <p className="article-text">
              We strive to provide access to excellent quality education to
              every person on the earth. "Excellence" isn't merely a word for
              us; it's a mindset, a culture, and a promise to our customers,
              employees, and stakeholders. It's about going above and beyond,
              surpassing expectations, and constantly striving for improvement.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
