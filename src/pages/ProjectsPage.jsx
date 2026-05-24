import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/content'

function ProjectsPage() {
  return (
    <section className="section-shell pb-20 pt-14">
      <div className="mb-10 flex flex-col gap-4 border-b border-gold pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="eyebrow">05 / Projects</span>
          <h1 className="font-display text-[clamp(36px,5vw,52px)] font-bold leading-tight text-paper">
            Selected <em className="text-gold not-italic">Work</em>
          </h1>
        </div>
        <p className="max-w-[280px] text-left text-[13px] leading-7 text-muted md:text-right">
          Across AI document processing, OCR extraction, automation, and web software.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
