import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:shadow-2xl hover:shadow-cyan-950/20">
      <div className="relative flex min-h-56 items-end overflow-hidden border-b border-white/10 bg-linear-to-br from-cyan-400/10 via-blue-500/5 to-violet-500/10 p-7">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-400/20"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative">
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-200">
            {project.category}
          </span>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-medium text-slate-400">
            {project.status}
          </span>

          <span
            aria-hidden="true"
            className="text-xl text-cyan-300 transition-transform duration-300 group-hover:translate-x-1"
          >
            ↗
          </span>
        </div>

        <p className="mt-5 text-base leading-7 text-slate-300">
          {project.description}
        </p>

        <ul className="mt-6 space-y-3">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-sm leading-6 text-slate-400"
            >
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300"
            >
              {technology}
            </li>
          ))}
        </ul>

        {project.githubUrl && (
          <div className="mt-8 border-t border-white/10 pt-6">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
            >
              View source
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
