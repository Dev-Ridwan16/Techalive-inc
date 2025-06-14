import React from 'react'

export const Wrapper: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  return (
    <div
      className={`w-full max-w-[350px] lg:max-w-[1200px] mx-auto ${className}`}
    >
      {children}
    </div>
  )
}
