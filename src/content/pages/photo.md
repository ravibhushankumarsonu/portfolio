---
# The photography home page at /photo.
#
# PLACEHOLDER IMAGERY: every `src` below points at picsum.photos, a stock-photo
# service that returns a real photograph for a given seed. They exist so the
# page has something to lay out before real work is in it — swap each `src` for
# a file under public/photos/ (e.g. /photos/kanha-fog.jpg) and nothing else on
# this page has to change.
#
# `{{site.*}}` placeholders resolve from site.md, so contact details are still
# written down exactly once.

hero:
  eyebrow: Photography
  headline: Light, patience, and the frame before the moment passes.
  subheadline: "{{site.name}} · travel, street, and landscape work from {{site.location}}"
  actions:
    - label: Browse the gallery ↓
      href: "#gallery"
      variant: primary
    - label: Book a shoot
      href: "{{site.emailHref}}"
      variant: outline
      external: true
    - label: Back to engineering →
      href: /
      variant: ghost
  # First image renders large; the rest fill the collage beside it.
  mosaic:
    - src: https://picsum.photos/seed/rk-photo-hero-1/1200/1500
      alt: Placeholder — mountain ridge at first light
    - src: https://picsum.photos/seed/rk-photo-hero-2/800/800
      alt: Placeholder — narrow street in the early morning
    - src: https://picsum.photos/seed/rk-photo-hero-3/800/800
      alt: Placeholder — long exposure of moving water

collections:
  id: collections
  eyebrow: Bodies of work
  heading: Collections
  items:
    - title: Roads & Ridgelines
      description: Long drives through the Western Ghats, shot mostly in the hour
        either side of sunrise.
      cover: https://picsum.photos/seed/rk-photo-col-1/900/700
      alt: Placeholder — winding mountain road at dawn
      count: 24 frames
    - title: City After Rain
      description: Bangalore's streets when the light turns reflective and
        everybody is still under an awning somewhere.
      cover: https://picsum.photos/seed/rk-photo-col-2/900/700
      alt: Placeholder — wet city street reflecting neon signage
      count: 18 frames
    - title: Quiet Portraits
      description: Available light, one lens, no direction beyond a conversation
        that runs long.
      cover: https://picsum.photos/seed/rk-photo-col-3/900/700
      alt: Placeholder — portrait lit by a window
      count: 12 frames

gallery:
  id: gallery
  eyebrow: Selected frames
  heading: Recent work
  items:
    - src: https://picsum.photos/seed/rk-photo-01/1200/1600
      alt: Placeholder — fog settling into a valley
      caption: Fog holding in the valley
      location: Coorg, Karnataka
    - src: https://picsum.photos/seed/rk-photo-02/1400/1000
      alt: Placeholder — a tea stall before opening
      caption: Before the stall opens
      location: Bangalore
    - src: https://picsum.photos/seed/rk-photo-03/1000/1400
      alt: Placeholder — stairwell shot from below
      caption: Stairwell, looking up
      location: Fort Kochi, Kerala
    - src: https://picsum.photos/seed/rk-photo-04/1400/1000
      alt: Placeholder — shoreline at low tide
      caption: Low tide, last light
      location: Gokarna, Karnataka
    - src: https://picsum.photos/seed/rk-photo-05/1200/1200
      alt: Placeholder — a doorway painted deep blue
      caption: The blue door
      location: Jodhpur, Rajasthan
    - src: https://picsum.photos/seed/rk-photo-06/1000/1500
      alt: Placeholder — rain on a bus window
      caption: Monsoon, from the window seat
      location: Kanyakumari, Tamil Nadu
    - src: https://picsum.photos/seed/rk-photo-07/1500/1000
      alt: Placeholder — terraced fields in flat afternoon light
      caption: Terraces, flat afternoon
      location: Munnar, Kerala
    - src: https://picsum.photos/seed/rk-photo-08/1200/1500
      alt: Placeholder — silhouette crossing a bridge
      caption: Crossing, backlit
      location: Varanasi, Uttar Pradesh
    - src: https://picsum.photos/seed/rk-photo-09/1400/1050
      alt: Placeholder — market crates stacked at dusk
      caption: Crates at closing time
      location: Mysore, Karnataka

contact:
  id: prints
  eyebrow: Prints & commissions
  heading: Want a print, or a shoot?
  note: Prints go out on archival matte paper. Travel and event work is booked a
    few weekends a month.
  actions:
    - label: Email me
      href: "{{site.emailHref}}"
      variant: primary
      external: true
    - label: Instagram
      href: https://www.instagram.com/
      variant: outline
      external: true
    - label: All contact options →
      href: /contact
      variant: ghost
---

I shoot to slow down. Weekdays go into distributed systems; weekends go into
whatever the light is doing on a road out of the city. Everything here is
handheld, mostly one prime lens, and edited about as far as a print needs and
no further.
