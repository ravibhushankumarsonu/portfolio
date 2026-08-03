import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { parse as parseYaml } from 'yaml'

const CONTENT_DIR = new URL('./src/content/', import.meta.url)
const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---/
const SITE_TOKEN = /\{\{\s*site\.([a-zA-Z]+)\s*\}\}/g

function readFrontmatter(file: string): Record<string, string> {
  const path = fileURLToPath(new URL(file, CONTENT_DIR))
  const match = FRONTMATTER.exec(readFileSync(path, 'utf8'))
  if (!match) throw new Error(`${file} is missing a --- frontmatter block.`)
  return (parseYaml(match[1]) ?? {}) as Record<string, string>
}

/** Same `{{site.*}}` convention the runtime loader uses. */
function interpolate(value: string, site: Record<string, string>): string {
  return value.replace(SITE_TOKEN, (match, key: string) => site[key] ?? match)
}

/** Values land inside HTML attributes, so quotes and angle brackets must go. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * Injects head metadata from src/content/seo.md into index.html at build time.
 *
 * This runs in Node rather than the browser on purpose: search crawlers and
 * social scrapers read the served HTML without executing JavaScript, so these
 * tags have to be real by the time the file is served.
 */
function contentHtml(): Plugin {
  return {
    name: 'content-html',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        const site = readFrontmatter('site.md')
        const seo = readFrontmatter('seo.md')

        return html.replace(/%SEO_([A-Z_]+)%/g, (match, rawKey: string) => {
          // SEO_OG_TITLE -> ogTitle
          const key = rawKey
            .toLowerCase()
            .replace(/_([a-z])/g, (_, char: string) => char.toUpperCase())

          const value = seo[key]
          if (value === undefined) {
            this.warn(`seo.md has no "${key}" for placeholder ${match}`)
            return ''
          }

          return escapeHtml(interpolate(String(value), site).trim())
        })
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contentHtml()],
})
