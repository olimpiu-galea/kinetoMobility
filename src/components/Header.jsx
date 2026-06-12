import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navLinks, PHONE, LOGO } from '../data/site'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img
            src={LOGO}
            alt="KinetoMobility Dej"
            className="logo-img"
            width={52}
            height={52}
            decoding="async"
          />
          <span className="logo-text">
            Kineto<em>Mobility</em>
            <small>Dej</small>
          </span>
        </Link>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={`tel:+4${PHONE}`}
            className="btn btn-primary nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Programează-te
          </a>
        </nav>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meniu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
