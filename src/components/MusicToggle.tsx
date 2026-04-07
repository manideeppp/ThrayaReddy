import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'

interface Props {
  playing: boolean
  onToggle: (v: boolean) => void
}

export default function MusicToggle({ playing, onToggle }: Props) {
  const { lang } = useLang()
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleClick = () => {
    const audio = audioRef.current
    const next = !playing
    if (audio) { next ? audio.play().catch(() => {}) : audio.pause() }
    onToggle(next)
  }

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/assets/music.mp3" type="audio/mpeg" />
      </audio>

      <motion.button onClick={handleClick}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 left-5 z-[100] w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-shadow"
        style={{
          background: 'linear-gradient(135deg, #D4AF37, #F0D060, #D4AF37)',
          boxShadow: '0 4px 20px rgba(212,175,55,0.4)',
          color: '#550000',
        }}
        aria-label={playing ? (lang === 'te' ? 'సంగీతం ఆపు' : 'Pause music') : (lang === 'te' ? 'సంగీతం ప్లే' : 'Play music')}>
        {playing ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        )}
      </motion.button>
    </>
  )
}
