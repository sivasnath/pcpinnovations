import { useEffect, useState } from 'react'
import { photo } from '../data/photos.js'

export function Photo({ id, className = '', eager = false, sizes = '(max-width: 860px) 100vw, 50vw' }) {
  const p = photo(id)
  if (!p.w) return null
  return (
    <img
      className={`ph ${className}`}
      src={p.src}
      alt={p.alt}
      width={p.w}
      height={p.h}
      sizes={sizes}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}

// A captioned photo grid. Clicking a photo opens it full size in a simple lightbox.
export default function Gallery({ ids, variant = 'grid', captions = true }) {
  const [open, setOpen] = useState(null)
  const list = ids.map(photo).filter((p) => p.w)

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % list.length)
      if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + list.length) % list.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, list.length])

  if (!list.length) return null
  const cur = open !== null ? list[open] : null
  return (
    <>
      <div className={`gal gal--${variant} gal--n${Math.min(list.length, 6)}`}>
        {list.map((p, i) => (
          <figure key={p.id} className="gal__item">
            <button type="button" className="gal__btn" onClick={() => setOpen(i)} aria-label={`Enlarge: ${p.caption}`}>
              <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" decoding="async" />
            </button>
            {captions && <figcaption>{p.caption}</figcaption>}
          </figure>
        ))}
      </div>
      {cur && (
        <div className="lb" role="dialog" aria-modal="true" aria-label={cur.caption} onClick={() => setOpen(null)}>
          <figure className="lb__fig" onClick={(e) => e.stopPropagation()}>
            <img src={cur.src} alt={cur.alt} />
            <figcaption>{cur.caption}</figcaption>
          </figure>
          <button type="button" className="lb__close" onClick={() => setOpen(null)} aria-label="Close">×</button>
          {list.length > 1 && (
            <>
              <button type="button" className="lb__nav lb__nav--prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + list.length) % list.length) }}>‹</button>
              <button type="button" className="lb__nav lb__nav--next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % list.length) }}>›</button>
            </>
          )}
        </div>
      )}
    </>
  )
}
