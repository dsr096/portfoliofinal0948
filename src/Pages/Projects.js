import React from 'react';
import './Projects.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const projects = [

     {
    title: "Quiz App",
    url: "https://quizapp-mu-henna.vercel.app/",
     thumbnail: `${process.env.PUBLIC_URL}/quizapp.jpeg`,
    description: "A React Vite-based interactive programming quiz app with Clerk authentication, featuring a countdown timer and instant score display at the end.",
  },

  {
    title: "Basic Weather Website",
    url: "https://newweather-five.vercel.app/",
    thumbnail: `${process.env.PUBLIC_URL}/weather.jpeg`,
    description: "Created using HTML, CSS, and JavaScript to provide real-time weather updates through an API.",
  },
  
  {
    title: "ToDo List Website",
    url: "https://todo-gjdr.vercel.app/",
    thumbnail: `${process.env.PUBLIC_URL}/todoapp.jpeg`,
    description: "A Todo app with Clerk Auth for secure login, enabling users to add and delete tasks. Built with React and Vite.",
  },
 {
  title: "JobElite - Full Stack Job Portal",
  url: "https://jobelite.vercel.app/",
  thumbnail: `${process.env.PUBLIC_URL}/jobportal.jpeg`,
  description: "Developed using React.js, Node.js, Express.js, and MongoDB with Clerk authentication and Tailwind CSS. Role-based access for students and recruiters; recruiters can post/manage jobs and process applications. Students can search and apply for jobs, upload resumes, and track application status. After application acceptance, students must take a 30-mark MCQ test with tab switch detection; passing makes them eligible for interviews. Integrated Sentry for error tracking and Postman for API testing."
},
{
  title: "ShopEase - E-commerce Clothing Website",
  url: "https://shopease096123.vercel.app/",
  thumbnail: `${process.env.PUBLIC_URL}/shopease096.png`,
  description: "Built a minimalist and responsive e-commerce clothing website using React.js and CSS, without using any external libraries or backend services. Implemented product listings with images, prices, and \"Add to Cart\" functionality. Developed a basic login system (frontend only) to simulate user authentication flow. Designed and managed the shopping cart system entirely on the client-side using React state. Focused on a clean, user-friendly UI with smooth navigation and seamless cart interaction."
},

{
  title: "KickVibe - Shoe Store website by using Shopify Partner Dashboard",
  url: "https://shpease.myshopify.com/",
  thumbnail: `${process.env.PUBLIC_URL}/frontphoto.png`,
  description: "Designed and developed a fully responsive e-commerce shoe store for men, women, and kids.\n\nImplemented key pages: Home, Products, About, Contact, and FAQ with clean UI/UX focus.\n\nIntegrated shipping and payment methods using Bogus Gateway and Cash on Delivery for testing purposes.\n\nCustomized product sections and collections to showcase variety with proper categorization.\n\nGained hands-on experience with Shopify store setup, theme customization, and checkout process using the Partner sandbox environment.\n\n\nUse this password to open the website 12345dsr"
},


{
  title: "HireSlate – Resume Builder Website",
  url: "https://hireslate.vercel.app/",
  thumbnail: `${process.env.PUBLIC_URL}/hireslate.png`,
  description: "Developed a modern resume builder web application using React.js and Vite for fast performance and modular structure. Integrated Clerk authentication for secure user login and session management. Implemented light/dark mode toggle to enhance user experience and accessibility. Built a dynamic form system that updates the live resume preview in real time. Enabled one-click PDF download of the resume using jsPDF and html2canvas libraries."
},


    {
    title: "ReactJS Multi-Grid Tic Tac Toe Game",
    url: "https://dsr096.github.io/newtictactoe/",
    thumbnail: `${process.env.PUBLIC_URL}/tictactoe.jpeg`,
    description: "A ReactJS Tic Tac Toe game offering multiple grid sizes (3x3, 5x5, 7x7) for varied gameplay, allowing two players to take turns and compete for the win or a draw with an interactive UI.",
  },


 
];

const Projects = () => {
  return (
    <>
      <Navbar />
      <section className="projects-section">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
       {projects.map(({ title, url, description, thumbnail }, index) => (
  <a
    key={index}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="project-card"
    aria-label={`View project ${title}`}
  >
    <img src={thumbnail} alt={title} className="project-image" />
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
