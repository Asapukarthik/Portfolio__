import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-300 md:flex-row">
        <p>© {new Date().getFullYear()} Karthik. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <motion.a
            href="https://github.com/asapukarthik"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5, scale: 1.12 }}
            className="transition hover:text-fuchsia-300"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/venkata-veera-hanuma-karthik-asapu-78ba6a256/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5, scale: 1.12 }}
            className="transition hover:text-fuchsia-300"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="#home"
            whileHover={{ y: -5, scale: 1.12 }}
            className="transition hover:text-fuchsia-300"
          >
            <FaArrowUp />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
