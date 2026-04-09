import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import { content } from '../data/content'
import { useInView } from '../hooks/useInView'
import { SectionDivider } from './CoupleSection'

export default function CountdownSection() {
  const { lang } = useLang()
  const t = content.countdown[lang]
  const isTe = lang === 'te'
  const { ref, inView } = useInView()
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calc = () => {
      const diff = new Date('2026-04-26T00:00:00+05:30').getTime() - Date.now()
      if (diff > 0) {
        setTime({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff / 3600000) % 24),
          minutes: Math.floor((diff / 60000) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        })
      }
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [])

  const blocks = [
    { n: time.days, label: t.days, pad: 2 },
    { n: time.hours, label: t.hours, pad: 2 },
    { n: time.minutes, label: t.minutes, pad: 2 },
    { n: time.seconds, label: t.seconds, pad: 2 },
  ]

  return (
    <section className="py-16 md:py-24 px-5" style={{ background: 'linear-gradient(180deg, #FFF8E7 0%, #FFF5D6 50%, #FFF8E7 100%)' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16">
          <p className={`${isTe ? 'font-telugu text-lg' : 'font-script text-xl'} mb-3`} style={{ color: '#D4AF37' }}>{t.label}</p>
          <h2 className={`${isTe ? 'font-telugu text-3xl md:text-4xl font-bold' : 'font-display text-3xl sm:text-4xl md:text-5xl'} mb-5`} style={{ color: '#800000' }}>{t.title}</h2>
          <SectionDivider />
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.15 }}
          className="rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #800000 0%, #A52A2A 50%, #800000 100%)', border: '1px solid rgba(212,175,55,0.25)', boxShadow: '0 12px 50px rgba(0,0,0,0.15)' }}>
          {/* Silk texture */}
          <div className="absolute inset-0 silk-texture opacity-10 pointer-events-none" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
            {blocks.map((b, i) => (
              <div key={i} className="text-center">
                <motion.div
                  key={b.n}
                  initial={{ scale: 1.1, opacity: 0.7 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tabular-nums" style={{ color: '#F0D060' }}>
                  {String(b.n).padStart(b.pad, '0')}
                </motion.div>
                <p className={`${isTe ? 'font-telugu text-sm' : 'font-body text-xs uppercase tracking-[3px]'} mt-2`} style={{ color: '#D4AF37' }}>{b.label}</p>
              </div>
            ))}
          </div>

          {/* Diya decorations */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className="text-lg animate-diya-flicker">🪔</span>
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
            <span className="text-lg animate-diya-flicker" style={{ animationDelay: '0.5s' }}>🪔</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
