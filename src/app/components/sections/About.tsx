import Container from "../ui/Container";

const principles = [
  {
    title: "Product-minded",
    description:
      "I think beyond individual features, considering usability, maintainability, performance and the wider product experience.",
  },
  {
    title: "Engineering-focused",
    description:
      "I care about clean architecture, strong fundamentals, readable code, testing and systems that can evolve without unnecessary complexity.",
  },
  {
    title: "End-to-end",
    description:
      "I can work across interfaces, APIs, databases and deployment workflows to understand how the pieces fit together as one system.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-white/10 bg-slate-950 py-24 sm:py-32"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              About me
            </p>

            <h2
              id="about-heading"
              className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl"
            >
              Building with purpose, not just code.
            </h2>
          </div>

          <div>
            <div className="space-y-6 text-lg leading-8 text-slate-300">
              <p>
                I&apos;m Rosalyn Amondi Ajigoh, a full-stack software engineer
                with a strong foundation in information technology and a
                practical focus on building useful digital products.
              </p>

              <p>
                My work spans modern web applications, backend services,
                databases and API-driven systems. I enjoy taking an idea from
                architecture and implementation through testing, deployment
                and continuous improvement.
              </p>

              <p>
                I&apos;m particularly interested in engineering work where
                thoughtful technical decisions create a measurable difference
                for users, teams and organisations.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="rounded-2xl border border-white/10 bg-white/0.03 p-5 transition-colors hover:border-cyan-300/20 hover:bg-white/0.05"
                >
                  <h3 className="text-base font-semibold text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
