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
          {/* Map */}
          <div className="w-full h-56 md:h-72 relative" style={{ background: '#0a4a30' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8574!2d77.2195!3d28.6315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzUzLjQiTiA3N8KwMTMnMTAuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
              className="w-full h-full border-0 opacity-80"
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Map"
            />
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 -30px 30px rgba(8,74,47,0.6)' }} />
          </div>

          {/* Venue Details */}
          <div className="p-6 md:p-10 text-center">
            <div className="text-3xl mb-3">🏛️</div>
            <h3 className={`${isTe ? 'font-telugu text-xl md:text-2xl font-bold' : 'font-display text-xl md:text-2xl'} text-white mb-3`}>{t.name}</h3>
            <p className={`${isTe ? 'font-telugu' : 'font-body'} text-white/70 text-sm mb-1`}>{t.address}</p>
            <p className={`${isTe ? 'font-telugu' : 'font-body'} text-white/70 text-sm mb-6`}>{t.city}</p>

            <a href="https://maps.google.com/?q=Connaught+Place+New+Delhi" target="_blank" rel="noopener noreferrer"
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
