import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollDownButton() {
  const [atBottom, setAtBottom] = useState(false)
  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setAtBottom(scrollTop > docHeight - 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Loop: show banner for 3s, hide for 2s, repeat
  useEffect(() => {
    const loop = () => {
      setShowBanner(true)
      setTimeout(() => setShowBanner(false), 3000)
    }
    loop() // Start immediately
    const interval = setInterval(loop, 5000) // 3s show + 2s hide = 5s cycle
    return () => clearInterval(interval)
  }, [])

  const handleClick = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })
    }
  }

  return (
    <div
      className="fixed bottom-5 right-5 z-[100] flex items-center"
      onMouseEnter={() => setShowBanner(true)}
      onMouseLeave={() => setShowBanner(false)}
    >
      {/* Banner that slides out from the button */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden mr-[-8px] pr-4"
          >
            <div
              className="py-2 px-4 rounded-l-full whitespace-nowrap font-body text-xs md:text-sm font-medium tracking-wide"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #F0D060, #D4AF37)',
                color: '#550000',
                boxShadow: '0 4px 15px rgba(212,175,55,0.3)',
              }}
            >
              {atBottom ? 'Back to Top' : 'Scroll Down'}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Circle button */}
      <motion.button
        onClick={handleClick}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center relative z-10"
        style={{
          background: 'linear-gradient(135deg, #D4AF37, #F0D060, #D4AF37)',
          boxShadow: '0 4px 20px rgba(212,175,55,0.4)',
          color: '#550000',
        }}
        aria-label={atBottom ? 'Scroll to top' : 'Scroll down'}
      >
        <motion.div
          animate={atBottom ? { rotate: 180 } : { rotate: 0, y: [0, 3, 0] }}
          transition={atBottom ? { duration: 0.3 } : { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 10l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.button>
    </div>
  )
}
