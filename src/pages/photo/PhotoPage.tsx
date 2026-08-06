import type { FC } from 'react'
import './PhotoPage.css'
import PhotoGallery from '../../components/photo/PhotoGallery'
import ActionRow from '../../components/ui/ActionRow'
import ContentBoundary from '../../components/ui/ContentBoundary'
import Markdown from '../../components/ui/Markdown'
import SectionHeading from '../../components/ui/SectionHeading'
import { usePhotoContent, useUi } from '../../hooks/useContent'

/**
 * Container: reads content and hands it to presentational components.
 * Every visible string originates in src/content/pages/photo.md.
 */
const PhotoPage: FC = () => {
  const photo = usePhotoContent()
  const ui = useUi().data?.meta

  return (
    <ContentBoundary state={photo} loadingLabel={ui?.loading}>
      {(doc) => {
        const { hero, collections, gallery, contact } = doc.meta
        const [lead, ...rest] = hero.mosaic

        return (
          <>
            <section className="photo-hero">
              <div className="photo-hero-inner">
                <div className="photo-hero-copy">
                  <span className="hero-eyebrow">{hero.eyebrow}</span>
                  <h1>{hero.headline}</h1>
                  <p className="hero-subheadline">{hero.subheadline}</p>
                  <Markdown html={doc.html} className="hero-lede prose" />
                  <ActionRow actions={hero.actions} />
                </div>

                <div className="photo-mosaic">
                  {lead && (
                    <img className="photo-mosaic-lead" src={lead.src} alt={lead.alt} />
                  )}
                  {rest.map((image) => (
                    <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
                  ))}
                </div>
              </div>
            </section>

            <section className="section section-alt" id={collections.id}>
              <div className="container">
                <SectionHeading header={collections} />
                <div className="collection-grid">
                  {collections.items.map((item) => (
                    <article key={item.title} className="collection-card">
                      <img src={item.cover} alt={item.alt} loading="lazy" />
                      <div className="collection-body">
                        <h3>{item.title}</h3>
                        <p className="muted">{item.description}</p>
                        {item.count && <span className="pill">{item.count}</span>}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="section" id={gallery.id}>
              <div className="container">
                <SectionHeading header={gallery} />
                {ui ? <PhotoGallery photos={gallery.items} labels={ui} /> : null}
              </div>
            </section>

            <section className="section section-alt" id={contact.id}>
              <div className="container section-center">
                <SectionHeading header={contact} tight />
                {contact.note && <p className="muted photo-contact-note">{contact.note}</p>}
                <ActionRow actions={contact.actions} center />
              </div>
            </section>
          </>
        )
      }}
    </ContentBoundary>
  )
}

export default PhotoPage
