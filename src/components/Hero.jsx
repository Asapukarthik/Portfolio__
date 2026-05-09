import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import profileImg from '../assets/profile .jpg'
import BackgroundSphere from './BackgroundSphere'

const roles = ['Full Stack Developer', 'MERN Enthusiast', 'Cloud Learner']

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:karthik@example.com', label: 'Email' },
]

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const heroY = useTransform(scrollY, [0, 400], [0, 80])
  const parallaxY = useTransform(scrollY, [0, 600], [0, 100])

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timer = window.setTimeout(
      () => {
        if (!isDeleting && displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else if (isDeleting && displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1))
        } else if (!isDeleting && displayText.length === currentRole.length) {
          setIsDeleting(true)
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      },
      isDeleting ? 40 : 90,
    )
    return () => window.clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section id="home" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-20">
      
      <BackgroundSphere />

      {/* ─── Floating Social Bar (Right) ─── */}
      <div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 lg:flex">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col items-center gap-6 rounded-full border border-white/10 bg-black/40 py-6 px-3 backdrop-blur-xl shadow-2xl"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="group text-slate-500 transition-all duration-300 hover:scale-125 hover:text-white"
            >
              <Icon size={18} className="drop-shadow-[0_0_8px_rgba(255,255,255,0)] group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300" />
            </a>
          ))}
          <div className="h-16 w-px bg-gradient-to-b from-purple-500/50 to-transparent" />
        </motion.div>
      </div>

      {/* ─── Hero Content Grid ─── */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 mx-auto grid max-w-7xl w-full grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2"
      >
        {/* Radial glow behind heading */}
        <div className="pointer-events-none absolute left-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-700/25 blur-[120px]" />

        {/* Left Side: Text Content */}
        <div className="flex flex-col items-start text-left">

          {/* Hello label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 flex items-center gap-3 text-sm font-semibold tracking-widest text-purple-400 uppercase"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-purple-500" />
            Hello, I&apos;m
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="mb-4 text-6xl font-black leading-tight tracking-tighter sm:text-7xl lg:text-8xl xl:text-9xl"
          >
            <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(168,85,247,0.3)]">
              Karthik
            </span>
          </motion.h1>

          {/* Animated Role */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-6 min-h-[2.5rem] font-mono text-xl font-semibold tracking-widest text-slate-300 sm:text-2xl lg:text-3xl"
          >
            {displayText}
            <span className="ml-1 animate-pulse text-purple-400">|</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-10 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            I build exceptional digital experiences with modern technologies,
            focused on clean architecture and delightful user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-sm font-bold text-white shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300"
            >
              View Projects
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>

        {/* Right Side: Profile Image */}
        <motion.div
          style={{ y: parallaxY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Glow Background */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-purple-600 via-blue-500 to-transparent opacity-30 blur-2xl transition duration-700 group-hover:opacity-60 group-hover:blur-3xl" />

            <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-2 border-white/10 shadow-2xl sm:h-[400px] sm:w-[400px]">
              <img
                src={profileImg}
                alt="Karthik profile"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-transparent mix-blend-overlay" />
            </div>
          </div>
        </motion.div>

      </motion.div>

      {/* ─── Scroll Indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <div className="h-10 w-6 overflow-hidden rounded-full border border-white/20 p-1">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="h-2.5 w-full rounded-full bg-gradient-to-b from-purple-500 to-blue-500 shadow-[0_0_8px_rgba(168,85,247,0.7)]"
          />
        </div>
        <span className="text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase">Scroll Down</span>
      </motion.div>
    </section>
  )
}

export default Hero
