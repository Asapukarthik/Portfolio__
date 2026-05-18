import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Asapukarthik', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/venkata-veera-hanuma-karthik-asapu-78ba6a256/', label: 'LinkedIn' },
]

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-purple-500/20 bg-black/60 backdrop-blur-md">
      {/* Vibrant Gradient line at top - Highlighting the section start */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_20px_rgba(168,85,247,0.8)]" />

      {/* Bright Ambient Highlight Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-purple-500/25 blur-[60px]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 text-sm md:flex-row">
        {/* Bright Highlighted Copyright Text */}
        <p className="flex items-center gap-1.5 font-medium tracking-wide text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          <span>© {new Date().getFullYear()}</span>
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text font-bold text-transparent">Karthik</span>
          <span className="text-slate-200">. All rights reserved.</span>
        </p>

        {/* High contrast, bright interactive icons */}
        <div className="flex items-center gap-5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              whileHover={{ y: -4, scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
            >
              <Icon size={16} />
            </motion.a>
          ))}

          <motion.a
            href="#home"
            whileHover={{ y: -4, scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
            aria-label="Back to top"
          >
            <FaArrowUp size={14} />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
