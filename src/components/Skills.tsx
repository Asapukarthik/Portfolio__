import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'

import {
  SiReact, SiJavascript, SiExpress, SiMongodb, SiTypescript, SiTailwindcss, SiNestjs,
  SiFirebase, SiPython, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy,
  SiDocker, SiPostman, SiC, SiCplusplus, SiNextdotjs, SiMysql
} from 'react-icons/si'
import { FaDatabase, FaGitAlt, FaGithub, FaNodeJs, FaServer, FaRobot, FaTools, FaCode, FaChartBar, FaKey, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'
import { TbApi, TbBrowser } from 'react-icons/tb'

const skillIcons = {
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'HTML5': FaHtml5,
  'CSS3': FaCss3Alt,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': FaNodeJs,
  'Express.js': SiExpress,
  'NestJS': SiNestjs,
  'REST APIs': TbApi,
  'JWT': FaKey,
  'MongoDB': SiMongodb,
  'MySQL': SiMysql,
  'Firebase': SiFirebase,
  'Python': SiPython,
  'TensorFlow': SiTensorflow,
  'Scikit-learn': SiScikitlearn,
  'Pandas': SiPandas,
  'NumPy': SiNumpy,
  'Matplotlib': FaChartBar,
  'Seaborn': FaChartBar,
  'Git': FaGitAlt,
  'GitHub': FaGithub,
  'Docker': SiDocker,
  'Postman': SiPostman,
  'VS Code': VscCode,
  'Power BI': FaChartBar,
  'C': SiC,
  'C++': SiCplusplus,
}

const skillColors = {
  'React.js': '#61DAFB',
  'Next.js': '#ffffff',
  'JavaScript': '#F7DF1E',
  'TypeScript': '#3178C6',
  'HTML5': '#E34F26',
  'CSS3': '#1572B6',
  'Tailwind CSS': '#06B6D4',
  'Node.js': '#339933',
  'Express.js': '#ffffff',
  'NestJS': '#E0234E',
  'REST APIs': '#00B4AB',
  'JWT': '#FB015B',
  'MongoDB': '#47A248',
  'MySQL': '#4479A1',
  'Firebase': '#FFCA28',
  'Python': '#3776AB',
  'TensorFlow': '#FF6F00',
  'Scikit-learn': '#F7931E',
  'Pandas': '#e2e8f0',
  'NumPy': '#4DABCF',
  'Matplotlib': '#ffffff',
  'Seaborn': '#ffffff',
  'Git': '#F05032',
  'GitHub': '#ffffff',
  'Docker': '#2496ED',
  'Postman': '#FF6C37',
  'VS Code': '#007ACC',
  'Power BI': '#F2C811',
  'C': '#A8B9CC',
  'C++': '#00599C',
}

const categoryIcons = {
  'Frontend': TbBrowser,
  'Backend': FaServer,
  'Database': FaDatabase,
  'Machine Learning': FaRobot,
  'Tools': FaTools,
  'Languages': FaCode,
}

const groupAccents = {
  'Frontend': '#61DAFB', // Cyan
  'Backend': '#339933',  // Green
  'Database': '#0ea5e9', // Light Blue
  'Machine Learning': '#FF6F00', // Orange
  'Tools': '#f43f5e',    // Rose
  'Languages': '#a855f7', // Purple
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
}

function SkillCard({ name }: { name: string }) {
  const Icon = skillIcons[name] || FaDatabase
  const color = skillColors[name] || '#a78bfa'

  return (
    <div className="relative group">
      <motion.div
        variants={cardVariants}
        whileHover={{ y: -4, scale: 1.05, transition: { duration: 0.2 } }}
        className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border bg-[#13131c] transition-all duration-300 hover:bg-[#1a1a26]"
        style={{
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          borderColor: `${color}35`,
          boxShadow: `0 0 12px ${color}08`
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${color}90`;
          e.currentTarget.style.boxShadow = `0 0 20px ${color}45`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = `${color}35`;
          e.currentTarget.style.boxShadow = `0 0 12px ${color}08`;
        }}
      >
        <Icon
          className="text-[2rem] transition-all duration-300 group-hover:scale-110"
          style={{ color: color, filter: `drop-shadow(0 0 8px ${color}50)` }}
        />
      </motion.div>
      {/* Tooltip */}
      <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-black/90 px-3 py-1.5 text-xs font-semibold text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:-top-12 group-hover:opacity-100 z-50">
        {name}
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="section-container flex min-h-screen items-center py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto w-full max-w-6xl"
      >
        <div className="mb-20 text-center flex flex-col items-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl"> MY SKILLS</h2>
          <p className="mx-auto max-w-xl text-slate-400 text-sm md:text-base">
            Technologies and tools I use to build scalable web applications and modern digital experiences.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const CatIcon = categoryIcons[group.title] || FaCode;
            const accent = groupAccents[group.title] || '#a78bfa';

            return (
              <motion.div
                key={group.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: 'easeOut' } }}
                className="group/category relative flex flex-col rounded-3xl border p-7 transition-all duration-500 overflow-hidden cursor-pointer"
                style={{
                  borderColor: `${accent}40`,
                  boxShadow: `0 0 25px ${accent}12`,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${accent}90`;
                  e.currentTarget.style.boxShadow = `0 0 35px ${accent}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${accent}40`;
                  e.currentTarget.style.boxShadow = `0 0 25px ${accent}12`;
                }}
              >
                {/* Opaque Solid Background - Space Indigo to prevent blending with pure black body */}
                <div className="absolute inset-0 -z-20 bg-[#0e0e16] transition-colors duration-500 group-hover/category:bg-[#151522]" />

                {/* Double Blurred Ambient Glows */}
                <div
                  className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full opacity-10 blur-[80px] transition-opacity duration-700 group-hover/category:opacity-80 pointer-events-none -z-10"
                  style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }}
                />
                <div
                  className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-5 blur-[80px] transition-opacity duration-700 group-hover/category:opacity-55 pointer-events-none -z-10"
                  style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }}
                />

                <h3 className="mb-7 flex items-center gap-3 text-base font-bold tracking-wide text-slate-100">
                  <CatIcon className="text-xl" style={{ color: accent }} />
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-4">
                  {group.skills.map((skill) => (
                    <SkillCard key={skill.name} name={skill.name} />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
