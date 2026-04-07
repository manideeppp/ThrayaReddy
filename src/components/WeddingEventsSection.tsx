import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { content } from '../data/content'
import { useInView } from '../hooks/useInView'
import { SectionDivider } from './CoupleSection'

const cardColors = [
  { bg: 'linear-gradient(135deg, #FFF5D6 0%, #FFE8A0 100%)', border: '#D4AF37' },
  { bg: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)', border: '#0B5D3B' },
  { bg: 'linear-gradient(135deg, #FFF0F0 0%, #FFD6D6 100%)', border: '#A52A2A' },
  { bg: 'linear-gradient(135deg, #FFF8E7 0%, #FFE0B2 100%)', border: '#D4AF37' },
  { bg: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)', border: '#800000' },
]

export default function WeddingEventsSection() {
  const { lang } = useLang()
  const t = content.weddingEvents[lang]
  const isTe = lang === 'te'
  const { ref, inView } = useInView()

  return (
    <section className="py-16 md:py-24 px-5 rangoli-bg" style={{ background: 'linear-gradient(180deg, #FFF8E7 0%, #FFF5D6 50%, #FFF8E7 100%)' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16">
          <p className={`${isTe ? 'font-telugu text-lg' : 'font-script text-xl'} mb-3`} style={{ color: '#D4AF37' }}>{t.label}</p>
          <h2 className={`${isTe ? 'font-telugu text-3xl md:text-4xl font-bold' : 'font-display text-3xl sm:text-4xl md:text-5xl'} mb-5`} style={{ color: '#800000' }}>{t.title}</h2>
          <SectionDivider />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {t.events.map((evt, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 16px 50px rgba(0,0,0,0.12)' }}
              className="rounded-2xl p-6 md:p-7 text-center transition-all duration-300 relative overflow-hidden"
              style={{ background: cardColors[i].bg, border: `1.5px solid ${cardColors[i].border}30` }}
            >
              {/* Subtle rangoli corner */}
              <div className="absolute top-2 right-2 w-8 h-8 opacity-10 pointer-events-none" style={{
                background: `radial-gradient(circle, ${cardColors[i].border} 20%, transparent 50%)`,
              }} />
              <div className="text-4xl md:text-5xl mb-3">{evt.icon}</div>
              <h3 className={`${isTe ? 'font-telugu text-lg font-semibold' : 'font-display text-lg'} mb-3`} style={{ color: '#800000' }}>{evt.title}</h3>
              <div className="space-y-1">
                <p className={`${isTe ? 'font-telugu' : 'font-body'} text-sm`} style={{ color: '#555' }}>{evt.date}</p>
                <p className={`${isTe ? 'font-telugu' : 'font-body'} text-sm font-medium`} style={{ color: '#D4AF37' }}>{evt.time}</p>
                <p className={`${isTe ? 'font-telugu' : 'font-body'} text-xs mt-2`} style={{ color: '#888' }}>{evt.venue}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
