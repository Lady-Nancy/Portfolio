import { ExternalLink, Terminal, Shield, Layers } from 'lucide-react';
import '../Styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <input type="radio" id="all" name="filter" defaultChecked />
      <input type="radio" id="fullstack" name="filter" />
      <input type="radio" id="frontend" name="filter" />
      <input type="radio" id="cybersec" name="filter" />

      <header className="projects-header">
        <h2 className="section-title">
          Selected <span className="text-purple">Projects</span>
        </h2>
        <p className="section-subtitle">
          A curated collection of digital systems, full-stack architectures, and security tools I've built.
        </p>
      </header>

      <nav className="filter-nav">
        <label htmlFor="all" className="filter-btn btn-all">All</label>
        <label htmlFor="fullstack" className="filter-btn btn-fullstack">Full-Stack</label>
        <label htmlFor="frontend" className="filter-btn btn-frontend">Frontend</label>
        <label htmlFor="cybersec" className="filter-btn btn-cybersec">Backend</label>
      </nav>

      <main className="projects-grid">
        <article className="project-card item-cybersec">
          <div className="card-inner">
            <div className="card-header">
              <div className="project-icon-wrapper"><Shield className="w-5 h-5 text-[#8b5cf6]" /></div>
              <span className="project-category">Cyber Security</span>
            </div>
            <h3 className="project-title">SecureAuth Sandbox</h3>
            <p className="project-description">A secure authentication gateway featuring JWT token rotation and rate-limiting.</p>
            <div className="tech-stack">
              <span className="tech-tag"><code>Node.js</code></span>
              <span className="tech-tag"><code>Crypto</code></span>
            </div>
            <div className="card-links">
           <a 
            href="https://github.com/Lady-Nancy/C-PLEX" 
           target="_blank" 
          rel="noopener noreferrer" 
          className="action-link" 
           aria-label="GitHub Repository">
    <svg 
      className="link-icon" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
    Code
  </a>

  <a href="#" className="action-link primary-link">
    <ExternalLink className="link-icon" /> Live
  </a>
</div>
          </div>
        </article>

        <article className="project-card item-fullstack">
          <div className="card-inner">
            <div className="card-header">
              <div className="project-icon-wrapper"><Layers className="w-5 h-5 text-[#8b5cf6]" /></div>
              <span className="project-category">Full-Stack</span>
            </div>
            <h3 className="project-title">C-PLEX ENGINEERING AND CONSTRUCTION</h3>
            <p className="project-description">A modern engineering and construction website showcasing services, projects, and innovative building solutions.</p>
            <div className="tech-stack">
              <span className="tech-tag"><code>React</code></span>
              <span className="tech-tag"><code>Tailwind CSS</code></span>
              <span className="tech-tag"><code>JavaScript</code></span>
              <span className="tech-tag"><code>SQL</code></span>
            </div>
             <div className="card-links">
           <a 
            href="https://github.com/Lady-Nancy/C-PLEX" 
           target="_blank" 
          rel="noopener noreferrer" 
          className="action-link" 
          aria-label="GitHub Repository">
    <svg 
      className="link-icon" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
    Code
  </a>
              <a href="https://c-plexconstructioncompanyltd.vercel.app" className="action-link primary-link"><ExternalLink className="link-icon" /> Live</a>
            </div>
          </div>
        </article>

        <article className="project-card item-frontend">
          <div className="card-inner">
            <div className="card-header">
              <div className="project-icon-wrapper"><Terminal className="w-5 h-5 text-[#8b5cf6]" /></div>
              <span className="project-category">Frontend</span>
            </div>
            <h3 className="project-title">Static Landing Page</h3>
            <p className="project-description">An elegant photography landing page focused on storytelling through imagery and modern design.</p>
            <div className="tech-stack">
              <span className="tech-tag"><code>Html</code></span>
              <span className="tech-tag"><code>CSS Grid</code></span>
            </div>
             <div className="card-links">
           <a 
            href="https://github.com/Lady-Nancy/Hero-Page" 
           target="_blank" 
          rel="noopener noreferrer" 
          className="action-link" 
           aria-label="GitHub Repository">
    <svg 
      className="link-icon" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
    Code
  </a>
              <a href="#" className="action-link primary-link"><ExternalLink className="link-icon" /> Live</a>
            </div>
          </div>
        </article>


                 <article className="project-card item-frontend">
          <div className="card-inner">
            <div className="card-header">
              <div className="project-icon-wrapper"><Terminal className="w-5 h-5 text-[#8b5cf6]" /></div>
              <span className="project-category">Frontend</span>
            </div>
            <h3 className="project-title">Refresh-Clone Group Project</h3>
            <p className="project-description">Collaborate in a team to recreate the streak website, focusing on responsive design, modern UI implementation, and seemless user experience</p>
            <div className="tech-stack">
              <span className="tech-tag"><code>Html</code></span>
              <span className="tech-tag"><code>Node.js</code></span>
              <span className="tech-tag"><code>CSS Grid</code></span>
              <span className="tech-tag"><code>pgAdim</code></span>
            </div>
             <div className="card-links">
           <a 
            href="https://github.com/SoftwareDev-EzinneO/Refresh-Clone" 
           target="_blank" 
          rel="noopener noreferrer" 
          className="action-link" 
           aria-label="GitHub Repository">
    <svg 
      className="link-icon" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
    Code
  </a>
              <a href="#" className="action-link primary-link"><ExternalLink className="link-icon" /> Live</a>
            </div>
          </div>
        </article>

         <article className="project-card item-frontend">
          <div className="card-inner">
            <div className="card-header">
              <div className="project-icon-wrapper"><Terminal className="w-5 h-5 text-[#8b5cf6]" /></div>
              <span className="project-category">Frontend</span>
            </div>
            <h3 className="project-title">Porfiolio</h3>
            <p className="project-description">Designed and developed a modern personal portfolio to highlight my projcts, skills, technical skills, and creative work</p>
            <div className="tech-stack">
              <span className="tech-tag"><code>React</code></span>
              <span className="tech-tag"><code>Html</code></span>
              <span className="tech-tag"><code>CSS Grid</code></span>
              <span className="tech-tag"><code>JavaScript</code></span>
            </div>
             <div className="card-links">
           <a 
            href="https://github.com/Lady-Nancy/Hero-Page" 
           target="_blank" 
          rel="noopener noreferrer" 
          className="action-link" 
           aria-label="GitHub Repository">
    <svg 
      className="link-icon" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
    Code
  </a>
              <a href="#" className="action-link primary-link"><ExternalLink className="link-icon" /> Live</a>
            </div>
          </div>
        </article>
        
      </main>
    </div>
  );
};

export default Projects;