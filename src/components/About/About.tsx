import React from 'react';
import './About.css';
import data from '../../content/about_me.json';



function About() {
return (
    <div id="page-2">
      <div className="container-upper">
        <div className="about-me-header">{data.header}</div>
        <div className="text-container">{data.aboutMe1} {data.aboutMe2}</div>
      </div>
      <div className="container-lower">
        <div className="text-container">{data.aboutMe3} {data.aboutMe4}</div>
      </div>
    </div>
  );
}

export default About;
