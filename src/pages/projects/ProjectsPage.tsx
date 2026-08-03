import type { FC } from 'react'
import './ProjectsPage.css'
import ProjectGrid from '../../components/projects/ProjectGrid'
import ContentBoundary from '../../components/ui/ContentBoundary'
import Markdown from '../../components/ui/Markdown'
import { useProjects, useProjectsPageContent, useUi } from '../../hooks/useContent'

/**
 * Container: reads content and hands it to presentational components.
 * Every visible string originates in src/content/pages/projects.md.
 */
const ProjectsPage: FC = () => {
  const page = useProjectsPageContent()
  const { projects, loading, error } = useProjects()
  const ui = useUi().data?.meta

  return (
    <section className="container projects-page">
      <ContentBoundary state={page} loadingLabel={ui?.loading}>
        {(doc) => (
          <>
            {doc.meta.eyebrow && <span className="section-eyebrow">{doc.meta.eyebrow}</span>}
            <h1>{doc.meta.heading}</h1>
            <Markdown html={doc.html} className="projects-intro prose" />
          </>
        )}
      </ContentBoundary>

      <ContentBoundary
        state={{ data: projects, loading, error }}
        loadingLabel={ui?.loading}
      >
        {(items) => (ui ? <ProjectGrid projects={items} labels={ui} /> : null)}
      </ContentBoundary>
    </section>
  )
}

export default ProjectsPage
