/**
 * The contract between the markdown content files and the UI.
 *
 * Every field here maps to YAML frontmatter in `src/content/**\/*.md`. The
 * markdown *body* of each file is exposed separately as `ContentDocument.body`
 * (raw) and `ContentDocument.html` (rendered) — that is where prose lives, so
 * frontmatter stays limited to short strings and structured lists.
 *
 * Changing copy should never require touching a .tsx file. Changing this file
 * means the *shape* of the content changed, which is the one case where UI and
 * content have to move together.
 */

/** A parsed markdown file: frontmatter + body. */
export type ContentDocument<T> = {
  /** Frontmatter, typed per collection. */
  meta: T
  /** Raw markdown body, trimmed. */
  body: string
  /** Body rendered to HTML. */
  html: string
  /** Glob key the document was loaded from, e.g. `projects/oss-lib`. */
  slug: string
}

/** A link rendered as plain text (nav, footer). */
export type LinkItem = {
  label: string
  href: string
  /** Renders with target=_blank + rel=noopener. */
  external?: boolean
}

/** A link rendered as a button. `variant` maps to the .btn-* classes. */
export type ActionItem = LinkItem & {
  variant?: 'primary' | 'outline' | 'ghost'
}

/** Heading block shared by every page section. */
export type SectionHeader = {
  /** Anchor id, e.g. `projects` — also the scroll target for nav links. */
  id?: string
  eyebrow?: string
  heading: string
}

// ---------------------------------------------------------------------------
// ui.md — interface chrome (states, repeated link labels)
// ---------------------------------------------------------------------------

export type UiMeta = {
  loading: string
  projectsEmpty: string
  projectLive: string
  projectRepo: string
  /** Screen-reader label for the mobile nav button. */
  navToggle: string
}

// ---------------------------------------------------------------------------
// site.md — identity, used by nav, footer, and every page
// ---------------------------------------------------------------------------

export type SiteMeta = {
  name: string
  title: string
  /** Current employer, used in the hero line and head metadata. */
  company: string
  location: string
  email: string
  phone: string
  linkedIn: string
  github: string
  resumeUrl: string
  /** Portrait/avatar path under public/. */
  avatar: string
  /**
   * How email links open. `gmail` sends visitors to Gmail's web compose
   * window; `mailto` hands off to whatever mail app they have registered.
   */
  emailLinkMode?: 'gmail' | 'mailto'

  // --- Derived by the content loader; not written in site.md ---

  /** Ready-to-use email href, built according to `emailLinkMode`. */
  emailHref: string
  /** Ready-to-use `tel:` href with formatting stripped. */
  phoneHref: string
}

// ---------------------------------------------------------------------------
// navigation.md — nav bar and footer wiring
// ---------------------------------------------------------------------------

export type NavigationMeta = {
  /** Plain text links in the nav bar. */
  primary: LinkItem[]
  /** Button links in the nav bar. */
  actions: ActionItem[]
  /** Links in the footer. */
  footer: LinkItem[]
}

// ---------------------------------------------------------------------------
// pages/home.md — body is the hero lede
// ---------------------------------------------------------------------------

export type HomeMeta = {
  hero: {
    eyebrow: string
    headline: string
    subheadline: string
    portraitAlt: string
    actions: ActionItem[]
  }
  projects: SectionHeader & {
    /** How many projects the home page shows. */
    limit: number
    action: ActionItem
  }
  experience: SectionHeader
  contact: SectionHeader & {
    actions: ActionItem[]
  }
}

// ---------------------------------------------------------------------------
// pages/about.md — body is the intro prose
// ---------------------------------------------------------------------------

export type AboutMeta = {
  heading: string
  experienceHeading: string
  educationHeading: string
  education: {
    degree: string
    institution: string
    period: string
    /** Optional trailing note, e.g. a GPA. */
    detail?: string
  }[]
  skillsHeading: string
  skills: string[]
  contactHeading: string
  contactNote: string
}

// ---------------------------------------------------------------------------
// pages/contact.md — body is the intro prose
// ---------------------------------------------------------------------------

/**
 * One contact row. `email`, `phone`, and `location` read from site.md so
 * contact details are never duplicated across content files.
 */
export type ContactItem = {
  type: 'email' | 'phone' | 'location' | 'link' | 'text'
  /** Required for `link` and `text`; ignored for the site-sourced types. */
  value?: string
  /** Display text for `link` rows; defaults to `value`. */
  display?: string
}

/** A heading with its rows beneath, e.g. "Online" followed by two links. */
export type ContactGroup = {
  heading: string
  items: ContactItem[]
}

export type ContactMeta = {
  heading: string
  /** Each column renders as one card. */
  columns: { groups: ContactGroup[] }[]
  note: string
}

// ---------------------------------------------------------------------------
// pages/projects.md — the standalone /projects page
// ---------------------------------------------------------------------------

export type ProjectsPageMeta = {
  heading: string
  eyebrow?: string
}

// ---------------------------------------------------------------------------
// experience/*.md — body is the role description
// ---------------------------------------------------------------------------

export type ExperienceMeta = {
  role: string
  company: string
  period: string
  location?: string
  skills: string[]
  /** Higher sorts first. Use the start year. */
  order: number
}

// ---------------------------------------------------------------------------
// projects/*.md — body is the project description
// ---------------------------------------------------------------------------

export type ProjectMeta = {
  title: string
  thumbnail?: string
  url?: string
  repo?: string
  tags: string[]
  featured?: boolean
  year?: number
}
