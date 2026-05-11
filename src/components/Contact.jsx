import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import MagneticButton from './MagneticButton'

function Contact() {
  return (
    <section id="contact" className="section-container flex min-h-screen items-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mx-auto w-full max-w-5xl"
      >
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">Contact</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6 rounded-2xl border border-white/10 bg-transparent p-8">
            <a
              href="mailto:karthikasapu21@gmail.com"
              className="group flex items-center gap-4 text-slate-300 transition-colors hover:text-purple-400"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-purple-500/30 group-hover:bg-purple-500/10">
                <FaEnvelope className="text-xl" />
              </div>
              <span className="text-sm font-medium">karthikasapu21@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/venkata-veera-hanuma-karthik-asapu-78ba6a256/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 text-slate-300 transition-colors hover:text-purple-400"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-purple-500/30 group-hover:bg-purple-500/10">
                <FaLinkedin className="text-xl" />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Asapukarthik"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 text-slate-300 transition-colors hover:text-purple-400"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-purple-500/30 group-hover:bg-purple-500/10">
                <FaGithub className="text-xl" />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <div className="group flex items-center gap-4 text-slate-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <FaPhone className="text-xl" />
              </div>
              <span className="text-sm font-medium">+91 7396242902</span>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="space-y-4 rounded-2xl border border-white/10 bg-transparent p-8"
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-purple-500/50 focus:bg-white/10 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-purple-500/50 focus:bg-white/10 transition-colors"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-purple-500/50 focus:bg-white/10 transition-colors"
            />
            <MagneticButton
              type="submit"
              className="w-full rounded-xl bg-purple-600 px-6 py-3.5 font-semibold text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all hover:scale-[1.02] hover:bg-purple-500"
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
