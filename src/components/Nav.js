import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function Nav() {
    return (
        <nav>
            <Link to="/">
                <h3>Logo</h3>
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
