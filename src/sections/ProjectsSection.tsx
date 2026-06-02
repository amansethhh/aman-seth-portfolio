import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import LiveProjectButton from '../components/LiveProjectButton'
import FadeIn from '../components/FadeIn'
import ReactivateIcon from '../components/ReactivateIcon'
import useIsMobile from '../hooks/useIsMobile'

interface ProjectData {
  num: string
  category: string
  name: string
  description: string
  techStack: string[]
  highlights: string[]
  col1Images: string[]
  col2Image: string
  liveUrl?: string
  githubUrl?: string
  buttonLabel?: string
}

const projects: ProjectData[] = [
  {
    num: '01',
    category: 'AI Communication Coach',
    name: 'Orato AI',
    description: 'Real-time AI speaking coach that helps users improve interviews, presentations, and everyday communication through personalized feedback.',
    techStack: ['React.js', 'FastAPI', 'Gemini AI', 'Web Speech API'],
    highlights: ['15+ users tested', 'Real-time voice analysis', 'Gemini API integration'],
    col1Images: [
      '/images/optimized/Orato AI Home Dashboard-1200.webp',
      '/images/optimized/Interview Practice screen-1200.webp',
    ],
    col2Image: '/images/optimized/AI Feedback screen-1200.webp',
    liveUrl: 'https://oratoai.base44.app/',
  },
  {
    num: '02',
    category: 'Multilingual NLP Platform',
    name: 'ReviewSense Analytics',
    description: 'AI-powered sentiment intelligence platform supporting 50+ languages, real-time review analysis, explainable predictions, sarcasm detection, and transformer-based NLP classification.',
    techStack: ['Python', 'FastAPI', 'RoBERTa', 'XLM-R', 'LIME'],
    highlights: ['91% accuracy', '50+ languages', 'React analytics dashboard'],
    col1Images: [
      '/images/optimized/Live Prediction Page-1200.webp',
      '/images/optimized/Multilingual Analysis Page-1200.webp',
    ],
    col2Image: '/images/optimized/Home Page-1200.webp',
    liveUrl: 'https://github.com/amansethhh/ReviewSense-Analytics',
    buttonLabel: 'View Code',
  },
  {
    num: '03',
    category: 'Personal Platform',
    name: 'Interactive Portfolio Experience',
    description: 'A premium interactive developer platform featuring custom 3D elements, advanced animations, responsive architecture, and modern frontend engineering built to showcase projects, experience, and technical expertise.',
    techStack: ['Next.js', 'TypeScript', 'Three.js', 'Framer Motion', 'TailwindCSS'],
    highlights: ['3D interface design', 'Animation systems', 'Responsive architecture'],
    col1Images: [
      '/images/optimized/Hero Section-1200.webp',
      '/images/optimized/Tech Stack Section-1200.webp',
    ],
    col2Image: '/images/optimized/About Section-1200.webp',
    liveUrl: 'https://aman-seth-portfolio.vercel.app/',
    buttonLabel: 'Live Website',
  },
]

