import React, { useEffect, useState } from 'react'
import './ThemeToggle.css'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const urlTheme = new URLSearchParams(window.location.search).get('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const savedTheme =
      urlTheme || localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light')
    document.documentElement.setAttribute('data-theme', savedTheme)
    setTheme(savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
      {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  )
}

export default ThemeToggle
