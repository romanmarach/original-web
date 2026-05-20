import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/content'

function ProjectsPage() {
  return (
    <section className="section-shell py-14">
      <h1 className="font-display text-4xl text-white">Projects</h1>
      <p className="mt-3 max-w-2xl text-gray-300">
        Selected work across AI document processing, OCR extraction workflows, automation, and web software.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
