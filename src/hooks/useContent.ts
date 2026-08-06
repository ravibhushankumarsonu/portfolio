import { useMemo } from 'react'
import { content } from '../content'
import type { ContentDocument } from '../content/schema'
import type { ProjectMeta } from '../content/schema'
import useAsync from './useAsync'

/**
 * One hook per content collection. Pages call these; components stay
 * presentational and receive the result as props.
 *
 * Each returns `{ data, loading, error }`. The underlying loader caches parsed
 * documents, so calling the same hook from several components is cheap.
 */

export const useUi = () => useAsync(content.ui, [])
export const useSite = () => useAsync(content.site, [])
export const useNavigation = () => useAsync(content.navigation, [])
export const useHomeContent = () => useAsync(content.home, [])
export const useAboutContent = () => useAsync(content.about, [])
export const useContactContent = () => useAsync(content.contact, [])
export const usePhotoContent = () => useAsync(content.photo, [])
export const useProjectsPageContent = () => useAsync(content.projectsPage, [])
export const useExperience = () => useAsync(content.experience, [])

type UseProjectsOptions = {
  featuredOnly?: boolean
  limit?: number
}

/**
 * Projects arrive already sorted (featured first, then newest) from the content
 * layer; this only narrows the list for a given surface.
 */
export function useProjects(options?: UseProjectsOptions) {
  const { featuredOnly, limit } = options ?? {}
  const { data, loading, error } = useAsync(content.projects, [])

  const projects = useMemo(() => {
    if (!data) return null
    let result: ContentDocument<ProjectMeta>[] = data
    if (featuredOnly) result = result.filter((p) => p.meta.featured)
    if (limit) result = result.slice(0, limit)
    return result
  }, [data, featuredOnly, limit])

  return { projects, loading, error }
}
