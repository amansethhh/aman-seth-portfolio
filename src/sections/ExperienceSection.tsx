import { useRef, useEffect, useState } from 'react'
import FadeIn from '../components/FadeIn'
import ReactivateIcon from '../components/ReactivateIcon'
import { motion, useInView } from 'framer-motion'

/* ── Animated number counter ──────────────────────────── */

const AnimatedNumber = ({
  target,
  suffix,
  decimals = 0,
}: {
  target: number
  suffix: string
  decimals?: number
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return

    const duration = 1500
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * target

      if (decimals > 0) {
        setDisplay(current.toFixed(decimals))
      } else {
        setDisplay(Math.floor(current).toLocaleString())
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        // Ensure final value is exact
        if (decimals > 0) {
          setDisplay(target.toFixed(decimals))
        } else {
          setDisplay(target.toLocaleString())
        }
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, target, decimals])

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  )
}

/* ── Stat card ────────────────────────────────────────── */

interface StatDef {
  label: string
  numericValue: number
  suffix: string
  decimals?: number
  delay: number
}

const StatCard = ({ label, delay, numericValue, suffix, decimals = 0 }: StatDef) => {
  return (
    <FadeIn delay={delay} y={30}>
      <motion.div
        className="stat-card"
        whileHover={{ y: -5, transition: { duration: 0.3, ease: 'easeOut' } }}
      >
        <div className="stat-card__value">
          <AnimatedNumber target={numericValue} suffix={suffix} decimals={decimals} />
        </div>
        <p className="stat-card__label">
          {label}
        </p>
      </motion.div>
    </FadeIn>
  )
}

/* ── Stats data ───────────────────────────────────────── */

const stats: StatDef[] = [
  { label: 'Production Projects', numericValue: 2, suffix: '+', delay: 0 },
  { label: 'Power BI Dashboards', numericValue: 4, suffix: '', delay: 0.1 },
  { label: 'Flight Records Analyzed', numericValue: 10000, suffix: '+', delay: 0.2 },
  { label: 'Model Accuracy', numericValue: 91, suffix: '%', delay: 0.3 },
  { label: 'CGPA', numericValue: 8.16, suffix: '', decimals: 2, delay: 0.4 },
]

/* ── Decorative corner icons — frame the ENTIRE section (card + stats) ── */
const expDecorativeImages = [
  {
    src: '/Suitcase Logo.webp',
    alt: 'Suitcase 3D icon',
    className:
      'w-[120px] sm:w-[160px] md:w-[168px] lg:w-[210px] absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
    animClass: 'icon-float icon-phase-0',
    fadeIn: { delay: 0.1, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: '/Graph Logo.webp',
    alt: 'Graph 3D icon',
    className:
      'w-[100px] sm:w-[140px] md:w-[144px] lg:w-[180px] absolute bottom-[4%] left-[3%] sm:left-[6%] md:left-[10%]',
    animClass: 'icon-float icon-phase-5',
    fadeIn: { delay: 0.25, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: '/Analytics Logo.webp',
    alt: 'Analytics 3D icon',
    className:
      'about-hide-mobile w-[120px] sm:w-[160px] md:w-[168px] lg:w-[210px] absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
    animClass: 'icon-float icon-phase-2',
    fadeIn: { delay: 0.15, x: 80, y: 0, duration: 0.9 },
  },
  {
    src: '/Trophy Logo.webp',
    alt: 'Trophy 3D icon',
    className:
      'about-hide-mobile w-[130px] sm:w-[170px] md:w-[176px] lg:w-[220px] absolute bottom-[4%] right-[3%] sm:right-[6%] md:right-[10%]',
    animClass: 'icon-float icon-phase-7',
    fadeIn: { delay: 0.3, x: 80, y: 0, duration: 0.9 },
  },
]

const ExperienceSection = () => {
  return (
    <section className="exp-section" id="experience">

      {/* ━━ Decorative corner icons ━━━━━━━━━━━━━━━━━━━━━━ */}
      {expDecorativeImages.map((img) => (
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
          className="hero-heading font-black uppercase leading-none tracking-tight text-center section-heading-glow exp-heading"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', opacity: 0.82 }}
        >
          Experience
        </h2>
      </FadeIn>

      {/* ━━ Internship card ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="exp-card-wrap">
        <FadeIn delay={0.1} y={30}>
          <motion.div
            className="exp-card"
            whileHover={{ y: -4, transition: { duration: 0.35, ease: 'easeOut' } }}
          >
            {/* Gradient accent bar */}
            <div className="exp-card__accent" />

            <div className="exp-card__header">
              <div>
                <h3 className="exp-card__role">
                  Data Science &amp; Analytics Intern
                </h3>
                <p className="exp-card__company">
                  Imarticus Learning Pvt. Ltd. - Thane, Maharashtra, India
                </p>
              </div>
              <span className="exp-card__date">
                Feb 2026 – May 2026
              </span>
            </div>

            <ul className="exp-card__list">
              {[
                'Analyzed 10,000+ flight records using Python, SQL, Pandas, and NumPy.',
                'Built 4 Power BI dashboards for pricing, delay analysis, and route performance.',
                'Wrote 20+ SQL queries for extraction, filtering, joins, and aggregations.',
                'Collaborated in a 3-member team to deliver business insights and visualizations.',
              ].map((highlight, i) => (
                <FadeIn key={i} delay={0.15 + i * 0.08} y={15}>
                  <li className="exp-card__item">
                    <span className="exp-card__bullet" />
                    <span className="exp-card__text">
                      {highlight}
                    </span>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </motion.div>
        </FadeIn>
      </div>

      {/* ━━ Statistics row — part of the same Experience section ━━ */}
      <div className="exp-stats-wrap">
        <div className="stats-grid">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
