export type ProjectStatus = "Production" | "In development";

export type Project = {
  slug: string;
  title: string;
  category: string;
  status: ProjectStatus;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "rosalyn-portfolio",
    title: "Rosalyn Portfolio",
    category: "Personal Engineering Platform",
    status: "In development",
    description:
      "A recruiter-focused engineering portfolio designed to present software projects, technical capabilities, engineering decisions and professional experience through a polished web experience.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub",
    ],
    highlights: [
      "Responsive portfolio architecture",
      "Accessible semantic UI",
      "Production-oriented development workflow",
    ],
    githubUrl: "https://github.com/Amondi-Ajigoh/rosalyn-portfolio",
    featured: true,
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured,
);
