function ContactPage() {
  return (
    <section className="section-shell py-14">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-black/40 p-8">
        <h1 className="font-display text-4xl text-white">Contact</h1>
        <p className="mt-3 text-gray-300">
          Reach out for software roles, freelance builds, or collaboration on
          practical AI, automation, and web products.
        </p>

        <form className="mt-8 grid gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="First name"
              className="rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none ring-cyan-300 focus:ring"
            />
            <input
              type="text"
              placeholder="Last name"
              className="rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none ring-cyan-300 focus:ring"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none ring-cyan-300 focus:ring"
          />
          <textarea
            rows="5"
            placeholder="Message"
            className="rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none ring-cyan-300 focus:ring"
          />
          <button
            type="submit"
            className="w-fit rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-gray-200"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 space-y-2 text-sm text-gray-300">
          <p>
            Email:{" "}
            <a
              className="text-cyan-300 hover:text-cyan-200"
              href="mailto:romanmarach@ymail.com"
            >
              romanmarach@ymail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              className="text-cyan-300 hover:text-cyan-200"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/roman-marach
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              className="text-cyan-300 hover:text-cyan-200"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              github.com/romanmarach
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
