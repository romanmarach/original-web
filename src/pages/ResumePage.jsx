const resumeProjects = [
  {
    title: 'University Loan Decoder',
    description:
      'A college financing web app that helps students compare loan paths and understand repayment tradeoffs with clearer outputs.',
    tech: ['React', 'Vite', 'UX Writing'],
    image: '/media/loanFlick.png',
    imageFit: 'contain',
  },
  {
    title: 'Cliffjumper',
    description:
      'A practical software project focused on automation-first workflows and reducing repetitive operational steps.',
    tech: ['JavaScript', 'Automation', 'Workflow Design'],
    image: 'https://picsum.photos/900/550?random=741',
    imageFit: 'cover',
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal site built to present real project work with clear structure, concise writing, and production-ready deployment.',
    tech: ['React', 'Tailwind', 'Netlify'],
    image: 'https://picsum.photos/900/550?random=742',
    imageFit: 'cover',
  },
  {
    title: 'OCR / Automation Project',
    description:
      'Document-processing pipeline that extracts text from image/PDF input, normalizes fields, and outputs cleaner data for downstream use.',
    tech: ['Python', 'OCR', 'Data Processing'],
    image: 'https://picsum.photos/900/550?random=743',
    imageFit: 'cover',
  },
]

const resumeExperience = [
  {
    role: 'Software Developer Intern',
    org: 'Wakefern',
    period: 'Recent',
    details:
      'Contributed to internal software initiatives and workflow improvements with emphasis on reliability and maintainability.',
  },
  {
    role: 'Help Desk / IT Support',
    org: 'Wakefern',
    period: 'Recent',
    details:
      'Handled technical support requests, troubleshooting, and user-facing issue resolution across day-to-day operations.',
  },
  {
    role: 'Logistics Business Owner',
    org: 'Independent',
    period: 'Prior',
    details:
      'Ran logistics operations end-to-end, balancing execution, communication, and process discipline in fast-moving environments.',
  },
]

function ResumePage() {
  return (
    <section className="section-shell pb-20 pt-14">
      <div className="panel-gold mb-12 flex flex-col items-start justify-between gap-8 p-8 md:flex-row md:items-end md:p-10">
        <div>
          <span className="eyebrow">02 / Resume</span>
          <h1 className="mb-3 font-display text-[clamp(32px,4vw,48px)] font-bold leading-tight text-paper">
            Experience &amp; <em className="text-gold not-italic">Work</em>
          </h1>
          <p className="max-w-[480px] text-sm leading-8 text-muted">
            Recent work with practical software projects and hands-on experience across engineering,
            IT support, and operations.
          </p>
        </div>
        <a
          href="/resume/Resume5_26.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold whitespace-nowrap"
        >
          Download PDF -&gt;
        </a>
      </div>

      <div className="mb-12">
        <div className="mb-0 border-b border-gold pb-5">
          <h2 className="font-display text-[28px] font-bold text-paper">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {resumeProjects.map((project, i) => (
            <article key={project.title} className="panel-gold card-hover overflow-hidden border-t-0">
              <div className="aspect-video overflow-hidden bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`h-full w-full ${project.imageFit === 'contain' ? 'object-contain p-2' : 'object-cover'}`}
                />
              </div>
              <div className="p-6 md:p-7">
                <div className="mb-2 font-mono text-[9px] tracking-[0.15em] text-gold-dim">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mb-2 font-display text-xl text-paper">{project.title}</h3>
                <p className="mb-4 text-[13px] leading-7 text-muted">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="stack-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-0 border-b border-gold pb-5">
          <h2 className="font-display text-[28px] font-bold text-paper">Experience</h2>
        </div>

        {resumeExperience.map((item) => (
          <article
            key={`${item.role}-${item.org}`}
            className="panel-gold card-hover grid grid-cols-1 gap-4 border-t-0 p-7 md:grid-cols-[1fr_auto] md:px-8"
          >
            <div>
              <h3 className="mb-1 font-display text-[22px] font-bold text-paper">{item.role}</h3>
              <div className="mb-3 font-display text-[13px] italic text-gold">{item.org}</div>
              <p className="text-[13px] leading-7 text-muted">{item.details}</p>
            </div>
            <div className="pt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-gold-dim md:text-right">
              {item.period}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ResumePage
