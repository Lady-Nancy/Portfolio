import "../Styles/Hero.css"
import { Link } from "react-router-dom"
import Nancy from "../assets/nancy.png"
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div className="off">
    
    <div class="hero-container">
    <div class="left-side">
    <div class="content-left">
    <h5>Hi, I’m Nancy</h5>
    <h2>Software <span>Engineer</span></h2>
    <h6>
    I build clean, responsive, and scalable web interfaces with modern technologies.
    </h6>
    </div>

    <div className="hero-buttons">
    <Link to="/projects" className="btn primary">View Projects</Link>
    <a href="/Nancy-CV.pdf" download="Anselm_Nancy_CV.pdf" className="btn secondary">Download CV</a>
    </div>
  </div>


    <div class="right-side">
    <div class="content-right">
    <motion.img
        src={Nancy}
        alt="Nancy portrait"
        className="hero-image"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.div
        className="hero-name-overlay"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
    <Typewriter
    words={["Anselm Nancy", "Software Engineer", "Frontend Developer", "Fullstack Web Developer", "Cyber Security Specialist", "ETHICAL HACKER" ]}
    loop={0} // 0 = infinite
    cursor
    cursorStyle="|"
    typeSpeed={100}
    deleteSpeed={50}
    delaySpeed={1500}
    />
    </motion.div>

    </div>


  </div>

    </div>



    </div>
  )
}

export default Hero
