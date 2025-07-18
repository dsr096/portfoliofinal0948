import React from 'react';
import './About.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
function About() {
  return (
    <>
      <Navbar />
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
          <div className="about-section summary-section">
            <h3>📝 Summary</h3>
            <p>
             I completed my B.Tech in Computer Science from Parul University in March 2025. As a passionate web developer, I enjoy crafting creative, performance-driven web solutions. I am skilled in HTML, CSS, JavaScript, and React.js, with foundational knowledge of MongoDB, Express.js, and Node.js. I have experience in building responsive user interfaces and data-driven applications, along with proficiency in Microsoft Office tools such as Excel, Word, and PowerPoint for data analysis and documentation. I am committed to continuous learning and applying modern web technologies in real-world projects.
            </p>
          </div>

          {/* === Skills === */}
          <div className="about-section">
            <h3>🛠️ Skills</h3>
            <div className="skills">

              {/* Frontend */}
              <div className="skill-category">
                <h4>Frontend</h4>
                <div className="skill-items">
                  <img src={process.env.PUBLIC_URL + '/html.jpg'} alt="HTML" />
                  <img src={process.env.PUBLIC_URL + '/css.jpg'} alt="CSS" />
                  <img src={process.env.PUBLIC_URL + '/js.jpg'} alt="JavaScript" />
                  <img src={process.env.PUBLIC_URL + '/react.jpg'} alt="React.js" />
                </div>
              </div>

              {/* Tools & Platforms */}
              <div className="skill-category">
                <h4>Tools & Platforms</h4>
                <div className="skill-items">
                  <img src={process.env.PUBLIC_URL + '/github.jpg'} alt="GitHub" />
                  <img src={process.env.PUBLIC_URL + '/vscode123.jpg'} alt="VS Code" />
                  <img src={process.env.PUBLIC_URL + '/shopifylogo.jpg'} alt="Shopify" />
                </div>
              </div>

              {/* Backend Basics */}
              <div className="skill-category">
                <h4>Backend Basics</h4>
                <div className="skill-items">
                  <img src={process.env.PUBLIC_URL + '/nodejs.jpg'} alt="Node.js" />
                  <img src={process.env.PUBLIC_URL + '/expressjs.jpg'} alt="Express.js" />
                  <img src={process.env.PUBLIC_URL + '/mongodb.jpg'} alt="MongoDB" />
                </div>
              </div>

              {/* Office Tools */}
              <div className="skill-category">
                <h4>Office Tools</h4>
                <div className="skill-items">
                  <img src={process.env.PUBLIC_URL + '/msexcel123.jpg'} alt="MS Excel" />
                  <img src={process.env.PUBLIC_URL + '/msword.jpg'} alt="MS Word" />
                  <img src={process.env.PUBLIC_URL + '/powerpoint.jpg'} alt="MS PowerPoint" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
     <Footer/>
    </>
  );
}

export default About;
