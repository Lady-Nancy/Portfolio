import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-container">
      {/* The Main Visible Header Bar */}
      <div className="nav-header-bar">
        <h3 className="nav-logo">Nancy.dev</h3>

        {/* Hamburger Trigger */}
        <button 
          className={`hamburger ${isOpen ? "is-active" : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* The Navigation Links Menu (Slides in on Mobile, static on Desktop) */}
      <div className={`nav-links-wrapper ${isOpen ? "active" : ""}`}>
        <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
        <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
        <Link to="/skills" className="nav-link" onClick={toggleMenu}>Skills</Link>
        <Link to="/projects" className="nav-link" onClick={toggleMenu}>Projects</Link>
        <Link to="/contact" className="nav-link nav-btn" onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;