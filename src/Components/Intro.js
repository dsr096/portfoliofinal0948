import React from 'react';
import './Intro.css';

function Intro() {
  return (
    <section className="intro">
      <div className="intro-left">
        <h2>Hello, I’m <span className="highlight">Dhruv</span></h2>
        <p>
          I completed my B.Tech in Computer Science in March 2025 from Parul University.
          I’m passionate about web development and love working on creative, performance-focused web solutions.
        </p>

        <a href="/DHRUV_CV.pdf" download className="download-btn">
          Download CV
        </a>
      </div>

      <div className="intro-right">
        <img src={process.env.PUBLIC_URL + '/person.jpg'} alt="Dhruv" className="intro-image" />
      </div>
    </section>
  );
}

export default Intro;
