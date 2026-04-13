import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { content } from '../data/content'

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function HeroSection() {
  const { lang } = useLang()
  const t = content.hero[lang]
  const isTe = lang === 'te'

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Full background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-hands.jpg"
          alt="Thraya & Bharath"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 55%' }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.35) 20%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.65) 100%)',
        }} />
      </div>

      {/* Toranam at top */}
      <div className="absolute top-0 left-0 right-0 h-6 pointer-events-none z-10" style={{
        background: 'radial-gradient(ellipse 16px 12px at 16px 0px, transparent 10px, #0B5D3B 10.5px, #0B5D3B 11px, transparent 11.5px) 0 0 / 32px 12px repeat-x',
        opacity: 0.5,
      }} />

      <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center z-10 max-w-3xl mx-auto px-6 py-20">
        {/* Ganesh blessing */}
        <motion.p variants={fadeUp} className={`${isTe ? 'font-telugu text-base md:text-lg' : 'font-body text-sm md:text-base'} mb-3`}
          style={{ color: '#F0D060', textShadow: '0 2px 12px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.3)' }}>
          {t.blessing}
        </motion.p>

        {/* Diya pair */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-4">
          <span className="text-2xl animate-diya-flicker">🪔</span>
          <span className="text-xl" style={{ color: '#D4AF37' }}>⟡</span>
          <span className="text-2xl animate-diya-flicker" style={{ animationDelay: '0.5s' }}>🪔</span>
        </motion.div>

        <motion.p variants={fadeUp} className={`${isTe ? 'font-telugu text-base md:text-lg' : 'font-body text-base md:text-lg font-medium'} mb-5`}
          style={{ color: '#FFFFFF', textShadow: '0 2px 12px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.3)' }}>
          {t.families}
        </motion.p>

        <motion.h1 variants={fadeUp} className="leading-tight mb-4 px-2 overflow-visible">
          <span className={`block ${isTe ? 'font-telugu text-4xl sm:text-5xl md:text-6xl font-bold' : 'font-display text-5xl sm:text-6xl md:text-8xl'}`}
            style={{ color: '#FFFFFF', textShadow: '0 3px 25px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.4)' }}>
            {isTe ? 'త్రయ' : 'Thraya'}
          </span>
          <span className="block font-script text-2xl md:text-4xl my-2 md:my-3" style={{ color: '#D4AF37', textShadow: '0 2px 15px rgba(0,0,0,0.6)' }}>&amp;</span>
          <span className={`block ${isTe ? 'font-telugu text-4xl sm:text-5xl md:text-6xl font-bold' : 'font-display text-5xl sm:text-6xl md:text-8xl'}`}
            style={{ color: '#FFFFFF', textShadow: '0 3px 25px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.4)' }}>
            {isTe ? 'భరత్' : 'Bharath'}
          </span>
        </motion.h1>

        {/* Temple bell divider */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 my-6 md:my-8">
          <div className="h-px w-12 md:w-20" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#D4AF37" opacity="0.8">
            <path d="M12 2C8.5 2 6 5 6 9c0 3-2 4-2 6h16c0-2-2-2-3-2-6 0-4-2.5-7-6-7zM10 17h4c0 1.1-.9 2-2 2s-2-.9-2-2z"/>
          </svg>
          <div className="h-px w-12 md:w-20" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
        </motion.div>

        <motion.p variants={fadeUp} className={`${isTe ? 'font-telugu text-lg md:text-2xl' : 'font-heading text-lg md:text-2xl italic'} mb-5 max-w-xl mx-auto leading-relaxed px-4`}
          style={{ color: '#F0D060', textShadow: '0 2px 15px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.3)' }}>
          {t.tagline}
        </motion.p>

        <motion.p variants={fadeUp} className={`${isTe ? 'font-telugu text-lg md:text-2xl' : 'font-display text-xl sm:text-2xl md:text-4xl uppercase tracking-[6px] md:tracking-[10px]'}`}
          style={{ color: '#F0D060', textShadow: '0 2px 15px rgba(0,0,0,0.7), 0 0 40px rgba(0,0,0,0.3)' }}>
          {t.ceremony}
        </motion.p>
      </motion.div>


    </section>
  )
}
