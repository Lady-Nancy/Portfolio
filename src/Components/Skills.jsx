import { useState, useEffect } from 'react';
import '../Styles/Skills.css';
/*import { section } from 'framer-motion/client';*/

const Skills = () => {
  const skillData = [
    { name: 'HTML', level: 100, category: 'Frontend' },
    { name: 'CSS', level: 100, category: 'Frontend' },
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'Tailwind Css', level: 85, category: 'Frontend' },
    { name: 'pgAdmin', level: 80, category: 'Database' },
    { name: 'JavaScript', level: 80, category: 'Language' },
    { name: 'Python', level: 70, category: 'Language' },
    { name: 'SQL Language', level: 70, category: 'Database' },
    { name: 'Node.js', level: 60, category: 'Backend' },
    { name: 'MongoDB', level: 60, category: 'Database' },
  ];

  const [activeSkill, setActiveSkill] = useState(skillData[0]);
  const [animatedPercent, setAnimatedPercent] = useState(0);

  // Smooth counter animation when switching skills
  useEffect(() => {
    let start = 0;
    const target = activeSkill.level;
    const duration = 400; // Fast, snappy telemetry calculation
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setAnimatedPercent(target);
      } else {
        setAnimatedPercent(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [activeSkill]);

  return (
    <section className='skills'>
    <h1 className='skills1'>Skills</h1>
    <div className="cyber-skills-section">
      <div className="bg-grid-overlay"></div>
      
      <div className="interface-container">
        <header className="interface-header">
          <div className="system-status">SYSTEM // RUNNING // LEVEL_INIT</div>
          <h2 className="interface-title">CORE_COMPETENCIES</h2>
        </header>

        <div className="interface-main">
          <div className="skills-terminal">
            <div className="terminal-header">INDEX_OF_CAPABILITIES</div>
            <div className="skills-list">
              {skillData.map((skill, index) => (
                <button
                  key={index}
                  className={`skill-node ${activeSkill.name === skill.name ? 'active' : ''}`}
                  onMouseEnter={() => setActiveSkill(skill)}
                  onClick={() => setActiveSkill(skill)}
                >
                  <span className="node-index">0{index + 1}</span>
                  <span className="node-name">{skill.name}</span>
                  <span className="node-tag">{skill.category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: The Holographic Matrix Core */}
          <div className="matrix-core-container">
            <div className="matrix-scanner"></div>
            
            <div className="central-rings">
              {/* Spinning outer calibrated metric ring */}
              <div className="ring outer-ring" style={{ transform: `rotate(${animatedPercent * 3.6}deg)` }}></div>
              <div className="ring mid-ring" style={{ transform: `rotate(-${animatedPercent * 2}deg)` }}></div>
              <div className="ring inner-ring"></div>
              
              {/* Dynamic glowing core reflecting active values */}
              <div 
                className="energy-core" 
                style={{ 
                  transform: `scale(${0.5 + (animatedPercent / 200)})`,
                  boxShadow: `0 0 ${animatedPercent / 2}px rgba(139, 92, 246, 0.6)`
                }}
              ></div>

              {/* Data Readout inside the Matrix Core */}
              <div className="core-readout">
                <div className="readout-label">{activeSkill.category} // ARCH</div>
                <div className="readout-number">
                  {animatedPercent}<span className="unit">%</span>
                </div>
                <div className="readout-status">
                  {animatedPercent > 85 ? 'OPTIMAL' : animatedPercent > 65 ? 'STABLE' : 'OPERATIONAL'}
                </div>
              </div>
            </div>

            {/* Dynamic Telemetry Info Boxes */}
            <div className="telemetry-box top-left">
              <span className="label">SYS_REF:</span>
              <span className="val">0x8B5CF6</span>
            </div>
            <div className="telemetry-box bottom-right">
              <span className="label">TARGET_NODE:</span>
              <span className="val">{activeSkill.name.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Skills;