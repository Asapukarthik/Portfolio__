import { motion } from 'framer-motion'

const timeline = [
  {
    title: 'B.E. Computer Science',
    subtitle: 'Engineering Student',
    period: '2022 - Present',
    description:
      'Building strong fundamentals in software engineering, data structures, and system design.',
  },
  {
    title: 'Full Stack Intern Projects',
    subtitle: 'Self-driven Experience',
    period: '2024 - Present',
    description:
      'Developed end-to-end MERN applications and cloud deployment workflows with AWS.',
  },
  {
    title: 'Career Goal',
    subtitle: 'Software Engineer',
    period: 'Next Step',
    description:
      'Aiming to contribute to product teams by shipping scalable and user-centric software.',
  },
]

function Experience() {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold gradient-text">Experience & Education</h2>
        <div className="relative mt-12 space-y-8 border-l border-fuchsia-300/30 pl-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card relative p-6"
            >
              <span className="absolute -left-[41px] top-7 h-5 w-5 rounded-full border-2 border-fuchsia-300 bg-slate-900 shadow-[0_0_16px_rgba(232,121,249,0.9)]" />
              <p className="text-xs uppercase tracking-widest text-cyan-300">
                {item.period}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-fuchsia-200">{item.subtitle}</p>
              <p className="mt-3 text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
