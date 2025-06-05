import React from 'react';
import './About.css';
import Navbar from '../Components/Navbar';

function About() {
  return (
    
   <>
   <Navbar/>
    <section className="about">
      <h2 className="about-heading">About Me</h2>

      <div className="about-content">
        {/* === Education === */}
        <div className="about-section">
          <h3>🎓 Education</h3>
          <p>
            B.Tech in Computer Science from <strong>Parul University</strong><br />
            <span className="date-range">September 2021 – March 2025</span><br />
            CGPA: <strong>8.16</strong>
          </p>
        </div>

        {/* === Summary === */}
        <div className="about-section">
          <h3>📝 Summary</h3>
          <p>
            Full-stack web developer skilled in HTML, CSS, JavaScript, and React.js, with foundational knowledge of MongoDB, Express.js, and Node.js.
            Experienced in building responsive user interfaces and data-driven applications.
            Proficient in Microsoft Excel for data analysis, and well-versed with MS Word and PowerPoint for documentation and presentations.
            Passionate about real-world project development and continuously learning modern web technologies.
          </p>
        </div>

        {/* === Skills === */}
        <div className="about-section">
          <h3>🛠️ Skills</h3>
          <div className="skills">
            <div>
              <h4>Frontend</h4>
              <p>HTML, CSS, JavaScript, React.js</p>
            </div>
            <div>
              <h4>Tools & Platforms</h4>
              <p>Git, GitHub, VS Code</p>
            </div>
            <div>
              <h4>Backend Basics</h4>
              <p>Node.js, Express.js, MongoDB</p>
            </div>
            <div>
              <h4>Office Tools</h4>
              <p>MS Excel, MS Word, MS PowerPoint</p>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  );
}

export default About;
