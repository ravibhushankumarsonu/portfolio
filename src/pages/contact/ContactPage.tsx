import type { FC } from 'react'
import './Contact.css'
import ContentBoundary from '../../components/ui/ContentBoundary'
import Markdown from '../../components/ui/Markdown'
import type { ContactItem, SiteMeta } from '../../content/schema'
import { useContactContent, useSite, useUi } from '../../hooks/useContent'

type ResolvedItem = {
  text: string
  href?: string
  external?: boolean
  muted?: boolean
}

/**
 * Turns a content-declared contact row into something renderable, pulling
 * `email`, `phone`, and `location` from site.md so contact details are only
 * ever written down once.
 */
function resolveItem(item: ContactItem, site: SiteMeta): ResolvedItem {
  switch (item.type) {
    case 'email':
      return { text: site.email, href: `mailto:${site.email}` }
    case 'phone':
      return { text: site.phone, href: `tel:${site.phone.replace(/[^+0-9]/g, '')}` }
    case 'location':
      return { text: site.location, muted: true }
    case 'link':
      return {
        text: item.display ?? item.value ?? '',
        href: item.value,
        external: true,
      }
    case 'text':
    default:
      return { text: item.value ?? '', muted: true }
  }
}

/**
 * Container: reads content and hands it to presentational components.
 * Every visible string originates in src/content/pages/contact.md or site.md.
 */
const ContactPage: FC = () => {
  const contact = useContactContent()
  const site = useSite().data?.meta
  const ui = useUi().data?.meta

  return (
    <ContentBoundary state={contact} loadingLabel={ui?.loading}>
      {(doc) => {
        if (!site) return null

        return (
          <section className="contact-page">
            <h1>{doc.meta.heading}</h1>
            <Markdown html={doc.html} className="contact-intro prose" />

            <div className="contact-grid">
              {doc.meta.columns.map((column, columnIndex) => (
                <div className="contact-block" key={column.groups[0]?.heading ?? columnIndex}>
                  {column.groups.map((group) => (
                    <div className="contact-group" key={group.heading}>
                      <h2>{group.heading}</h2>
                      {group.items.map((item, itemIndex) => {
                        const resolved = resolveItem(item, site)
                        return (
                          <p
                            key={`${group.heading}-${itemIndex}`}
                            className={resolved.muted ? 'muted' : undefined}
                          >
                            {resolved.href ? (
                              <a
                                href={resolved.href}
                                {...(resolved.external
                                  ? { target: '_blank', rel: 'noopener noreferrer' }
                                  : {})}
                              >
                                {resolved.text}
                              </a>
                            ) : (
                              resolved.text
                            )}
                          </p>
                        )
                      })}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <p className="contact-note">{doc.meta.note}</p>
          </section>
        )
      }}
    </ContentBoundary>
  )
}

export default ContactPage
