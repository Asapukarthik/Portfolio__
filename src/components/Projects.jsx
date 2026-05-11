import { motion } from 'framer-motion'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="section-container flex min-h-screen items-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mx-auto w-full max-w-6xl"
      >
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">Projects</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-transparent transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/30 hover:bg-white/5"
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
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-xl font-semibold text-slate-100">
                  {project.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-xl border border-white/10 bg-white/5 py-2.5 text-center text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    GitHub
                  </a>
                   <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-xl bg-purple-600 py-2.5 text-center text-sm font-semibold text-white transition-all hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
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
