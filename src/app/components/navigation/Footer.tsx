import Container from "../ui/Container";

const footerNavigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <Container>
        <div className="flex flex-col gap-8 py-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-3"
              aria-label="Return to Rosalyn Amondi Ajigoh homepage"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-bold text-cyan-300">
                RA
              </span>

              <span className="text-sm font-semibold tracking-wide text-white">
                Rosalyn Amondi Ajigoh
              </span>
            </a>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
              Full-stack software engineer building reliable, scalable and
              thoughtful digital products.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Rosalyn Amondi Ajigoh. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Amondi-Ajigoh"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}