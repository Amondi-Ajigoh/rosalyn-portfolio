# Rosalyn Amondi Ajigoh — Professional Portfolio

A production-oriented personal portfolio website for **Rosalyn Amondi Ajigoh**, a full-stack software engineer.

The portfolio is designed to present engineering experience, technical skills, selected projects, professional background, and contact information through a polished, responsive web experience.

---

## Overview

This project serves as Rosalyn Amondi Ajigoh's professional engineering portfolio.

It is built to demonstrate:

* Full-stack software engineering capability
* Modern React and Next.js development
* Responsive UI engineering
* Component-based architecture
* Professional project presentation
* Technical skills and engineering experience
* SEO and search-engine discoverability
* Production-oriented development practices
* Git and GitHub workflow discipline

The project is intentionally structured so that additional portfolio capabilities can be added without restructuring the application.

---

## Technology Stack

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS 4

### Development

* ESLint
* npm
* Git
* GitHub

### Rendering

The portfolio currently uses the Next.js App Router and statically generated pages where appropriate.

### SEO

The application includes:

* Page metadata
* Open Graph metadata
* Twitter metadata
* Robots configuration
* XML sitemap
* Canonical metadata base configuration

---

## Portfolio Features

### Hero Section

Introduces Rosalyn as a full-stack software engineer with:

* Professional positioning
* Engineering-focused headline
* Introduction
* Primary call-to-action
* Project navigation
* Contact navigation

### About Section

Provides a concise professional introduction and engineering-focused profile.

### Skills Section

Presents the technologies and engineering capabilities relevant to the portfolio.

### Projects Section

Provides a structured showcase of selected projects.

Projects are maintained through centralized project data and reusable project-card components.

### Experience Section

Presents professional and engineering experience using structured resume data.

### Contact Section

Provides a clear contact call-to-action for professional opportunities and collaboration.

### Responsive Navigation

The navigation includes:

* Desktop navigation
* Mobile navigation
* Section links
* Contact call-to-action
* Responsive behavior

### Footer

Provides:

* Portfolio identity
* Navigation
* Professional links
* Copyright information
* Supporting portfolio information

### Accessibility

The interface includes accessibility-oriented practices such as:

* Semantic HTML
* Navigation labels
* Section headings
* Accessible interactive elements
* Visible keyboard focus states
* Reduced-motion support

---

## Project Structure

```text
rosalyn-portfolio/
├── public/
│
├── src/
│   └── app/
│       ├── components/
│       │   ├── navigation/
│       │   │   ├── Footer.tsx
│       │   │   └── Navbar.tsx
│       │   │
│       │   ├── projects/
│       │   │   └── ProjectCard.tsx
│       │   │
│       │   ├── sections/
│       │   │   ├── About.tsx
│       │   │   ├── Contact.tsx
│       │   │   ├── Experience.tsx
│       │   │   ├── Hero.tsx
│       │   │   ├── Projects.tsx
│       │   │   └── Skills.tsx
│       │   │
│       │   └── ui/
│       │       └── Container.tsx
│       │
│       ├── data/
│       │   ├── projects.ts
│       │   └── resume.ts
│       │
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       ├── page.tsx
│       ├── robots.ts
│       └── sitemap.ts
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
└── next-env.d.ts
```

---

## Application Architecture

The application follows a simple component-oriented architecture.

### Pages

The main portfolio page is located at:

```text
src/app/page.tsx
```

The page composes the portfolio from reusable sections rather than placing the entire interface inside one component.

### Components

Reusable UI components are located under:

```text
src/app/components/
```

Components are separated by responsibility:

* `navigation/` — site navigation and footer
* `sections/` — major portfolio sections
* `projects/` — project-specific presentation components
* `ui/` — reusable interface primitives

### Data

Portfolio content is separated from presentation where appropriate:

```text
src/app/data/projects.ts
src/app/data/resume.ts
```

This makes project and resume information easier to maintain without rewriting the UI components.

---

## Local Development

### Requirements

Install the following before working on the project:

