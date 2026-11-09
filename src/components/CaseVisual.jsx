// Generated artwork (no photos): a ring of dots echoing the logo, tinted per industry.
export default function CaseVisual({ hue = 255, label }) {
  const rings = [3, 2, 1]
  return (
    <svg className="visual" viewBox="0 0 400 240" role="img" aria-label={label || 'Decorative pattern'} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`g${hue}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={`hsl(${hue} 55% 18%)`} />
          <stop offset="1" stopColor={`hsl(${hue} 60% 34%)`} />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill={`url(#g${hue})`} />
      {rings.map((r) =>
        Array.from({ length: 12 * r }, (_, i) => {
          const a = (i / (12 * r)) * Math.PI * 2
          const rad = 34 * r + 18
          return (
            <circle
              key={`${r}-${i}`}
              cx={290 + rad * Math.cos(a)}
              cy={120 + rad * Math.sin(a) * 0.8}
              r={4.5 - r * 0.8}
              fill={`hsl(${hue} 70% ${88 - r * 12}%)`}
              opacity={0.85 - r * 0.15}
            />
          )
        }),
      )}
      <circle cx="290" cy="120" r="14" fill={`hsl(${hue} 80% 80%)`} />
    </svg>
  )
}
