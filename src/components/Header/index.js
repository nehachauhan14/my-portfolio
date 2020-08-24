import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import "./Header.scss";
import { isMobile, scrollToElement } from '../../utils';
const Header = props => {
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

    console.log("mobile", mobile);
    if(mobile) {
        return (
            <React.Fragment>
                <div
                    className="mobileHeader">
                    <span id="hamburger" onClick={() => openSidenav()}>
                        <svg viewBox="0 0 100 80" width="30" height="30">
                            <rect width="100" height="20" rx="8"></rect>
                            <rect y="30" width="100" height="20" rx="8"></rect>
                            <rect y="60" width="100" height="20" rx="8"></rect>
                        </svg>
                    </span>
                </div>
                <div id="sidebar" className="sidebar">
                        <a href="javascript:void(0)" onClick={()=> closeSidenav()}><img src="/assets/images/close.svg" /></a>  
                        <a href="javascript:void(0)" onClick={()=> {closeSidenav();scrollToElement("about")}}>About Me</a>
                        <a href="javascript:void(0)" onClick={()=> {closeSidenav(); scrollToElement("skills")}}>Skills</a>
                        <a href="javascript:void(0)" onClick={()=> {closeSidenav();scrollToElement("blogs")}}>Blogs</a>
                        <a href="javascript:void(0)" onClick={()=> {closeSidenav(); scrollToElement("contact")}}>Contact me</a>
                        <a href="/assets/Resume.pdf" onClick={()=> closeSidenav()} download><img src="/assets/images/resume.svg" /></a>
                        <a href="https://github.com/nehachauhan14" onClick={()=> closeSidenav()} download><img src="/assets/images/github.svg" /></a>
                        <a href="https://www.linkedin.com/in/neha-chauhan-830278a1/" onClick={()=> closeSidenav()} download><img src="/assets/images/linkedin.svg" /></a>
                </div>
            </React.Fragment>
        )
    }
    return (
        <div className="header">
            <a className="headerLogo" href="/">Neha Chauhan</a>
            <div className="headerOptions">
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
