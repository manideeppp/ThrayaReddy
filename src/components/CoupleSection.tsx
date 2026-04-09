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
    <section className="relative py-16 md:py-24 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F5E6C8 0%, #EAD5A0 30%, #E8D49E 50%, #EAD5A0 70%, #F5E6C8 100%)',
      }}>

      {/* Vintage paper texture overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          radial-gradient(ellipse at 20% 50%, rgba(139,109,63,0.06) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 50%, rgba(139,109,63,0.06) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.1) 0%, transparent 40%),
          radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.1) 0%, transparent 40%)
        `,
      }} />

      {/* Gold particle sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: '#D4AF37',
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              opacity: 0,
            }}
            animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
      </div>

      {/* Corner ornaments */}
      <div className="absolute top-4 left-4 opacity-[0.08] pointer-events-none">
        <svg width="80" height="80" viewBox="0 0 80 80"><path d="M0 0 Q40 10 40 40 Q10 40 0 0Z" fill="#8B6D3F"/><path d="M5 5 Q35 15 35 35 Q15 35 5 5Z" fill="none" stroke="#D4AF37" strokeWidth="0.5"/></svg>
      </div>
      <div className="absolute top-4 right-4 opacity-[0.08] pointer-events-none" style={{ transform: 'scaleX(-1)' }}>
        <svg width="80" height="80" viewBox="0 0 80 80"><path d="M0 0 Q40 10 40 40 Q10 40 0 0Z" fill="#8B6D3F"/><path d="M5 5 Q35 15 35 35 Q15 35 5 5Z" fill="none" stroke="#D4AF37" strokeWidth="0.5"/></svg>
      </div>
      <div className="absolute bottom-4 left-4 opacity-[0.08] pointer-events-none" style={{ transform: 'scaleY(-1)' }}>
        <svg width="80" height="80" viewBox="0 0 80 80"><path d="M0 0 Q40 10 40 40 Q10 40 0 0Z" fill="#8B6D3F"/></svg>
      </div>
      <div className="absolute bottom-4 right-4 opacity-[0.08] pointer-events-none" style={{ transform: 'scale(-1)' }}>
        <svg width="80" height="80" viewBox="0 0 80 80"><path d="M0 0 Q40 10 40 40 Q10 40 0 0Z" fill="#8B6D3F"/></svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Monogram */}
        <motion.div ref={ref} initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8 }}
          className="flex justify-center mb-6">
          <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #F5E6C8 0%, #EDD9A3 50%, #F5E6C8 100%)',
              border: '2px solid #D4AF37',
              boxShadow: '0 0 0 4px rgba(212,175,55,0.15), 0 0 0 8px rgba(212,175,55,0.08), 0 8px 32px rgba(139,109,63,0.2)',
            }}>
            {/* Inner decorative ring */}
            <div className="absolute inset-2 rounded-full" style={{ border: '1px solid rgba(212,175,55,0.4)' }} />
            <span className="font-script text-3xl md:text-4xl" style={{ color: '#8B6D3F' }}>TB</span>
            {/* Small heart below monogram */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
              <span className="text-xs" style={{ color: '#800000' }}>❤</span>
            </div>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center mb-10 md:mb-14">
          <p className={`${isTe ? 'font-telugu text-lg' : 'font-script text-2xl md:text-3xl'} mb-2`} style={{ color: '#8B6D3F' }}>{t.label}</p>
          <h2 className={`${isTe ? 'font-telugu text-3xl md:text-4xl font-bold' : 'font-display text-3xl sm:text-4xl md:text-5xl'}`} style={{ color: '#5C3D1A' }}>{t.title}</h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-px w-10" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
            <span className="text-sm" style={{ color: '#D4AF37' }}>✦ ✦</span>
            <div className="h-px w-10" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center max-w-4xl mx-auto">

          {/* Bride Card */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="relative rounded-t-[100px] rounded-b-2xl p-6 pt-10 pb-8 text-center overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #FEFCF4 0%, #F9F1E0 40%, #F5ECD4 100%)',
                border: '1.5px solid rgba(212,175,55,0.35)',
                boxShadow: '0 8px 40px rgba(139,109,63,0.15), inset 0 1px 0 rgba(255,255,255,0.6)',
              }}>
              {/* Vintage texture on card */}
              <div className="absolute inset-0 rounded-t-[100px] rounded-b-2xl pointer-events-none" style={{
                background: 'radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.04) 0%, transparent 70%)',
              }} />

              {/* Inner border */}
              <div className="absolute inset-3 rounded-t-[88px] rounded-b-xl pointer-events-none" style={{ border: '1px solid rgba(212,175,55,0.15)' }} />

              <div className="relative z-10">
                {/* Avatar */}
                <motion.div whileHover={{ scale: 1.05 }}
                  className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden"
                  style={{
                    border: '3px solid #D4AF37',
                    boxShadow: '0 4px 20px rgba(212,175,55,0.25)',
                  }}>
                  <img src="/thraya.jpg" alt="Thraya Reddy" className="w-full h-full object-cover" />
                </motion.div>

                {/* Decorative line */}
                <div className="flex items-center justify-center gap-2 my-3">
                  <div className="h-px w-6" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
                  <span className="text-[8px]" style={{ color: '#D4AF37' }}>◆</span>
                  <div className="h-px w-6" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
                </div>

                {/* Name */}
                <h3 className={`${isTe ? 'font-telugu text-xl md:text-2xl font-bold' : 'font-display text-xl md:text-2xl'} mb-2`} style={{ color: '#5C3D1A' }}>
                  {t.bride}
                </h3>

                {/* Parents label */}
                <p className={`${isTe ? 'font-telugu text-xs' : 'font-body text-xs tracking-wider uppercase'} mb-2`} style={{ color: '#B8962E' }}>
                  {t.brideParentsLabel}
                </p>

                {/* Parents names */}
                <p className={`${isTe ? 'font-telugu text-sm' : 'font-body text-sm'} leading-relaxed`} style={{ color: '#6B5B3E' }}>
                  {t.brideParents}
                </p>

                {/* City */}
                <div className="mt-4">
                  <p className={`${isTe ? 'font-telugu text-xs' : 'font-body text-[10px] uppercase tracking-[4px] font-semibold'}`} style={{ color: '#B8962E' }}>
                    {t.brideCity}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Heart */}
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center justify-center py-4 md:py-0">
            <motion.div animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
              <span className="text-3xl md:text-4xl" style={{ color: '#800000', filter: 'drop-shadow(0 2px 6px rgba(128,0,0,0.3))' }}>❤</span>
            </motion.div>
          </motion.div>

          {/* Groom Card */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="relative rounded-t-[100px] rounded-b-2xl p-6 pt-10 pb-8 text-center overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #FEFCF4 0%, #F9F1E0 40%, #F5ECD4 100%)',
                border: '1.5px solid rgba(212,175,55,0.35)',
                boxShadow: '0 8px 40px rgba(139,109,63,0.15), inset 0 1px 0 rgba(255,255,255,0.6)',
              }}>
              {/* Vintage texture on card */}
              <div className="absolute inset-0 rounded-t-[100px] rounded-b-2xl pointer-events-none" style={{
                background: 'radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.04) 0%, transparent 70%)',
              }} />

              {/* Inner border */}
              <div className="absolute inset-3 rounded-t-[88px] rounded-b-xl pointer-events-none" style={{ border: '1px solid rgba(212,175,55,0.15)' }} />

              <div className="relative z-10">
                {/* Avatar */}
                <motion.div whileHover={{ scale: 1.05 }}
                  className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden"
                  style={{
                    border: '3px solid #D4AF37',
                    boxShadow: '0 4px 20px rgba(212,175,55,0.25)',
                  }}>
                  <img src="/bharath.jpg" alt="Bharath Simha Reddy" className="w-full h-full object-cover" />
                </motion.div>

                {/* Decorative line */}
                <div className="flex items-center justify-center gap-2 my-3">
                  <div className="h-px w-6" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
                  <span className="text-[8px]" style={{ color: '#D4AF37' }}>◆</span>
                  <div className="h-px w-6" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
                </div>

                {/* Name */}
                <h3 className={`${isTe ? 'font-telugu text-xl md:text-2xl font-bold' : 'font-display text-xl md:text-2xl'} mb-2`} style={{ color: '#5C3D1A' }}>
                  {t.groom}
                </h3>

                {/* Parents label */}
                <p className={`${isTe ? 'font-telugu text-xs' : 'font-body text-xs tracking-wider uppercase'} mb-2`} style={{ color: '#B8962E' }}>
                  {t.groomParentsLabel}
                </p>

                {/* Parents names */}
                <p className={`${isTe ? 'font-telugu text-sm' : 'font-body text-sm'} leading-relaxed`} style={{ color: '#6B5B3E' }}>
                  {t.groomParents}
                </p>

                {/* City */}
                <div className="mt-4">
                  <p className={`${isTe ? 'font-telugu text-xs' : 'font-body text-[10px] uppercase tracking-[4px] font-semibold'}`} style={{ color: '#B8962E' }}>
                    {t.groomCity}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
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
