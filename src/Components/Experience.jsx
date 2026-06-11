import "../Styles/Experience.css"

const Experience = () => {
  return (
    <div>
      <section className="all-xp">
        <h1>Experience</h1>
        <div className="experience">
        <div className="xp1">
            <h3>Fontend Developer</h3>
            <h5>TechCorp</h5>
            <p>Jan 2023 - Present</p>
            <p>Building responsive web apps using React, Tailwind, and Framer Motion. Collaborating on UI/UX improvements and performance optimization.</p>
        </div>

        <div className="xp2">
            <h3>Intern Developer</h3>
            <h5>Jenga Tech</h5>
            <p>September 2025 - present</p>
            <p>Worked on React components, bug fixes, and assisted in project deployments. Learned agile workflow and code reviews.</p>
        </div>

        <div className="xp3">
            <h3>Freelance Web Developer</h3>
            <h5>Self-employed</h5>
            <p>Mar 2021 - May 2022</p>
            <p>Built portfolio websites, landing pages, and small web apps for clients using modern front-end stack.</p>
        </div>

        </div>
      </section>
    </div>
  )
}

export default Experience
