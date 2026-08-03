---
# `{{site.*}}` placeholders resolve from site.md, so identity and contact
# details are written down exactly once.

hero:
  eyebrow: Hi, I'm {{site.name}}
  headline: Building high-performance, distributed systems at scale.
  subheadline: "{{site.title}} at {{site.company}} · {{site.location}}"
  portraitAlt: "{{site.name}}"
  actions:
    - label: View projects ↓
      href: "#projects"
      variant: primary
    - label: Email me
      href: "{{site.emailHref}}"
      variant: outline
      external: true
    - label: Resume
      href: "{{site.resumeUrl}}"
      variant: outline
      external: true

projects:
  id: projects
  eyebrow: Selected work
  heading: Projects
  limit: 4
  action:
    label: View all projects →
    href: /projects
    variant: outline

experience:
  id: experience
  eyebrow: Career so far
  heading: Experience

contact:
  id: contact
  eyebrow: Get in touch
  heading: Reach out any time — recruiters and collaborators welcome.
  actions:
    - label: Send me an email
      href: "{{site.emailHref}}"
      variant: primary
      external: true
    - label: LinkedIn
      href: "{{site.linkedIn}}"
      variant: outline
      external: true
    - label: GitHub
      href: "{{site.github}}"
      variant: outline
      external: true
    - label: All contact options →
      href: /contact
      variant: ghost
---

8+ years designing and building high-performance software that enhances
business productivity — system design, distributed systems, microservices,
databases, and CI/CD pipelines. I lead cross-functional teams in fast-paced,
deadline-driven environments to get projects shipped on time.
