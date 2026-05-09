import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

function Resume() {
  return (
    <section id="resume" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="glass-card p-8 text-center md:p-12"
      >
        <h2 className="text-3xl font-bold gradient-text">Resume</h2>
        <p className="mx-auto mt-5 max-w-2xl text-slate-300">
          I am a fresher full stack developer focused on building robust
          products with modern web technologies and cloud-ready deployment
          practices.
        </p>
        <MagneticButton
          type="button"
          onClick={() => window.open('/resume.pdf', '_blank')}
          className="mt-8 inline-block rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 font-medium text-white shadow-[0_0_26px_rgba(192,132,252,0.6)]"
        >
          Download CV
        </MagneticButton>
      </motion.div>
    </section>
  )
}

export default Resume
