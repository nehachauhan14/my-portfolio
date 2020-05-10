import React, { Component } from 'react';
import "./Skills.scss";

const Skills = props => {
    return (
        <section id="skills" className="skillsSection">
            <div className="content">
                <h1 className="title">SKILLS</h1>
                <div className="cards">
                    <div className="card">
                        <img src="/assets/images/html5.svg" />
                    </div>
                    <div className="card">
                        <img src="/assets/images/sass.svg" />
                    </div>
                    <div className="card">
                        <img src="/assets/images/javascript.svg" />
                    </div>
                    <div className="card">
                    <img src="/assets/images/bootstrap.svg" />
                    </div>
                    <div className="card">
                    <img src="/assets/images/git.svg" />
                    </div>
                    <div className="card">
                    <img src="/assets/images/node.svg" />
                    </div>
                    <div className="card">
                    <img src="/assets/images/react.svg" />
                    </div>
                    <div className="card">
                    <img src="/assets/images/redux.svg" />
                    </div>
                    <div className="card">
                    <img src="/assets/images/webpack.svg" />
                    </div>
                </div>
                <div className="resumeBtn">
                    <a href="/assets/Resume.pdf" download>
                        <button className="btn btn-primary">Click to <img src="/assets/images/download.svg" className="downloadIcon" /> Resume </button>
                        
                    </a>
                </div>
            </div>
        </section>

    )
};

export default Skills;
