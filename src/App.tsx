import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LangProvider, useLang } from './context/LangContext'
import { content } from './data/content'
import CurtainOverlay from './components/CurtainOverlay'
import LanguageToggle from './components/LanguageToggle'
import HeroSection from './components/HeroSection'
import CoupleSection from './components/CoupleSection'
import OurStorySection from './components/OurStorySection'
import WeddingEventsSection from './components/WeddingEventsSection'
import VenueSection from './components/VenueSection'
import CountdownSection from './components/CountdownSection'
import GallerySection from './components/GallerySection'
import MessageSection from './components/MessageSection'
import ClosingSection from './components/ClosingSection'
import MusicToggle from './components/MusicToggle'
import FlowerPetals from './components/FlowerPetals'
import SectionBreak from './components/SectionBreak'

function AppInner() {
  const [opened, setOpened] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const { lang } = useLang()
  const ft = content.footer[lang]

  return (
    <div className="min-h-screen bg-ivory font-body overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!opened && (
          <CurtainOverlay key="curtain" onOpen={() => setOpened(true)} />
        )}
      </AnimatePresence>

      {/* Language toggle always visible */}
      <LanguageToggle />

      {opened && (
        <>
          <FlowerPetals />
          <MusicToggle playing={musicPlaying} onToggle={(v: boolean) => setMusicPlaying(v)} />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <HeroSection />
            <SectionBreak />
            <CoupleSection />
            <SectionBreak />
            <OurStorySection />
            <SectionBreak />
            <WeddingEventsSection />
            <SectionBreak />
            <CountdownSection />
            <SectionBreak />
            <VenueSection />
            <SectionBreak />
            <GallerySection />
            <SectionBreak />
            <MessageSection />
            <SectionBreak />
            <ClosingSection />

            <footer className="py-10 text-center relative" style={{ background: 'linear-gradient(180deg, #550000 0%, #3A0000 100%)' }}>
              <div className="absolute inset-0 silk-texture opacity-10 pointer-events-none" />
              <div className="relative z-10">
                {/* Decorative top border */}
                <div className="flex items-center justify-center gap-2 mb-5">
                  <svg width="60" height="10" viewBox="0 0 60 10" className="opacity-40">
                    <path d="M0 5 Q7.5 0 15 5 Q22.5 10 30 5 Q37.5 0 45 5 Q52.5 10 60 5" fill="none" stroke="#D4AF37" strokeWidth="1"/>
                  </svg>
                  <span className="text-sm" style={{ color: '#D4AF37' }}>✦</span>
                  <svg width="60" height="10" viewBox="0 0 60 10" className="opacity-40">
                    <path d="M0 5 Q7.5 0 15 5 Q22.5 10 30 5 Q37.5 0 45 5 Q52.5 10 60 5" fill="none" stroke="#D4AF37" strokeWidth="1"/>
                  </svg>
                </div>
                <p className={`${lang === 'te' ? 'font-telugu' : 'font-body'} text-ivory/70 text-sm md:text-base`}>{ft.made}</p>
                <p className={`${lang === 'te' ? 'font-telugu text-xs' : 'font-body text-xs tracking-widest uppercase'} mt-2`} style={{ color: '#D4AF37', opacity: 0.6 }}>{ft.hashtag}</p>
                <p className={`${lang === 'te' ? 'font-telugu' : 'font-body'} text-ivory/40 text-xs mt-3`}>{ft.date}</p>
              </div>
            </footer>
          </motion.main>
        </>
      )}
    </div>
  )
}

export default function App() {
  return (
    <LangProvider>
      <AppInner />
    </LangProvider>
  )
}