* Node.js
* npm
* Git

Verify the installations:

```bash
node --version
npm --version
git --version
```

### Install Dependencies

Clone the repository and enter the project directory:

```bash
git clone https://github.com/Amondi-Ajigoh/rosalyn-portfolio.git
cd rosalyn-portfolio
```

Install dependencies:

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Available Commands

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Lint

```bash
npm run lint
```

Runs ESLint against the project.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Production Server

```bash
npm run start
```

Starts the application using the production build.

---

## Production Verification

Before committing significant changes, verify the project with:

```bash
npm run lint
npm run build
```

Both commands must complete successfully.

A successful production build should generate the portfolio routes along with:

```text
/
 /_not-found
 /robots.txt
 /sitemap.xml
```

---

## SEO

SEO configuration is implemented through the Next.js App Router.

The application includes:

* Default page title
* Dynamic title template
* Meta description
* Keywords
* Author information
* Creator information
* Open Graph metadata
* Twitter card metadata
* Robots configuration
* XML sitemap

SEO files:

```text
src/app/layout.tsx
src/app/robots.ts
src/app/sitemap.ts
```

The configured production domain is:

```text
https://rosalynamondi.dev
```

---

## Git Workflow

Development is performed using feature branches.

Current development branch:

```text
feature/portfolio-foundation
```

The repository also contains:

```text
main
```

Feature work should be committed using meaningful commit messages.

Examples:

```text
Build portfolio visual foundation
Add portfolio about and skills sections
Build portfolio projects showcase
Build portfolio contact section
Add professional portfolio footer
Add responsive mobile navigation
Add experience and resume section
Add production SEO metadata and sitemap
```

The project uses commits as meaningful development milestones rather than large undocumented changes.

---

## Current Development History

The portfolio foundation has been developed through the following major milestones:

1. Project foundation established
2. Portfolio visual foundation implemented
3. About section added
4. Skills section added
5. Projects showcase implemented
6. Contact section implemented
7. Professional footer added
8. Responsive mobile navigation implemented
9. Experience and resume section added
10. Production SEO metadata implemented
11. Robots configuration added
12. XML sitemap added
13. Default Next.js public assets removed

---

## Deployment

The application is designed to be deployed as a Next.js production application.

Before deployment:

```bash
npm run lint
npm run build
```

The production application can then be started with:

```bash
npm run start
```

The production deployment should use:

```text
rosalynamondi.dev
```

---

## Engineering Principles

This project follows several engineering principles:

### Component Reuse

Reusable components are preferred over duplicated markup.

### Separation of Data and Presentation

Portfolio project and resume information is maintained separately from presentation components.

### Responsive Design

The interface is designed to work across:

* Mobile
* Tablet
* Desktop

### Accessibility

Semantic HTML and accessible interaction patterns are used throughout the application.

### Performance

The application uses Next.js production optimizations and static generation where appropriate.

### Maintainability

The project structure is organized by responsibility so additional portfolio functionality can be introduced without turning the application into a monolithic component.

### Production Readiness

Development changes are validated through linting, production builds, Git commits, and remote GitHub synchronization.

---

## Project Status

**Status: Portfolio Foundation Complete**

The core portfolio experience is implemented and production-build verified.

Implemented:

* Hero
* About
* Skills
* Projects
* Experience
* Contact
* Responsive navigation
* Footer
* SEO metadata
* Robots configuration
* Sitemap
* Responsive layout
* Accessibility foundations
* Production build verification

The project is ready for final polish, deployment preparation, and completion of any remaining portfolio-specific content before moving to the next engineering project.

---

## Author

**Rosalyn Amondi Ajigoh**

Full-Stack Software Engineer

Kenya

Portfolio:

```text
https://rosalynamondi.dev
```

GitHub:

```text
https://github.com/Amondi-Ajigoh
```

---

## License

This portfolio is a personal professional project belonging to Rosalyn Amondi Ajigoh.

The source code and portfolio content should not be redistributed as another person's portfolio or professional identity.
