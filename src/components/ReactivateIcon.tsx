import { useRef, useEffect } from 'react'

/**
 * ReactivateIcon — drop-in replacement for <img> inside decorative icon slots.
 *
 * On the FIRST viewport entry nothing extra happens (the parent <FadeIn> handles
 * the entrance reveal).  On every SUBSEQUENT re-entry a subtle "wake-up" CSS
 * animation plays (scale 0.96→1, opacity 0.9→1, glow boost) so the icon feels
 * alive as the user scrolls back through the page.
 *
 * Uses a single IntersectionObserver per icon — no JS loops, no re-renders.
 */

interface ReactivateIconProps {
  src: string
  alt: string
  animClass: string
}

const ReactivateIcon = ({ src, alt, animClass }: ReactivateIconProps) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const revealed = useRef(false)

  useEffect(() => {
    const el = imgRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (revealed.current) {
            // Subsequent re-entry → trigger reactivation
            el.classList.remove('icon-reactivate')
            void el.offsetWidth               // force reflow to restart animation
            el.classList.add('icon-reactivate')
          } else {
            // First entry — let FadeIn handle the reveal
            revealed.current = true
          }
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`w-full select-none ${animClass}`}
      draggable={false}
    />
  )
}

export default ReactivateIcon
