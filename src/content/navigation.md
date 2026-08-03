---
# `{{site.*}}` placeholders resolve from site.md, so URLs and contact details
# are written down exactly once.

# Plain-text links in the nav bar.
primary:
  - label: Projects
    href: /#projects
  - label: Experience
    href: /#experience
  - label: About
    href: /about
  - label: Contact
    href: /#contact

# Button links in the nav bar. `variant` maps to the .btn-* styles.
actions:
  - label: LinkedIn
    href: "{{site.linkedIn}}"
    variant: outline
    external: true
  - label: Email me
    href: "mailto:{{site.email}}"
    variant: primary

# Links in the footer.
footer:
  - label: GitHub
    href: "{{site.github}}"
    external: true
  - label: LinkedIn
    href: "{{site.linkedIn}}"
    external: true
  - label: Email
    href: "mailto:{{site.email}}"
---

Nav bar and footer wiring. Add, remove, or reorder links here — no component
changes needed.
