import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { content } from '../data/content'
import { useInView } from '../hooks/useInView'

export default function ClosingSection() {
  const { lang } = useLang()
  const t = content.closing[lang]
  const ct = content.couple[lang]
  const isTe = lang === 'te'
  const { ref, inView } = useInView()

  return (
    <section className="py-16 md:py-24 px-5 rangoli-bg" style={{ background: 'linear-gradient(180deg, #FFF8E7 0%, #FFF5D6 100%)' }}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div ref={ref} initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          {/* Ornament */}
          <div className="flex items-center justify-center gap-3 mb-10 md:mb-14">
            <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
            <span className="text-lg animate-diya-flicker">🪔</span>
            <span className="text-xl" style={{ color: '#D4AF37' }}>✦</span>
            <span className="text-lg animate-diya-flicker" style={{ animationDelay: '0.5s' }}>🪔</span>
            <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
          </div>

          {/* Couple Names */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.6 }}>
            <p className={`${isTe ? 'font-telugu text-sm' : 'font-body text-xs tracking-[0.25em] uppercase'} mb-4`} style={{ color: '#D4AF37' }}>{t.withLove}</p>
            <h3 className={`${isTe ? 'font-telugu text-4xl sm:text-5xl md:text-6xl font-bold' : 'font-script text-4xl sm:text-5xl md:text-6xl'}`} style={{ color: '#800000' }}>
              {isTe ? 'త్రయ' : 'Thraya'} <span style={{ color: '#D4AF37' }}>&amp;</span> {isTe ? 'భరత్' : 'Bharath'}
            </h3>
            <p className="font-body text-sm md:text-base mt-4" style={{ color: '#8B6D3F' }}>Invited by Gowreddy's Family</p>
          </motion.div>

          {/* Bottom ornament */}
          <div className="flex items-center justify-center gap-3 mt-10 md:mt-14">
            <svg width="20" height="10" viewBox="0 0 20 10"><path d="M0 5 Q5 0 10 5 Q15 10 20 5" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.5"/></svg>
            <span className="text-sm" style={{ color: '#D4AF37' }}>✦</span>
            <svg width="20" height="10" viewBox="0 0 20 10"><path d="M0 5 Q5 0 10 5 Q15 10 20 5" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.5"/></svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
