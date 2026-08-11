"use client";

import { useState } from "react";
import Container from "../ui/Container";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
            onClick={closeMenu}
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

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-200 hover:bg-cyan-300/20 sm:inline-flex"
            >
              Let&apos;s talk
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-white/20 hover:bg-white/10 md:hidden"
            >
              <span className="sr-only">
                {menuOpen ? "Close menu" : "Open menu"}
              </span>

              <span
                aria-hidden="true"
                className="relative flex h-5 w-5 flex-col items-center justify-center gap-1.5"
              >
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                    menuOpen ? "translate-y-1 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                    menuOpen ? "-translate-y-1 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>

        <div
          id="mobile-navigation"
          className={`overflow-hidden transition-[max-height,opacity] duration-200 md:hidden ${
            menuOpen
              ? "max-h-96 pb-5 opacity-100"
              : "max-h-0 pb-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/10 pt-4">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-cyan-300 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                Let&apos;s talk
              </a>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}