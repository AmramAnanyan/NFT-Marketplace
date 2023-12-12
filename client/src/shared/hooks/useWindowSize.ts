import React, { useEffect, useState } from 'react'
interface IWindowsize {
  innerWidth: number
  innerHeight: number
}
const useWindowSize = () => {
  const [genericSize, setGenericSize] = useState<IWindowsize>({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  })
  const handleResize = (event: Event) => {
    setGenericSize({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth
    })
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return genericSize
}

export default useWindowSize
