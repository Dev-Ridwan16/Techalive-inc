'use client'

import { useEffect, useState } from 'react'

export function useDeviceWidth() {
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth)

    updateWidth()

    window.addEventListener('resize', updateWidth)

    return () => window.removeEventListener('resize', updateWidth)
  })

  return width
}
