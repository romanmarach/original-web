import { skills } from "../data/content";

function AboutPage() {
  return (
    <section className="section-shell py-14">
      <div className="grid gap-10 lg:grid-cols-[1.15fr,0.85fr]">
        <article className="rounded-3xl border border-white/10 bg-black/30 p-8">
          <h1 className="font-display text-4xl text-white">About</h1>
          <p className="mt-5 text-gray-300">
            I'm a Computer Science graduate focused on building useful software
            with AI, automation, and web tools. Recently, I've worked on
            document-processing apps, OCR pipelines, and practical web products.
            I like projects that take messy information and turn it into
            something clear, usable, and fast. Outside of software, I'm
            interested in books, travel, sports, and building projects that have
            real-world value.
          </p>
        </article>

        <aside className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
          <h2 className="font-display text-2xl text-white">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cyan-300/30 px-3 py-1 text-sm text-cyan-100"
              >
                {skill}
              </span>
            ))}
          </div>
          <h3 className="mt-8 font-display text-xl text-white">Education</h3>
          <p className="mt-2 text-gray-300">
            B.S. in Computer Science, New Jersey Institute of Technology (NJIT),
            2026.
          </p>
          <h3 className="mt-8 font-display text-xl text-white">Interests</h3>
          <p className="mt-2 text-gray-300">
            Books, travel, sports, and software product design.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default AboutPage;
