import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import './About.css'
import { about } from '../../portfolio'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <section id="about" className="about">
      <div className="about__glow" aria-hidden="true" />
      <div className="about__grid-bg" aria-hidden="true" />

      <div className="about__inner">
        <p className="about__eyebrow">Hi, my name is</p>
        {name && (
          <h1 className="about__name">
            {name}
            <span className="about__dot">.</span>
          </h1>
        )}
        {role && <h2 className="about__role">{role}</h2>}
        {description && <p className="about__desc">{description}</p>}

        <div className="about__contact">
          {resume && (
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <span className="btn btn--outline">Resume</span>
            </a>
          )}
          {social?.github && (
            <a
              href={social.github}
              className="link link--icon"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          )}
          {social?.linkedin && (
            <a
              href={social.linkedin}
              className="link link--icon"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
