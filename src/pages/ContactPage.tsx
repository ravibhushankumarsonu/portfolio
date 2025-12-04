import type { FC } from 'react'

const ContactPage: FC = () => {
  const phone = '+91 8603436230'
  const email = 'ravibhushankumarsonu@gmail.com'
  const linkedIn = 'https://www.linkedin.com/in/ravibhushankumarsonu'
  const github = 'https://github.com/ravibhushankumarsonu'
  const location = 'Bangalore, India'

  return (
    <section className="contact-page" style={{maxWidth: 900, margin: '0 auto', padding: '1rem'}}>
      <h1>Contact</h1>
      <p>If you'd like to work together or just say hello, reach out via any of the channels below.</p>

      <div className="contact-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.25rem'}}>
        <div>
          <h2 style={{margin: '0 0 0.5rem 0'}}>Phone</h2>
          <p style={{margin: 0}}>
            <a href={`tel:${phone.replace(/[^+0-9]/g, '')}`}>{phone}</a>
          </p>

          <h2 style={{margin: '1rem 0 0.5rem 0'}}>Email</h2>
          <p style={{margin: 0}}>
            <a href={`mailto:${email}`}>{email}</a>
          </p>

          <h2 style={{margin: '1rem 0 0.5rem 0'}}>Location</h2>
          <p style={{margin: 0}}>{location}</p>
        </div>

        <div>
          <h2 style={{margin: '0 0 0.5rem 0'}}>Online</h2>
          <p style={{margin: 0}}>
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
          <p style={{margin: '0.5rem 0 0 0'}}>
            <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>

          <h2 style={{margin: '1rem 0 0.5rem 0'}}>Other</h2>
          <p style={{margin: 0}}>Available for freelance, full-time, and contract work.</p>
        </div>
      </div>

      <div style={{marginTop: '1.5rem'}}>
        <p style={{margin: 0}}>Prefer a different channel? You can also message me on LinkedIn or open a GitHub issue on one of my projects.</p>
      </div>
    </section>
  )
}

export default ContactPage


