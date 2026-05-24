function ProjectCard({ project, index }) {
  const hasLiveUrl = Boolean(project.liveUrl)
  const imageFitClass = project.imageFit === 'contain' ? 'object-contain p-2' : 'object-cover'

  return (
    <article className="panel-gold card-hover p-6 md:p-7">
      {project.image && (
        <div className="mb-5 aspect-video overflow-hidden bg-white/5">
          <img
            src={project.image}
            alt={project.title}
            className={`h-full w-full transition duration-500 hover:scale-105 ${imageFitClass}`}
          />
        </div>
      )}

      <div className="mb-2 font-mono text-[10px] tracking-[0.15em] text-gold-dim">
        {String(index + 1).padStart(2, '0')}
      </div>

      <h3 className="mb-2 font-display text-2xl leading-tight text-paper">{project.title}</h3>

      <p className="mb-4 text-[13px] leading-7 text-muted">
        {project.summary || project.description}
      </p>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {(project.stack || project.tech || []).map((tech) => (
          <span key={tech} className="stack-pill">{tech}</span>
        ))}
      </div>

      {hasLiveUrl ? (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-gold">
          View Live -&gt;
        </a>
      ) : (
        <span className="font-body text-[11px] uppercase tracking-[0.15em] text-gold-dim">In Progress</span>
      )}
    </article>
  )
}

export default ProjectCard
