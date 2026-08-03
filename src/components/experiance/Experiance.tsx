import type { FC } from 'react'
import './Experiance.css'
import { experience } from '../../data/experience'

const Experiance: FC = () => {
  return (
    <ul className="experience-list">
      {experience.map((exp) => (
        <li key={`${exp.role}-${exp.company}`} className="experience-item">
          <time className="experience-date">{exp.period}</time>
          <div className="timeline-content">
            <h3>{exp.role}</h3>
            <p className="experience-company">
              {exp.company}
              {exp.location ? ` · ${exp.location}` : ''}
            </p>
            <p className="experience-description">{exp.description}</p>
            <div className="experience-skills">
              {exp.skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Experiance
