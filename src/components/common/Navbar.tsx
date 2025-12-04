import type { FC } from 'react'

const Navbar: FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">Ravibhushan Kumar</div>
        <nav className="navbar-links">
          {/* Replace with router Links later */}
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar


