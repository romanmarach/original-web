import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { tags, projects } from '../data/content'
import ProjectCard from '../components/ProjectCard'

function HomePage() {
  return (
    <div className="pb-20">
      <section className="grid min-h-[calc(100vh-64px)] grid-cols-1 border-b border-gold lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between border-b border-gold p-8 lg:border-b-0 lg:border-r lg:p-10"
        >
          <div>
            <span className="eyebrow">Software Developer - CS Graduate - NJIT '25</span>

            <h1 className="mb-7 font-display text-[clamp(48px,8vw,84px)] font-bold leading-[0.95] tracking-[-0.02em] text-paper">
              Roman
              <br />
              <em className="text-gold not-italic">Marach</em>
            </h1>

            <p className="mb-5 max-w-[380px] text-sm leading-8 text-muted">
              Building practical AI, automation, and web products. Focused on document pipelines,
              OCR, and turning messy workflows into clean user experiences.
            </p>

            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/projects" className="btn-gold">
              View Projects
            </Link>
            <Link to="/contact" className="btn-ghost">
              Get in Touch
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-rows-[1fr_auto]"
        >
          <div className="relative min-h-[260px] overflow-hidden border-b border-gold">
            <img
              src="/media/self2.jpg"
              alt="Roman Marach"
              className="block h-full w-full object-cover object-[56%_16%] lg:object-[58%_14%]"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-black/35 to-black/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />
            <div className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.15em] text-paper/40">
              Roman Marach - 2025
            </div>
          </div>

          <div className="p-7 md:p-8">
            <span className="eyebrow mb-3">Featured Project</span>
            <h3 className="mb-2 font-display text-2xl text-paper">{projects[0].title}</h3>
            <p className="mb-3 max-w-[300px] text-xs leading-7 text-muted">{projects[0].summary}</p>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {projects[0].stack.map((t) => (
                <span key={t} className="stack-pill">
                  {t}
                </span>
              ))}
            </div>
            <Link to="/projects" className="link-gold">
              See all projects -&gt;
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="section-shell pt-16">
        <div className="mb-8 flex flex-col gap-4 border-b border-gold pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">01 / Work</span>
            <h2 className="font-display text-4xl font-bold text-paper">
              Selected <em className="text-gold not-italic">Projects</em>
            </h2>
          </div>
          <Link to="/projects" className="link-gold">
            All Projects -&gt;
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          {projects.slice(0, 2).map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </section>

      <section className="section-shell pt-16">
        <div className="panel-gold grid grid-cols-1 items-end gap-8 p-8 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <span className="eyebrow">02 / About</span>
            <h2 className="mb-4 font-display text-[32px] font-bold leading-tight text-paper">
              CS grad building software
              <br />
              with <em className="text-gold not-italic">purpose.</em>
            </h2>
            <p className="max-w-[540px] text-sm leading-8 text-muted">
              Focused on AI-assisted data handling, OCR pipelines, automation, and web products that
              reduce manual work. Looking for full-time engineering roles.
            </p>
          </div>
          <Link to="/about" className="btn-ghost whitespace-nowrap">
            Read More
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
