import React from 'react';
import './Experience.css';
import Navbar from '../Components/Navbar';

const Experience = () => {
  return (
   <>
   <Navbar/>
    <section className="experience">
      <h2 className="experience-title">Experience</h2>

      <div className="experience-card">
        <div className="experience-details">
          <h3>Web Development Intern</h3>
          <p className="company">Mamo Technolabs LLP</p>
          <p className="duration">December 2024 – March 2025</p>
          <p className="description">
            Completed a 3-month internship as a Web Development Intern, where I worked on building a full-stack job portal using modern web technologies like React.js, Node.js, Express.js, MongoDB, and Clerk authentication.
            Gained practical experience in developing user authentication, job application workflows, recruiter-student dashboards, and a tab-restricted MCQ test system.  
            Also integrated APIs, handled UI responsiveness, and used tools like Postman, Git, and Sentry for debugging and testing.
          </p>
        </div>

        <div className="experience-image">
          <img src="/cirti.jpg" alt="Internship Certificate" />
        </div>
      </div>
    </section>
   </>
  );
};

export default Experience;
