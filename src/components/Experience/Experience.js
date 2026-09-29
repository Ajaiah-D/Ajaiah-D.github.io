import React from 'react'
import { experience } from '../../portfolio'
import Reveal from '../Reveal/Reveal'
import './Experience.css'

const Experience = () => {
  if (!experience.length) return null

  return (
    <section id="experience" className="section experience">
      <Reveal>
        <h2 className="section__title">Experience</h2>
      </Reveal>

      <div className="experience__list">
        {experience.map(({ role, company, location, dates, current, points }) => (
          <Reveal key={`${company}-${role}`}>
            <article className="job">
              <div className="job__meta">
                <span className="job__dates">{dates}</span>
                {current && <span className="job__current">Current</span>}
              </div>

              <div className="job__body">
                <h3 className="job__role">
                  {role} <span className="job__company">· {company}</span>
                </h3>
                {location && <p className="job__location">{location}</p>}

                {points && (
                  <ul className="job__points">
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Experience
