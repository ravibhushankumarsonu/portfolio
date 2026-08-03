import type { FC } from 'react'

type MarkdownProps = {
  /** Pre-rendered HTML from the content layer (`doc.html`). */
  html: string
  /** Wrapper element — use `span` for inline snippets. */
  as?: 'div' | 'p' | 'span'
  className?: string
}

/**
 * Renders HTML produced by the content loader.
 *
 * The HTML comes from markdown files committed to this repo, so it is trusted
 * exactly like the .tsx files are. If content ever becomes user-submitted, add
 * sanitization in the loader before it reaches this component.
 */
const Markdown: FC<MarkdownProps> = ({ html, as: Tag = 'div', className }) => (
  <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />
)

export default Markdown
