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
    <section id="experience" className="section-container flex min-h-screen items-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mx-auto w-full max-w-4xl"
      >
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">Experience & Education</h2>
        </div>
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-transparent p-8 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/5"
            >
              <div className="flex flex-col justify-between md:flex-row md:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-purple-400">{item.subtitle}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-slate-300">
                    {item.period}
                  </span>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
