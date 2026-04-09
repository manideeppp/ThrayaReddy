import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { content } from '../data/content'
import { useInView } from '../hooks/useInView'

export default function VenueSection() {
  const { lang } = useLang()
  const t = content.venue[lang]
  const isTe = lang === 'te'
  const { ref, inView } = useInView()

  return (
    <section className="py-16 md:py-24 px-5 relative" style={{ background: 'linear-gradient(180deg, #0B5D3B 0%, #084A2F 100%)' }}>
      <div className="absolute inset-0 silk-texture opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16">
          <p className={`${isTe ? 'font-telugu text-lg' : 'font-script text-xl'} mb-3`} style={{ color: '#F0D060' }}>{t.label}</p>
          <h2 className={`${isTe ? 'font-telugu text-3xl md:text-4xl font-bold' : 'font-display text-3xl sm:text-4xl md:text-5xl'} text-white mb-5`}>{t.title}</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-8" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
            <span className="text-sm" style={{ color: '#F0D060' }}>✦</span>
            <div className="h-px w-8" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.15 }}
          className="glass-card-dark rounded-2xl md:rounded-3xl overflow-hidden">
          {/* Embedded Map — scrollable & interactive */}
          <div className="w-full h-64 sm:h-72 md:h-96 relative">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.945%2C16.28%2C77.965%2C16.295&layer=mapnik&marker=16.286563%2C77.955438"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="Wedding Venue Map"
            />
          </div>

          {/* Venue Details */}
          <div className="p-6 md:p-10 text-center">
            <div className="text-3xl mb-3">🏛️</div>
            <h3 className={`${isTe ? 'font-telugu text-xl md:text-2xl font-bold' : 'font-display text-xl md:text-2xl'} text-white mb-3`}>{t.name}</h3>
            <p className={`${isTe ? 'font-telugu' : 'font-body'} text-white/70 text-sm mb-1`}>{t.address}</p>
            <p className={`${isTe ? 'font-telugu' : 'font-body'} text-white/70 text-sm mb-6`}>{t.city}</p>

            <a href={(t as any).mapLink || "https://www.google.com/maps?daddr=7XP4%2BJ5W,+Ullamkonda,+Telangana+509104"} target="_blank" rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 ${isTe ? 'font-telugu' : 'font-display'}`}
              style={{ background: 'linear-gradient(135deg, #D4AF37, #F0D060, #D4AF37)', color: '#084A2F', boxShadow: '0 4px 20px rgba(212,175,55,0.3)' }}>
              📍 {t.mapBtn}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
