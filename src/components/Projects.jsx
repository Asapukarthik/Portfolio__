import { motion } from 'framer-motion'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="text-3xl font-bold gradient-text">Projects</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group glass-card distort-hover overflow-hidden transition hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/65 opacity-0 transition group-hover:opacity-100">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="interactive rounded-full border border-cyan-400/50 bg-black/60 px-6 py-2 text-sm font-bold text-white shadow-[0_0_15px_rgba(0,243,255,0.2)]"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="space-y-4 p-5">
                <h3 className="text-xl font-semibold text-slate-100">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="interactive rounded-lg border border-cyan-500/30 px-4 py-2 text-sm transition hover:bg-cyan-500/10 text-cyan-200"
                  >
                    GitHub
                  </a>
                   <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="interactive rounded-full bg-gradient-to-r from-cyan-500 to-magenta-500 px-6 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-all hover:scale-105"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
