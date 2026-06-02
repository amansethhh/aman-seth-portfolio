# Aman Seth — Full-Stack Python Developer Portfolio

A production-grade interactive developer portfolio built with React 19, TypeScript, and Framer Motion. Features a premium dark aesthetic with glassmorphism design, scroll-driven animations, and optimized deployment on Vercel.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?logo=vercel&logoColor=white)

---

## Live Demo

**https://aman-seth-portfolio.vercel.app**

---

## Screenshots

### Hero Section

![Hero Section](public/Hero%20Section.png)

### Tech Stack Section

![Tech Stack Section](public/Tech%20Stack%20Section.png)

### Full Portfolio View

![Full Portfolio Section](public/Full%20Portfolio%20Section.png)

---

## Features

- **Responsive Design** — Fully responsive layout across desktop, tablet, and mobile breakpoints
- **Glassmorphism UI** — Premium dark theme with frosted glass cards and purple-blue accent system
- **Framer Motion Animations** — Scroll-triggered fade-ins, parallax effects, animated counters, and micro-interactions
- **Production Optimized Assets** — WebP images, lazy loading, preconnected fonts, and efficient CSS delivery
- **SEO Optimized** — Canonical URL, Open Graph metadata, Twitter Cards, sitemap, robots.txt, and semantic HTML
- **Vercel Deployment** — Production-hardened build with zero dependency conflicts
- **Modern React Architecture** — React 19 with TypeScript strict mode and component-based section architecture

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework and component architecture |
| TypeScript | 6.0 | Static type checking and developer tooling |
| Vite | 8.0 | Build tool, dev server, and asset optimization |
| Tailwind CSS | 3.4 | Utility-first CSS framework |
| Framer Motion | 12 | Scroll animations and motion primitives |
| Lucide React | 1.17 | Icon system |

---

## Project Structure

```
├── public/                         # Static assets served at root
│   ├── og-image.png                # Open Graph social preview image
│   ├── favicon.png                 # Browser tab icon
│   ├── sitemap.xml                 # Search engine sitemap
│   ├── robots.txt                  # Crawler directives
│   ├── avatar-main.webp            # Hero section portrait
│   ├── Aman_Seth_Full-Stack_Python_Developer_Resume.pdf
│   └── *.webp / *.png              # Section assets and project screenshots
├── src/
│   ├── components/                 # Reusable UI components
│   │   ├── AnimatedText.tsx        # Scroll-driven word-by-word text reveal
│   │   ├── ContactButton.tsx       # Gradient CTA button
│   │   ├── FadeIn.tsx              # Scroll-triggered fade-in wrapper
│   │   ├── LiveProjectButton.tsx   # Project link button
│   │   └── ReactivateIcon.tsx      # Intersection Observer image loader
│   ├── sections/                   # Page sections (rendered in order)
│   │   ├── HeroSection.tsx         # Full-screen intro with parallax
│   │   ├── MarqueeSection.tsx      # Scrolling technology strip
│   │   ├── AboutSection.tsx        # Background and animated text
│   │   ├── TechStackSection.tsx    # Interactive technology grid
│   │   ├── ExperienceSection.tsx   # Timeline with animated statistics
│   │   ├── ServicesSection.tsx     # Sticky-scroll service cards
│   │   ├── ProjectsSection.tsx     # Project showcases with screenshots
│   │   ├── ContactSection.tsx      # Contact methods and CTA
│   │   └── Footer.tsx              # Site footer
│   ├── App.tsx                     # Root component
│   ├── main.tsx                    # Application entry point
│   └── index.css                   # Global styles and design system
├── index.html                      # HTML template with SEO metadata
├── vite.config.ts                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies and scripts
```

---

## Local Development

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### Installation

```bash
git clone https://github.com/amansethhh/aman-seth-portfolio.git
cd aman-seth-portfolio
npm install
```

### Development Server

```bash
npm run dev
```

Opens at `http://localhost:5173` with hot module replacement.

---

## Production Build

### Build

```bash
npm run build
```

Runs TypeScript compilation followed by Vite production bundling. Output is written to the `dist/` directory.

### Preview

```bash
npm run preview
```

Serves the production build locally for verification before deployment.

---

## SEO Setup

The project includes a complete SEO configuration for production deployment:

| File | Purpose |
|---|---|
| `public/robots.txt` | Crawler access rules and sitemap reference |
| `public/sitemap.xml` | XML sitemap with production URL for search engine indexing |
| `index.html` | Canonical URL, Open Graph tags, and Twitter Card metadata |

### Metadata Coverage

- **Canonical URL** — Prevents duplicate content issues across deployment URLs
- **Open Graph** — Social preview cards for LinkedIn, Facebook, WhatsApp, and Discord
- **Twitter Cards** — Large image summary cards for X/Twitter sharing
- **Structured Meta Tags** — Title, description, author, and keywords

---

## Deployment

The site is deployed on Vercel with automatic builds from the `main` branch.

Production URL: `https://aman-seth-portfolio.vercel.app`

---

## License

MIT License — see [LICENSE](LICENSE) for details.

---

Designed and developed by Aman Seth
