import { skills } from "../data/content";

function AboutPage() {
  return (
    <section className="section-shell pb-20 pt-14">
      <div className="panel-gold grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="border-b border-gold p-8 lg:border-b-0 lg:border-r lg:p-12">
          <span className="eyebrow">01 / About</span>
          <h1 className="mb-8 font-display text-[clamp(36px,5vw,52px)] font-bold leading-tight text-paper">
            Building software
            <br />
            with <em className="text-gold not-italic">purpose.</em>
          </h1>

          <div className="max-w-[520px] space-y-5 text-[15px] leading-8 text-paper/70">
            <p>
              I'm a Computer Science graduate focused on building useful
              software with AI, automation, and web tools. Recently, I've worked
              on document-processing apps, OCR pipelines, and practical web
              products that turn messy information into something clear, usable,
              and fast. I enjoy the full process: understanding the problem,
              shaping the user experience, writing the code, and making the
              final product feel simple.
            </p>
            <p>
              I’m also someone who genuinely likes working with people. I
              communicate well, enjoy public speaking, and work best around
              teams that care about building useful things. Outside of software,
              I’m interested in books, travel, sports, and projects with
              real-world value.
            </p>
            {/* <p>
              Outside of software: I read Dostoevsky and Solzhenitsyn, follow
              travel routes I probably shouldn't, watch too much sports, and
              build small projects just to see if I can.
            </p> */}
          </div>
        </div>

        <div className="p-8 lg:p-10">
          <div className="mb-10 border-b border-gold pb-10">
            <span className="eyebrow">Skills</span>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-10 border-b border-gold pb-10">
            <span className="eyebrow">Education</span>
            <div className="mb-1 font-mono text-[10px] tracking-[0.1em] text-gold-dim">
              2021 - 2025
            </div>
            <div className="mb-1 font-display text-base text-paper">
              New Jersey Institute of Technology
            </div>
            <div className="text-xs text-muted">B.S. Computer Science</div>
          </div>

          <div>
            <span className="eyebrow">Interests</span>
            <div className="flex flex-wrap gap-1.5">
              {["Books", "Travel", "Sports", "Product Design"].map((i) => (
                <span key={i} className="chip">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
