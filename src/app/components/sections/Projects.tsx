import Container from "../ui/Container";
import { featuredProjects } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-white/10 bg-slate-950 py-24 sm:py-32"
    >
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Selected work
            </p>

            <h2
              id="projects-heading"
              className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl"
            >
              Projects that demonstrate how I engineer.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Real applications, technical decisions and engineering work
              presented with enough context to understand what was built and
              why.
            </p>
          </div>

          <p className="shrink-0 text-sm font-medium text-slate-500">
            {featuredProjects.length} featured project
            {featuredProjects.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
