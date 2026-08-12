# Rosalyn Amondi Ajigoh — Full-Stack Software Engineer Portfolio

A production-quality personal portfolio website for **Rosalyn Amondi Ajigoh**, a full-stack software engineer building reliable, scalable, and thoughtful digital products across web, mobile, and backend systems.

The portfolio is designed to demonstrate professional engineering capability through real projects, technical architecture, experience, skills, and production-ready development practices.

## Live Website

**https://rosalynamondi.dev**

## Overview

This portfolio showcases:

* Professional engineering profile
* Technical skills and technology stack
* Selected software projects
* Engineering experience
* Resume information
* Contact and professional opportunities
* Responsive mobile navigation
* SEO metadata
* Open Graph metadata
* Robots configuration
* XML sitemap
* Accessible semantic HTML
* Responsive and modern UI
* Production-oriented project architecture

## Technology Stack

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS 4

### Engineering

* ESLint
* Git
* GitHub
* Component-based architecture
* Responsive design
* Semantic HTML
* Accessibility-conscious UI

### Deployment

The application is designed for production deployment using a modern Next.js hosting platform.

## Project Structure

```text
rosalyn-portfolio/
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
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
└── tsconfig.json
```

## Main Sections

### Hero

Introduces Rosalyn as a full-stack software engineer and provides primary calls to action for exploring projects and making contact.

### About

Provides professional background, engineering focus, and the type of software problems being solved.

### Skills

Highlights the technologies, engineering disciplines, and development capabilities used across projects.

### Projects

Presents selected software projects with technology information and engineering-focused descriptions.

### Experience

Displays professional and engineering experience in a structured timeline.

### Contact

Provides a clear path for recruiters, employers, clients, and collaborators to initiate professional conversations.

### Footer

Provides supporting navigation, professional links, and portfolio information.

## SEO

The application includes production SEO infrastructure including:

* Page metadata
* Title templates
* Description metadata
* Keywords
* Author information
* Open Graph metadata
* Twitter card metadata
* Robots configuration
* XML sitemap
* Canonical site base configuration

Generated routes include:

```text
/
 /robots.txt
 /sitemap.xml
```

## Local Development

Clone the repository:

```bash
git clone https://github.com/Amondi-Ajigoh/rosalyn-portfolio.git
```

Enter the project:

```bash
cd rosalyn-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Git Workflow

Development follows a feature-based Git workflow.

Primary branches:

```text
main
feature/*
```

Feature development example:

```bash
git checkout -b feature/new-feature
```

After completing and verifying the feature:

```bash
git add .
git commit -m "Describe the completed feature"
git push -u origin feature/new-feature
```

Changes are reviewed before being merged into the production branch.

## Quality Standards

The project follows these engineering principles:

* Type-safe development with TypeScript
* Reusable React components
* Clear separation of UI, sections, and data
* Responsive design
* Accessibility-conscious implementation
* SEO-friendly architecture
* Production builds verified locally
* ESLint verification
* Meaningful Git commits
* Feature-based development
* No intentionally incomplete implementations

## Verification

Before changes are committed, the application should pass:

```bash
npm run lint
```

and:

```bash
npm run build
```

A clean Git working tree should be confirmed with:

```bash
git status
```

## Author

**Rosalyn Amondi Ajigoh**

Full-Stack Software Engineer

Kenya

### Professional Focus

* Full-stack web development
* Backend engineering
* API development
* Software architecture
* Mobile application development
* Database systems
* Cloud and deployment engineering
* Scalable digital products

## License

This portfolio is personal intellectual property.

The source code may be reviewed for professional and educational purposes, but portfolio content, personal information, branding, project descriptions, and original assets should not be reused without permission.
