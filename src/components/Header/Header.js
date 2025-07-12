import React from 'react'
// import { Link } from 'react-scroll'
import './Header.css'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const Header = () => {
  return (
    <header className="site-header">
      <nav className="header-nav">
        <a href="#about" className="nav-link">About</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#certificates" className="nav-link">Certificates</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
      <ThemeToggle />
    </header>
  )
}

export default Header
// This is a simple header component for a React application.
// It imports React and a CSS file for styling, then defines a functional component