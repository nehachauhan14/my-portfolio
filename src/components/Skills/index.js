import React, { Component } from 'react';
import style from "./Skills.module.scss";
// import '../../index.scss';

const Skills = props => {
    return (
        <section id="skills" className={style.skillsSection}>
            <div className={style.content}>
                <h1 className="title">SKILLS</h1>
                <div className={style.cards}>
                    <div className={style.card}>
                        <img src="/assets/images/html5.svg" />
                    </div>
                    <div className={style.card}>
                        <img src="/assets/images/sass.svg" />
                    </div>
                    <div className={style.card}>
                        <img src="/assets/images/javascript.svg" />
                    </div>
                    <div className={style.card}>
                    <img src="/assets/images/bootstrap.svg" />
                    </div>
                    <div className={style.card}>
                    <img src="/assets/images/git.svg" />
                    </div>
                    <div className={style.card}>
                    <img src="/assets/images/node.svg" />
                    </div>
                    <div className={style.card}>
                    <img src="/assets/images/react.svg" />
                    </div>
                    <div className={style.card}>
                    <img src="/assets/images/redux.svg" />
                    </div>
                    <div className={style.card}>
                    <img src="/assets/images/webpack.svg" />
                    </div>
                </div>
            </div>
        </section>

    )
};

export default Skills;
