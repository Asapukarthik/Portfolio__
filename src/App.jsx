import { motion } from 'framer-motion'
import About from './components/About'
import BackgroundParticles from './components/BackgroundParticles'
import Contact from './components/Contact'
import CursorGlowTrail from './components/CursorGlowTrail'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Skills from './components/Skills'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden text-slate-100 selection:bg-purple-500/30">
      <BackgroundParticles />
      <CursorGlowTrail />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  )
}


export default App
