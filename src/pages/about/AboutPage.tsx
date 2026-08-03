import type { FC } from 'react'
import './About.css'
import ContentBoundary from '../../components/ui/ContentBoundary'
import Markdown from '../../components/ui/Markdown'
import { renderInline } from '../../content/loader'
import { useAboutContent, useExperience, useSite, useUi } from '../../hooks/useContent'

/**
 * Container: reads content and hands it to presentational components.
 * Every visible string originates in src/content/pages/about.md.
 */
const AboutPage: FC = () => {
  const about = useAboutContent()
  const experience = useExperience()
  const site = useSite().data?.meta
  const ui = useUi().data?.meta

  return (
    <ContentBoundary state={about} loadingLabel={ui?.loading}>
      {(doc) => {
        const meta = doc.meta

        return (
          <section className="about-page">
            <header className="about-header">
              {site && <img src={site.avatar} alt={site.name} className="about-avatar" />}
              <div>
                <h1>{meta.heading}</h1>
                <Markdown html={doc.html} className="about-intro prose" />
              </div>
            </header>

            <div className="about-grid">
              <div>
                <section className="about-section">
                  <h2>{meta.experienceHeading}</h2>
                  <ContentBoundary state={experience} loadingLabel={ui?.loading}>
                    {(entries) => (
                      <>
                        {entries.map((entry) => (
                          <article className="about-entry" key={entry.slug}>
                            <h3>
                              {entry.meta.role}{' '}
                              <span className="company">— {entry.meta.company}</span>
                            </h3>
                            <p className="period">
                              {entry.meta.period}
                              {entry.meta.location ? ` · ${entry.meta.location}` : ''}
                            </p>
                            <Markdown html={entry.html} className="prose" />
                          </article>
                        ))}
                      </>
                    )}
                  </ContentBoundary>
                </section>

                <section className="about-section">
                  <h2>{meta.educationHeading}</h2>
                  {meta.education.map((entry) => (
                    <p className="muted" key={`${entry.degree}-${entry.institution}`}>
                      {entry.degree} — {entry.institution} ({entry.period})
                      {entry.detail ? ` · ${entry.detail}` : ''}
                    </p>
                  ))}
                </section>
              </div>

              <aside>
                <section className="about-section">
                  <h2>{meta.skillsHeading}</h2>
                  <ul className="pill-list">
                    {meta.skills.map((skill) => (
                      <li key={skill} className="pill pill-lg">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="about-section">
                  <h2>{meta.contactHeading}</h2>
                  {/* contactNote may contain an inline markdown link */}
                  <Markdown
                    as="p"
                    className="muted"
                    html={renderInline(meta.contactNote)}
                  />
                </section>
              </aside>
            </div>
          </section>
        )
      }}
    </ContentBoundary>
  )
}

export default AboutPage
