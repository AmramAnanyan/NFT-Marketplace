import { useState } from 'react'

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const userToken = localStorage.getItem('token')
  if (userToken) {
    setIsAuthenticated(true)
  }

  return { isAuthenticated }
}
