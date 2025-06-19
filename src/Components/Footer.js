import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

       {/* About Section */}
{/* <div className="footer-section about">
  <h3>Dhruv Rana</h3>
  <p>
    I completed my B.Tech in Computer Science from Parul University in March 2025. As a passionate web developer, I enjoy crafting creative, performance-driven web solutions. I am skilled in HTML, CSS, JavaScript, and React.js, with foundational knowledge of MongoDB, Express.js, and Node.js. I have experience in building responsive user interfaces and data-driven applications, along with proficiency in Microsoft Office tools such as Excel, Word, and PowerPoint for data analysis and documentation. I am committed to continuous learning and applying modern web technologies in real-world projects.
  </p>
</div> */}

        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info + Social Links Together */}
        <div className="footer-section contact-social">
          <h3>Contact & Social</h3>
          <p><FaPhoneAlt className="footer-icon" /> <a href="tel:+917698610774">+91 7698610774</a></p>
          <p><FaEnvelope className="footer-icon" /> <a href="mailto:dsr0948@gmail.com">dsr0948@gmail.com</a></p>
          <p><FaMapMarkerAlt className="footer-icon" /> Vadodara, Gujarat, India</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/dhruvkumar-rana-1742732a9" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/dsr096" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Dhruv Rana. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
