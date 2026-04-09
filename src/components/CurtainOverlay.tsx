import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLang } from '../context/LangContext'
import { content } from '../data/content'

interface Props { onOpen: () => void }

export default function CurtainOverlay({ onOpen }: Props) {
  const [opening, setOpening] = useState(false)
  const { lang } = useLang()
  const t = content.curtain[lang]

  const handleClick = () => {
    setOpening(true)
    setTimeout(onOpen, 1800)
  }

  return (
    <motion.div
      key="curtain-overlay"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, delay: 0 }}
      className="fixed inset-0 z-50 overflow-hidden pointer-events-none"
      style={{ background: 'transparent' }}
    >
      {/* Left Curtain */}
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: opening ? '-100%' : '0%' }}
        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
        className="absolute top-0 left-0 h-full z-10"
        style={{ width: '50%' }}
      >
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, #3A0000 0%, #5A1020 20%, #4A0A15 50%, #5A1020 80%, #3A0000 100%)',
          boxShadow: 'inset -30px 0 60px rgba(0,0,0,0.5)',
        }} />
        {/* Subtle vertical pleats */}
        <div className="absolute inset-0 opacity-20" style={{
          background: 'repeating-linear-gradient(90deg, transparent 0px, transparent 30px, rgba(255,255,255,0.02) 31px, rgba(0,0,0,0.04) 33px, transparent 35px, transparent 70px)',
        }} />
      </motion.div>

      {/* Right Curtain */}
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: opening ? '100%' : '0%' }}
        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
        className="absolute top-0 right-0 h-full z-10"
        style={{ width: '50%' }}
      >
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, #3A0000 0%, #5A1020 20%, #4A0A15 50%, #5A1020 80%, #3A0000 100%)',
          boxShadow: 'inset 30px 0 60px rgba(0,0,0,0.5)',
        }} />
        <div className="absolute inset-0 opacity-20" style={{
          background: 'repeating-linear-gradient(90deg, transparent 0px, transparent 30px, rgba(255,255,255,0.02) 31px, rgba(0,0,0,0.04) 33px, transparent 35px, transparent 70px)',
        }} />
        <div className="absolute top-0 left-0 w-px h-full" style={{
          background: 'linear-gradient(180deg, #D4AF37 0%, #B8962E 50%, #D4AF37 100%)',
          opacity: 0,
        }} />
      </motion.div>

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={opening ? { opacity: 0, scale: 0.92 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 z-20 flex items-center justify-center"
        style={{ pointerEvents: opening ? 'none' : 'auto' }}
      >
        <div className="text-center px-6 max-w-md">
          {/* Heart Icon */}
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-8 flex items-center justify-center"
            style={{ border: '1px solid rgba(212,175,55,0.5)', background: 'rgba(212,175,55,0.03)' }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </motion.div>

          <h1 className="font-script text-4xl md:text-6xl mb-4 italic" style={{ color: '#D4AF37', textShadow: '0 0 40px rgba(212,175,55,0.1)' }}>
            {t.invited}
          </h1>

          <p className={`${lang === 'te' ? 'font-telugu text-xs md:text-sm' : 'font-body text-[10px] md:text-xs'} tracking-[0.25em] uppercase mb-4`} style={{ color: 'rgba(212,175,55,0.7)' }}>
            {t.subtitle}
          </p>

          <p className={`${lang === 'te' ? 'font-telugu text-xl md:text-2xl' : 'font-heading text-xl md:text-2xl'} mb-10`} style={{ color: '#D4AF37' }}>
            {t.couple}
          </p>

          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(212,175,55,0.3)' }}
            whileTap={{ scale: 0.96 }}
            disabled={opening}
            className={`px-12 py-3.5 md:px-16 md:py-4 rounded-md font-semibold text-[11px] md:text-xs tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer ${lang === 'te' ? 'font-telugu' : 'font-body'}`}
            style={{ background: 'linear-gradient(135deg, #C9A84C, #D4AF37, #C9A84C)', color: '#3A0000', boxShadow: '0 4px 25px rgba(212,175,55,0.25)' }}
          >
            {t.button}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
