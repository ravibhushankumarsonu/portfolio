import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button className="btn" {...rest}>
      {children}
    </button>
  )
}

export default Button


