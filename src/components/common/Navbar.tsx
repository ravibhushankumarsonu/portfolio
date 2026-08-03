import type { FC } from 'react'
import { useState } from 'react'
import './Navbar.css'
import type { ActionItem, LinkItem } from '../../content/schema'
import Button from '../ui/Button'

type NavbarProps = {
  brand: string
  links: LinkItem[]
  actions: ActionItem[]
  /** Screen-reader label for the mobile toggle, from ui.md. */
  toggleLabel: string
}

/** Presentational — every label and href comes from navigation.md. */
const Navbar: FC<NavbarProps> = ({ brand, links, actions, toggleLabel }) => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">
          {brand}
        </a>

        <nav className={`navbar-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {link.label}
            </a>
          ))}

          {actions.map((action) => (
            <Button
              key={action.href}
              href={action.href}
              variant={action.variant ?? 'primary'}
              size="sm"
              className="navbar-cta"
              onClick={close}
              {...(action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {action.label}
            </Button>
          ))}
        </nav>

        <button
          className="navbar-toggle"
          aria-label={toggleLabel}
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
