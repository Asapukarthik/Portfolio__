import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import MagneticButton from './MagneticButton'

function Contact() {
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="text-3xl font-bold gradient-text">Contact</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="glass-card distort-hover space-y-4 p-6">
            <a
              href="mailto:karthikasapu21@gmail.com"
              className="interactive flex items-center gap-3 text-slate-200"
            >
              <FaEnvelope className="text-fuchsia-300" />
              karthikasapu21@gmail.com
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="interactive flex items-center gap-3 text-slate-200"
            >
              <FaLinkedin className="text-fuchsia-300" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Asapukarthik"
              target="_blank"
              rel="noreferrer"
              className="interactive flex items-center gap-3 text-slate-200"
            >
              <FaGithub className="text-fuchsia-300" />
              GitHub
            </a>
            <p className="flex items-center gap-3 text-slate-200">
              <FaPhone className="text-fuchsia-300" />
              +91 98765 43210
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="glass-card distort-hover space-y-4 p-6"
          >
            <input
              type="text"
              placeholder="Name"
              className="interactive w-full rounded-lg border border-white/15 bg-slate-900/60 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-400 focus:border-fuchsia-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="interactive w-full rounded-lg border border-white/15 bg-slate-900/60 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-400 focus:border-fuchsia-400"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="interactive w-full rounded-lg border border-white/15 bg-slate-900/60 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-400 focus:border-fuchsia-400"
            />
            <MagneticButton
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-3 font-medium text-white shadow-[0_0_20px_rgba(99,102,241,0.55)] transition hover:opacity-90"
            >
              Send Message
            </MagneticButton>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
