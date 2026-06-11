import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import "./App.css"
import About from "./Components/About"
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Footer from "./Components/Footer"
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';


const App = () => {
  return (
    <div>

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          </>
          }/>
       
          <Route path="/about" element={<About />}  />
          <Route path='/contact' element={<Contact/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  )
}

export default App
