import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";

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
    title: "DIGILEARN- An Online Course Platform",
    github: "http://github.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Photography Website Landing Page",
    github: "https://github.com/dheepthi-d/PhotographywebsiteLandingpage",
    demo: "https://lenzdpotraits.netlify.app/",
  },
  {
    // id: 4,
    // image: IMG2,
    // title: "Calendar using HTML, CSS & JavaScript",
    // github: "https://github.com/dheepthi-d/Simple-Calendar",
    // demo: "https://eventcalendarclone.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Food Genie App",
    github: "http://github.com/dheepthi-d/Food-Recipe-Genie",
    demo: "https://foodrecipegenie.netlify.app/",
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
