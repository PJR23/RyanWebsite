import React, { useState } from 'react';
import '../styles/Header.css';
import LogoImage from '../assets/LogoImage.png';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Menü schließen nach Navigation
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={LogoImage} alt="Logo" /> {/* Pfad zum Bild anpassen */}
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={menuOpen ? "burger open" : "burger"}></div>
        </div>
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li><a href="#aboutme" onClick={() => handleScrollToSection('aboutme')}>About Me</a></li>
          <li><a href="#education" onClick={() => handleScrollToSection('education')}>Education</a></li>
          <li><a href="#mywork" onClick={() => handleScrollToSection('mywork')}>My Work</a></li>
          <li><a href="#skills" onClick={() => handleScrollToSection('skills')}>Skills</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
