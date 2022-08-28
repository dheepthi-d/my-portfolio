import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a href="https://wwww.linkedin.com" target>
        <BsLinkedin />
      </a>
      <a href="https://wwww.intagram.com" target>
        <BsInstagram />
      </a>
      <a href="https://wwww.twitter.com" target>
        <BsTwitter />
      </a>
      <a href="https://wwww.github.com" target>
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
