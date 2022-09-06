import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiHackerrank } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        D.D.D
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/dheepthidp/" target="_blank">
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/dhulasi-dheepthi-d/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/dheepthi-d" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.hackerrank.com/dhulasidheepthid" target="_blank">
          <SiHackerrank />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Dhulasi Dheepthi D. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
