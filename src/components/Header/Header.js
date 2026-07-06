import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import './Header.css'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <a href="#about" className="header-logo" onClick={() => setMenuOpen(false)}>
        ajaiah<span className="header-logo__dot">.</span>darlington
      </a>

      <nav className={`header-nav ${menuOpen ? 'header-nav--open' : ''}`}>
        {NAV_LINKS.map(({ href, label }, i) => (
          <a
            key={href}
            href={href}
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            <span className="nav-link__number">0{i + 1}.</span> {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <ThemeToggle />
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  )
}

export default Header
