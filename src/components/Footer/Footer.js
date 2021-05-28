import React from 'react';
import './Footer.css';
import contact from '../../content/footer.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"


function About() {
return (
    <div id="footer">
        <div className="contact-header">{contact.contactHeader}</div>
        <div className="email">{contact.contactEmail}</div>
        <a href="https://github.com/SamiHei" target="_blank">
            <FontAwesomeIcon className="github" icon={faGithubSquare} size="3x" />
        </a>
        <a href="https://www.linkedin.com/in/sami-mk-heikkinen/" target="_blank">
            <FontAwesomeIcon className="linkedin" icon={faLinkedin} size="3x" />
        </a>
    </div>
  );
}

export default About;
