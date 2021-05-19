import React from 'react';
import './About.css';
import data from '../../content/about_me.json';



function About() {
return (
    <div className="page-2">
      <div className="container-left">
        <div className="header-text">{data.header}</div>
        <div className="container-left-text-part-one">{data.aboutMeFirstPart}</div>
        <div className="container-left-text-part-two">{data.aboutMeSecondPart}</div>
      </div>
      <div className="container-right">
      <div className="header-text">{data.headerTwo}</div>
        <div className="container-right-text-part-one">{data.lifeGoalsFirstPart}</div>
        <div className="container-right-text-part-two">{data.lifeGoalsSecondPart}</div>
      </div>
    </div>
  );
}

export default About;
