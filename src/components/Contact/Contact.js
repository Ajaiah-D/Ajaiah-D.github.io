import React from 'react'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section id="contact" className="section contact center">
      <h2 className="section__title">Contact</h2>
      <a href={`mailto:${contact.email}`} className="btn btn--outline">
        Email me
      </a>
    </section>
  )
}

export default Contact
