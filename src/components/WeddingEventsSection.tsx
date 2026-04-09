import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { content } from '../data/content'
import { useInView } from '../hooks/useInView'
import { SectionDivider } from './CoupleSection'

// Map each event index to its photo
const eventImages = [
  '/haldi.jpeg',
  '/mehendi.jpeg',
  '/pellikuthuru.jpeg',
  '/marraige.png',
  '/reception.png',
]

export default function WeddingEventsSection() {
  const { lang } = useLang()
  const t = content.weddingEvents[lang]
  const isTe = lang === 'te'
  const { ref, inView } = useInView()

  return (
    <section className="py-16 md:py-24 px-5" style={{ background: 'linear-gradient(180deg, #FFF8E7 0%, #FFF5D6 50%, #FFF8E7 100%)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16">
          <p className={`${isTe ? 'font-telugu text-lg' : 'font-script text-xl'} mb-3`} style={{ color: '#D4AF37' }}>{t.label}</p>
          <h2 className={`${isTe ? 'font-telugu text-3xl md:text-4xl font-bold' : 'font-display text-3xl sm:text-4xl md:text-5xl'} mb-5`} style={{ color: '#800000' }}>{t.title}</h2>
          <SectionDivider />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {t.events.map((evt, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
              className="rounded-2xl overflow-hidden transition-all duration-300 group"
              style={{
                background: '#FEFCF4',
                border: '1.5px solid rgba(212,175,55,0.3)',
                boxShadow: '0 8px 30px rgba(139,109,63,0.1)',
              }}
            >
              {/* Image area — full image, no cropping */}
              <div className="relative w-full overflow-hidden">
                <img
                  src={eventImages[i]}
                  alt={evt.title}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {/* Bottom fade for smooth blend into text */}
                <div className="absolute bottom-0 left-0 right-0 h-20" style={{
                  background: 'linear-gradient(to top, #FEFCF4, transparent)',
                }} />
              </div>

              {/* Text content */}
              <div className="px-5 pb-6 pt-2 text-center">
                {/* Gold ornament divider */}
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="h-px w-8" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
                  <span className="text-[10px]" style={{ color: '#D4AF37' }}>✦</span>
                  <div className="h-px w-8" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
                </div>

                <h3 className={`${isTe ? 'font-telugu text-xl font-bold' : 'font-display text-xl md:text-2xl'} mb-2`} style={{ color: '#5C3D1A' }}>
                  {evt.title}
                </h3>

                <p className={`${isTe ? 'font-telugu' : 'font-heading text-sm italic'} mb-1`} style={{ color: '#8B6D3F' }}>
                  {evt.date}
                </p>

                {evt.time && (
                  <p className={`${isTe ? 'font-telugu text-sm' : 'font-body text-sm tracking-wide font-semibold'}`} style={{ color: '#D4AF37' }}>
                    {evt.time}
                  </p>
                )}

                {evt.venue && (
                  <p className={`${isTe ? 'font-telugu text-xs' : 'font-body text-[10px] uppercase tracking-[4px] font-medium'} mt-2`} style={{ color: '#B8962E' }}>
                    {evt.venue}
                  </p>
                )}

                {(evt as any).specialRequest && (
                  <div className="mt-4 pt-3 border-t border-[rgba(212,175,55,0.2)]">
                    <p className={`${isTe ? 'font-telugu text-xs italic' : 'font-body text-xs italic leading-relaxed'} whitespace-pre-line`} style={{ color: '#8B6D3F' }}>
                      {(evt as any).specialRequest}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
