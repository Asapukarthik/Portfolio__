import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'

import {
  SiReact,
  SiJavascript,
  SiExpress,
  SiMongodb,
} from 'react-icons/si'
import { FaDatabase, FaGitAlt, FaGithub, FaAws, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'

const skillIcons = {
  'React': SiReact,
  'JavaScript': SiJavascript,
  'HTML': FaHtml5,
  'CSS': FaCss3Alt,
  'Node.js': FaNodeJs,
  'Express.js': SiExpress,
  'MongoDB': SiMongodb,
  'SQL': FaDatabase,
  'AWS': FaAws,
  'Git': FaGitAlt,
  'GitHub': FaGithub,
  'VS Code': VscCode,
}

function SkillCard({ name }) {
  const Icon = skillIcons[name] || FaDatabase

  return (
    <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/5">
      <Icon className="text-4xl text-slate-500 transition-colors duration-300 group-hover:text-purple-400" />
      <p className="text-sm font-semibold tracking-wide text-slate-200">{name}</p>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="section-container flex min-h-screen items-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mx-auto w-full max-w-5xl"
      >
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">Skills</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-white/5 bg-white/[0.02] p-8">
              <h3 className="mb-6 text-xl font-bold tracking-tight text-slate-100">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} name={skill.name} />
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
