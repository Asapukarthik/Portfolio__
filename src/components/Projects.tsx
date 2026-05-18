import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
}

interface Project {
  title: string;
  subtitle: string;
  description: string[];
  techStack: string[];
  image: string;
  github: string;
  liveDemo?: string;
  glow: string;
  color: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
}

interface ProjectCardProps {
  project: Project;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
}

function ProjectCard({ project }: ProjectCardProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    
    // Calculate cursor position relative to the card (in pixels)
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    // Calculate percentage (0 to 100) for the glow position
    const glowX = (x / rect.width) * 100
    const glowY = (y / rect.height) * 100
    setGlowPos({ x: glowX, y: glowY })
    
    // Calculate rotation values (-10deg to 10deg max tilt)
    const rotateX = ((y / rect.height) - 0.5) * -10
    const rotateY = ((x / rect.width) - 0.5) * 10
    setRotate({ x: rotateX, y: rotateY })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotate({ x: 0, y: 0 })
  }

  // Base and hovered glowing colors
  const activeBorder = project.glow.replace('0.25', '0.5')
  const baseBorder = project.glow.replace('0.25', '0.2') // Brighter border to prevent merging
  const activeShadow = `0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px ${project.glow.replace('0.25', '0.22')}`
  const baseShadow = `0 10px 30px rgba(0, 0, 0, 0.4), 0 0 15px ${project.glow.replace('0.25', '0.08')}` // Distinct default glow outline

  return (
    <motion.article
      variants={cardVariants}
      className="group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-500"
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovered ? 1.03 : 1})`,
        borderColor: isHovered ? activeBorder : baseBorder,
        boxShadow: isHovered ? activeShadow : baseShadow,
        transition: 'border-color 0.4s ease, box-shadow 0.4s ease, transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Opaque Solid Background - Space Indigo to prevent blending with pure black body */}
      <div className="absolute inset-0 -z-20 bg-[#0e0e16] transition-colors duration-500 group-hover:bg-[#151522]" />

      {/* Dynamic Cursor-Tracking Glow Spot (Shine effect) */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.85 : 0.25,
          background: `radial-gradient(circle 180px at ${glowPos.x}% ${glowPos.y}%, ${project.glow.replace('0.25', '0.22')}, transparent 80%)`
        }}
      />

      {/* Additional Deep Static Glows for double layer lighting */}
      <div
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-10 blur-[80px] transition-opacity duration-700 group-hover:opacity-60 pointer-events-none -z-10"
        style={{ background: `radial-gradient(circle, ${project.glow.replace('0.25', '0.4')}, transparent 70%)` }}
      />

      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-52 w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />

        {/* Hover overlay with button */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-all duration-400 group-hover:opacity-100">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="interactive flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20"
            >
              <FiGithub size={18} />
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className={`interactive flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-gradient-to-r ${project.color} text-white backdrop-blur-sm transition-all hover:scale-110 hover:brightness-110`}
            >
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-white">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className={`mb-3 text-xs font-semibold uppercase tracking-wider ${project.textColor}`}>
            {project.subtitle}
          </p>
        )}
        {Array.isArray(project.description) ? (
          <ul className="mb-5 flex-1 list-disc pl-4 space-y-1.5 text-xs leading-relaxed text-slate-400">
            {project.description.map((point, idx) => (
              <li key={idx} className="hover:text-slate-300 transition-colors duration-200">
                {point}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>
        )}

        {/* Tech Stack */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={`rounded-full ${project.bgColor} px-3 py-1 text-xs font-medium ${project.textColor} border ${project.borderColor} transition-colors duration-300 hover:bg-opacity-20`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:border-white/20 ${!project.liveDemo ? 'w-full flex-none' : ''}`}
            >
              <FiGithub size={15} />
              Code
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${project.color} py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 ${!project.github ? 'w-full flex-none' : ''}`}
              style={{
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 25px ${project.glow.replace('0.25', '0.45')}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FiExternalLink size={15} />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

function Projects() {
  return (
    <section id="projects" className="section-container flex min-h-screen items-center py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto w-full max-w-6xl"
      >
        <div className="mb-16 text-center">
          <h2 className="section-heading">Projects</h2>
          <div className="section-heading-line" />
          <p className="mx-auto max-w-xl text-slate-400 text-base mt-2">
            Following projects showcases my skills and experience through real-world examples of my work.
            Each project is briefly described with links to code repositories and live demos in it.
            It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
