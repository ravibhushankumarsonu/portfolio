import type { FC } from 'react'
import { useCallback, useEffect, useState } from 'react'
import './PhotoGallery.css'
import type { PhotoItem, UiMeta } from '../../content/schema'

type GalleryLabels = Pick<
  UiMeta,
  'photosEmpty' | 'lightboxOpen' | 'lightboxClose' | 'lightboxPrev' | 'lightboxNext'
>

type PhotoGalleryProps = {
  photos: PhotoItem[]
  /** Empty-state and control labels, from ui.md. */
  labels: GalleryLabels
}

type LightboxProps = {
  photos: PhotoItem[]
  index: number
  labels: Pick<GalleryLabels, 'lightboxClose' | 'lightboxPrev' | 'lightboxNext'>
  onClose: () => void
  onStep: (delta: number) => void
}

const Lightbox: FC<LightboxProps> = ({ photos, index, labels, onClose, onStep }) => {
  const photo = photos[index]

  // Arrow keys and Escape are what people reach for in a photo viewer, so the
  // overlay listens globally rather than depending on which control has focus.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onStep(1)
      if (event.key === 'ArrowLeft') onStep(-1)
    }

    document.addEventListener('keydown', onKeyDown)
    // The page behind the overlay must not scroll while it's open.
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = overflow
    }
  }, [onClose, onStep])

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption ?? photo.alt}
      // Clicking the backdrop closes; clicks inside the figure stop below.
      onClick={onClose}
    >
      <button className="lightbox-close" aria-label={labels.lightboxClose} onClick={onClose}>
        ✕
      </button>

      <button
        className="lightbox-nav lightbox-prev"
        aria-label={labels.lightboxPrev}
        onClick={(event) => {
          event.stopPropagation()
          onStep(-1)
        }}
      >
        ‹
      </button>

      <figure className="lightbox-figure" onClick={(event) => event.stopPropagation()}>
        <img src={photo.src} alt={photo.alt} />
        {(photo.caption || photo.location) && (
          <figcaption>
            {photo.caption && <span className="lightbox-caption">{photo.caption}</span>}
            {photo.location && <span className="lightbox-location">{photo.location}</span>}
            <span className="lightbox-count">
              {index + 1} / {photos.length}
            </span>
          </figcaption>
        )}
      </figure>

      <button
        className="lightbox-nav lightbox-next"
        aria-label={labels.lightboxNext}
        onClick={(event) => {
          event.stopPropagation()
          onStep(1)
        }}
      >
        ›
      </button>
    </div>
  )
}

/**
 * Presentational — photographs come from pages/photo.md.
 *
 * A masonry-style column layout, because photographs arrive in mixed
 * orientations and cropping them all to one ratio is the thing photographers
 * complain about most.
 */
const PhotoGallery: FC<PhotoGalleryProps> = ({ photos, labels }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const close = useCallback(() => setOpenIndex(null), [])

  // Wraps at both ends so the viewer never dead-ends on the last frame.
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) =>
        current === null ? current : (current + delta + photos.length) % photos.length,
      ),
    [photos.length],
  )

  if (photos.length === 0) {
    return <p className="muted">{labels.photosEmpty}</p>
  }

  return (
    <>
      <div className="photo-gallery">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            className="photo-tile"
            aria-label={`${labels.lightboxOpen}: ${photo.caption ?? photo.alt}`}
            onClick={() => setOpenIndex(index)}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            {(photo.caption || photo.location) && (
              <span className="photo-tile-meta">
                {photo.caption && <strong>{photo.caption}</strong>}
                {photo.location && <em>{photo.location}</em>}
              </span>
            )}
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          photos={photos}
          index={openIndex}
          labels={labels}
          onClose={close}
          onStep={step}
        />
      )}
    </>
  )
}

export default PhotoGallery
