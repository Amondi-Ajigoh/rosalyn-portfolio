import Navbar from "./components/navigation/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />

        <Projects />

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="border-t border-white/10 bg-slate-900/40 py-24 sm:py-32"
        >
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Contact
            </p>

            <h2
              id="contact-heading"
              className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl"
            >
              Let&apos;s build something useful.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              I&apos;m open to opportunities where I can contribute to
              meaningful software products and grow alongside strong
              engineering teams.
            </p>

            <a
              href="mailto:hello@rosalynamondi.dev"
              className="mt-8 inline-flex rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              Start a conversation
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
