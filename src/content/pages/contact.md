---
heading: Contact

# Each column renders as a card; each group is a heading with items beneath it.
# Item `type` decides how it renders:
#   email / phone / location -> pulled from site.md so nothing is duplicated
#   link                     -> anchor to `value`, labelled with `display`
#   text                     -> plain muted text from `value`
columns:
  - groups:
      - heading: Email
        items:
          - type: email
      - heading: Phone
        items:
          - type: phone
      - heading: Location
        items:
          - type: location

  - groups:
      - heading: Online
        items:
          - type: link
            value: "{{site.linkedIn}}"
            display: LinkedIn
          - type: link
            value: "{{site.github}}"
            display: GitHub
      - heading: Availability
        items:
          - type: text
            value: Open to interesting full-time and consulting opportunities.

note: >-
  Prefer a different channel? Message me on LinkedIn or open an issue on one of
  my GitHub projects.
---

Recruiter, collaborator, or just want to say hello — pick whichever channel is
easiest for you.
