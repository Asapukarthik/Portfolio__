import { motion } from 'framer-motion'

const milestones = [
  {
    title: 'Engineering Journey',
    detail: 'Computer science student building software with strong problem-solving fundamentals.',
  },
  {
    title: 'Full Stack Focus',
    detail: 'Passionate about React, Node.js, Express.js, and MongoDB for production-ready apps.',
  },
  {
    title: 'Career Vision',
    detail: 'Targeting high-impact software engineering roles and cloud-native backend systems.',
  },
]

function About() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="glass-card p-8 md:p-12"
      >
        <h2 className="text-3xl font-bold gradient-text">About Me</h2>
        <p className="mt-6 leading-relaxed text-slate-300">
          I am Karthik, a full stack developer in the making who loves turning
          ideas into clean, scalable products with premium user experience.
        </p>
        <div className="relative mt-8 space-y-5 border-l border-fuchsia-300/35 pl-6">
          {milestones.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <span className="absolute -left-[31px] top-6 h-3.5 w-3.5 rounded-full bg-fuchsia-300 shadow-[0_0_14px_rgba(232,121,249,1)]" />
              <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-1 text-slate-300">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About
