import type { FC } from 'react'
import './Contact.css'
import { site, mailtoHref, telHref } from '../../data/site'

const ContactPage: FC = () => {
  return (
    <section className="contact-page">
      <h1>Contact</h1>
      <p className="muted">
        Recruiter, collaborator, or just want to say hello — pick whichever channel is easiest
        for you.
      </p>

      <div className="contact-grid">
        <div className="contact-block">
          <h2>Email</h2>
          <p>
            <a href={mailtoHref}>{site.email}</a>
          </p>

          <h2>Phone</h2>
          <p>
            <a href={telHref}>{site.phone}</a>
          </p>

          <h2>Location</h2>
          <p className="muted">{site.location}</p>
        </div>

        <div className="contact-block">
          <h2>Online</h2>
          <p>
            <a href={site.linkedIn} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
          <p>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>

          <h2>Availability</h2>
          <p className="muted">Open to interesting full-time and consulting opportunities.</p>
        </div>
      </div>

      <p className="contact-note">
        Prefer a different channel? Message me on LinkedIn or open an issue on one of my GitHub
        projects.
      </p>
    </section>
  )
}

export default ContactPage
