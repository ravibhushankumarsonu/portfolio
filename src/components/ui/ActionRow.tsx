import type { FC } from 'react'
import type { ActionItem } from '../../content/schema'
import Button from './Button'

type ActionRowProps = {
  actions: ActionItem[]
  center?: boolean
  size?: 'sm' | 'md'
  className?: string
}

/**
 * Renders a list of content-defined actions as buttons. Adding or reordering
 * CTAs is a content edit, never a code edit.
 */
const ActionRow: FC<ActionRowProps> = ({ actions, center, size, className }) => {
  const classes = ['action-row', center ? 'action-row-center' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {actions.map((action) => (
        <Button
          key={`${action.label}-${action.href}`}
          href={action.href}
          variant={action.variant ?? 'primary'}
          size={size}
          {...(action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {action.label}
        </Button>
      ))}
    </div>
  )
}

export default ActionRow
