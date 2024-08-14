import React from 'react';
import '../styles/Education.css'; // Ensure this path is correct
import kirchenfeldImage from '../assets/kirchenfeld.jpg'; // Example images
import manuelImage from '../assets/manuel.jpg';
import nmsImage from '../assets/nms.jpg';
import bwdImage from '../assets/bwd.jpg';

const Education = () => {
  return (
    <section id='education' className="Education">
      <h2>Education</h2>
      <div className="education-intro-box">
        <p className="education-intro">
          Education has played a key role in my growth. From my early school days to my more recent studies,
           each step has helped shape who I am today. Take a look at my educational journey below.
        </p>
      </div>
      <div className="education-container">
        <div className="path-line"></div>
        <div className="education-items">
          <div className="education-item">
            <img src={kirchenfeldImage} alt="Kirchenfeld" className="education-image" />
            <div className="education-text">
              <h3>Primary school Kirchenfeld</h3>
              <p>I attended Kirchenfeld Primary School in Bern, where I completed grades 1 through 6.</p>
            </div>
            <div className="visit-button-container">
              <a href="https://kirchenfeld-schosshalde.ch/kirchenfeld" target="_blank" rel="noopener noreferrer" className="visit-button">
                Info
              </a>
            </div>
          </div>
          <div className="education-item">
            <img src={manuelImage} alt="Manuelschule" className="education-image" />
            <div className="education-text">
              <h3>Manuelschule secondary School</h3>
              <p>I continued my education at Manuelschule in Bern, where I completed grades 7 and 8.</p>
            </div>
            <div className="visit-button-container">
              <a href="https://kirchenfeld-schosshalde.ch/manuel" target="_blank" rel="noopener noreferrer" className="visit-button">
                Info
              </a>
            </div>
          </div>
          <div className="education-item">
            <img src={nmsImage} alt="NMS" className="education-image" />
            <div className="education-text">
              <h3>NMS secondary School</h3>
              <p>For grades 8 and 9, I changed schools to NMS in Bern.</p>
            </div>
            <div className="visit-button-container">
              <a href="https://www.nmsbern.ch/" target="_blank" rel="noopener noreferrer" className="visit-button">
                Info
              </a>
            </div>
          </div>
          <div className="education-item">
            <img src={bwdImage} alt="BWD" className="education-image" />
            <div className="education-text">
              <h3>BWD IMS school</h3>
              <p>Currently, I am in my 3rd year at BWD in Bern.</p>
            </div>
            <div className="visit-button-container">
              <a href="https://www.bwdbern.ch" target="_blank" rel="noopener noreferrer" className="visit-button">
                Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
