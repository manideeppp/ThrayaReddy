import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { Lang } from '../data/content'

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
}

const LangContext = createContext<LangContextType>({ lang: 'te', setLang: () => {}, toggle: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try { return (localStorage.getItem('lang') as Lang) || 'te' } catch { return 'te' }
  })

  useEffect(() => {
    try { localStorage.setItem('lang', lang) } catch { /* noop */ }
    document.documentElement.lang = lang === 'te' ? 'te' : 'en'
  }, [lang])

  const toggle = () => setLang(l => l === 'te' ? 'en' : 'te')

  return <LangContext.Provider value={{ lang, setLang, toggle }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
