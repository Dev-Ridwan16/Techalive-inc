import React from 'react'

export const Text: React.FC<{
  text: string
  className?: string
  size?: number
  weight?: 'light' | 'medium' | 'semibold' | 'bold'
  uppercase?: boolean
}> = ({ text, size = 14, weight = 'light', uppercase, className }) => {
  const weightValue =
    weight === 'light'
      ? 'font-light'
      : weight === 'medium'
      ? 'font-medium'
      : weight === 'semibold'
      ? 'font-semibold'
      : 'font-bold'

  return (
    <span
      style={{ fontSize: `${size}px` }}
      className={`${className} ${weightValue} ${size} ${
        uppercase && 'uppercase'
      } `}
    >
      {text}
    </span>
  )
}
