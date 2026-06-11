import "../Styles/About.css"
import { FiTwitter, FiMail, FiInstagram } from 'react-icons/fi';
import Me from "../assets/me.jpg"

const About = () => {
  return (
    <div className="about"> 
      <h1 className="animate-fade-in" style={{ '--delay': '0.9s' }}>About Me</h1>
      <div className="card">
       <img src={Me} alt="" />
      <div className="card-container">
      <div className="business-card">
        
        <div className="star top-left-star">✦</div>

        <div className="card-content">
        <h1 className="card-name">Anselm Nancy</h1>
          
          <p className="card-description">
          <p>I’m Nancy, a passionate software engineer who loves building clean,
          responsive, and scalable web interfaces. I enjoy learning new
          technologies, solving problems, and creating digital experiences
          that make an impact.</p>
        <p>I specialize in React, modern JavaScript, and front-end design, but I
          am always expanding my skills to full-stack development and
          innovative solutions. </p>
          </p>

          <div className="icon-container">
            <a href="https://x.com/Anselm_Nancy" target="_blank" rel="noreferrer" className="icon-circle">
              <FiTwitter className="social-icon" />
            </a>
            <a href="ansemnancy28@gmail.com" className="icon-circle">
              <FiMail className="social-icon" />
            </a>
            <a href="https://www.instagram.com/anselmnancy1?igsh=ZW92d3QxYjRvdWdq" target="_blank" rel="noreferrer" className="icon-circle">
              <FiInstagram className="social-icon" />
            </a>
          </div>
        </div>

        <div className="star bottom-right-star">✦</div>
      </div>
    </div>
    </div>
        
    </div>
    
  )
}

export default About
