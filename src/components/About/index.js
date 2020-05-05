import React, { Component } from 'react';
import "./About.scss";

const About = props => {
    return (
        <section id="about" className="aboutSection">
            <h1 className="title">Neha Chauhan</h1>
            <img src="src/assets/images/cartoon2.jpeg" className="cartoon" alt="me" />
            <p className="line-1 anim-typewriter">I am a Web Developer & Dog lover... </p>
            <div className="intro">I design and code beautifully simple things, and I love what I do.</div>
        </section>

    )
};

export default About;