/* ── Single Project Card ──────────────────────────────── */
const ProjectCard = ({
  project,
  index,
  progress,
  range,
  targetScale,
  isMobile,
}: {
  project: ProjectData
  index: number
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
  isMobile: boolean
}) => {
  /* Scale is driven by the PARENT container's scroll progress */
  const scale = useTransform(progress, range, [1, targetScale])

  const mobileRadius = isMobile ? '20px' : undefined
  const imgRadius = isMobile
    ? 'rounded-[20px]'
    : 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]'

  const cardContent = (
    <div className={`${imgRadius} border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl`}
      style={mobileRadius ? { borderRadius: mobileRadius } : {}}
    >
      {/* Top row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-6">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
          <span
            className="font-black text-[#D7E2EA] leading-none"
            style={{ fontSize: isMobile ? 'clamp(1.5rem, 10vw, 2.5rem)' : 'clamp(2rem, 6vw, 80px)' }}
          >
            {project.num}
          </span>
          <span className="text-[#D7E2EA]/60 font-light uppercase tracking-widest text-xs sm:text-sm">
            {project.category}
          </span>
          <h3
            className="text-[#D7E2EA] font-medium uppercase"
            style={{ fontSize: 'clamp(1rem, 2.2vw, 1.8rem)' }}
          >
            {project.name}
          </h3>
        </div>
        <LiveProjectButton label={project.buttonLabel || 'Live Project'} href={project.liveUrl} />
      </div>

      {/* Tech stack pills */}
      <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-[#D7E2EA]/70 font-light border border-[#D7E2EA]/20 rounded-full px-3 py-1 text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Description */}
      {project.description && (
        <p className="text-[#D7E2EA]/55 font-light leading-relaxed text-sm sm:text-base mb-4 sm:mb-6 max-w-3xl">
          {project.description}
        </p>
      )}

      {/* Image grid */}
      <div className="flex gap-3 sm:gap-4">
        {/* Left column - 40% */}
        <div className="w-[40%] flex flex-col gap-3 sm:gap-4">
          <img
            src={project.col1Images[0]}
            srcSet={`${project.col1Images[0].replace('-1200.webp', '-800.webp')} 800w, ${project.col1Images[0]} 1200w`}
            sizes="(max-width: 768px) 40vw, 480px"
            alt={`${project.name} screenshot 1`}
            className={`w-full ${imgRadius} object-cover`}
            style={{ height: isMobile ? 'clamp(80px, 14vw, 130px)' : 'clamp(130px, 16vw, 230px)' }}
            loading="lazy"
            decoding="async"
          />
          <img
            src={project.col1Images[1]}
            srcSet={`${project.col1Images[1].replace('-1200.webp', '-800.webp')} 800w, ${project.col1Images[1]} 1200w`}
            sizes="(max-width: 768px) 40vw, 480px"
            alt={`${project.name} screenshot 2`}
            className={`w-full ${imgRadius} object-cover`}
            style={{ height: isMobile ? 'clamp(100px, 18vw, 180px)' : 'clamp(160px, 22vw, 340px)' }}
            loading="lazy"
            decoding="async"
          />
        </div>
        {/* Right column - 60% */}
        <div className="w-[60%]">
          <img
            src={project.col2Image}
            srcSet={`${project.col2Image.replace('-1200.webp', '-800.webp')} 800w, ${project.col2Image} 1200w`}
            sizes="(max-width: 768px) 60vw, 720px"
            alt={`${project.name} screenshot 3`}
            className={`w-full h-full ${imgRadius} object-cover`}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  )

  /* ── Mobile: premium flow card with entrance ──────────── */
  if (isMobile) {
    return (
      <FadeIn delay={index * 0.12} y={50}>
        <div style={{ marginBottom: 32 }}>
          {cardContent}
        </div>
      </FadeIn>
    )
  }

  /* ── Desktop: sticky stack with scale ────────────────── */
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        className="w-full relative -top-[5vh]"
        style={{
          scale,
          transformOrigin: 'top center',
          top: `calc(-5vh + ${index * 28}px)`,
        }}
      >
        {cardContent}
      </motion.div>
    </div>
  )
}

/* ── Decorative corner icons — same system as all other sections ── */

const projDecorativeImages = [
  {
    src: '/Floating Code Window.webp',
    alt: 'Floating Code Window 3D icon',
    className:
      'w-[120px] sm:w-[160px] md:w-[168px] lg:w-[210px] absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
    animClass: 'icon-float icon-phase-0',
    fadeIn: { delay: 0.1, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: '/Rocket Launch.webp',
    alt: 'Rocket Launch 3D icon',
    className:
      'w-[100px] sm:w-[140px] md:w-[144px] lg:w-[180px] absolute bottom-[18%] left-[1%] sm:left-[4%] md:left-[8%]',
    animClass: 'icon-float icon-phase-5',
    fadeIn: { delay: 0.25, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: '/Floating Product Showcase Cube.webp',
    alt: 'Application Blueprint 3D icon',
    className:
      'about-hide-mobile w-[120px] sm:w-[160px] md:w-[168px] lg:w-[210px] absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
    animClass: 'icon-float icon-phase-2',
    fadeIn: { delay: 0.15, x: 80, y: 0, duration: 0.9 },
  },
  {
    src: '/Connected Project Network.webp',
    alt: 'Connected Project Network 3D icon',
    className:
      'about-hide-mobile w-[130px] sm:w-[170px] md:w-[176px] lg:w-[220px] absolute bottom-[14%] right-[1%] sm:right-[4%] md:right-[8%]',
    animClass: 'icon-float icon-phase-7',
    fadeIn: { delay: 0.3, x: 80, y: 0, duration: 0.9 },
  },
]

/* ── Projects Section ─────────────────────────────────── */
const ProjectsSection = () => {
  /*
   * This ref wraps ALL the card containers.
   * Total height = 3 × 100vh = 300vh.
   * useScroll tracks progress from 0 → 1 as the user scrolls through all 300vh.
   * Each card maps to a slice of that progress for its scale-down animation.
   */
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const isMobile = useIsMobile()

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10"
      style={{ overflow: 'visible' }}
    >

      {/* ━━ Decorative corner icons ━━━━━━━━━━━━━━━━━━━━━━ */}
      {projDecorativeImages.map((img) => (
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

      <div className="pt-20 sm:pt-24 md:pt-32">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Projects
          </h2>
        </FadeIn>
      </div>

      {/* Scroll-tracked wrapper — its total height drives the stacking animation */}
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.05
          return (
            <ProjectCard
              key={project.num}
              project={project}
              index={i}
              progress={scrollYProgress}
              range={[i * (1 / projects.length), 1]}
              targetScale={targetScale}
              isMobile={isMobile}
            />
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
