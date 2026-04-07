import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { content } from '../data/content'

export default function LanguageToggle() {
  const { lang, toggle } = useLang()
  const label = content.langToggle[lang]

  return (
    <motion.button
      onClick={toggle}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-4 right-4 z-[100] flex items-center gap-2 px-4 py-2 rounded-full font-telugu text-sm font-medium transition-all duration-300"
      style={{
        background: 'rgba(128,0,0,0.85)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(212,175,55,0.4)',
        color: '#F0D060',
        boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
      }}
      aria-label="Toggle Language"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
      {label}
    </motion.button>
  )
}
