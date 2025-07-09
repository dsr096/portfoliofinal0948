import React from 'react';
import './Projects.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const projects = [
 {
  title: "JobElite - Full Stack Job Portal",
  url: "https://jobelite.vercel.app/",
  description: "Developed using React.js, Node.js, Express.js, and MongoDB with Clerk authentication and Tailwind CSS. Role-based access for students and recruiters; recruiters can post/manage jobs and process applications. Students can search and apply for jobs, upload resumes, and track application status. After application acceptance, students must take a 30-mark MCQ test with tab switch detection; passing makes them eligible for interviews. Integrated Sentry for error tracking and Postman for API testing."
},
{
  title: "ShopEase - E-commerce Clothing Website",
  url: "https://shopease096123.vercel.app/",
  description: "Built a minimalist and responsive e-commerce clothing website using React.js and CSS, without using any external libraries or backend services. Implemented product listings with images, prices, and \"Add to Cart\" functionality. Developed a basic login system (frontend only) to simulate user authentication flow. Designed and managed the shopping cart system entirely on the client-side using React state. Focused on a clean, user-friendly UI with smooth navigation and seamless cart interaction."
},

{
  title: "HireSlate – Resume Builder Website",
  url: "https://hireslate.vercel.app/",
  description: "Developed a modern resume builder web application using React.js and Vite for fast performance and modular structure. Integrated Clerk authentication for secure user login and session management. Implemented light/dark mode toggle to enhance user experience and accessibility. Built a dynamic form system that updates the live resume preview in real time. Enabled one-click PDF download of the resume using jsPDF and html2canvas libraries."
},

 {
    title: "Quiz App",
    url: "https://quizapp-mu-henna.vercel.app/",
    description: "A React Vite-based interactive programming quiz app with Clerk authentication, featuring a countdown timer and instant score display at the end.",
  },

  {
    title: "Basic Weather Website",
    url: "https://newweather-five.vercel.app/",
    description: "Created using HTML, CSS, and JavaScript to provide real-time weather updates through an API.",
  },
    {
    title: "ReactJS Multi-Grid Tic Tac Toe Game",
    url: "https://dsr096.github.io/newtictactoe/",
    description: "A ReactJS Tic Tac Toe game offering multiple grid sizes (3x3, 5x5, 7x7) for varied gameplay, allowing two players to take turns and compete for the win or a draw with an interactive UI.",
  },
  {
    title: "ToDo List Website",
    url: "https://todo-gjdr.vercel.app/",
    description: "A Todo app with Clerk Auth for secure login, enabling users to add and delete tasks. Built with React and Vite.",
  },
 
  {
    title: "Basic Calculator Website",
    url: "https://calculator-rho-lyart.vercel.app/",
    description: "A simple calculator built with ReactJS that allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division.",
  },


 
  
];

const Projects = () => {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
};

export default Projects;
