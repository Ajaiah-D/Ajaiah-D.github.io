import React from 'react'
import { certificates } from '../../portfolio'
import './Certificates.css'

const Certificates = () => {
  if (!certificates.length) return null

  return (
    <section id="certificates" className="section certificates">
      <h2 className="section__title">Certificates</h2>
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
            <p className="certificate__caption">{title}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Certificates
