import { useState, useEffect, useRef } from 'react'

export function useInView(options?: IntersectionObserverInit & { once?: boolean }) {
  const [ref, setRef] = useState<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)
  const triggered = useRef(false)
  const once = options?.once !== false

  useEffect(() => {
    if (!ref) return
    if (once && triggered.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) { triggered.current = true; observer.unobserve(ref) }
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold: 0.1, ...options }
    )
    observer.observe(ref)
    return () => observer.unobserve(ref)
  }, [ref])

  return { ref: setRef, inView }
}
