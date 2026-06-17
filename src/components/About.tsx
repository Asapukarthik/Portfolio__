import { motion } from 'framer-motion'

import { milestones } from '../data/about'
import { GlowCard } from './GlowCard'
import { createAccentGlow } from '../utils/glowHover'
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
}

function About() {
  return (
    <section id="about" className="section-container flex min-h-screen items-center py-24 relative overflow-hidden">
      {/* Background Mask for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black pointer-events-none -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto w-full max-w-6xl relative z-10 px-6"
      >
        <div className="mb-20 text-center flex flex-col items-center">

          <motion.h2
            variants={itemVariants}
            className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            About Me
          </motion.h2>
          <motion.div variants={itemVariants} className="h-[2px] w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6" />
          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-2xl leading-relaxed text-slate-400 text-sm md:text-base"
          >
            I’m Karthik, a passionate full stack developer focused on
            building scalable, high-performance web applications with modern
            technologies and premium user experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {milestones.map((item) => (
            <GlowCard
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3, ease: 'easeOut' } }}
              glow={item.glow}
              hover={createAccentGlow(item.iconColor, item.glow)}
              className="flex flex-col items-center rounded-3xl border p-7 text-center cursor-pointer"
            >
              <div className={`relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} p-[1px] shadow-md transition-all duration-500 hover:scale-105 hover:shadow-lg`}>
                <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-[#09090b] text-xl">
                  <item.icon style={{ color: item.iconColor }} />
                </div>
              </div>

              <h3 className={`relative z-10 mb-2 text-base font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.textGradient}`}>
                {item.title}
              </h3>
              <p className="relative z-10 text-xs leading-relaxed text-slate-400 font-medium">
                {item.detail}
              </p>
            </GlowCard>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About
