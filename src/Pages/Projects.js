import React from 'react';
import './Projects.css';
import Navbar from '../Components/Navbar';

const projects = [
  {
    title: "Full Stack Job Portal",
    url: "https://job-portal-mqri.vercel.app/",
    description: "Developed a full-stack job portal using React.js, Node.js, Express.js and MongoDB, enabling job posting, applications and job search with authentication.",
  },
  {
    title: "Basic Weather Website",
    url: "https://newweather-five.vercel.app/",
    description: "Created using HTML, CSS, and JavaScript to provide real-time weather updates through an API.",
  },
  {
    title: "Basic Calculator Website",
    url: "https://calculator-rho-lyart.vercel.app/",
    description: "A simple calculator built with ReactJS that allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division.",
  },
  {
    title: "Fruit Store Landing Page",
    url: "https://dsr096.github.io/fruitlandingpage/",
    description: "A clean and vibrant ReactJS landing page showcasing fresh fruits with an engaging and user-friendly design.",
  },
  {
    title: "ReactJS Multi-Grid Tic Tac Toe Game",
    url: "https://dsr096.github.io/newtictactoe/",
    description: "A ReactJS Tic Tac Toe game offering multiple grid sizes (3x3, 5x5, 7x7) for varied gameplay, allowing two players to take turns and compete for the win or a draw with an interactive UI.",
  },
];

const Projects = () => {
  return (
   <>
   <Navbar/>
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map(({ title, url, description }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            aria-label={`View project ${title}`}
          >
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <span className="project-link-icon" aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </section>
   </>
  );
};

export default Projects;
