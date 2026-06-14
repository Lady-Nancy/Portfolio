import { useState } from "react" 
import { Link } from "react-router-dom"
import "../Styles/Navbar.css"

const Navbar = () => {
  // 2. Create the state to track if menu is open
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-links">
      <h3>Nancy.dev</h3>
      
      <div className={`link1 ${isOpen ? "active" : ""}`} >
        <Link to="/" className="link" onClick={toggleMenu}>Home</Link>
        <Link to="/about" className="link" onClick={toggleMenu}>About</Link>
        <Link to="/skills" className="link" onClick={toggleMenu}>Skills</Link>
        <Link to="/projects" className="link" onClick={toggleMenu}>Projects</Link>
        <Link to="/contact" className="link link2" onClick={toggleMenu}>Contact</Link>
      </div>

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
  )
}

export default Navbar