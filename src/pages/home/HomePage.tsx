import type { FC } from 'react'
import './HomePage.css'
import ExperienceTimeline from '../../components/experience/ExperienceTimeline'
import ProjectGrid from '../../components/projects/ProjectGrid'
import ActionRow from '../../components/ui/ActionRow'
import ContentBoundary from '../../components/ui/ContentBoundary'
import Markdown from '../../components/ui/Markdown'
import SectionHeading from '../../components/ui/SectionHeading'
import {
  useExperience,
  useHomeContent,
  useProjects,
  useSite,
  useUi,
} from '../../hooks/useContent'

/**
 * Container: reads content and hands it to presentational components.
 * Every visible string originates in src/content/pages/home.md.
 */
const HomePage: FC = () => {
  const home = useHomeContent()
  const site = useSite()
  const experience = useExperience()
  const ui = useUi().data?.meta

  // The home page shows a capped list; the limit is a content decision.
  const limit = home.data?.meta.projects.limit
  const { projects, loading: projectsLoading, error: projectsError } = useProjects({ limit })

  return (
    <ContentBoundary state={home} loadingLabel={ui?.loading}>
      {(doc) => {
        const { hero, projects: projectsSection, experience: experienceSection, contact } =
          doc.meta

        return (
          <>
            <section className="home-hero">
              <div className="hero-inner">
                <div className="hero-copy">
                  <span className="hero-eyebrow">{hero.eyebrow}</span>
                  <h1>{hero.headline}</h1>
                  <p className="hero-subheadline">{hero.subheadline}</p>
                  <Markdown html={doc.html} className="hero-lede prose" />
                  <ActionRow actions={hero.actions} />
                </div>
                <div className="hero-portrait">
                  <img src={site.data?.meta.avatar} alt={hero.portraitAlt} />
                </div>
              </div>
            </section>

            <section className="section section-alt" id={projectsSection.id}>
              <div className="container">
                <SectionHeading header={projectsSection} />

                <ContentBoundary
                  state={{ data: projects, loading: projectsLoading, error: projectsError }}
                  loadingLabel={ui?.loading}
                >
                  {(items) =>
                    ui ? <ProjectGrid projects={items} labels={ui} /> : null
                  }
                </ContentBoundary>

                <div className="section-footer home-section-footer">
                  <ActionRow actions={[projectsSection.action]} />
                </div>
              </div>
            </section>

            <section className="section" id={experienceSection.id}>
              <div className="container">
                <SectionHeading header={experienceSection} />
                <ContentBoundary state={experience} loadingLabel={ui?.loading}>
                  {(entries) => <ExperienceTimeline entries={entries} />}
                </ContentBoundary>
              </div>
            </section>

            <section className="section section-alt" id={contact.id}>
              <div className="container section-center">
                <SectionHeading header={contact} tight />
                <ActionRow actions={contact.actions} center />
              </div>
            </section>
          </>
        )
      }}
    </ContentBoundary>
  )
}

export default HomePage
