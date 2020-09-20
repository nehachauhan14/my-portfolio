import React, { Component } from 'react';
import style from "./About.module.scss";

import { isMobile, scrollToElement } from '../../utils';

const About = props => {
    const mobile = isMobile();
    return (
        <section id="about" className={style.aboutSection}>
            <div className={style.content}>
                <h1 className="title">Neha Chauhan</h1>
                <img src="/assets/images/cartoon2.jpeg" className={style.cartoon} alt="me" />
                {mobile 
                    ? <p>I am a Web Developer & Dog lover...</p>
                    : <p className={`${style.line1} ${style.animTypewriter}`}>I am a Web Developer & Dog lover... </p>}
                <div className={style.intro}>I design and code beautifully simple things, and I love what I do.</div>
                <div className={style.contentBtn}>
                    <button className={`${style.btn} ${style.primary}`} onClick={() => scrollToElement("skills")}>Learn More About Me</button>
                </div>
            </div>
        </section>

    )
};

export default About;
