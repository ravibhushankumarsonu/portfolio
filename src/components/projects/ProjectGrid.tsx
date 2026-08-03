import type { FC } from 'react'
import './ProjectGrid.css'
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
            <span key={t} className="tag-pill">
              {t}
            </span>
          ))}
        </div>
        <div className="project-links">
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Live →
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              Repo →
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

const ProjectGrid: FC<Props> = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return <p className="project-empty">No projects to show yet.</p>
  }

  return (
    <div className="project-grid">
      {projects.map((p) => (
        <ProjectCard project={p} key={p.id} />
      ))}
    </div>
  )
}

export default ProjectGrid
