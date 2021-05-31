import React from 'react';
import './CV.css';
import pic from '../../images/profile.jpeg'
import content from '../../content/cv.json';

function CV() {
return (
    <div className="cv">
      <div>
        <img src={pic} className="image" />
      </div>
      <div className="header-text">Sami Heikkinen</div>
      <div className="introduction">{content.introduction}</div>
      <div className="profile-header">Profile
        <li>{content.profile1}</li>
        <li>{content.profile2}</li>
        <li>{content.profile3}</li>
        <li>{content.profile4}</li>
      </div> 
    </div>
  );
}

export default CV;
