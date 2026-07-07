import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import MagneticButton from './MagneticButton'

function Resume() {
  return (
    <section id="resume" className="section-container flex items-center py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto w-full max-w-4xl relative overflow-hidden rounded-2xl border border-white/[0.08] p-14 text-center shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
      >
        {/* Opaque Solid Background - Space Indigo to prevent blending with pure black body */}
        <div className="absolute inset-0 -z-20 bg-[#0e0e16]" />
        {/* Decorative glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-80 bg-purple-600/15 blur-3xl rounded-full" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 h-40 w-80 bg-cyan-500/10 blur-3xl rounded-full" />

        <div className="relative z-10">
          <h2 className="section-heading mb-2">Resume</h2>
          <div className="section-heading-line" />
          <p className="mx-auto mb-10 max-w-2xl text-slate-400 leading-relaxed">
            I am a fresher full stack developer focused on building robust
            products with modern web technologies and cloud-ready deployment
            practices.
          </p>
          <MagneticButton
            type="button"
            onClick={() => window.open('/karthik_resume(fsd).pdf', '_blank')}
            className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-10 py-4 font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.25)] transition-all hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:brightness-110"
          >
            Download CV
            <FiDownload className="transition-transform duration-300 group-hover:translate-y-0.5" size={18} />
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  )
}

export default Resume
