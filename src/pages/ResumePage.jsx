const resumeProjects = [
  {
    title: "University Loan Decoder",
    description:
      "A college financing web app that helps students compare loan paths and understand repayment tradeoffs with clearer outputs.",
    tech: ["React", "Vite", "UX Writing"],
    image: "/media/loanFlick.png",
    imageFit: "contain",
  },
  {
    title: "Cliffjumper",
    description:
      "A practical software project focused on automation-first workflows and reducing repetitive operational steps.",
    tech: ["JavaScript", "Automation", "Workflow Design"],
    image: "https://picsum.photos/900/550?random=741",
    imageFit: "cover",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal site built to present real project work with clear structure, concise writing, and production-ready deployment.",
    tech: ["React", "Tailwind", "Netlify"],
    image: "https://picsum.photos/900/550?random=742",
    imageFit: "cover",
  },
  {
    title: "OCR / Automation Project",
    description:
      "Document-processing pipeline that extracts text from image/PDF input, normalizes fields, and outputs cleaner data for downstream use.",
    tech: ["Python", "OCR", "Data Processing"],
    image: "https://picsum.photos/900/550?random=743",
    imageFit: "cover",
  },
];

const resumeExperience = [
  {
    role: "Software Developer Intern",
    org: "Wakefern",
    period: "Recent",
    details:
      "Contributed to internal software initiatives and workflow improvements with emphasis on reliability and maintainability.",
  },
  {
    role: "Help Desk / IT Support",
    org: "Wakefern",
    period: "Recent",
    details:
      "Handled technical support requests, troubleshooting, and user-facing issue resolution across day-to-day operations.",
  },
  {
    role: "Logistics Business Owner",
    org: "Independent",
    period: "Prior",
    details:
      "Ran logistics operations end-to-end, balancing execution, communication, and process discipline in fast-moving environments.",
  },
];

function ResumePage() {
  return (
    <section className="section-shell py-14">
      <div className="rounded-3xl border border-white/10 bg-black/35 p-8">
        <h1 className="font-display text-4xl text-white">Resume & Experience</h1>
        <p className="mt-3 max-w-3xl text-gray-300">
          Recent work with practical software projects and hands-on experience across engineering, IT support, and operations.
        </p>
        <a
          href="/resume/Resume5_26.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-full border border-cyan-300/50 px-5 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-200 hover:text-cyan-100"
        >
          View Full Resume PDF
        </a>
      </div>

      <div className="mt-12">
        <h2 className="font-display text-3xl text-white">Projects</h2>
        <p className="mt-2 max-w-2xl text-sm text-gray-300">
          Selected project work most relevant to current software development direction.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {resumeProjects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/65 transition hover:-translate-y-0.5 hover:border-cyan-300/40"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-950/80">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className={`h-full w-full transition duration-500 group-hover:scale-[1.02] ${
                    project.imageFit === "contain" ? "object-contain p-2" : "object-cover"
                  }`}
                />
              </div>
              <div className="space-y-4 p-5">
                <h3 className="font-display text-xl text-white">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-300/30 px-2 py-1 text-xs text-cyan-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-display text-3xl text-white">Experience</h2>
        <div className="mt-6 grid gap-5">
          {resumeExperience.map((item) => (
            <article
              key={`${item.role}-${item.org}`}
              className="rounded-2xl border border-white/10 bg-black/25 p-6 transition hover:border-white/20"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-display text-2xl text-white">{item.role}</h3>
                <span className="text-sm uppercase tracking-wider text-cyan-300">{item.period}</span>
              </div>
              <p className="mt-1 text-gray-200">{item.org}</p>
              <p className="mt-4 text-gray-300">{item.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResumePage;
