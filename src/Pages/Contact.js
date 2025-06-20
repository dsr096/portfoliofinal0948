import React from 'react';
import './Contact.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="contact-section">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">I'd love to hear from you! Please fill out the form below.</p>

        <form 
          className="contact-form" 
          action="https://formspree.io/f/xyzjpneb" 
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" id="phone" required placeholder="Enter your phone number" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="5" required placeholder="Enter your message"></textarea>
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>
      <Footer/>
    </>
  );
};

export default Contact;
