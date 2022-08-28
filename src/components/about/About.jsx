import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <p>
            I'm a student pursuing my majors in Information Science and
            Engineering from Bangalore, India. My interests are inclined towards
            development. As an ardent learner and a creative thinker, I'm always
            open to learning new stuffs and implementing them. I'm currently
            into Web Development and UI/UX Designing. Oh! and I'm a Potter-Head
            as well.😉
          </p>
          <a href="#portfolio" className="btn btn-primary">
            My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
