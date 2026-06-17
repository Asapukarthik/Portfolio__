import { motion } from 'framer-motion'
import { educations } from '../data/experience'
import { GlowCard } from './GlowCard'
import { createMutedGlow } from '../utils/glowHover'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
}

function Education() {
  return (
    <section id="education" className="section-container flex min-h-screen items-center py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto w-full max-w-4xl"
      >
        <div className="mb-16 text-center">
          <h2 className="section-heading">Education</h2>
          <div className="section-heading-line" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-cyan-500/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {educations.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ x: 6, transition: { duration: 0.25 } }}
                className="group relative flex gap-6 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 hidden md:flex h-5 w-5 items-center justify-center">
                  <div
                    className="h-3 w-3 rounded-full ring-4 ring-black transition-all duration-500 group-hover:scale-150"
                    style={{
                      background: `linear-gradient(135deg, ${item.glow}, ${item.glow})`,
                      boxShadow: `0 0 15px ${item.glow}`,
                    }}
                  />
                </div>

                {/* Card */}
                <GlowCard
                  glow={item.glow}
                  hover={createMutedGlow(item.glow)}
                  className="flex-1 rounded-2xl border p-8"
                >
                  <div className="relative z-10 flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} p-0.5 shadow-lg`}>
                        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950/80 text-lg text-white">
                          <item.icon />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <p className="mt-1 text-sm font-medium text-purple-400">{item.subtitle}</p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-xs font-semibold tracking-wider text-slate-300 md:mt-1">
                      {item.period}
                    </span>
                  </div>
                  {Array.isArray(item.description) ? (
                    <ul className="relative z-10 mt-5 list-disc pl-5 md:pl-[5.25rem] space-y-2 text-sm leading-relaxed text-slate-400">
                      {item.description.map((point, idx) => (
                        <li key={idx} className="hover:text-slate-300 transition-colors duration-200">
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="relative z-10 mt-5 text-sm leading-relaxed text-slate-400 md:pl-16">
                      {item.description}
                    </p>
                  )}
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Education
