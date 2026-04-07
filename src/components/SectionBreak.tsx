export default function SectionBreak() {
  return (
    <div className="py-4 flex justify-center items-center" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.04), transparent)' }}>
      <div className="flex items-center gap-1">
        {/* Gold chain with temple bell pattern using SVG */}
        <svg width="200" height="20" viewBox="0 0 200 20" className="opacity-30">
          {/* Wavy vine */}
          <path d="M0 10 Q12.5 2 25 10 Q37.5 18 50 10 Q62.5 2 75 10 Q87.5 18 100 10 Q112.5 2 125 10 Q137.5 18 150 10 Q162.5 2 175 10 Q187.5 18 200 10"
            fill="none" stroke="#D4AF37" strokeWidth="1" />
          {/* Small dots at intersections */}
          {[25, 50, 75, 100, 125, 150, 175].map(x => (
            <circle key={x} cx={x} cy="10" r="2" fill="#D4AF37" opacity="0.6" />
          ))}
        </svg>
      </div>
    </div>
  )
}
