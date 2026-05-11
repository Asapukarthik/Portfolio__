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
      <CursorGlowTrail />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Hero />
        <div className="relative w-full bg-black z-0">
          <BackgroundParticles />
          <div className="relative z-10">
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Resume />
            <Contact />
            <Footer />
          </div>
        </div>
      </motion.main>
    </div>
  )
}


export default App
