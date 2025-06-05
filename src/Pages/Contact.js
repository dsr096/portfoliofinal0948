import React from 'react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import Navbar from '../Components/Navbar';

const Contact = () => {
  return (
    <>
    <Navbar/>
    <section className="contact">
      <h2 className="contact-title">Contact Information</h2>

      <div className="contact-container">
        <div className="contact-box">
          <FaPhoneAlt className="contact-icon" />
          <a href="tel:+917698610774">+91 7698610774</a>
        </div>

        <div className="contact-box">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:dsr0948@gmail.com">dsr0948@gmail.com</a>
        </div>

        <div className="contact-box">
          <FaMapMarkerAlt className="contact-icon" />
          <a
            href="https://maps.google.com/?q=Radhe Ratnam, FLAT E301, Near Vaikuntha Cross, Vadodara"
            target="_blank"
            rel="noopener noreferrer"
          >
            Radhe Ratnam, FLAT E301,<br />Near Vaikuntha Cross, Vadodara
          </a>
        </div>

        <div className="contact-box">
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/dhruvkumar-rana-1742732a9"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>

        <div className="contact-box">
          <FaGithub className="contact-icon" />
          <a
            href="https://github.com/dsr096"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
