import React from "react";
import "./contact.css";
import { BsMailbox2 } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
// import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_7fkbaru",
      "template_cyn5dzd",
      form.current,
      "4B46XXsqPNTBrH4i8"
    );
    alert("Message sent");
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Get in touch</h2>
      <h1>Contact Me</h1>
      <div className="container contact_container">
        <div className="contact__options">
          <article className="contact_option">
            <BsMailbox2 className="contact_option-icon" />
            <h4>Email</h4>
            <h5>dheepu1271@gmail.com</h5>
            <a href="mailto:dheepu1271@gmail.com">Send a mail</a>
          </article>
          <article className="contact_option">
            <BsMessenger className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>@dheepthid</h5>
            <a href="https://m.me/dheepthid" target="_blank">
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send a Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
