import React, { useState, useEffect } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png'


function Nav() {

    const [navBar, setNavBar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY > 50) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    };

    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={navBar ? 'nav-bar active' : 'nav-bar'}>
            <Link to="/">
                <img src={logo} className="logo"/>
            </Link>
            <ul className="nav-links">
                <Link to="/cv">
                    <li>CV</li>
                </Link>
                <Link to="/blog">
                    <li>Blog</li>
                </Link>
                <Link to="/Contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
