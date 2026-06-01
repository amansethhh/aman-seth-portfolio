import type { CSSProperties } from 'react'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

const AnimatedText = ({ text, className = '', style }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')
  const words = text.split(' ')

  /* Build a flat char index so each word's chars map to the correct
     position in the global progress range */
  let charIndex = 0

  return (
    <p ref={ref} className={`relative ${className}`} style={style}>
      {words.map((word, wi) => {
        const wordChars = word.split('')
        const startIdx = charIndex

        const renderedWord = (
          <span
            key={wi}
            style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
          >
            {wordChars.map((char, ci) => {
              const globalIdx = startIdx + ci
              return (
                <AnimatedChar
                  key={globalIdx}
                  char={char}
                  index={globalIdx}
                  total={chars.length}
                  progress={scrollYProgress}
                />
              )
            })}
          </span>
        )

        /* Advance charIndex past this word + the space after it */
        charIndex += word.length + 1

        /* Add a regular space between words (not inside the nowrap span) */
        return wi < words.length - 1 ? (
          <span key={`w${wi}`}>
            {renderedWord}
            <AnimatedChar
              char=" "
              index={startIdx + word.length}
              total={chars.length}
              progress={scrollYProgress}
            />
          </span>
        ) : (
          renderedWord
        )
      })}
    </p>
  )
}

interface AnimatedCharProps {
  char: string
  index: number
  total: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}

const AnimatedChar = ({ char, index, total, progress }: AnimatedCharProps) => {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(progress, [start, end], [0.30, 1])

  return (
    <span className="relative inline-block">
      <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span
        className="absolute left-0 top-0"
        style={{ opacity }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  )
}

export default AnimatedText
