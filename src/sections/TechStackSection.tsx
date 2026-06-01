import FadeIn from '../components/FadeIn'

/* ── Icon URL builder ──────────────────────────────────── */
const icon = (id: string) => `https://skillicons.dev/icons?i=${id}&theme=dark`

/* ── Data ───────────────────────────────────────────────── */

const coreStack = [
  { name: 'Python', label: 'Primary Language', iconId: 'py' },
  { name: 'Django', label: 'Web Framework', iconId: 'django' },
  { name: 'FastAPI', label: 'API Framework', iconId: 'fastapi' },
  { name: 'React.js', label: 'Frontend Library', iconId: 'react' },
  { name: 'PostgreSQL', label: 'Database', iconId: 'postgresql' },
]

/* Map skill names → skillicons IDs (null = no icon available) */
const skillIconMap: Record<string, string | null> = {
  'Python': 'py',
  'JavaScript (ES6+)': 'js',
  'React.js': 'react',
  'HTML5': 'html',
  'CSS3': 'css',
  'Tailwind CSS': 'tailwind',
  'Django': 'django',
  'Django REST Framework': 'django',
  'FastAPI': 'fastapi',
  'Node.js': 'nodejs',
  'Express.js': 'express',
  'PostgreSQL': 'postgresql',
  'SQL': 'mysql',
  'Git': 'git',
  'GitHub': 'github',
  'Docker': 'docker',
  'Linux': 'linux',
  'Nginx': 'nginx',
  'REST APIs': null,
  'JWT Auth': null,
  'OOP': null,
  'DSA': null,
  'API Integration': null,
}

const techCategories = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript (ES6+)'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Django', 'Django REST Framework', 'FastAPI', 'Node.js', 'Express.js'],
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'SQL'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Linux', 'Nginx'],
  },
  {
    title: 'Concepts',
    items: ['REST APIs', 'JWT Auth', 'OOP', 'DSA', 'API Integration'],
  },
]

/* ── Decorative corner icons (mirrors About section) ──── */
const tsDecorativeImages = [
  {
    src: '/Python Logo.webp',
    alt: 'Python 3D icon',
    className: 'w-[120px] sm:w-[160px] md:w-[168px] lg:w-[210px] absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
    animClass: 'icon-float icon-phase-1',
    fadeIn: { delay: 0.1, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: '/Terminal Logo.webp',
    alt: 'Terminal 3D icon',
    className: 'w-[100px] sm:w-[140px] md:w-[144px] lg:w-[180px] absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]',
    animClass: 'icon-float icon-phase-6',
    fadeIn: { delay: 0.25, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: '/Database Logo.webp',
    alt: 'Database 3D icon',
    className: 'about-hide-mobile w-[120px] sm:w-[160px] md:w-[168px] lg:w-[210px] absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
    animClass: 'icon-float icon-phase-3',
    fadeIn: { delay: 0.15, x: 80, y: 0, duration: 0.9 },
  },
  {
    src: '/React Logo.webp',
    alt: 'React 3D icon',
    className: 'about-hide-mobile w-[130px] sm:w-[170px] md:w-[176px] lg:w-[220px] absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]',
    animClass: 'icon-float icon-phase-7',
    fadeIn: { delay: 0.3, x: 80, y: 0, duration: 0.9 },
  },
]

/* ── Component ──────────────────────────────────────────── */

const TechStackSection = () => {
  return (
    <section className="ts-section">

      {/* ━━ Decorative corner icons ━━━━━━━━━━━━━━━━━━━━━━ */}
      {tsDecorativeImages.map((img) => (
        <FadeIn
          key={img.alt}
          delay={img.fadeIn.delay}
          x={img.fadeIn.x}
          y={img.fadeIn.y}
          duration={img.fadeIn.duration}
          className={img.className}
        >
          <img
            src={img.src}
            alt={img.alt}
            className={`w-full select-none ${img.animClass}`}
            draggable={false}
          />
        </FadeIn>
      ))}

      {/* ━━ Heading ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <FadeIn delay={0} y={30} duration={0.8}>
        <h2
          className="hero-heading ts-heading section-heading-glow"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', opacity: 0.82 }}
        >
          Tech Stack
        </h2>
      </FadeIn>

      {/* ━━ Core Stack ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ts-core">
        <FadeIn delay={0.1} y={20}>
          <p className="ts-core-label">Core Stack</p>
        </FadeIn>

        <div className="ts-core-grid">
          {coreStack.map((tech, i) => (
            <FadeIn key={tech.name} delay={0.15 + i * 0.07} y={20}>
              <div className="ts-core-card">
                <img
                  src={icon(tech.iconId)}
                  alt={tech.name}
                  className="ts-core-card__icon"
                  loading="lazy"
                  draggable={false}
                />
                <div>
                  <span className="ts-core-card__name">{tech.name}</span>
                  <span className="ts-core-card__label">{tech.label}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ━━ Skill Categories ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ts-categories">
        {techCategories.map((cat, i) => (
          <FadeIn key={cat.title} delay={0.1 + i * 0.06} y={20}>
            <div className="ts-cat">
              <h3 className="ts-cat__title">{cat.title}</h3>
              <div className="ts-cat__pills">
                {cat.items.map((item, j) => {
                  const iconId = skillIconMap[item]
                  return (
                    <FadeIn key={item} delay={0.15 + i * 0.06 + j * 0.04} y={10} duration={0.5}>
                      <span className="ts-pill">
                        {iconId && (
                          <img
                            src={icon(iconId)}
                            alt=""
                            className="ts-pill__icon"
                            loading="lazy"
                            draggable={false}
                          />
                        )}
                        {item}
                      </span>
                    </FadeIn>
                  )
                })}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default TechStackSection
