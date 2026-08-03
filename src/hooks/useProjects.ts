import { useEffect, useMemo, useState } from 'react'
import type { Project } from '../types/project'
import projectsData from '../data/projects.json'

type UseProjectsOptions = {
  featuredOnly?: boolean
  limit?: number
}

export function useProjects(options?: UseProjectsOptions) {
  const [data, setData] = useState<Project[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      try {
        if (!cancelled) setData(projectsData)
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : String(err))
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const processed = useMemo(() => {
    if (!data) return null
    const cloned = [...data]
    // Prioritize featured projects first, then by year desc
    cloned.sort((a, b) => {
      if ((b.featured ? 1 : 0) - (a.featured ? 1 : 0) !== 0)
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      return (b.year ?? 0) - (a.year ?? 0)
    })
    let result = cloned
    if (options?.featuredOnly) result = result.filter((p) => p.featured)
    if (options?.limit) result = result.slice(0, options.limit)
    return result
  }, [data, options?.featuredOnly, options?.limit])

  return { projects: processed, loading, error }
}

export default useProjects
