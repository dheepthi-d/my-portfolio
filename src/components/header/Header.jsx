import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello there! </h3>
        <h1>I'm Dhulasi Dheepthi D</h1>
        <h2 className="text-light">Web Developer</h2>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
