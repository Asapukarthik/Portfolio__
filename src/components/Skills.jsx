import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'

function SkillCircle({ name, level }) {
  const radius = 33
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (level / 100) * circumference

  return (
    <div className="glass-card distort-hover flex flex-col items-center gap-2 p-4">
      <svg width="90" height="90" viewBox="0 0 90 90">
        <circle cx="45" cy="45" r={radius} stroke="rgba(148,163,184,0.35)" strokeWidth="8" fill="none" />
        <motion.circle
          cx="45"
          cy="45"
          r={radius}
          stroke="url(#skillGradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          transform="rotate(-90 45 45)"
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          strokeDasharray={circumference}
        />
        <defs>
          <linearGradient id="skillGradient">
            <stop offset="0%" stopColor="var(--neon-cyan)" />
            <stop offset="100%" stopColor="var(--neon-magenta)" />
          </linearGradient>
        </defs>
        <text x="50%" y="51%" textAnchor="middle" dominantBaseline="middle" fill="#ffffff" fontSize="16" fontWeight="bold">
          {level}%
        </text>
      </svg>
      <p className="text-sm font-medium text-slate-200">{name}</p>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="text-3xl font-bold gradient-text">Skills</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="glass-card distort-hover p-6">
              <h3 className="text-xl font-semibold text-slate-100">
                {group.title}
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {group.skills.map((skill) => (
                  <SkillCircle key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
