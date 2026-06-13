import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaCode, FaShieldAlt 
} from 'react-icons/fa'; 
import '../Styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-accent-line" />

      <div className="footer-inner">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <h2>ANSELM<span>.</span></h2>
            <p>
              Building scalable digital interfaces and secure full-stack ecosystems. 
              Crafting clean code with a security-first mindset.
            </p>
            <div className="footer-socials">
              <a href="https://github.com/Lady-Nancy" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/anselm-nancy-6b4992244?utm_source=shared&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer"><FaLinkedin /></a>  
              <a href="https://x.com/Anselm_Nancy" target="_blank" rel="noreferrer"><FaTwitter /></a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Navigation</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Core Domains</h3>
            <ul className="footer-domains">
              <li>
                <FaCode className="domain-icon" /> Fullstack Web Dev
              </li>
              <li>
                <FaShieldAlt className="domain-icon" /> Cyber Security
              </li>
              <li>
                <span className="domain-dot"></span> Interactive UI
              </li>
            </ul>
          </div>

          <div className="footer-column footer-form">
            <h3>Stay Updated</h3>
            <p>Get the latest technical insights and project drops sent to your inbox.</p>
            <form action="https://formspree.io/f/mbdepbbv" method="POST" onSubmit={handleSubscribe}>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Join</button>
              </div>
            </form>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Anselm Nancy. All rights reserved.
          </p>
          
          <button onClick={scrollToTop} className="scroll-top-btn">
            <span>Back to top</span>
            <FaArrowUp className="arrow-icon" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;