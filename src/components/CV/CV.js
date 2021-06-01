import React from 'react';
import './CV.css';
import pic from '../../images/profile.jpeg'
import content from '../../content/cv.json';

function CV() {
return (
  <div className="cv-page">
    <div className="cv">
      <div className="top-container">
        <div>
          <img src={pic} className="image" />
        </div>
        <div className="header-text">Sami Heikkinen</div>
        <div className="introduction">{content.introduction}</div>
      </div>
      <div className="profile-container">
        <div className="lower-header">Profile</div>
        <div className="profile-list">
          <li>{content.profile1}</li>
          <li>{content.profile2}</li>
          <li>{content.profile3}</li>
          <li>{content.profile4}</li>
        </div>
      </div>
      <div className="education-container">
        <div className="lower-header">Education</div>
        <div className="education-text">{content.education1}</div>
        <div className="education-text">{content.education2}</div>
      </div>
      <div className="skills-container">
        <div className="lower-header">Skills</div>
        <div className="skills-top-container">
          <div className="left-side">
            <div className="skills-header">Programming</div>
            <li>{content.programming1}</li>
            <li>{content.programming2}</li>
            <li>{content.programming3}</li>
          </div>
          <div className="right-side">
            <div className="skills-header">Test automation</div>
            <li>{content.testAutomation1}</li>
            <li>{content.testAutomation2}</li>
            <li>{content.testAutomation3}</li>
          </div>
        </div>
        <div className="skills-bottom-container">
          <div className="left-side">
            <div className="skills-header-right">DevOps</div>
            <li>{content.devops1}</li>
            <li>{content.devops2}</li>
            <li>{content.devops3}</li>
            <li>{content.devops4}</li>
          </div>
          <div className="right-side">
            <div className="skills-header-right">Automation</div>
            <li>{content.automation}</li>
          </div>
        </div>
      </div>
      <div className="work-container">
        <div className="lower-header">Work experience</div>
        <div className="work-experience-container">

          <div className="work-header">{content.workExp1}</div>
          <li>{content.workExp1_1}</li>
          <li>{content.workExp1_2}</li>

          <div className="work-header">{content.workExp2}</div>
          <li>{content.workExp2_1}</li>
          <li>{content.workExp2_2}</li>
          <li>{content.workExp2_3}</li>

          <div className="work-header">{content.workExp3}</div>
          <li>{content.workExp3_1}</li>
          <li>{content.workExp3_2}</li>
          <li>{content.workExp3_3}</li>
        </div>
      </div>
    </div>
  </div>
  );
}

export default CV;
