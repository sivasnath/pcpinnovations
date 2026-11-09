import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { industries } from '../data/industries.js'
import { services } from '../data/services.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="header">
      <div className="wrap header__row">
        <Link to="/" className="brand" aria-label="PCP Innovations home">
          <Logo />
          <span>PCP INNOVATIONS</span>
        </Link>
        <button
          className="burger"
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="nav" className={'nav' + (open ? ' nav--open' : '')}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <div className="dd">
            <span className="dd__label" tabIndex={0}>Industries ▾</span>
            <div className="dd__panel dd__panel--wide">
              {industries.map((i) => (
                <Link key={i.slug} to={`/industries/${i.slug}`}>{i.name}</Link>
              ))}
            </div>
          </div>
          <div className="dd">
            <span className="dd__label" tabIndex={0}>Services ▾</span>
            <div className="dd__panel">
              {services.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`}>{s.name}</Link>
              ))}
            </div>
          </div>
          <NavLink to="/contact" className="nav__cta">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
