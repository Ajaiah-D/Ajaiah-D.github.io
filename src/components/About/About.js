import React, { useEffect, useRef } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import './About.css'
import { about } from '../../portfolio'

const ParticleGraph = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    const NODES = 38
    const accentColor = '#fc88e5'

    const nodes = Array.from({ length: NODES }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2.5 + 1.5,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(252, 136, 229, ${0.18 * (1 - dist / 130)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      // nodes
      nodes.forEach((n) => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = accentColor
        ctx.globalAlpha = 0.55
        ctx.fill()
        ctx.globalAlpha = 1
      })

      // move
      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="about__canvas" />
}

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <section id="about" className="about">
      <ParticleGraph />
      <div className="about__hero">
        {name && <h1><span className="about__name">{name}</span></h1>}
        {role && <p className="about__role">{role}</p>}
        {description && <p className="about__desc">{description}</p>}

        <div className="about__contact center">
          {resume && (
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <span className="btn btn--outline">Resume</span>
            </a>
          )}
          {social?.github && (
            <a href={social.github} className="link link--icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
          )}
          {social?.linkedin && (
            <a href={social.linkedin} className="link link--icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
