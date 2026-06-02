import { useState, useEffect } from 'react'

/**
 * Returns `true` when the viewport width is below the given breakpoint (default 768px).
 * Uses a debounced resize listener to avoid excessive re-renders.
 */
const useIsMobile = (breakpoint = 768): boolean => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < breakpoint : false,
  )

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const handleResize = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        setIsMobile(window.innerWidth < breakpoint)
      }, 100)
    }

    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('resize', handleResize)
    }
  }, [breakpoint])

  return isMobile
}

export default useIsMobile
