import React from 'react';
import { Link } from 'react-router-dom';
import Timeline from '../components/Timeline';
import './Home.css';

const Home = () => {
  const handleResumeDownload = () => {
    // Try to download the resume PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Pierre_Blanchet_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Pierre Blanchet</span>
            <span className="title-subtitle">CTO, Software Engineering and Data Platforms</span>
          </h1>
          <p className="hero-greeting">
            Hey, it's Pierre, welcome to my website. Here you can find a bit more about me.
          </p>
          <div className="hero-actions">
            <button onClick={handleResumeDownload} className="btn btn-primary">
              📄 Download Resume
            </button>
            <a href="mailto:pierre.blanchet.engineer@gmail.com" className="btn btn-secondary">
              ✉️ Send Email
            </a>
            <Link to="/projects" className="btn btn-outline">
              🚀 View Projects
            </Link>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll to explore</span>
        </div>
      </section>

      <section className="timeline-section">
        <h2 className="section-title">My Journey</h2>
        <Timeline />
      </section>

      <footer className="home-footer">
        <div className="footer-ornament">✦</div>
        <p>© {new Date().getFullYear()} Pierre Blanchet. Crafted with passion.</p>
      </footer>
    </div>
  );
};

export default Home;
