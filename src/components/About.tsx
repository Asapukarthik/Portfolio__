import { motion } from 'framer-motion'

import { milestones } from '../data/about'
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
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
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
          {milestones.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3, ease: 'easeOut' } }}
              className="group relative flex flex-col items-center rounded-3xl border p-7 text-center transition-all duration-500 overflow-hidden cursor-pointer"
              style={{
                borderColor: `${item.iconColor}40`,
                boxShadow: `0 8px 30px -10px ${item.iconColor}20, 0 0 15px ${item.iconColor}08`,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${item.iconColor}90`;
                e.currentTarget.style.boxShadow = `0 0 35px ${item.glow.replace('0.25', '0.15')}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${item.iconColor}40`;
                e.currentTarget.style.boxShadow = `0 8px 30px -10px ${item.iconColor}20, 0 0 15px ${item.iconColor}08`;
              }}
            >
              {/* Opaque Solid Background - Space Indigo to prevent blending with pure black body */}
              <div className="absolute inset-0 -z-20 bg-[#0e0e16] transition-colors duration-500 group-hover:bg-[#151522]" />

              {/* Double Blurred Ambient Glows */}
              <div
                className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-75 pointer-events-none -z-10"
                style={{ background: `radial-gradient(circle, ${item.glow.replace('0.25', '0.45')}, transparent 70%)` }}
              />
              <div
                className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-55 pointer-events-none -z-10"
                style={{ background: `radial-gradient(circle, ${item.glow.replace('0.25', '0.25')}, transparent 70%)` }}
              />

              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} p-[1px] shadow-md transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg`}>
                <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-[#09090b] text-xl">
                  <item.icon style={{ color: item.iconColor }} />
                </div>
              </div>

              <h3 className={`mb-2 text-base font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.textGradient}`}>
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-400 font-medium transition-colors group-hover:text-slate-300">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About
