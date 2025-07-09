import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav__list">
        <li className="nav__list-item">
          <a href="#projects" className="nav__link">Projects</a>
        </li>
        <li className="nav__list-item">
          <a href="#certificates" className="nav__link">Certificates</a>
        </li>
        <li className="nav__list-item">
          <a href="#contact" className="nav__link">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
