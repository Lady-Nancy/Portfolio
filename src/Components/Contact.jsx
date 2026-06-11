/*import { div } from 'framer-motion/client';*/
import '../Styles/Contact.css';
import {  MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className='contact'>
      <h1 className='contact1'>Contact</h1>
    <div className="contact-page">
      <div className="absolute-grid" />

      <div className="contact-container">
      
        <div className="contact-info-panel">
          <div className="tag">Available for Projects</div>
          <h1 className="contact-title">
            Let’s build something <span className="text-purple">exceptional</span> together.
          </h1>
          <p className="contact-subtitle">
            Have an idea or just want to talk shop? Drop a message. I usually respond within 24 hours.
          </p>

          <div className="info-list">
            <div className="info-item">
              <div className="icon-wrapper">✉</div>
              <div>
                <p className="info-label">Email Me</p>
                <a href="mailto:hello@yourdomain.com" className="info-value">anselmnancy28@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="security-note">
            <MessageSquare size={16} className="text-purple" />
            <span>End-to-end encrypted communication available upon request.</span>
          </div>
        </div>

        <div className="contact-form-panel">
          <form className="interactive-form" action="#" method="POST">
            
            <div className="input-group">
              <input type="text" id="name" name="name" required placeholder=" " />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="input-group">
              <input type="email" id="email" name="email" required placeholder=" " />
              <label htmlFor="email">Email Address</label>
            </div>

            <div className="input-group">
              <textarea id="message" name="message" rows="5" required placeholder=" "></textarea>
              <label htmlFor="message">Tell me about your project</label>
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <span className="btn-icon">↗</span>
            </button>
          </form>
        </div>

      </div>
    </div>

    </div>
  );
};

export default Contact;