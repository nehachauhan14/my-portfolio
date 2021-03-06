import React, { Component, useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import style from "./Header.module.scss";
import { isMobile, scrollToElement } from '../../utils';
const Header = props => {
    const [currentTheam, setCurrentTheam] = useState("theme-light");
    const [imgSrc, setImgSrc] = useState("https://www.flaticon.com/premium-icon/icons/svg/2920/2920682.svg");
    const mobile = isMobile();

    const openSidenav = () => {
        document.getElementById("sidebar").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
        document.getElementById("hamburger").style.display = "none";    
    }

    const closeSidenav = () => {
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("hamburger").style.display = "block";
    }

    useEffect(()=> {
        if(currentTheam == "theme-light") {
            setImgSrc("https://www.flaticon.com/premium-icon/icons/svg/2920/2920682.svg")
        } else {
            setImgSrc("https://www.flaticon.com/premium-icon/icons/svg/3222/3222675.svg")
        }
    }, [currentTheam]);
    
    const changeTheam = () => {
        let newTheam = "theme-dark";
        document.documentElement.className = '';
        if( currentTheam == "theme-dark") {
            newTheam =  "theme-light";
        }
        setCurrentTheam(newTheam);
        document.documentElement.classList.add(newTheam);
        
    }

    if(mobile) {
        return (
            <React.Fragment>
                <div
                    className={style.mobileHeader}>
                    <span id="hamburger" onClick={() => openSidenav()}>
                        <svg viewBox="0 0 100 80" width="30" height="30">
                            <rect width="100" height="20" rx="8"></rect>
                            <rect y="30" width="100" height="20" rx="8"></rect>
                            <rect y="60" width="100" height="20" rx="8"></rect>
                        </svg>
                    </span>
                </div>
                <div id="sidebar" className={style.sidebar}>
                        <a href="javascript:void(0)" onClick={()=> closeSidenav()}><img src="/assets/images/close.svg" /></a>  
                        <a href="javascript:void(0)" onClick={()=> {closeSidenav();scrollToElement("about")}}>About Me</a>
                        <a href="javascript:void(0)" onClick={()=> {closeSidenav(); scrollToElement("projects")}}>Projects</a>
                        <a href="javascript:void(0)" onClick={()=> {closeSidenav(); scrollToElement("skills")}}>Skills</a>
                        <a href="javascript:void(0)" onClick={()=> {closeSidenav();scrollToElement("blogs")}}>Blogs</a>
                        <a href="javascript:void(0)" onClick={()=> {closeSidenav(); scrollToElement("contact")}}>Contact me</a>
                        <a href="/assets/Resume.pdf" onClick={()=> closeSidenav()} download><img src="/assets/images/resume.svg"/></a>
                        <a href="https://github.com/nehachauhan14" onClick={()=> closeSidenav()} download><img src="/assets/images/github.svg" /></a>
                        <a href="https://www.linkedin.com/in/neha-chauhan-830278a1/" onClick={()=> closeSidenav()} download><img src="/assets/images/linkedin.svg" /></a>
                </div>
            </React.Fragment>
        )
    }
    return (
        <div className={style.header}>
            <a className={style.headerLogo} href="/">Neha Chauhan</a>
            <div className={style.headerOptions}>
                {/* <li onClick={() => changeTheam()}>
                    <img src={imgSrc} alt="Theme icon" height="18" />
                </li> */}
                <li><a href="javascript:void(0)" onClick={()=> scrollToElement("projects")}>Projects</a></li>
                <li><a href="javascript:void(0)" onClick={()=> scrollToElement("skills")}>Skills</a></li>
                <li><a href="javascript:void(0)" onClick={()=> scrollToElement("blogs")}>Blogs</a></li>
                <li><a href="javascript:void(0)" onClick={()=> scrollToElement("contact")}>Contact me</a></li>
                <li><a href="/assets/Resume.pdf" download><img src="/assets/images/resume.svg" /></a></li>
                <li><a href="https://github.com/nehachauhan14" download><img src="/assets/images/github.svg" /></a></li>
                <li><a href="https://www.linkedin.com/in/neha-chauhan-830278a1/" download><img src="/assets/images/linkedin.svg" /></a></li>
            </div>
        </div>
    )
};

export default Header;
