import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useReveal() {
  const location = useLocation()

  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)')
    if (!els.length) return undefined

    const show = (el) => el.classList.add('visible')

    if (!('IntersectionObserver' in window)) {
      els.forEach(show)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' },
    )

    els.forEach((el) => observer.observe(el))

    const fallback = window.setTimeout(() => {
      els.forEach((el) => {
        if (!el.classList.contains('visible')) show(el)
      })
    }, 800)

    return () => {
      window.clearTimeout(fallback)
      observer.disconnect()
    }
  }, [location.pathname])
}
