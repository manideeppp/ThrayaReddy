import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface WeddingMessage {
  id: string
  name: string
  message: string
  timestamp: string
}

const ADMIN_PASSWORD = 'Thraya@123'

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [messages, setMessages] = useState<WeddingMessage[]>([])

  useEffect(() => {
    if (authenticated) {
      const stored = JSON.parse(localStorage.getItem('wedding_messages') || '[]')
      setMessages(stored.reverse())
    }
  }, [authenticated])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  const handleDelete = (id: string) => {
    const updated = messages.filter(m => m.id !== id)
    setMessages(updated)
    localStorage.setItem('wedding_messages', JSON.stringify([...updated].reverse()))
  }

  const formatDate = (ts: string) => {
    const d = new Date(ts)
    return d.toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    })
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-5"
        style={{ background: 'linear-gradient(135deg, #3A0000 0%, #800000 50%, #3A0000 100%)' }}>
        <div className="absolute inset-0 silk-texture opacity-10 pointer-events-none" />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="w-full max-w-md relative z-10">
          <div className="glass-card-dark rounded-2xl p-8 md:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <span className="text-4xl mb-4 block">🔐</span>
              <h1 className="font-display text-2xl md:text-3xl text-white mb-2">Admin Access</h1>
              <p className="text-white/50 font-body text-sm">Enter password to view messages</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={e => { setPassword(e.target.value); setError(false) }}
                  placeholder="Enter password"
                  className="w-full bg-white/5 border rounded-lg px-4 py-3 text-white font-body placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                  style={{ borderColor: error ? '#ef4444' : 'rgba(212,175,55,0.2)' }}
                />
                <AnimatePresence>
                  {error && (
                    <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="text-red-400 text-xs mt-2 font-body">
                      Incorrect password. Please try again.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-full font-display text-sm tracking-wider transition-shadow"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #F0D060, #D4AF37)', color: '#550000', boxShadow: '0 4px 20px rgba(212,175,55,0.3)' }}>
                Unlock
              </motion.button>
            </form>

            <div className="text-center mt-6">
              <a href="/" className="text-white/40 text-xs font-body hover:text-white/60 transition-colors">
                ← Back to Invitation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-5 py-8 md:py-12"
      style={{ background: 'linear-gradient(180deg, #3A0000 0%, #550000 50%, #3A0000 100%)' }}>
      <div className="absolute inset-0 silk-texture opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10">
          <div className="flex items-center justify-between mb-6">
            <a href="/" className="text-white/40 text-sm font-body hover:text-white/60 transition-colors">
              ← Back
            </a>
            <span className="text-xs font-body px-3 py-1 rounded-full" style={{ color: '#D4AF37', border: '1px solid rgba(212,175,55,0.3)' }}>
              Admin Panel
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl text-white mb-2">Messages for Thraya</h1>
          <p className="text-white/50 font-body text-sm">
            {messages.length === 0 ? 'No messages yet' : `${messages.length} message${messages.length !== 1 ? 's' : ''} received`}
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="h-px w-8" style={{ background: 'linear-gradient(to right, transparent, #D4AF37)' }} />
            <span className="text-sm" style={{ color: '#F0D060' }}>✦</span>
            <div className="h-px w-8" style={{ background: 'linear-gradient(to left, transparent, #D4AF37)' }} />
          </div>
        </motion.div>

        {/* Messages */}
        {messages.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center py-20">
            <span className="text-5xl block mb-4">📭</span>
            <p className="text-white/40 font-body">No personalized messages yet.<br />Messages sent by guests will appear here.</p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg, i) => (
              <motion.div key={msg.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="glass-card-dark rounded-xl p-5 md:p-6 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-display"
                        style={{ background: 'linear-gradient(135deg, #D4AF37, #F0D060)', color: '#550000' }}>
                        {msg.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="text-white font-display text-base">{msg.name}</h3>
                        <p className="text-white/30 text-xs font-body">{formatDate(msg.timestamp)}</p>
                      </div>
                    </div>
                    <p className="text-white/80 font-body text-sm md:text-base leading-relaxed pl-12">
                      {msg.message}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(msg.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-white/30 hover:text-red-400 text-xs font-body mt-1 shrink-0"
                    title="Delete message"
                  >
                    ✕
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
