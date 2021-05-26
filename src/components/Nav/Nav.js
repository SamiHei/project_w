import React, { useState } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png';


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
                <img src={logo} className="logo-home"/>
            </Link>
            <ul className="nav-links">
                <a href="#page-2">
                    <li>About</li>
                </a>
                <a href="#page-3">
                    <li>Projects</li>
                </a>
                <Link to="/cv">
                    <li>CV</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
