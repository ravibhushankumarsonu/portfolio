export type Project = {
  id: string
  title: string
  description: string
  thumbnail?: string
  url?: string
  repo?: string
  tags?: string[]
  featured?: boolean
  year?: number
}

export type ProjectsResponse = Project[]
