import React, { Component } from 'react';
import "./About.scss";

import { isMobile, scrollToElement } from '../../utils';

const About = props => {
    const mobile = isMobile();
    return (
        <section id="about" className="aboutSection">
            <div className="content">
                <h1 className="title">Neha Chauhan</h1>
                <img src="/assets/images/cartoon2.jpeg" className="cartoon" alt="me" />
                {mobile 
                    ? <p>I am a Web Developer & Dog lover...</p>
                    : <p className="line-1 anim-typewriter">I am a Web Developer & Dog lover... </p>}
                <div className="intro">I design and code beautifully simple things, and I love what I do.</div>
                <div className="contentBtn">
                    <button className="btn btn-primary" onClick={() => scrollToElement("skills")}>Learn More About Me</button>
                </div>
            </div>
        </section>

    )
};

export default About;
