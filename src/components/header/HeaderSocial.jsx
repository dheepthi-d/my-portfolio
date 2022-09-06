import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/dhulasi-dheepthi-d/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://www.instagram.com/dheepthidp/" target="_blank">
        <BsInstagram />
      </a>
      <a href="https://twitter.com/dheepthidp" target="_blank">
        <BsTwitter />
      </a>
      <a href="https://github.com/dheepthi-d" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
