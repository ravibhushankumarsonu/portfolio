import { parse as parseYaml } from 'yaml'
import { marked } from 'marked'
import type { ContentDocument } from './schema'

/**
 * The single place that knows content is authored as markdown.
 *
 * Everything above this module (hooks, pages, components) sees plain typed
 * objects. Swapping markdown for a CMS or an HTTP API means rewriting this
 * file and nothing else.
 */

/**
 * Vite resolves this glob at build time into a map of lazy dynamic imports, so
 * each content file becomes its own async chunk — that is what makes the
 * content hooks genuinely async rather than fake-async over a static import.
 */
const files = import.meta.glob('./**/*.md', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/

/** `./projects/oss-lib.md` -> `projects/oss-lib` */
function toSlug(path: string): string {
  return path.replace(/^\.\//, '').replace(/\.md$/, '')
}

/** `projects/oss-lib` -> `./projects/oss-lib.md` */
function toPath(slug: string): string {
  return `./${slug}.md`
}

/**
 * Content is authored in this repo, so the rendered HTML is trusted the same
 * way the .tsx files are. Do not point this loader at user-submitted markdown
 * without adding sanitization.
 */
function render(markdown: string): string {
  return marked.parse(markdown, { async: false })
}

/**
 * Render a short frontmatter string that may contain inline markdown (links,
 * emphasis) without wrapping it in a <p>. Same trust boundary as `render`.
 */
export function renderInline(markdown: string): string {
  return marked.parseInline(markdown, { async: false })
}

function parseDocument<T>(slug: string, raw: string): ContentDocument<T> {
  const match = FRONTMATTER.exec(raw)

  if (!match) {
    throw new Error(
      `Content file "${slug}.md" is missing a --- frontmatter block. ` +
        `Every content file needs frontmatter, even if it only holds a heading.`,
    )
  }

  const [, frontmatter, body] = match
  const meta = (parseYaml(frontmatter) ?? {}) as T
  const trimmed = body.trim()

  return { meta, body: trimmed, html: render(trimmed), slug }
}

const SITE_SLUG = 'site'

/** Matches `{{site.email}}` and friends, tolerating inner whitespace. */
const SITE_TOKEN = /\{\{\s*site\.([a-zA-Z]+)\s*\}\}/g

/**
 * Replaces `{{site.*}}` placeholders anywhere in a document — frontmatter
 * strings, nested lists, and the rendered body alike.
 *
 * This is what lets navigation.md write `{{site.email}}` instead of copying the
 * address: site.md stays the only place a contact detail is written down, so
 * editing it there updates every surface at once.
 */
function interpolate<V>(value: V, site: Record<string, unknown>): V {
  if (typeof value === 'string') {
    return value.replace(SITE_TOKEN, (match, key: string) => {
      const replacement = site[key]
      return replacement === undefined ? match : String(replacement)
    }) as V
  }

  if (Array.isArray(value)) {
    return value.map((entry) => interpolate(entry, site)) as V
  }

  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, interpolate(entry, site)]),
    ) as V
  }

  return value
}

function applySite<T>(
  doc: ContentDocument<T>,
  site: Record<string, unknown>,
): ContentDocument<T> {
  return {
    ...doc,
    meta: interpolate(doc.meta, site),
    body: interpolate(doc.body, site),
    html: interpolate(doc.html, site),
  }
}

/**
 * Parsed documents are cached by slug. Several components ask for site.md on
 * every render (nav, footer, hero), and without this each would re-fetch and
 * re-parse it.
 */
const cache = new Map<string, Promise<ContentDocument<unknown>>>()

function read<T>(slug: string): Promise<ContentDocument<T>> {
  const cached = cache.get(slug)
  if (cached) return cached as Promise<ContentDocument<T>>

  const load = files[toPath(slug)]
  if (!load) {
    const available = Object.keys(files).map(toSlug).sort().join(', ')
    throw new Error(`No content file for "${slug}". Available: ${available}`)
  }

  const promise = load()
    .then(async (raw) => {
      const doc = parseDocument<T>(slug, raw)
      // site.md defines the tokens, so it can't reference them itself.
      if (slug === SITE_SLUG) return doc

      const site = await read<Record<string, unknown>>(SITE_SLUG)
      return applySite(doc, site.meta)
    })
    .catch((err: unknown) => {
      // Don't cache failures — a fixed file should recover on next render.
      cache.delete(slug)
      throw err
    })

  cache.set(slug, promise as Promise<ContentDocument<unknown>>)
  return promise
}

/** Load one content file, e.g. `loadDocument<SiteMeta>('site')`. */
export function loadDocument<T>(slug: string): Promise<ContentDocument<T>> {
  try {
    return read<T>(slug)
  } catch (err) {
    return Promise.reject(err)
  }
}

/**
 * Load every file in a directory, e.g. `loadCollection<ProjectMeta>('projects')`.
 * Results are sorted by `compare` when given, otherwise by slug.
 */
export function loadCollection<T>(
  dir: string,
  compare?: (a: ContentDocument<T>, b: ContentDocument<T>) => number,
): Promise<ContentDocument<T>[]> {
  const prefix = `./${dir}/`
  const slugs = Object.keys(files)
    .filter((path) => path.startsWith(prefix))
    .map(toSlug)
    .sort()

  if (slugs.length === 0) {
    return Promise.reject(new Error(`No content files found in "${dir}/".`))
  }

  return Promise.all(slugs.map((slug) => read<T>(slug))).then((docs) =>
    compare ? [...docs].sort(compare) : docs,
  )
}
