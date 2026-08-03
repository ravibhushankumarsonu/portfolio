export type ExperienceEntry = {
  role: string
  company: string
  period: string
  location?: string
  description: string
  skills: string[]
}

// Single source of truth for work history — used by the Home page timeline
// and the About page. TODO: verify exact dates/bullets before publishing.
export const experience: ExperienceEntry[] = [
  {
    role: 'Software Engineer',
    company: 'Flipkart',
    period: '2022 — Present',
    location: 'Bangalore, India',
    description:
      'Designing and building high-performance, distributed systems at scale. Working across system design, microservices, big-data pipelines, and CI/CD automation to improve reliability and developer velocity.',
    skills: ['Java', 'System Design', 'Distributed Systems', 'Microservices', 'CI/CD'],
  },
  {
    role: 'Web Developer',
    company: 'Startup Labs',
    period: '2020 — 2022',
    description:
      'Implemented responsive SaaS dashboards end-to-end and shipped customer-facing features in a fast-moving startup environment.',
    skills: ['React', 'Node.js', 'CSS', 'Vite'],
  },
]

export const skills = [
  'Java',
  'System Design',
  'Distributed Systems',
  'Microservices',
  'Big Data Pipelines',
  'CI/CD Automation',
  'React',
  'Node.js',
  'TypeScript',
]
