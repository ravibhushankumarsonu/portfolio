import type { FC } from 'react'
import './ProjectGrid.css'
import type { ContentDocument, ProjectMeta, UiMeta } from '../../content/schema'
import Markdown from '../ui/Markdown'

type ProjectGridProps = {
  projects: ContentDocument<ProjectMeta>[]
  /** Link and empty-state labels, from ui.md. */
  labels: Pick<UiMeta, 'projectsEmpty' | 'projectLive' | 'projectRepo'>
}

type ProjectCardProps = {
  project: ContentDocument<ProjectMeta>
  labels: Pick<UiMeta, 'projectLive' | 'projectRepo'>
}

const ProjectCard: FC<ProjectCardProps> = ({ project, labels }) => {
  const { title, thumbnail, tags, url, repo } = project.meta

  return (
    <article className="project-card">
      {thumbnail && <img src={thumbnail} alt={title} className="project-thumb" />}
      <div className="project-body">
        <h3>{title}</h3>
        <Markdown html={project.html} className="project-desc prose" />
        <ul className="pill-list">
          {tags?.map((tag) => (
            <li key={tag} className="pill">
              {tag}
            </li>
          ))}
        </ul>
        <div className="project-links">
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer">
              {labels.projectLive}
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer">
              {labels.projectRepo}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

/** Presentational — projects come from the projects/ content collection. */
const ProjectGrid: FC<ProjectGridProps> = ({ projects, labels }) => {
  if (projects.length === 0) {
    return <p className="project-empty">{labels.projectsEmpty}</p>
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} labels={labels} />
      ))}
    </div>
  )
}

export default ProjectGrid
