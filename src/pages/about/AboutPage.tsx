import type { FC } from 'react'
import './About.css'
import { experience, skills } from '../../data/experience'

const AboutPage: FC = () => {
  const intro =
    "I'm an experienced software engineer with 7.5+ years designing and building " +
    'high-performance systems — system design, distributed systems, microservices, ' +
    'big-data pipelines, and CI/CD automation. Outside of engineering, I pursue ' +
    'photography and content creation.'

  return (
    <section className="about-page">
      <header className="about-header">
        <img src="/logo.jpg" alt="Ravibhushan Kumar" className="about-avatar" />
        <div>
          <h1>About</h1>
          <p>{intro}</p>
        </div>
      </header>

      <div className="about-grid">
        <div>
          <section className="about-section">
            <h2>Experience</h2>
            {experience.map((e) => (
              <article className="about-entry" key={`${e.role}-${e.company}`}>
                <h3>
                  {e.role} <span className="company">— {e.company}</span>
                </h3>
                <p className="period">
                  {e.period}
                  {e.location ? ` · ${e.location}` : ''}
                </p>
                <p>{e.description}</p>
              </article>
            ))}
          </section>

          <section className="about-section">
            <h2>Education</h2>
            {/* TODO: replace with your real degree/university/years */}
            <p className="muted">B.S. in Computer Science — Your University (2016 — 2020)</p>
          </section>
        </div>

        <aside>
          <section className="about-section">
            <h2>Skills</h2>
            <ul className="about-skills">
              {skills.map((s) => (
                <li key={s} className="skill-pill">
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section className="about-section">
            <h2>Contact</h2>
            <p className="muted">
              See the <a href="/contact">Contact</a> page for details.
            </p>
          </section>
        </aside>
      </div>
    </section>
  )
}

export default AboutPage
