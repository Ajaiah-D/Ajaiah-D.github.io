import React from 'react'
import { contact } from '../../portfolio'
import Reveal from '../Reveal/Reveal'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section id="contact" className="section contact">
      <Reveal>
        <p className="contact__eyebrow">04. What&apos;s next?</p>
        <h2 className="contact__title">Let&apos;s work together.</h2>
        <p className="contact__text">
          I&apos;m currently open to data analyst and analytics engineering
          opportunities. Whether you have a role in mind, a question about my
          work, or just want to say hi, my inbox is always open.
        </p>
        <a href={`mailto:${contact.email}`} className="btn contact__btn">
          Say hello
        </a>
      </Reveal>
    </section>
  )
}

export default Contact
