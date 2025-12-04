import type { FC } from 'react'
import { useState } from 'react'
import type { Project } from '../../types/project'

type Props = {
  projects: Project[]
}

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  return (
    <article className="project-card">
      {project.thumbnail && (
        <img src={project.thumbnail} alt={project.title} className="project-thumb" />
      )}
      <div className="project-body">
        <h3>{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-meta">
          {project.tags?.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div className="project-links">
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer">Live</a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer">Repo</a>
          )}
        </div>
      </div>
    </article>
  )
}

const ProjectCarousel: FC<Props> = ({ projects }) => {
  const [index, setIndex] = useState(0)
  if (!projects || projects.length === 0) return <div>No projects available.</div>

  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length)
  const next = () => setIndex((i) => (i + 1) % projects.length)

  return (
    <section className="project-carousel">
      <button className="carousel-btn prev" onClick={prev} aria-label="Previous project">◀</button>
      <div className="carousel-track" style={{transform: `translateX(-${index * 100}%)`}}>
        {projects.map((p) => (
          <div className="carousel-item" key={p.id}>
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
      <button className="carousel-btn next" onClick={next} aria-label="Next project">▶</button>
      <div className="carousel-dots">
        {projects.map((_, i) => (
          <button key={i} className={`dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)} aria-label={`Go to project ${i + 1}`} />
        ))}
      </div>
    </section>
  )
}

export default ProjectCarousel
