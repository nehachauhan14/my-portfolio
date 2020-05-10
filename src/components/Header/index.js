import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import "./Header.scss";

const Header = props => {
    return (
        <div className="header">
            <a className="headerLogo" href="/">Neha Chauhan</a>
            <div className="headerOptions">
                <li><a href="#skills">Skills</a></li>
                <li><a href="#writings">Writings</a></li>
                <li><a href="#contact">Contact me</a></li>
            </div>
        </div>

    )
};

export default Header;
