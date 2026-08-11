import Container from "../ui/Container";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <Container>
        <nav
          aria-label="Primary navigation"
          className="flex h-20 items-center justify-between"
        >
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label="Rosalyn Amondi Ajigoh home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-bold text-cyan-300 transition group-hover:border-cyan-300 group-hover:bg-cyan-400/20">
              RA
            </span>

            <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">
              Rosalyn Amondi Ajigoh
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-200 hover:bg-cyan-300/20"
          >
            Let&apos;s talk
          </a>
        </nav>
      </Container>
    </header>
  );
}