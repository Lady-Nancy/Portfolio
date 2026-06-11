


const Xper = () => {
  // 1. Define the parent container animation config (The conductor)
  {/*const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // This delays each item by 0.2 seconds!
      },
    },
  };

  // 2. Define how each individual item slides and fades in
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Starts 20px lower and invisible
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <div className="off">
      <div className="hero-container">
        
        {/* 3. Turn the left side into a motion container 
        <motion.div 
          className="left-side"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="content-left">
            {/* 4. Turn headers into motion elements using itemVariants 
            <motion.h5 variants={itemVariants}>Hi, I’m Nancy</motion.h5>
            <motion.h2 variants={itemVariants}>Software Engineer</motion.h2>
            <motion.h6 variants={itemVariants}>
              I build clean, responsive, and scalable web interfaces with modern technologies.
            </motion.h6>
          </div>

          {/* 5. Turn the button container into a motion item too 
          <motion.div className="hero-buttons" variants={itemVariants}>
            <Link to="/projects" className="btn primary">View Projects</Link>
            <a href="/Nancy-CV.pdf" className="btn secondary">Download CV</a>
          </motion.div>
        </motion.div>

        <div className="right-side">
  <div className="content-right">
    {/* The Base Layer 
    <motion.img
      src={Nancy}
      alt="Nancy portrait"
      className="hero-image"
      animate={{ y: [0, -10, 0] }} 
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* The Top Layer (Positioned Absolute) 
    <motion.div
      className="hero-name-overlay"
      animate={{ y: [0, -10, 0] }} // Match the image float so they move together!
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <Typewriter
        words={["Anselm Nancy", "Software Engineer", "Frontend Developer"]}
        loop={0} 
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
  )*/}
}

export default Xper