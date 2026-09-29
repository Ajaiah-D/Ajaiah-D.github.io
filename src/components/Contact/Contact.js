import React from 'react'
import { contact } from '../../portfolio'
import Reveal from '../Reveal/Reveal'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section id="contact" className="section contact">
      <Reveal>
        <p className="contact__eyebrow">Contact</p>
        <h2 className="contact__title">Get in touch.</h2>
        <p className="contact__text">
          I&apos;m open to data analyst and analytics engineering roles. If
          you&apos;re hiring, have a question about one of these projects, or
          just want to talk data, email is the fastest way to reach me.
        </p>
        <a href={`mailto:${contact.email}`} className="btn contact__btn">
          Email me
        </a>
      </Reveal>
    </section>
  )
}

export default Contact
