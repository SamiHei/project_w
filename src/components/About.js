import React, { useEffect } from 'react';
import './App.css';
import data from '../content/about_me.json';



function About() {
return (
    <div className="page-2">
      <div className="container-left">
        <h2>{data.header}</h2>
        <div className="container-left-text-part-one">{data.aboutMeFirstPart}</div>
        <div className="container-left-text-part-two">{data.aboutMeSecondPart}</div>
      </div>
      <div className="container-right">
        <h2>{data.headerTwo}</h2>
        <div className="container-right-text-part-one">{data.tempFill}</div>
      </div>
    </div>
  );
}

export default About;
