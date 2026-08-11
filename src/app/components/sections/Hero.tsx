import Container from "../ui/Container";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-slate-950"
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/4 -z-10 h-120 w-120 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 top-1/3 -z-10 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Container className="py-24 sm:py-32 lg:py-40">
        <div className="max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-sm font-medium text-cyan-200">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
            </span>
            Full-Stack Software Engineer
          </div>

          <h1
            id="hero-heading"
            className="max-w-5xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl"
          >
            I build software that
            <span className="block bg-linear-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              solves real problems.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            I&apos;m Rosalyn Amondi Ajigoh, a full-stack developer focused on
            building reliable, scalable and thoughtful digital products across
            web, mobile and backend systems.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              Explore my work
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-16 grid max-w-2xl grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-semibold text-white">Full Stack</p>
              <p className="mt-1 text-sm text-slate-400">Web engineering</p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-white">API</p>
              <p className="mt-1 text-sm text-slate-400">Backend systems</p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-2xl font-semibold text-white">Product</p>
              <p className="mt-1 text-sm text-slate-400">End-to-end thinking</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}