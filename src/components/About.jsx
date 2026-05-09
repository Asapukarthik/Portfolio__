import { motion } from 'framer-motion'

import { FaCode, FaLaptopCode, FaBullseye } from 'react-icons/fa'

const milestones = [
  {
    title: 'Engineering Journey',
    detail: 'Computer science student building software with strong problem-solving fundamentals.',
    icon: FaCode,
  },
  {
    title: 'Full Stack Focus',
    detail: 'Passionate about React, Node.js, Express.js, and MongoDB for production-ready apps.',
    icon: FaLaptopCode,
  },
  {
    title: 'Career Vision',
    detail: 'Targeting high-impact software engineering roles and cloud-native backend systems.',
    icon: FaBullseye,
  },
]

function About() {
  return (
    <section id="about" className="section-container flex min-h-screen items-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mx-auto w-full max-w-5xl"
      >
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">About Me</h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-slate-400">
            I am Karthik, a full stack developer in the making who loves turning
            ideas into clean, scalable products with premium user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {milestones.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col items-center rounded-2xl border border-white/10 bg-transparent p-8 text-center transition-all duration-300 hover:border-purple-500/30 hover:bg-white/5"
            >
              <item.icon className="mb-4 text-2xl text-slate-500 transition-colors group-hover:text-purple-400" />
              <h3 className="mb-3 text-lg font-semibold text-slate-200">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About
