// Simple shaded vector icons, one per industry, shown on hover in the home page index.
const P = {
  // cooking pot with steam
  'food-processing': (
    <>
      <path d="M14 30h36v14a10 10 0 0 1-10 10H24a10 10 0 0 1-10-10z" />
      <rect x="10" y="26" width="44" height="6" rx="3" />
      <path d="M24 20c-3-4 3-6 0-10M32 20c-3-4 3-6 0-10M40 20c-3-4 3-6 0-10" fill="none" strokeWidth="2.5" stroke="currentColor" strokeLinecap="round" />
    </>
  ),
  // sprouting plant on soil
  'agriculture-fpo': (
    <>
      <path d="M32 52V28" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 34C32 22 22 16 12 16c0 12 8 18 20 18z" />
      <path d="M32 30c0-10 8-16 20-16 0 10-8 16-20 16z" opacity=".75" />
      <rect x="10" y="50" width="44" height="6" rx="3" />
    </>
  ),
  // palm tree and sun
  'hospitality-tourism': (
    <>
      <circle cx="48" cy="16" r="7" opacity=".6" />
      <path d="M30 56c2-12 2-22 0-30" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M30 26c-6-8-16-8-22-2 8-2 15 0 22 2zM30 26c6-8 16-8 22-2-8-2-15 0-22 2zM30 26c-2-8-8-14-16-14 6 3 11 8 16 14zM30 26c2-8 8-14 16-14-6 3-11 8-16 14z" />
      <rect x="8" y="54" width="48" height="4" rx="2" />
    </>
  ),
  // heart with medical cross
  'healthcare-wellness': (
    <>
      <path d="M32 54S8 40 8 24a12 12 0 0 1 24-4 12 12 0 0 1 24 4c0 16-24 30-24 30z" />
      <path d="M28 24h8v6h6v8h-6v6h-8v-6h-6v-8h6z" fill="#fff" opacity=".9" />
    </>
  ),
  // film clapperboard
  'media-arts-entertainment': (
    <>
      <rect x="10" y="26" width="44" height="28" rx="3" />
      <path d="M10 18l42-8 2 10-42 8z" opacity=".75" />
      <path d="M20 16l6 9M32 14l6 9M44 12l6 9" stroke="#fff" strokeWidth="2.5" opacity=".8" />
      <path d="M28 34v12l10-6z" fill="#fff" opacity=".85" />
    </>
  ),
  // institution with columns
  'trusts-ngos-institutions': (
    <>
      <path d="M32 8 8 22h48z" />
      <rect x="12" y="24" width="40" height="4" />
      <rect x="15" y="30" width="6" height="18" opacity=".8" />
      <rect x="29" y="30" width="6" height="18" opacity=".8" />
      <rect x="43" y="30" width="6" height="18" opacity=".8" />
      <rect x="8" y="50" width="48" height="6" rx="2" />
    </>
  ),
  // building with crane
  'construction-real-estate': (
    <>
      <path d="M14 8v48" stroke="currentColor" strokeWidth="3" />
      <path d="M8 12h44" stroke="currentColor" strokeWidth="3" />
      <path d="M46 12v10" stroke="currentColor" strokeWidth="2" />
      <rect x="42" y="22" width="8" height="6" />
      <rect x="24" y="28" width="28" height="28" opacity=".85" />
      <path d="M29 33h5v5h-5zM40 33h5v5h-5zM29 43h5v5h-5zM40 43h5v5h-5z" fill="#fff" opacity=".8" />
    </>
  ),
  // stack of coins
  'finance-cooperatives': (
    <>
      <ellipse cx="26" cy="46" rx="16" ry="6" />
      <rect x="10" y="36" width="32" height="10" />
      <ellipse cx="26" cy="36" rx="16" ry="6" opacity=".75" />
      <ellipse cx="44" cy="26" rx="12" ry="5" />
      <rect x="32" y="18" width="24" height="8" />
      <ellipse cx="44" cy="18" rx="12" ry="5" opacity=".75" />
    </>
  ),
  // rocket
  'technology-startups': (
    <>
      <path d="M32 6c10 8 12 22 8 34H24c-4-12-2-26 8-34z" />
      <circle cx="32" cy="24" r="5" fill="#fff" opacity=".85" />
      <path d="M24 32l-8 12h10zM40 32l8 12H38z" opacity=".75" />
      <path d="M28 44h8l-4 12z" opacity=".55" />
    </>
  ),
  // storefront
  'other-industries': (
    <>
      <path d="M8 22 14 10h36l6 12z" />
      <path d="M8 22h48v4a6 6 0 0 1-12 0 6 6 0 0 1-12 0 6 6 0 0 1-12 0 6 6 0 0 1-12 0z" opacity=".75" />
      <rect x="12" y="32" width="40" height="22" opacity=".85" />
      <rect x="28" y="40" width="8" height="14" fill="#fff" opacity=".8" />
    </>
  ),
}

export default function IndustryIcon({ slug }) {
  return (
    <svg className="index__icon" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      {P[slug] || P['other-industries']}
    </svg>
  )
}
