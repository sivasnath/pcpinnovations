export default function Logo({ size = 34 }) {
  const dots = Array.from({ length: 10 }, (_, i) => {
    const a = (i / 10) * Math.PI * 2 - Math.PI / 2
    return [32 + 22 * Math.cos(a), 32 + 22 * Math.sin(a)]
  })
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4.2" fill="currentColor" />
      ))}
      <circle cx="32" cy="32" r="9" fill="var(--lilac)" />
    </svg>
  )
}
