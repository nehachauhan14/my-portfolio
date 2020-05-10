import React, { Component } from 'react';
import "./About.scss";

const About = props => {
    return (
        <section id="about" className="aboutSection">
            <div className="content">
                <h1 className="title">Neha Chauhan</h1>
                <img src="/assets/images/cartoon2.jpeg" className="cartoon" alt="me" />
                <p className="line-1 anim-typewriter">I am a Web Developer & Dog lover... </p>
                <div className="intro">I design and code beautifully simple things, and I love what I do.</div>
                <div className="contentBtn">
                    <a href="#skills">
                        <button className="btn btn-primary">Learn More About Me</button>
                    </a>
                </div>
            </div>
        </section>

    )
};

export default About;
