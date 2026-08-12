import Container from "../ui/Container";

const skillGroups = [
  {
    category: "Frontend",
    description: "Interfaces that are responsive, accessible and built around real user needs.",
    technologies: ["React", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    description: "Reliable application logic, APIs and services designed for maintainability.",
    technologies: ["Node.js", "Express.js", "Laravel", "PHP", "REST APIs"],
  },
  {
    category: "Data",
    description: "Structured and flexible data solutions for applications of different shapes and sizes.",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Database Design"],
  },
  {
    category: "Engineering",
    description: "Development practices that support quality from local development to production.",
    technologies: ["Git", "GitHub", "Docker", "Testing", "CI/CD", "API Design"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-white/10 bg-slate-900/40 py-24 sm:py-32"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Technical toolkit
          </p>

          <h2
            id="skills-heading"
            className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl"
          >
            Tools I use to turn ideas into working systems.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A practical technology stack across frontend, backend, data and
            software delivery.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.category}
              className="group rounded-3xl border border-white/10 bg-slate-950/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">
                  {group.category}
                </h3>

                <span
                  aria-hidden="true"
                  className="text-xl text-cyan-300 transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
                {group.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {group.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-slate-300"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
