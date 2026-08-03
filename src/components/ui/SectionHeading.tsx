import type { FC } from 'react'
import type { SectionHeader } from '../../content/schema'

type SectionHeadingProps = {
  header: SectionHeader
  tight?: boolean
}

/** Eyebrow + heading pair used by every page section. */
const SectionHeading: FC<SectionHeadingProps> = ({ header, tight }) => (
  <div className={tight ? 'section-header section-header-tight' : 'section-header'}>
    {header.eyebrow && <span className="section-eyebrow">{header.eyebrow}</span>}
    <h2>{header.heading}</h2>
  </div>
)

export default SectionHeading
