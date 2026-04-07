import { useRef, useEffect } from 'react'

interface Petal {
  x: number; y: number; size: number; speedX: number; speedY: number;
  rotation: number; rotSpeed: number; opacity: number; life: number; maxLife: number; type: number
}

export default function FlowerPetals() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let petals: Petal[] = []

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    const colors = [
      ['#FFF5E6', '#FFE0B2'], // jasmine white-cream
      ['#F0D060', '#D4AF37'], // gold
      ['#FFCDD2', '#E57373'], // soft pink / rose petal
      ['#FFFFFF', '#FFF8E7'], // pure white jasmine
    ]

    const spawn = () => {
      if (petals.length > 35) return
      const type = Math.floor(Math.random() * colors.length)
      petals.push({
        x: Math.random() * canvas.width,
        y: -10,
        size: Math.random() * 6 + 3,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: Math.random() * 0.8 + 0.3,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 2,
        opacity: 0,
        life: 0,
        maxLife: Math.random() * 400 + 300,
        type,
      })
    }

    const drawPetal = (p: Petal) => {
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate((p.rotation * Math.PI) / 180)
      ctx.globalAlpha = p.opacity

      const color = colors[p.type]
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size)
      grad.addColorStop(0, color[0])
      grad.addColorStop(1, color[1])
      ctx.fillStyle = grad

      // Petal shape (ellipse)
      ctx.beginPath()
      ctx.ellipse(0, 0, p.size * 0.6, p.size, 0, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()
    }

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      if (Math.random() < 0.08) spawn()

      petals = petals.filter(p => p.life < p.maxLife)

      for (const p of petals) {
        p.life++
        p.x += p.speedX + Math.sin(p.life * 0.01) * 0.3
        p.y += p.speedY
        p.rotation += p.rotSpeed
        const progress = p.life / p.maxLife
        p.opacity = progress < 0.1 ? progress / 0.1 : progress > 0.8 ? (1 - progress) / 0.2 : 1
        p.opacity *= 0.45
        drawPetal(p)
      }

      animId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 9999 }} />
  )
}
