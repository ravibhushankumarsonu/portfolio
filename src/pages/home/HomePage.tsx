import type { FC } from 'react'
import ProjectCarousel from '../../components/projects/ProjectCarousel'
import useProjects from '../../hooks/useProjects'
import './HomePage.css'
import Experiance from '../../components/experiance/Experiance'

const HomePage: FC = () => {
  const { projects, loading, error } = useProjects({ limit: 10 })
  return (
    <>
      <section className="home-hero">
        <div className="hero-container">
          <div className="hero-image-column">
            <img src="logo.jpg" alt="Logo" className="hero-image" />
          </div>
          <div className="hero-content-column">
            <h1>I'm Ravibhushan Kumar</h1>
            <h2>Senior software Engineer specializing in building high-performance, user-focused applications.</h2>
            <p>With several years of industry experience across modern web technologies, system design, and product development, I transform ideas into robust solutions. Outside of tech, I pursue photography, creating visual narratives inspired by travel, culture, and everyday moments.</p>
          </div>
        </div>
      </section>
      <section className="home-projects-section">
        {loading && <p>Loading projects…</p>}
        {error && <p style={{color: 'var(--error, #ef4444)'}}>Error: {error}</p>}
        {projects && projects.length > 0 && (
        <ProjectCarousel projects={projects} />
        )}
      </section>
      <Experiance />
    </>
  )
}

export default HomePage


