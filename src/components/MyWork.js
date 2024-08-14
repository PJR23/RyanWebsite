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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const visibleItems = 3; // Number of visible items at a time
  const itemWidth = 300; // Width of each item including margin
  const itemMargin = 20; // Margin between items
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
    setShowAll(!showAll);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const offset = (currentIndex * (itemWidth + itemMargin)) - (itemWidth + itemMargin) * Math.floor(visibleItems / 2);
      carouselRef.current.style.transform = `translateX(-${offset}px)`;
    }
  }, [currentIndex]);

  return (
    <section id="mywork" className="WorkSection">
      <h2>My Work</h2>
      <button className="show-all-button" onClick={handleShowAll}>
        {showAll ? 'Show Carousel' : 'Show All'}
      </button>
      <div className="work-intro-box">
        <p className="work-intro">
          This is a collection of some of my most recent projects that highlight my skills and creativity.
          It ranges from a facial recognition system to practical tools like a learning app.
        </p>
      </div>
      {!showAll && (
        <div className="work-carousel">
          <button className="carousel-button left" onClick={handlePrev}>
            &larr;
          </button>
          <div className="work-carousel-inner" ref={carouselRef}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={`work-item ${index === currentIndex ? 'active' : ''}`}
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
      {showAll && (
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
