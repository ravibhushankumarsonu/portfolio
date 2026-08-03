import type { FC } from 'react'
import './HomePage.css'
import ProjectGrid from '../../components/projects/ProjectGrid'
import Experiance from '../../components/experiance/Experiance'
import Button from '../../components/ui/Button'
import useProjects from '../../hooks/useProjects'
import { site, mailtoHref } from '../../data/site'

const HomePage: FC = () => {
  const { projects, loading, error } = useProjects({ limit: 4 })

  return (
    <>
      <section className="home-hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Hi, I'm {site.name}</span>
            <h1>Building high-performance, user-focused software.</h1>
            <h2>{site.title} · {site.location}</h2>
            <p className="lede">
              7.5+ years designing and shipping distributed systems, microservices, and
              large-scale platforms. Outside of engineering, I shoot and edit photography and
              build content on the side.
            </p>
            <div className="hero-actions">
              <Button href="#projects">View projects ↓</Button>
              <Button href={mailtoHref} variant="outline">Email me</Button>
              <Button href={site.resumeUrl} variant="ghost" target="_blank" rel="noopener noreferrer">
                Résumé
              </Button>
            </div>
          </div>
          <div className="hero-portrait">
            <img src="/logo.jpg" alt={site.name} />
          </div>
        </div>
      </section>

      <section className="section section-alt" id="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Selected work</span>
            <h2>Projects</h2>
          </div>

          {loading && <p className="muted">Loading projects…</p>}
          {error && <p style={{ color: '#dc2626' }}>Error: {error}</p>}
          {projects && <ProjectGrid projects={projects} />}

          <div className="section-footer">
            <Button href="/projects" variant="outline">View all projects →</Button>
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Career so far</span>
            <h2>Experience</h2>
          </div>
          <Experiance />
        </div>
      </section>

      <section className="section section-alt" id="contact">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-header" style={{ marginBottom: '1.25rem' }}>
            <span className="section-eyebrow">Get in touch</span>
            <h2>Reach out any time — recruiters and collaborators welcome.</h2>
          </div>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Button href={mailtoHref}>Send me an email</Button>
            <Button href={site.linkedIn} variant="outline" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Button>
            <Button href={site.github} variant="outline" target="_blank" rel="noopener noreferrer">
              GitHub
            </Button>
            <Button href="/contact" variant="ghost">All contact options →</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
