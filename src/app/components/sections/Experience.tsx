import Container from "../ui/Container";
import { certifications, education, experience } from "../../data/resume";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-white/10 bg-slate-900/40 py-24 sm:py-32"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Experience & Resume
          </p>

          <h2
            id="experience-heading"
            className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl"
          >
            Engineering experience built around real products.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A focused overview of my professional development, education and
            technical growth.
          </p>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Professional Experience
            </h3>

            <div className="mt-8 space-y-10">
              {experience.map((item) => (
                <article
                  key={`${item.role}-${item.organization}`}
                  className="relative border-l border-cyan-300/20 pl-8"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-slate-950 bg-cyan-300"
                  />

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {item.role}
                      </h4>
                      <p className="mt-1 text-cyan-300">
                        {item.organization}
                      </p>
                    </div>

                    <p className="text-sm font-medium text-slate-500">
                      {item.period}
                    </p>
                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.location}
                  </p>

                  <p className="mt-5 leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {item.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-3 text-sm leading-6 text-slate-400"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300"
                        />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <section aria-labelledby="education-heading">
              <h3
                id="education-heading"
                className="text-xl font-semibold text-white"
              >
                Education
              </h3>

              <div className="mt-8 space-y-6">
                {education.map((item) => (
                  <article
                    key={`${item.qualification}-${item.institution}`}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                  >
                    <p className="text-sm font-medium text-cyan-300">
                      {item.period}
                    </p>

                    <h4 className="mt-3 text-lg font-semibold leading-7 text-white">
                      {item.qualification}
                    </h4>

                    <p className="mt-2 text-sm font-medium text-slate-300">
                      {item.institution}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section aria-labelledby="certifications-heading">
              <h3
                id="certifications-heading"
                className="text-xl font-semibold text-white"
              >
                Certifications & Training
              </h3>

              <div className="mt-8 space-y-4">
                {certifications.map((item) => (
                  <article
                    key={`${item.name}-${item.issuer}`}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                  >
                    <p className="text-sm font-semibold text-white">
                      {item.name}
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                      {item.issuer}
                    </p>

                    <span className="mt-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs font-semibold text-cyan-300">
                      {item.status}
                    </span>
                  </article>
                ))}
              </div>
            </section>

            <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-6">
              <p className="text-sm leading-6 text-slate-300">
                A downloadable CV will be connected here once the final
                production CV document is added to the repository.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
