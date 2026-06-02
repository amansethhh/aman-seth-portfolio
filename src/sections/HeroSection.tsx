import { useEffect } from 'react'
import useIsMobile from '../hooks/useIsMobile'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from 'framer-motion'
import ContactButton from '../components/ContactButton'

const AVATAR_URL = '/avatar-main.webp'
const NAV_LINKS = ['About', 'Experience', 'Projects', 'Contact']
const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

/* ════════════════════════════════════════════════════════════ */

const HeroSection = () => {
  const isMobile = useIsMobile()
  /* ── Mouse parallax (title + bg word only) ────────────── */
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2)
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  const sx = useSpring(mouseX, { stiffness: 40, damping: 25 })
  const sy = useSpring(mouseY, { stiffness: 40, damping: 25 })

  const titleX  = useTransform(sx, v => v * 10)
  const titleY  = useTransform(sy, v => v * 10)

  /* ── Scroll-driven effects ────────────────────────────── */
  const { scrollY } = useScroll()
  const portraitScale   = useTransform(scrollY, [0, 500], [1, 1.2])
  const portraitScrollY = useTransform(scrollY, [0, 500], [0, 60])
  const portraitFade    = useTransform(scrollY, [350, 650], [1, 0])
  /* BG word: visible at 90% (just below main title), fades on scroll */
  const bgWordFade      = useTransform(scrollY, [0, 500], [0.78, 0])
  /* BG word scrolls LEFT → RIGHT (positive = rightward) */
  const bgWordScrollX   = useTransform(scrollY, [0, 800], [0, -300])
  const titleFade       = useTransform(scrollY, [200, 500], [1, 0])
  const contentFade     = useTransform(scrollY, [250, 550], [1, 0])

  /* ── Custom smooth scroll — RAF-based, immune to overrides ── */
  const smoothScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId)
    if (!el) return
    const scrollMargin = 80 // matches scroll-margin-top in CSS
    const targetY = el.getBoundingClientRect().top + window.scrollY - scrollMargin
    const startY = window.scrollY
    const diff = targetY - startY
    const duration = 900 // ms
    let startTime: number | null = null

    const ease = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t // easeInOutQuad

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      window.scrollTo(0, startY + diff * ease(progress))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  /* ── Smooth scroll to contact ─────────────────────────── */
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    smoothScrollTo('contact')
  }

  return (
    <section id="hero" className="hero-section">

      {/* ━━ L1: Atmospheric background gradients ━━━━━━━━━━ */}
      <div className="hero-bg hero-bg--1" aria-hidden />
      <div className="hero-bg hero-bg--2" aria-hidden />
      <div className="hero-bg hero-bg--3" aria-hidden />

      {/* ━━ L2: Background title — same gradient, clearly visible ━━ */}
      <div className="hero-bg-word-anchor" aria-hidden>
        <motion.div style={{ x: bgWordScrollX }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5, delay: 1.5 }}
          >
            <motion.span className="hero-bg-word hero-heading" style={{ opacity: bgWordFade }}>
              FULL-STACK PYTHON DEVELOPER
            </motion.span>
          </motion.div>
        </motion.div>
      </div>

      {/* ━━ Navbar (opacity 70% → 100% on hover) ━━━━━━━━━ */}
      <motion.nav
        className="hero-nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {NAV_LINKS.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="hero-nav__link"
            onClick={(e) => {
              e.preventDefault()
              smoothScrollTo(link.toLowerCase())
            }}
          >
            {link}
          </a>
        ))}
      </motion.nav>

      {/* ━━ Title: HI, I'M AMAN — behind portrait ━━━━━━━━ */}
      <motion.div className="hero-title-anchor" style={{ opacity: titleFade }}>
        <motion.div style={{ x: titleX, y: titleY }}>
          <motion.h1
            className="hero-heading hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          >
            HI, I'M AMAN
          </motion.h1>
        </motion.div>
      </motion.div>

      {/* ━━ Portrait — still, scroll-zoom only ━━━━━━━━━━━━ */}
      <div className="hero-portrait-anchor">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.25, ease: EASE }}
        >
          <motion.div
            style={{
              scale: portraitScale,
              y: portraitScrollY,
              opacity: portraitFade,
            }}
          >
            <img
              src={AVATAR_URL}
              alt="Aman Seth"
              draggable={false}
              className="hero-portrait"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* ━━ Bottom veil ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="hero-bottom-veil" aria-hidden />

      {/* ━━ LEFT-BOTTOM: Info block with hierarchy ━━━━━━━━ */}
      <motion.div className="hero-info-block" style={isMobile ? {} : { opacity: contentFade }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
        >
          <p className="hero-info-block__text hero-info-block__text--1">
            Full-Stack Python Developer
          </p>
          <p className="hero-info-block__text hero-info-block__text--2">
            Building Scalable Backend Systems
          </p>
          <p className="hero-info-block__text hero-info-block__text--3">
            Modern Web Applications
          </p>
          <p className="hero-info-block__text hero-info-block__text--4">
            AI-Powered Products
          </p>
        </motion.div>
      </motion.div>

      {/* ━━ RIGHT-BOTTOM: Resume + Contact (proper spacing) ━━ */}
      <motion.div className="hero-actions" style={isMobile ? {} : { opacity: contentFade }}>
        <motion.div
          className="hero-actions__inner"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
        >
          {/* Contact — smooth scroll to #contact */}
          <div className="hero-contact-wrap">
            <ContactButton
              href="#contact"
              onClick={scrollToContact}
              ariaLabel="Go to Contact Section"
            />
          </div>

          {/* Resume — with dedicated slide clearance zone */}
          <div className="hero-dl-wrap">
            <a
              href="/Aman_Seth_Full-Stack_Python_Developer_Resume.pdf"
              download="Aman_Seth_Full-Stack_Python_Developer_Resume.pdf"
              aria-label="Download Resume"
              className="hero-dl-btn"
            >
              <div className="hero-dl-btn__face">
                <svg
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1={16} y1={13} x2={8} y2={13} />
                  <line x1={16} y1={17} x2={8} y2={17} />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span>Resume</span>
              </div>
              <div className="hero-dl-btn__slide">
                <svg
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1={12} y1={15} x2={12} y2={3} />
                </svg>
              </div>
            </a>
          </div>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default HeroSection
