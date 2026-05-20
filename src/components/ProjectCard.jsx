import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  const hasLiveUrl = Boolean(project.liveUrl)
  const imageFitClass = project.imageFit === 'contain' ? 'object-contain bg-slate-950 p-2' : 'object-cover'

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`h-full w-full ${imageFitClass} transition duration-500 group-hover:scale-105`}
        />
      </div>
      <div className="space-y-4 p-5">
        <h3 className="font-display text-xl text-white">{project.title}</h3>
        <p className="text-sm text-gray-300">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-cyan-300/30 px-2 py-1 text-xs text-cyan-200">
              {tech}
            </span>
          ))}
        </div>
        {hasLiveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200"
          >
            View Live Demo
          </a>
        ) : (
          <Link to="/projects" className="inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200">
            Explore Project
          </Link>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
