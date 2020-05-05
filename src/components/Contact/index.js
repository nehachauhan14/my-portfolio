import React, { Component } from 'react';
import "./Contact.scss";

const Contact = props => {
    return (
        <section id="contact" className="contactSection">
          <h1 className="contactTitle">Get in touch</h1>
          <p className="contactSubTitle">If you wanna get in touch, talk to me about a project collaboration or just say hi,
            <br />
            send an email to
            <span className="email">
              <a href="mailto:nehachauhan79@gmail.com">nehachauhan79@gmail.com</a>
            </span>
            and ~let's talk.
          </p>
          <img src="src/assets/images/dog.gif" alt="dog lover" className="dogImg" />
          <div className="quote">Living, learning, & leveling up one day at a time.</div>
        </section>

    )
};

export default Contact;
