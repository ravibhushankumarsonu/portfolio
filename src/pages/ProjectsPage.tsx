import type { FC } from 'react'
import ProjectCarousel from '../components/projects/ProjectCarousel'
import useProjects from '../hooks/useProjects'

const ProjectsPage: FC = () => {
  const { projects, loading, error } = useProjects({ limit: 10 })

  return (
    <section style={{maxWidth: 1100, margin: '0 auto', padding: '1.5rem'}}>
      <h1>Projects</h1>
      <p>Showcase your best work and case studies here.</p>

      {loading && <p>Loading projects…</p>}
      {error && <p style={{color: 'var(--error, #ef4444)'}}>Error: {error}</p>}

      {projects && projects.length > 0 && (
        <ProjectCarousel projects={projects} />
      )}
    </section>
  )
}

export default ProjectsPage


