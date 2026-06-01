# Aman Seth — Interactive Portfolio

A premium interactive developer portfolio built with modern frontend technologies, featuring custom 3D elements, advanced animations, responsive architecture, and a luxury dark aesthetic.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)

---

## Features

- **Premium Dark UI** — Luxury glassmorphism aesthetic with purple-blue accent system
- **Smooth Animations** — Framer Motion powered scroll-triggered animations, parallax effects, and micro-interactions
- **Floating 3D Icons** — Custom crystal glass icons with floating behavior across all sections
- **Sticky Project Cards** — Scroll-driven stacking project showcase with real product screenshots
- **Animated Counters** — Number count-up animations for statistics and achievements
- **Responsive Design** — Fully responsive across desktop, tablet, and mobile
- **SEO Optimized** — Meta tags, semantic HTML, and optimized performance

## Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen introduction with avatar and call-to-action |
| **Marquee** | Scrolling technology showcase strip |
| **About** | Personal background with animated text reveal |
| **Tech Stack** | Interactive technology grid with hover effects |
| **Experience** | Timeline with animated statistics |
| **Services** | Sticky-scroll service cards |
| **Projects** | Three project showcases with real screenshots |
| **Contact** | Availability badge, achievement strip, and contact CTA |

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **TypeScript** | Type safety |
| **Vite** | Build tool and dev server |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations and scroll effects |
| **Lucide React** | Icon system |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/amansethhh/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/                  # Static assets (images, icons, resume, favicon)
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AnimatedText.tsx  # Scroll-driven word-by-word text reveal
│   │   ├── ContactButton.tsx # Gradient CTA button
│   │   ├── FadeIn.tsx        # Scroll-triggered fade-in wrapper
│   │   └── LiveProjectButton.tsx # Project link button
│   ├── sections/            # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── MarqueeSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TechStackSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles and design system
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

## License

MIT License — see [LICENSE](LICENSE) for details.

## SEO Setup

The project includes `sitemap.xml` and `robots.txt` in the `public/` directory for search engine optimization.

After deploying, replace the placeholder `https://YOUR_DOMAIN_HERE` with your actual domain in:

- `public/sitemap.xml` — the `<loc>` tag
- `public/robots.txt` — the `Sitemap:` directive
- `index.html` — add `og:url` meta tag with your deployment URL

---

**Designed & Developed by Aman Seth**
