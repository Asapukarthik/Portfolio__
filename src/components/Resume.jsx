import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

function Resume() {
  return (
    <section id="resume" className="section-container flex items-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mx-auto w-full max-w-4xl rounded-3xl border border-white/10 bg-transparent p-12 text-center"
      >
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Resume</h2>
        <p className="mx-auto mb-8 max-w-2xl text-slate-400 leading-relaxed">
          I am a fresher full stack developer focused on building robust
          products with modern web technologies and cloud-ready deployment
          practices.
        </p>
        <MagneticButton
          type="button"
          onClick={() => window.open('/resume.pdf', '_blank')}
          className="inline-block rounded-xl bg-purple-600 px-8 py-3.5 font-semibold text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all hover:scale-[1.02] hover:bg-purple-500"
        >
          Download CV
        </MagneticButton>
      </motion.div>
    </section>
  )
}

export default Resume
