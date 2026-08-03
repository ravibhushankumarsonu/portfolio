import type { FC } from 'react'
import './ExperienceTimeline.css'
import type { ContentDocument, ExperienceMeta } from '../../content/schema'
import Markdown from '../ui/Markdown'

type ExperienceTimelineProps = {
  entries: ContentDocument<ExperienceMeta>[]
}

/** Presentational — entries come from the experience/ content collection. */
const ExperienceTimeline: FC<ExperienceTimelineProps> = ({ entries }) => (
  <ul className="experience-list">
    {entries.map((entry) => (
      <li key={entry.slug} className="experience-item">
        <time className="experience-date">{entry.meta.period}</time>
        <div className="experience-content">
          <h3>{entry.meta.role}</h3>
          <p className="experience-company">
            {entry.meta.company}
            {entry.meta.location ? ` · ${entry.meta.location}` : ''}
          </p>
          <Markdown html={entry.html} className="experience-description prose" />
          <ul className="pill-list">
            {entry.meta.skills.map((skill) => (
              <li key={skill} className="pill">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </li>
    ))}
  </ul>
)

export default ExperienceTimeline
