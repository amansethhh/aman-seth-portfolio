import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import ReactivateIcon from '../components/ReactivateIcon'
import useIsMobile from '../hooks/useIsMobile'

/* ── Service data ─────────────────────────────────────── */

interface ServiceData {
  num: string
  name: string
  description: string
}

const services: ServiceData[] = [
  {
    num: '01',
    name: 'Backend Development',
    description:
      'Build scalable, secure backend systems using Django, FastAPI, Node.js, PostgreSQL, and modern software engineering practices.',
  },
  {
    num: '02',
    name: 'REST API Development',
    description:
      'Design and develop production-ready REST APIs with authentication, validation, documentation, and third-party integrations.',
  },
  {
    num: '03',
    name: 'Full-Stack Web Development',
    description:
      'Develop responsive web applications using React.js, modern frontend technologies, and robust backend architectures.',
  },
  {
    num: '04',
    name: 'Database Design',
    description:
      'Design efficient database schemas, optimize queries, and build scalable data models for high-performance applications.',
  },
  {
    num: '05',
    name: 'AI-Powered Applications',
    description:
      'Integrate LLMs, AI workflows, intelligent automation, and AI-assisted features into modern web applications.',
  },
]

/* ── Decorative corner icons ──────────────────────────── */

const svcDecorativeImages = [
  {
    src: '/Backend Development icon.webp',
    alt: 'Backend Development 3D icon',
    className:
      'w-[120px] sm:w-[160px] md:w-[168px] lg:w-[210px] absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
    animClass: 'icon-float icon-phase-0',
    fadeIn: { delay: 0.1, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: '/Database icon.webp',
    alt: 'Database 3D icon',
    className:
      'w-[100px] sm:w-[140px] md:w-[144px] lg:w-[180px] absolute bottom-[4%] left-[3%] sm:left-[6%] md:left-[10%]',
    animClass: 'icon-float icon-phase-5',
    fadeIn: { delay: 0.25, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: '/REST API icon.webp',
    alt: 'REST API 3D icon',
    className:
      'about-hide-mobile w-[120px] sm:w-[160px] md:w-[168px] lg:w-[210px] absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
    animClass: 'icon-float icon-phase-2',
    fadeIn: { delay: 0.15, x: 80, y: 0, duration: 0.9 },
  },
  {
    src: '/AI Icon.webp',
    alt: 'AI 3D icon',
    className:
      'about-hide-mobile w-[130px] sm:w-[170px] md:w-[176px] lg:w-[220px] absolute bottom-[4%] right-[3%] sm:right-[6%] md:right-[10%]',
    animClass: 'icon-float icon-phase-7',
    fadeIn: { delay: 0.3, x: 80, y: 0, duration: 0.9 },
  },
]

/* ── Progressive depth tiers ─────────────────────────── */

const passedTiers = [
  { opacity: 0.36, blur: 4  },   // 1 behind — silhouettes + numbers visible
  { opacity: 0.24, blur: 7  },   // 2 behind — soft structural shapes
  { opacity: 0.14, blur: 11 },   // 3 behind — faint frosted depth
  { opacity: 0.07, blur: 16 },   // 4+ behind — subtle presence
]

const upcomingTiers = [
  { opacity: 0.82, blur: 2 },    // next card — clearly present
  { opacity: 0.72, blur: 3 },    // 2 ahead
  { opacity: 0.65, blur: 4 },    // 3+ ahead
]

/* ── Single Service Card ──────────────────────────────── */

const ServiceCard = ({
  service,
  index,
  activeIndex,
  progress,
  range,
  targetScale,
  isMobile,
}: {
  service: ServiceData
  index: number
  activeIndex: number
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
  isMobile: boolean
}) => {
  const scale = useTransform(progress, range, [1, targetScale])

  /* ── Mobile: simple card, no sticky/blur ─────────────── */
  if (isMobile) {
    return (
      <div style={{ marginBottom: 24 }}>
        <motion.div
          className="svc-card"
          whileHover={{ y: -4, transition: { duration: 0.35, ease: 'easeOut' } }}
        >
          <div className="svc-card__accent" />
          <div className="svc-card__inner">
            <span className="svc-card__num">{service.num}</span>
            <div className="svc-card__content">
              <h3 className="svc-card__title">{service.name}</h3>
              <p className="svc-card__desc">{service.description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  /* ── Desktop: sticky stack with depth tiers ──────────── */
  const rel = index - activeIndex

  /* Directional depth:
     Active  → full clarity
     Passed  → progressive frosted depth (silhouettes, not readable)
     Upcoming → near-full visibility, approaches naturally */
  let opacity: number
  let blur: number

  if (rel === 0) {
    opacity = 1
    blur = 0
  } else if (rel < 0) {
    const tier = passedTiers[Math.min(Math.abs(rel) - 1, passedTiers.length - 1)]
    opacity = tier.opacity
    blur = tier.blur
  } else {
    const tier = upcomingTiers[Math.min(rel - 1, upcomingTiers.length - 1)]
    opacity = tier.opacity
    blur = tier.blur
  }

  return (
    <div
      className="h-[40vh] sm:h-[45vh] md:h-[50vh] flex items-center justify-center sticky top-0"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        className="w-full relative"
        style={{
          scale,
          transformOrigin: 'top center',
          top: `calc(-5vh + ${index * 25}px)`,
        }}
      >
        <motion.div
          className="svc-card"
          whileHover={{ y: -4, transition: { duration: 0.35, ease: 'easeOut' } }}
        >
          {/* Gradient accent bar */}
          <div className="svc-card__accent" />

          {/* Content always rendered — directional blur/fade */}
          <div
            className="svc-card__inner"
            style={{
              opacity,
              filter: `blur(${blur}px)`,
              transition: 'opacity 0.4s ease, filter 0.4s ease',
              pointerEvents: rel === 0 ? 'auto' : 'none',
            }}
          >
            <span className="svc-card__num">{service.num}</span>
            <div className="svc-card__content">
              <h3 className="svc-card__title">{service.name}</h3>
              <p className="svc-card__desc">{service.description}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

/* ── Services Section ─────────────────────────────────── */

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const isMobile = useIsMobile()

  /* Derive discrete active card index from continuous scroll progress */
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const next = Math.min(
      Math.floor(latest * services.length),
      services.length - 1,
    )
    setActiveIndex(next)
  })

  return (
    <section className="svc-section" id="services">

      {/* ━━ Decorative corner icons ━━━━━━━━━━━━━━━━━━━━━━ */}
      {svcDecorativeImages.map((img) => (
        <FadeIn
          key={img.alt}
          delay={img.fadeIn.delay}
          x={img.fadeIn.x}
          y={img.fadeIn.y}
          duration={img.fadeIn.duration}
          className={img.className}
        >
          <ReactivateIcon src={img.src} alt={img.alt} animClass={img.animClass} />
        </FadeIn>
      ))}

      {/* ━━ Heading ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center section-heading-glow"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', opacity: 0.82, marginBottom: 'clamp(60px, 8vw, 112px)' }}
        >
          Services
        </h2>
      </FadeIn>

      {/* ━━ Sticky stacking cards ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div ref={sectionRef} className={`max-w-4xl mx-auto relative z-[1] ${isMobile ? '' : ''}`}>
        {services.map((service, i) => {
          const targetScale = 1 - (services.length - 1 - i) * 0.03
          return (
            <ServiceCard
              key={service.num}
              service={service}
              index={i}
              activeIndex={activeIndex}
              progress={scrollYProgress}
              range={[i * (1 / services.length), 1]}
              targetScale={targetScale}
              isMobile={isMobile}
            />
          )
        })}
      </div>
    </section>
  )
}

export default ServicesSection
