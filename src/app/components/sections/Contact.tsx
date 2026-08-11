import Container from "../ui/Container";

const contactLinks = [
  {
    label: "Email",
    value: "hello@rosalynamondi.dev",
    href: "mailto:hello@rosalynamondi.dev",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rosalynamondi",
    href: "https://www.linkedin.com/",
  },
  {
    label: "GitHub",
    value: "github.com/Amondi-Ajigoh",
    href: "https://github.com/Amondi-Ajigoh",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-white/10 bg-slate-900/40 py-24 sm:py-32"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Contact
            </p>

            <h2
              id="contact-heading"
              className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl"
            >
              Let&apos;s build something useful.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              I&apos;m open to software engineering opportunities, meaningful
              collaborations, and conversations about building reliable
              digital products.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:hello@rosalynamondi.dev"
                className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                Email me
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>

              <a
                href="https://github.com/Amondi-Ajigoh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                View GitHub
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/0.03 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Connect
            </p>

            <div className="mt-6 divide-y divide-white/10">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group block py-5 first:pt-0 last:pb-0"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {link.label}
                  </span>

                  <span className="mt-2 block break-all text-sm font-medium text-slate-200 transition group-hover:text-cyan-300 sm:text-base">
                    {link.value}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Location
              </p>

              <p className="mt-2 text-sm font-medium text-slate-200">
                Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}