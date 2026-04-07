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
      transition={{ duration: 0.4, delay: 1.2 }}
      className="fixed inset-0 z-50 overflow-hidden"
      style={{ background: '#3A0000' }}
    >
      {/* Pelmet / Rod */}
      <div className="absolute top-0 left-0 right-0 h-7 md:h-10 z-30"
        style={{ background: 'linear-gradient(180deg, #D4AF37 0%, #B8962E 60%, #8B6914 100%)', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
        {/* Toranam scallops */}
        <div className="absolute -bottom-3 left-0 right-0 h-4" style={{
          background: 'radial-gradient(ellipse 14px 10px at 14px 0px, transparent 9px, #0B5D3B 9.5px, #0B5D3B 10px, transparent 10.5px) 0 0 / 28px 10px repeat-x',
          opacity: 0.8,
        }} />
      </div>

      {/* Left Curtain */}
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: opening ? '-100%' : '0%' }}
        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
        className="absolute top-0 left-0 h-full z-10"
        style={{ width: '50%' }}
      >
        <div className="absolute inset-0 silk-texture" style={{
          background: 'linear-gradient(180deg, #550000 0%, #800000 20%, #6B0000 50%, #800000 80%, #550000 100%)',
          boxShadow: 'inset -30px 0 50px rgba(0,0,0,0.4)',
        }} />
        {/* Silk weave pleats */}
        <div className="absolute inset-0 opacity-30" style={{
          background: `repeating-linear-gradient(90deg, transparent 0px, transparent 22px, rgba(212,175,55,0.04) 23px, rgba(0,0,0,0.06) 26px, transparent 30px, transparent 60px)`,
        }} />
        {/* Gold zari border on inner edge */}
        <div className="absolute top-0 right-0 w-px h-full" style={{
          background: 'linear-gradient(180deg, #D4AF37 0%, #F0D060 30%, #D4AF37 50%, #F0D060 70%, #D4AF37 100%)',
          opacity: 0.5,
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
        <div className="absolute inset-0 silk-texture" style={{
          background: 'linear-gradient(180deg, #550000 0%, #800000 20%, #6B0000 50%, #800000 80%, #550000 100%)',
          boxShadow: 'inset 30px 0 50px rgba(0,0,0,0.4)',
        }} />
        <div className="absolute inset-0 opacity-30" style={{
          background: `repeating-linear-gradient(90deg, transparent 0px, transparent 22px, rgba(212,175,55,0.04) 23px, rgba(0,0,0,0.06) 26px, transparent 30px, transparent 60px)`,
        }} />
        <div className="absolute top-0 left-0 w-px h-full" style={{
          background: 'linear-gradient(180deg, #D4AF37 0%, #F0D060 30%, #D4AF37 50%, #F0D060 70%, #D4AF37 100%)',
          opacity: 0.5,
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
          {/* Diya */}
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-5 flex items-center justify-center animate-glow-pulse"
            style={{ border: '1.5px solid #D4AF37', background: 'rgba(212,175,55,0.06)' }}
          >
            <span className="text-3xl md:text-4xl animate-diya-flicker">🪔</span>
          </motion.div>

          <p className="font-telugu text-sm md:text-base mb-2" style={{ color: '#D4AF37', opacity: 0.85 }}>
            {t.blessing}
          </p>

          <h1 className="font-script text-4xl md:text-6xl mb-3 italic" style={{ color: '#F0D060', textShadow: '0 0 40px rgba(212,175,55,0.15)' }}>
            {t.invited}
          </h1>

          <p className="font-telugu text-xs md:text-sm tracking-widest mb-3 uppercase" style={{ color: '#D4AF37', opacity: 0.8 }}>
            {t.subtitle}
          </p>

          <p className={`${lang === 'te' ? 'font-telugu text-xl md:text-2xl' : 'font-heading text-xl md:text-2xl'} mb-6`} style={{ color: '#F0D060' }}>
            {t.couple}
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-1.5 mb-8">
            <svg width="20" height="10" viewBox="0 0 20 10"><path d="M0 5 Q5 0 10 5 Q15 10 20 5" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.5"/></svg>
            <span className="text-sm" style={{ color: '#D4AF37' }}>✦</span>
            <svg width="20" height="10" viewBox="0 0 20 10"><path d="M0 5 Q5 0 10 5 Q15 10 20 5" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.5"/></svg>
          </div>

          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.06, boxShadow: '0 0 50px rgba(212,175,55,0.4)' }}
            whileTap={{ scale: 0.96 }}
            disabled={opening}
            className={`px-10 py-3.5 md:px-14 md:py-4 rounded-full font-semibold text-sm md:text-base tracking-wider transition-all duration-300 cursor-pointer ${lang === 'te' ? 'font-telugu' : 'font-display'}`}
            style={{ background: 'linear-gradient(135deg, #D4AF37, #F0D060, #D4AF37)', color: '#550000', boxShadow: '0 4px 30px rgba(212,175,55,0.3)' }}
          >
            {t.button}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
