import React from "react";
import "./nav.css";
import { ImHome3 } from "react-icons/im";
import { MdWork } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiContactsBookFill } from "react-icons/ri";
import { FaUserAstronaut } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <ImHome3 />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserAstronaut />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <FaUserGraduate />
      </a>

      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <MdWork />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <RiContactsBookFill />
      </a>
    </nav>
  );
};

export default Nav;
