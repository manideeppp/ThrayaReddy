import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { content } from '../data/content'
import { useInView } from '../hooks/useInView'

export default function CoupleSection() {
  const { lang } = useLang()
  const t = content.couple[lang]
  const isTe = lang === 'te'
  const { ref, inView } = useInView()

  return (
    <section className="py-16 md:py-24 px-5 relative overflow-hidden rangoli-bg" style={{ background: 'linear-gradient(180deg, #FFF8E7 0%, #FFF5D6 50%, #FFF8E7 100%)' }}>
      {/* Paisley watermarks */}
      <div className="absolute top-10 left-5 text-8xl opacity-[0.03] pointer-events-none" style={{ color: '#D4AF37' }}>☙</div>
      <div className="absolute bottom-10 right-5 text-8xl opacity-[0.03] pointer-events-none scale-[-1]" style={{ color: '#D4AF37' }}>☙</div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16">
          <p className={`${isTe ? 'font-telugu text-lg' : 'font-script text-xl'} mb-3`} style={{ color: '#D4AF37' }}>{t.label}</p>
          <h2 className={`${isTe ? 'font-telugu text-3xl md:text-4xl font-bold' : 'font-display text-3xl sm:text-4xl md:text-5xl'} mb-5`} style={{ color: '#800000' }}>{t.title}</h2>
          <SectionDivider />
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
          {/* Bride (Thraya first) */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }} className="text-center">
            <motion.div whileHover={{ scale: 1.04 }}
              className="w-36 h-36 md:w-44 md:h-44 mx-auto mb-5 rounded-full flex items-center justify-center overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #FFF5D6 0%, #F0D060 100%)', border: '3px solid #D4AF37', boxShadow: '0 8px 30px rgba(212,175,55,0.2)' }}>
              <span className="text-5xl md:text-6xl">👰</span>
            </motion.div>
            <h3 className={`${isTe ? 'font-telugu text-xl md:text-2xl font-semibold' : 'font-display text-xl md:text-2xl'} mb-1.5`} style={{ color: '#800000' }}>{t.bride}</h3>
            <p className={`${isTe ? 'font-telugu' : 'font-body'} text-sm mb-1`} style={{ color: '#D4AF37' }}>{t.brideParentsLabel}</p>
            <p className={`${isTe ? 'font-telugu' : 'font-body'} text-sm leading-relaxed`} style={{ color: '#555' }}>{t.brideParents}</p>
            <div className="h-px w-10 mx-auto my-3" style={{ background: '#D4AF37' }} />
            <p className={`${isTe ? 'font-telugu text-xs' : 'font-body text-[10px] uppercase tracking-[3px]'}`} style={{ color: '#B8962E' }}>{t.brideCity}</p>
          </motion.div>

          {/* Center - Diya + Heart */}
          <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity }} className="flex flex-col items-center justify-center py-4 md:py-0 gap-1">
            <span className="text-xl animate-diya-flicker">🪔</span>
            <span className="text-4xl md:text-5xl" style={{ color: '#800000' }}>❤</span>
            <span className="text-xl animate-diya-flicker" style={{ animationDelay: '0.5s' }}>🪔</span>
          </motion.div>

          {/* Groom */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.15 }} className="text-center">
            <motion.div whileHover={{ scale: 1.04 }}
              className="w-36 h-36 md:w-44 md:h-44 mx-auto mb-5 rounded-full flex items-center justify-center overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #F0D060 0%, #FFF5D6 100%)', border: '3px solid #D4AF37', boxShadow: '0 8px 30px rgba(212,175,55,0.2)' }}>
              <span className="text-5xl md:text-6xl">🤵</span>
            </motion.div>
            <h3 className={`${isTe ? 'font-telugu text-xl md:text-2xl font-semibold' : 'font-display text-xl md:text-2xl'} mb-1.5`} style={{ color: '#800000' }}>{t.groom}</h3>
            <p className={`${isTe ? 'font-telugu' : 'font-body'} text-sm mb-1`} style={{ color: '#D4AF37' }}>{t.groomParentsLabel}</p>
            <p className={`${isTe ? 'font-telugu' : 'font-body'} text-sm leading-relaxed`} style={{ color: '#555' }}>{t.groomParents}</p>
            <div className="h-px w-10 mx-auto my-3" style={{ background: '#D4AF37' }} />
            <p className={`${isTe ? 'font-telugu text-xs' : 'font-body text-[10px] uppercase tracking-[3px]'}`} style={{ color: '#B8962E' }}>{t.groomCity}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="h-px w-8" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
      <svg width="18" height="10" viewBox="0 0 18 10" fill="none" className="opacity-60">
        <path d="M0 5 Q4.5 0 9 5 Q13.5 10 18 5" stroke="#D4AF37" strokeWidth="1.2"/>
      </svg>
      <span className="text-sm" style={{ color: '#D4AF37' }}>✦</span>
      <svg width="18" height="10" viewBox="0 0 18 10" fill="none" className="opacity-60">
        <path d="M0 5 Q4.5 0 9 5 Q13.5 10 18 5" stroke="#D4AF37" strokeWidth="1.2"/>
      </svg>
      <div className="h-px w-8" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
    </div>
  )
}
