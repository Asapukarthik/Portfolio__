import { motion } from 'framer-motion'
import About from './components/About'
import BackgroundParticles from './components/BackgroundParticles'
import Contact from './components/Contact'
import CursorGlowTrail from './components/CursorGlowTrail'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Skills from './components/Skills'

function App() {
  return (
    <div className="min-h-screen overflow-clip text-slate-100 selection:bg-purple-500/30">
      <CursorGlowTrail />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Hero />

        {/* Main Background Section: Spans from About to Footer */}
        <div className="relative min-h-screen w-full bg-black">
          {/* Background Particles: Positioned to span the entire section */}
          <div className="absolute inset-0 z-0">
            <BackgroundParticles />
          </div>

          {/* Content Layer */}
          <div className="relative z-10">
            <About />
            <div className="section-divider" />
            <Skills />
            <div className="section-divider" />
            <Projects />
            <div className="section-divider" />
            <Experience />
            <div className="section-divider" />
            <Education />
            <div className="section-divider" />
            <Resume />
            <div className="section-divider" />
            <Contact />
            <Footer />
          </div>
        </div>
      </motion.main>
    </div>
  )
}


export default App
