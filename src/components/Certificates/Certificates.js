import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch'
import { certificates, degrees } from '../../portfolio'
import Reveal from '../Reveal/Reveal'
import './Certificates.css'

const Certificates = () => {
  return (
    <section id="education" className="section certificates">
      <Reveal>
        <h2 className="section__title">
          Education &amp; Certifications
        </h2>
      </Reveal>

      <Reveal>
        <div className="education__grid">
          {degrees.map(({ degree, school, year }) => (
            <div key={degree} className="degree-card">
              <span className="degree-card__year">{year}</span>
              <p className="degree-card__degree">{degree}</p>
              <p className="degree-card__school">{school}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <h3 className="subsection__title">Certifications</h3>

        <div className="certificates__grid">
          {certificates.map(({ title, issuer, image, link }) => {
            const content = (
              <>
                <img
                  src={image}
                  alt={`${title} certificate`}
                  className="certificate__image"
                />
                <div className="certificate__info">
                  <p className="certificate__title">{title}</p>
                  <p className="certificate__issuer">{issuer}</p>
                </div>
              </>
            )

            return link ? (
              <a
                key={title}
                href={link}
                className="certificate"
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
                <LaunchIcon className="certificate__arrow" />
              </a>
            ) : (
              <div key={title} className="certificate certificate--static">
                {content}
              </div>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}

export default Certificates
