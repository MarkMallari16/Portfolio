import { useRef } from 'react'
import { motion, useScroll } from "framer-motion";
import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ScrollBtn from './components/ScrollBtn'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar';


function App() {
  const homeRef = useRef('null');
  const aboutRef = useRef('null');
  const skillsRef = useRef('null');
  const projectsRef = useRef('null');
  const contactRef = useRef('null');



  return (
    <div className='min-h-screen'>
      <ProgressBar />
      <section>
        <NavBar homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />

      </section>
      <motion.section
        initial={{ opacity: 0, transform: 0 }}
        whileInView={{ opacity: 1, transform: 1 }}
        viewport={{ once: true }}
        ref={homeRef}>
        <Hero />
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        ref={aboutRef}

      >
        <About />
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        ref={skillsRef}>
        <Skills />
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        ref={projectsRef}>
        <Projects />
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        ref={contactRef}>
        <Contact />
      </motion.section>


      <ScrollBtn />
    </div>

  )
}

export default App
