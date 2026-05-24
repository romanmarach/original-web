function ContactPage() {
  const contactLinks = [
    {
      label: "Email",
      value: "romanmarach@ymail.com",
      href: "mailto:romanmarach@ymail.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/roman1191",
      href: "https://www.linkedin.com/in/roman1191",
    },
    {
      label: "GitHub",
      value: "github.com/romanmarach",
      href: "https://github.com/romanmarach",
    },
  ];

  return (
    <section className="section-shell pb-20 pt-14">
      <div className="panel-gold grid min-h-[500px] grid-cols-1 lg:grid-cols-2">
        <div className="border-b border-gold p-8 lg:border-b-0 lg:border-r lg:p-10">
          <span className="eyebrow">04 / Contact</span>
          <h1 className="mb-5 font-display text-[clamp(32px,4vw,48px)] font-bold leading-tight text-paper">
            Let's build
            <br />
            something <em className="text-gold not-italic">real.</em>
          </h1>
          <p className="mb-10 max-w-[360px] text-sm leading-8 text-muted">
            Open to full-time software engineering roles. Especially interested
            in teams building automation tools, developer products, or anything
            that handles complexity well.
          </p>

          <div className="flex flex-col">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="card-hover block border border-gold border-b-0 p-4 no-underline"
              >
                <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.18em] text-gold-dim">
                  {link.label}
                </span>
                <span className="text-[13px] text-paper">{link.value}</span>
              </a>
            ))}
            <div className="h-px border border-gold" />
          </div>
        </div>

        <div className="p-8 lg:p-10">
          <span className="mb-7 block font-mono text-[9px] uppercase tracking-[0.2em] text-gold-dim">
            Or send a message
          </span>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {["First name", "Last name"].map((ph) => (
                <div key={ph}>
                  <label className="mb-2 block font-mono text-[9px] uppercase tracking-[0.18em] text-gold-dim">
                    {ph.split(" ")[0]}
                  </label>
                  <input type="text" placeholder={ph} className="form-input" />
                </div>
              ))}
            </div>

            <div>
              <label className="mb-2 block font-mono text-[9px] uppercase tracking-[0.18em] text-gold-dim">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="form-input"
              />
            </div>

            <div>
              <label className="mb-2 block font-mono text-[9px] uppercase tracking-[0.18em] text-gold-dim">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="What are you working on?"
                className="form-input resize-none"
              />
            </div>

            <button type="submit" className="btn-gold self-start">
              Send Message -&gt;
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
