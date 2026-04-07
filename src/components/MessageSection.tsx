import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { content } from '../data/content'
import { useInView } from '../hooks/useInView'
import { supabase } from '../lib/supabase'

export default function MessageSection() {
  const { lang } = useLang()
  const t = content.message[lang]
  const isTe = lang === 'te'
  const { ref, inView } = useInView()
  const [form, setForm] = useState({ name: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const fc = isTe ? 'font-telugu' : 'font-body'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setErrorMsg('')

    const { error } = await supabase
      .from('wedding_messages')
      .insert({ name: form.name.trim(), message: form.message.trim() })

    setSending(false)
    if (error) {
      setErrorMsg(isTe ? 'సందేశం పంపడంలో సమస్య. మళ్ళీ ప్రయత్నించండి.' : 'Failed to send. Please try again.')
    } else {
      setSubmitted(true)
    }
  }

  const inputClass = `w-full bg-white/5 border rounded-lg px-4 py-3 text-white ${fc} placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all`

  return (
    <section className="py-16 md:py-24 px-5 relative" style={{ background: 'linear-gradient(180deg, #800000 0%, #550000 100%)' }}>
      <div className="absolute inset-0 silk-texture opacity-10 pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-14">
          <p className={`${isTe ? 'font-telugu text-lg' : 'font-script text-xl'} mb-3`} style={{ color: '#F0D060' }}>{t.label}</p>
          <h2 className={`${isTe ? 'font-telugu text-3xl md:text-4xl font-bold' : 'font-display text-3xl sm:text-4xl md:text-5xl'} text-white mb-4`}>{t.title}</h2>
          <p className={`${fc} text-white/60 text-sm md:text-base max-w-md mx-auto`}>{t.subtitle}</p>
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="h-px w-8" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
            <span className="text-sm" style={{ color: '#F0D060' }}>✦</span>
            <div className="h-px w-8" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}
          className="glass-card-dark rounded-2xl md:rounded-3xl p-6 md:p-10">

          {/* Decorative envelope icon */}
          <div className="text-center mb-6">
            <span className="text-3xl md:text-4xl">💌</span>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="text-center py-8 md:py-12">
                <div className="text-5xl md:text-6xl mb-6">🎉</div>
                <h3 className={`${isTe ? 'font-telugu text-2xl font-bold' : 'font-display text-2xl md:text-3xl'} text-white mb-3`}>{t.thankYou}</h3>
                <p className={`text-white/70 ${fc} text-base md:text-lg mb-8`}>{t.thankYouMsg}</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', message: '' }) }}
                  className={`${fc} text-sm tracking-wider px-6 py-3 rounded-full transition-colors hover:bg-white/5`}
                  style={{ color: '#D4AF37', border: '1px solid rgba(212,175,55,0.4)' }}>{t.another}</button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="space-y-5 md:space-y-6">
                <div>
                  <label className={`block text-white/60 ${fc} text-xs tracking-wider mb-2`}>{t.name}</label>
                  <input required name="name" value={form.name} onChange={handleChange}
                    className={inputClass} style={{ borderColor: 'rgba(212,175,55,0.2)' }} placeholder={t.namePlaceholder} />
                </div>
                <div>
                  <label className={`block text-white/60 ${fc} text-xs tracking-wider mb-2`}>{t.message}</label>
                  <textarea required name="message" value={form.message} onChange={handleChange} rows={5}
                    className={`${inputClass} resize-none`} style={{ borderColor: 'rgba(212,175,55,0.2)' }} placeholder={t.messagePlaceholder} />
                </div>
                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  disabled={sending}
                  className={`w-full py-3.5 md:py-4 rounded-full ${isTe ? 'font-telugu font-semibold' : 'font-display'} text-sm tracking-wider transition-shadow disabled:opacity-60`}
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #F0D060, #D4AF37)', color: '#550000', boxShadow: '0 4px 20px rgba(212,175,55,0.3)' }}>
                  {sending ? (isTe ? 'పంపుతోంది...' : 'Sending...') : t.submit}
                </motion.button>
                {errorMsg && <p className="text-red-400 text-xs text-center mt-2 font-body">{errorMsg}</p>}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
