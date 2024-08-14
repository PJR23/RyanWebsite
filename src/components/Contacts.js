// src/pages/Contacts.js

import React, { useState } from 'react';
import '../styles/Contacts.css'; // Stelle sicher, dass der Pfad korrekt ist
import emailImage from '../assets/email.jpg';
import instaImage from '../assets/insta.png';
import githubImage from '../assets/github.jpeg';

const Contacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id='contacts' className="Contacts">
      <h2>Contact Me</h2>
      <div className="contact-buttons">
        <a href="https://instagram.com/__ryan__vm" target="_blank" rel="noopener noreferrer" className="contact-button">
          <img src={instaImage} alt="Instagram" className="contact-icon" />
          Instagram
        </a>
        <a href="mailto:ryanvonmay@gmx.ch" className="contact-button">
          <img src={emailImage} alt="Email" className="contact-icon" />
          Email
        </a>
        <a href="https://github.com/rsa142616" target="_blank" rel="noopener noreferrer" className="contact-button">
          <img src={githubImage} alt="GitHub" className="contact-icon" />
          GitHub
        </a>
        <button onClick={openModal} className="contact-button">
          Impressum
        </button>
      </div>
      
      {isModalOpen && (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button onClick={closeModal} className="modal-close">X</button>
            <h2>Impressum</h2>
            <h3>Responsible Entity</h3>
            <p>
              Ryan Santos von May<br/>
              Thunstrasse 19<br/>
              3005 Bern<br/>
              Switzerland<br/>
              Email: <a href="mailto:ryanvonmay@gmx.ch">ryanvonmay@gmx.ch</a>
            </p>
            <h3>Use of Contact Information</h3>
            <p>
              The use of contact information published within the framework of the impressum for the transmission of not expressly requested advertising and information materials is hereby expressly prohibited.
            </p>
            <h3>Disclaimer</h3>
            <p>
              The author assumes no liability for the correctness, accuracy, timeliness, reliability, and completeness of the information. Liability claims against the author for material or immaterial damage resulting from access to, use or non-use of the published information, from misuse of the connection or from technical malfunctions are excluded.
              <br/>
              All offers are non-binding. The author expressly reserves the right to change, add to, or delete parts of the pages or the entire offer without prior notice, or to temporarily or permanently cease publication.
            </p>
            <h3>Disclaimer for Content and Links</h3>
            <p>
              References and links to third party websites are outside our area of responsibility. We reject any responsibility for such websites. Access to and use of such websites is at the user's own risk.
            </p>
            <h3>Copyright Declaration</h3>
            <p>
              The copyrights and all other rights to content, images, photos, or other files on this website belong exclusively to Ryan Santos von May or the specifically named rights holders. The written consent of the copyright holder must be obtained in advance for the reproduction of any elements.
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default Contacts;
