import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Okinawa Motors Landing Page Clone",
    github: "http://github.com",
    demo: "https://okinawalandingpageclone.netlify.app/",
  },
  {
    id: 2,
    image: IMG4,
    title: "Okinawa Motors Landing Page Clone",
    github: "http://github.com",
    demo: "https://okinawalandingpageclone.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Okinawa Motors Landing Page Clone",
    github: "http://github.com",
    demo: "https://okinawalandingpageclone.netlify.app/",
  },
  {
    id: 4,
    image: IMG2,
    title: "Okinawa Motors Landing Page Clone",
    github: "http://github.com",
    demo: "https://okinawalandingpageclone.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Recent Works</h2>
      <h1>Portfolio</h1>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="\btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
