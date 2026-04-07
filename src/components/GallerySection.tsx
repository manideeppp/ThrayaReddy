import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { content } from '../data/content'
import { useInView } from '../hooks/useInView'
import { SectionDivider } from './CoupleSection'

const images = [
  { emoji: '🌸', label: { te: 'పూల అలంకరణ', en: 'Floral Decor' } },
  { emoji: '💍', label: { te: 'ఉంగరాలు', en: 'Rings' } },
  { emoji: '🎊', label: { te: 'వేడుక', en: 'Celebration' } },
  { emoji: '🪔', label: { te: 'దీపం', en: 'Deepam' } },
  { emoji: '💐', label: { te: 'మల్లెపూలు', en: 'Jasmine' } },
  { emoji: '🎶', label: { te: 'సంగీతం', en: 'Sangeet' } },
]

export default function GallerySection() {
  const { lang } = useLang()
  const t = content.gallery[lang]
  const isTe = lang === 'te'
  const { ref, inView } = useInView()

  return (
    <section className="py-16 md:py-24 px-5" style={{ background: 'linear-gradient(180deg, #FFF5D6 0%, #FFF8E7 100%)' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16">
          <p className={`${isTe ? 'font-telugu text-lg' : 'font-script text-xl'} mb-3`} style={{ color: '#D4AF37' }}>{t.label}</p>
          <h2 className={`${isTe ? 'font-telugu text-3xl md:text-4xl font-bold' : 'font-display text-3xl sm:text-4xl md:text-5xl'} mb-5`} style={{ color: '#800000' }}>{t.title}</h2>
          <SectionDivider />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {images.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.04, y: -6, boxShadow: '0 16px 40px rgba(212,175,55,0.2)' }}
              className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group"
              style={{
                background: 'linear-gradient(135deg, #FFF8E7 0%, #F0D060 50%, #FFF5D6 100%)',
                border: '2px solid rgba(212,175,55,0.2)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              }}>
              {/* Photo placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl transition-transform duration-300 group-hover:scale-110">
                {item.emoji}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4"
                style={{ background: 'linear-gradient(to top, rgba(128,0,0,0.5), transparent)' }}>
                <p className={`text-white ${isTe ? 'font-telugu' : 'font-display'} text-sm md:text-base`}>
                  {item.label[lang]}
                </p>
              </div>

              {/* Gold corner frame */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 opacity-30" style={{ borderColor: '#D4AF37' }} />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 opacity-30" style={{ borderColor: '#D4AF37' }} />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 opacity-30" style={{ borderColor: '#D4AF37' }} />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 opacity-30" style={{ borderColor: '#D4AF37' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
