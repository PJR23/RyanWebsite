import React, { useState, useEffect, useRef } from 'react';
import '../styles/MyWork.css'; // Pfad zur CSS-Datei
import faceIDImage from '../assets/faceid.jpg';
import calendarAppImage from '../assets/kallender.jpg';
import snakeGameImage from '../assets/snakegame.png';
import learningAppImage from '../assets/learningApp.jpg';
import todoAppImage from '../assets/todoApp.png';
import shooterGameImage from '../assets/shooterGame.png';
import { useNavigate } from 'react-router-dom';

const projects = [
  { title: 'FaceID', description: 'A project focused on facial recognition technology.', image: faceIDImage, path: '/faceid' },
  { title: 'Calendar App', description: 'A user-friendly calendar application.', image: calendarAppImage, path: '/calendarapp' },
  { title: 'Snake Game', description: 'A fun and engaging snake game.', image: snakeGameImage, path: '/snakegame' },
  { title: 'Learning App', description: 'A comprehensive app for various learning modules.', image: learningAppImage, path: '/learningapp' },
  { title: 'Todo App', description: 'A simple and effective to-do list application.', image: todoAppImage, path: '/todoapp' },
  { title: 'Shooter Game', description: 'An exciting and fast-paced shooter game.', image: shooterGameImage, path: '/shootergame' },
];

const MyWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Start Index bei 0 für das Karussell
  const [showAll, setShowAll] = useState(false); // State für die Anzeige aller Projekte oder nur des Karussells
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Zustand für die Bildschirmgröße
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const itemWidth = 300; // Breite jedes Elements (inkl. Margin)
  const itemMargin = 20; // Margin zwischen den Elementen
  const itemsCount = projects.length;

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % itemsCount);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + itemsCount) % itemsCount);
  };

  const handleCardClick = (path) => {
    navigate(path);
  };

  const handleShowAll = () => {
    setShowAll(prev => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (carouselRef.current && !isMobile) {
      const offset = currentIndex * (itemWidth + itemMargin);
      carouselRef.current.style.transform = `translateX(-${offset}px)`;
    }
  }, [currentIndex, isMobile]);

  // Dupliziere die Projekte-Liste für das Endlos-Scrollen
  const extendedProjects = [...projects, ...projects, ...projects];

  return (
    <section id="mywork" className="WorkSection">
      <h2>My Work</h2>
      {!isMobile && !showAll && (
        <button className="show-all-button" onClick={handleShowAll}>
          Show All
        </button>
      )}
      <div className="work-intro-box">
        <p className="work-intro">
          This is a collection of some of my most recent projects that highlight my skills and creativity.
          It ranges from a facial recognition system to practical tools like a learning app.
        </p>
      </div>
      {!isMobile && !showAll && (
        <div className="work-carousel">
          <button className="carousel-button left" onClick={handlePrev}>
            &larr;
          </button>
          <div className="work-carousel-inner" ref={carouselRef}>
            {extendedProjects.map((project, index) => (
              <div
                key={index}
                className="work-item"
                onClick={() => handleCardClick(project.path)}
              >
                <img src={project.image} alt={project.title} />
                <div className="work-text">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-button right" onClick={handleNext}>
            &rarr;
          </button>
        </div>
      )}
      {(isMobile || showAll) && (
        <div className="show-all">
          {projects.map((project, index) => (
            <div
              key={index}
              className="work-item"
              onClick={() => handleCardClick(project.path)}
            >
              <img src={project.image} alt={project.title} />
              <div className="work-text">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyWork;
