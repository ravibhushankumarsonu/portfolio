import type { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'

type CommonProps = {
  children: ReactNode
  variant?: Variant
  size?: 'sm' | 'md'
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const Button: FC<ButtonProps> = ({ children, variant = 'primary', size = 'md', className, ...rest }) => {
  const classes = ['btn', `btn-${variant}`, size === 'sm' ? 'btn-sm' : '', className]
    .filter(Boolean)
    .join(' ')

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}

export default Button
