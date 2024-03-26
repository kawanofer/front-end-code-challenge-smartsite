import React, { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  id: string
  onClick?: () => void
  type: 'button' | 'submit' | 'reset'
  variant: string
}

const Button = ({ id, children, type = 'button', onClick, variant = 'primary' }: ButtonProps) => {
  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-yellow text-black font-semibold'
      case 'secondary':
        return 'bg-white border text-dark  font-semibold'

    }
  }

  return (
    <button
      className={`rounded-md px-5 py-3 min-w-72 ${getButtonStyles()}`}
      id={id}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
