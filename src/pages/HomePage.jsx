import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { tags, projects } from '../data/content'
import ProjectCard from '../components/ProjectCard'

function HomePage() {
  return (
    <div className="pb-20">
      <section className="section-shell grid min-h-[80vh] items-center gap-12 py-12 lg:grid-cols-[1.2fr,0.8fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wider text-gray-200">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Roman Marach
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-medium text-gray-200 sm:text-xl">
            Software Developer building practical AI, automation, and web products.
          </p>
          <p className="mt-4 max-w-2xl text-base text-gray-300 sm:text-lg">
            I build practical software products using web development, AI, and automation. Recently, I have focused on
            tools that process documents, extract useful information, and turn messy workflows into clean user experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/projects" className="rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-gray-200">
              View Projects
            </Link>
            <Link to="/contact" className="rounded-full border border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:border-white">
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-2 rounded-[2rem] bg-cyan-400/20 blur-2xl" />
          <img
            src="/media/self2.jpg"
            alt="Roman Marach portrait"
            className="relative rounded-[2rem] border border-white/20 object-cover shadow-glow"
          />
        </motion.div>
      </section>

      <section className="section-shell py-8">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-2xl text-white">Featured Projects</h2>
          <Link to="/projects" className="text-sm text-cyan-300 hover:text-cyan-200">See all</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
          <h2 className="font-display text-2xl text-white">About Roman</h2>
          <p className="mt-4 max-w-3xl text-gray-300">
            CS graduate focused on building useful software with clear outcomes. Most projects center on AI-assisted data handling,
            OCR pipelines, automation, and web products that reduce manual work.
          </p>
          <Link to="/about" className="mt-6 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200">
            Read Full Bio
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
