import type { FC } from 'react'
import { useState } from 'react'
import { site, mailtoHref } from '../../data/site'

const Navbar: FC = () => {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">
          {site.name}
        </a>

        <nav className={`navbar-links ${open ? 'open' : ''}`}>
          <a href="/#projects" onClick={close}>Projects</a>
          <a href="/#experience" onClick={close}>Experience</a>
          <a href="/about" onClick={close}>About</a>
          <a href="/#contact" onClick={close}>Contact</a>
          <a
            className="btn btn-outline btn-sm navbar-cta"
            href={site.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            LinkedIn
          </a>
          <a className="btn btn-primary btn-sm navbar-cta" href={mailtoHref} onClick={close}>
            Email me
          </a>
        </nav>

        <button
          className="navbar-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
