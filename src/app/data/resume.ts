export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface EducationItem {
  qualification: string;
  institution: string;
  period: string;
  description: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  status: string;
}

export const experience: ExperienceItem[] = [
  {
    role: "Full-Stack Software Engineer",
    organization: "Independent Software Projects",
    period: "2024 — Present",
    location: "Remote",
    description:
      "Designing and developing production-oriented web applications across frontend, backend, databases, APIs and deployment workflows.",
    achievements: [
      "Build responsive interfaces with modern React and Next.js architectures.",
      "Develop backend services, APIs and data-driven application workflows.",
      "Apply Git-based engineering practices, testing, documentation and deployment workflows.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    qualification: "Bachelor of Science in Information Technology",
    institution: "Jomo Kenyatta University of Agriculture and Technology",
    period: "Completed",
    description:
      "Academic foundation in software development, information systems, databases, networking and information technology.",
  },
];

export const certifications: CertificationItem[] = [
  {
    name: "Professional Development & Technical Training",
    issuer: "Continuing Professional Development",
    status: "Ongoing",
  },
];
