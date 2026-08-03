import { loadDocument, loadCollection } from './loader'
import type {
  AboutMeta,
  ContentDocument,
  ContactMeta,
  ExperienceMeta,
  HomeMeta,
  NavigationMeta,
  ProjectMeta,
  ProjectsPageMeta,
  SiteMeta,
  UiMeta,
} from './schema'

/**
 * The typed content API. Hooks call these instead of passing slug strings
 * around, so a renamed or moved content file breaks in exactly one place.
 */

/** Most recent role first. */
const byRecency = (
  a: ContentDocument<ExperienceMeta>,
  b: ContentDocument<ExperienceMeta>,
) => b.meta.order - a.meta.order

/** Featured first, then newest. */
const byProminence = (
  a: ContentDocument<ProjectMeta>,
  b: ContentDocument<ProjectMeta>,
) => {
  const featured = Number(b.meta.featured ?? false) - Number(a.meta.featured ?? false)
  if (featured !== 0) return featured
  return (b.meta.year ?? 0) - (a.meta.year ?? 0)
}

export const content = {
  ui: () => loadDocument<UiMeta>('ui'),
  site: () => loadDocument<SiteMeta>('site'),
  navigation: () => loadDocument<NavigationMeta>('navigation'),
  home: () => loadDocument<HomeMeta>('pages/home'),
  about: () => loadDocument<AboutMeta>('pages/about'),
  contact: () => loadDocument<ContactMeta>('pages/contact'),
  projectsPage: () => loadDocument<ProjectsPageMeta>('pages/projects'),
  experience: () => loadCollection<ExperienceMeta>('experience', byRecency),
  projects: () => loadCollection<ProjectMeta>('projects', byProminence),
}

export type { ContentDocument } from './schema'
