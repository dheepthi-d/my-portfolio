import React from "react";
import CV from "../../assets/Resume.pdf";
import "./header.css";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Connect with me
      </a>
    </div>
  );
};

export default CTA;
