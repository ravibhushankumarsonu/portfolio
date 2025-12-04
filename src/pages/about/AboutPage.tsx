import type { FC } from 'react'

const AboutPage: FC = () => {
  const intro =
    "I am an experienced Software Engineer with 7.5+ years in designing and developing " +
    "high-performance systems. My expertise spans system design, distributed systems, " +
    "microservices, big data pipelines, and CI/CD automation. I am passionate about " +
    "solving complex engineering challenges, improving system efficiency, and " +
    "building scalable platforms that drive business productivity. With strong " +
    "problem-solving skills and a collaborative mindset, I thrive in fast-paced, " +
    "dynamic environments."
  const skills = ['Java', 'Software Engineering', 'Vite', 'Node.js', 'CSS', 'Testing']
  const experience = [
    {
      role: 'Software Engineer',
      company: 'Flipkart',
      period: '2022 — Present',
      desc: 'Building component-driven UIs and improving web performance.'
    },
    {
      role: 'Web Developer',
      company: 'Startup Labs',
      period: '2020 — 2022',
      desc: 'Implemented responsive SaaS dashboards and shipped features.'
    }
  ]

  return (
    <section className="about-page" style={{maxWidth: 1100, margin: '0 auto', padding: '1.5rem'}}>
      <header style={{display: 'flex', alignItems: 'center', gap: '1.25rem'}}>
        <div className="about-avatar" aria-hidden />
        <div>
          <h1 style={{margin: 0}}>About</h1>
          <p style={{margin: '0.5rem 0 0 0', color: 'var(--muted, #9ca3af)'}}>{intro}</p>
        </div>
      </header>

      <div className="about-grid" style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', marginTop: '1.5rem'}}>
        <div>
          <section className="about-section">
            <h2>Experience</h2>
            {experience.map((e) => (
              <article key={e.role} style={{marginBottom: '1rem'}}>
                <h3 style={{margin: 0}}>{e.role} <small style={{color: 'var(--muted, #9ca3af)', fontWeight: 500}}> — {e.company}</small></h3>
                <div style={{color: 'var(--muted, #9ca3af)', fontSize: '0.9rem'}}>{e.period}</div>
                <p style={{marginTop: '0.25rem'}}>{e.desc}</p>
              </article>
            ))}
          </section>

          <section className="about-section">
            <h2>Education</h2>
            <p style={{margin: 0}}>B.S. in Computer Science — Your University (2016 — 2020)</p>
          </section>
        </div>

        <aside>
          <section className="about-section">
            <h2>Skills</h2>
            <ul style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', padding: 0, margin: 0, listStyle: 'none'}}>
              {skills.map((s) => (
                <li key={s} className="skill-pill">{s}</li>
              ))}
            </ul>
          </section>

          <section className="about-section">
            <h2>Contact</h2>
            <p style={{margin: 0}}>See the <a href="/contact">Contact</a> page for details.</p>
          </section>
        </aside>
      </div>
    </section>
  )
}

export default AboutPage


