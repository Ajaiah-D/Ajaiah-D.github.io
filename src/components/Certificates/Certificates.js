import React from 'react'
import { certificates, degrees } from '../../portfolio'
import './Certificates.css'

const Certificates = () => {
  return (
    <section id="certificates" className="section certificates">
      <h2 className="section__title">Education & Certifications</h2>

      <div className="education__grid">
        {degrees.map(({ degree, school, year }, index) => (
          <div key={index} className="degree-card">
            <p className="degree-card__degree">{degree}</p>
            <p className="degree-card__school">{school}</p>
            <span className="degree-card__year">{year}</span>
          </div>
        ))}
      </div>

      <h3 className="subsection__title">Certifications</h3>

      <div className="certificates__grid">
        {certificates.map(({ title, issuer, image, link }, index) => (
          <a
            key={index}
            href={link}
            className="certificate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image}
              alt={`${title} certificate`}
              className="certificate__image"
            />
            <p className="certificate__title">{title}</p>
            <p className="certificate__issuer">{issuer}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Certificates
