import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { content } from '../data/content'
import { useInView } from '../hooks/useInView'

export default function OurStorySection() {
  const { lang } = useLang()
  const t = content.story[lang]
  const isTe = lang === 'te'
  const { ref, inView } = useInView()

  return (
    <section className="py-16 md:py-24 px-5 relative" style={{ background: 'linear-gradient(180deg, #800000 0%, #550000 100%)' }}>
      {/* Silk texture overlay */}
      <div className="absolute inset-0 silk-texture opacity-20 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ background: 'linear-gradient(180deg, transparent, #D4AF37, transparent)' }} />

          {t.events.map((evt, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className={`relative flex items-center mb-12 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}
            >
              {/* Content card */}
              <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                <div className="glass-card-dark rounded-2xl p-5 md:p-6">
                  <p className="font-display text-2xl md:text-3xl font-bold mb-2" style={{ color: '#F0D060' }}>{evt.year}</p>
                  <h3 className={`${isTe ? 'font-telugu text-lg font-semibold' : 'font-display text-lg'} text-white mb-2`}>{evt.title}</h3>
                  <p className={`${isTe ? 'font-telugu' : 'font-body'} text-sm text-white/70 leading-relaxed`}>{evt.desc}</p>
                </div>
              </div>

              {/* Center dot */}
              <div className="w-2/12 flex justify-center my-4 md:my-0">
                <div className="w-4 h-4 rounded-full relative z-10" style={{ background: '#D4AF37', boxShadow: '0 0 15px rgba(212,175,55,0.5)' }} />
              </div>

              {/* Spacer */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
