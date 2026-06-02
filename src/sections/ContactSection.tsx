import { useRef, useEffect, useState } from 'react'
import { Mail } from 'lucide-react'
import { useInView } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import ReactivateIcon from '../components/ReactivateIcon'
import ContactButton from '../components/ContactButton'

/* ── Brand SVG icons (removed from lucide-react v1.x) ── */

const GithubIcon = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

/* ── Animated number counter (same as Experience section) ── */

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

/* ── Contact methods ──────────────────────────────────── */

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'amansethatwork@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=amansethatwork@gmail.com&su=Software+Engineering+Opportunity',
    ariaLabel: 'Send email to Aman Seth',
    openInNewTab: true,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/amansethhh',
    href: 'https://linkedin.com/in/amansethhh',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/amansethhh',
    href: 'https://github.com/amansethhh',
  },
]

/* ── Achievement data ─────────────────────────────────── */

const achievements = [
  { label: 'Production Projects', numericValue: 2, suffix: '+', decimals: 0 },
  { label: 'NLP Model Accuracy', numericValue: 91, suffix: '%', decimals: 0 },
  { label: 'Records Analyzed', numericValue: 10000, suffix: '+', decimals: 0 },
]

/* ── Decorative corner icons ──────────────────────────── */

const contactDecorativeImages = [
  {
    src: '/Glass Message Bubble.webp',
    alt: 'Glass Message Bubble 3D icon',
    className:
      'w-[120px] sm:w-[160px] md:w-[168px] lg:w-[210px] absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
    animClass: 'icon-float icon-phase-0',
    fadeIn: { delay: 0.1, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: '/Glass Email Envelope.webp',
    alt: 'Glass Email Envelope 3D icon',
    className:
      'w-[100px] sm:w-[140px] md:w-[144px] lg:w-[180px] absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]',
    animClass: 'icon-float icon-phase-5',
    fadeIn: { delay: 0.25, x: -80, y: 0, duration: 0.9 },
  },
  {
    src: '/Glass Connection Network.webp',
    alt: 'Glass Connection Network 3D icon',
    className:
      'about-hide-mobile w-[120px] sm:w-[160px] md:w-[168px] lg:w-[210px] absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
    animClass: 'icon-float icon-phase-2',
    fadeIn: { delay: 0.15, x: 80, y: 0, duration: 0.9 },
  },
  {
    src: '/Glass Paper Plane.webp',
    alt: 'Glass Paper Plane 3D icon',
    className:
      'about-hide-mobile w-[130px] sm:w-[170px] md:w-[176px] lg:w-[220px] absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]',
    animClass: 'icon-float icon-phase-7',
    fadeIn: { delay: 0.3, x: 80, y: 0, duration: 0.9 },
  },
]

/* ── Contact Section ──────────────────────────────────── */

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="contact-section"
    >

      {/* ━━ Decorative corner icons ━━━━━━━━━━━━━━━━━━━━━━ */}
      {contactDecorativeImages.map((img) => (
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

      <div className="max-w-3xl mx-auto text-center relative z-[1]">

        {/* ━━ Heading ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 8vw, 100px)' }}
          >
            Let&apos;s Build Something Together
          </h2>
        </FadeIn>

        {/* ━━ Availability badge ━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <FadeIn delay={0.05} y={15}>
          <div className="contact-availability-badge">
            <span className="contact-availability-dot" />
            Open to Software Engineering Opportunities
          </div>
        </FadeIn>

        {/* ━━ Description ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <FadeIn delay={0.1} y={20}>
          <p
            className="text-[#D7E2EA]/70 font-light leading-relaxed mb-10 sm:mb-12"
            style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.2rem)' }}
          >
            Actively seeking Software Engineering, Backend Development, and Full-Stack opportunities.
            Available for internships, freelance projects, and collaborative product development.
          </p>
        </FadeIn>

        {/* ━━ Achievement strip ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <FadeIn delay={0.15} y={20}>
          <div className="contact-achievement-strip">
            {achievements.map((a, i) => (
              <div key={i} className="contact-achievement-item">
                <span className="contact-achievement-value">
                  <AnimatedNumber target={a.numericValue} suffix={a.suffix} decimals={a.decimals} />
                </span>
                <span className="contact-achievement-label">{a.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ━━ CTA button ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <FadeIn delay={0.2} y={20}>
          <div className="mb-8 sm:mb-10">
            <ContactButton
              label="Let's Work Together"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=amansethatwork@gmail.com&su=Software+Engineering+Opportunity"
              ariaLabel="Send email to Aman Seth"
            />
          </div>
        </FadeIn>

        {/* ━━ Contact cards ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 pb-10 sm:pb-14">
          {contactMethods.map((method, i) => (
            <FadeIn key={method.label} delay={0.25 + i * 0.1} y={20}>
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={(method as any).ariaLabel || `Open ${method.label}`}
                className="contact-card group"
              >
                <method.icon
                  size={20}
                  className="text-[#D7E2EA]/50 group-hover:text-[#B600A8] transition-colors duration-300"
                />
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider text-[#D7E2EA]/40 mb-0.5">
                    {method.label}
                  </div>
                  <div style={{ fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)' }}>
                    {method.value}
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
