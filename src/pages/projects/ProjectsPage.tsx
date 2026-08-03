import type { FC } from 'react'
import ProjectGrid from '../../components/projects/ProjectGrid'
import useProjects from '../../hooks/useProjects'

const ProjectsPage: FC = () => {
  const { projects, loading, error } = useProjects()

  return (
    <section className="container" style={{ paddingTop: '4rem', paddingBottom: '5rem' }}>
      <h1>Projects</h1>
      <p className="muted" style={{ marginTop: '0.5rem', maxWidth: '60ch' }}>
        A selection of things I've built and shipped.
      </p>

      {loading && <p className="muted">Loading projects…</p>}
      {error && <p style={{ color: '#dc2626' }}>Error: {error}</p>}
      {projects && <ProjectGrid projects={projects} />}
    </section>
  )
}

export default ProjectsPage
