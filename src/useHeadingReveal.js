import { useEffect } from 'react'

// Gently reveals page headings (h1–h3 inside <main>) as they come into view.
// Headings already on screen animate in on page load; any heading that has been
// scrolled past (e.g. a fast jump) is revealed too, so nothing stays hidden.
// Skipped entirely for users who prefer reduced motion.
export default function useHeadingReveal(key) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let pending = Array.from(
      document.querySelectorAll('main h1, main h2, main h3'),
    ).filter((el) => !el.closest('[data-enter]'))

    pending.forEach((el) => {
      el.classList.remove('hd-in')
      el.classList.add('hd-reveal')
    })

    let frame = 0
    const check = () => {
      frame = 0
      const limit = window.innerHeight * 0.92
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top < limit) {
          el.classList.add('hd-in')
          return false
        }
        return true
      })
      if (!pending.length) stop()
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check)
    }
    const stop = () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    frame = requestAnimationFrame(check)

    return () => {
      stop()
      if (frame) cancelAnimationFrame(frame)
      pending.forEach((el) => el.classList.add('hd-in'))
    }
  }, [key])
}
