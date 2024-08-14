import React from 'react';
import '../styles/LogoSection.css'; // Pfad zur CSS-Datei
import AmPCImage from '../assets/AmPC.jpg'; // Pfad zum Bild
import TweetEmbed from './TweetEmbed'; // Importiere die TweetEmbed-Komponente

const LogoSection = () => {
  return (
    <section className="LogoSection relative">
      <div className="content-container relative z-10">
        <div className="left-content">
          <div className="banner-container">
            <img src={AmPCImage} alt="Welcome Banner" className="banner-image" />
          </div>
        </div>
        <div className="center-content">
          <div className="logo-text-card">
            <h1 className="logo-title">Welcome!</h1>
            <p className="logo-text">
              Hello! My name is <strong>Ryan</strong>, and I am a <strong>software engineer</strong>. Welcome to my page.
              Currently, I am attending the <strong>IMS Informatikmittelschule BWD</strong> in Wankdorf.
            </p>
          </div>
        </div>
        <div className="tweet-card-container">
          <TweetEmbed tweetId="1823505202332492276" /> {/* Nutze die ID des Tweets */}
        </div>
      </div>

      {/* Meteors Layer */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-meteor"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default LogoSection;
