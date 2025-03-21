import { createContext, useContext, useState, useEffect } from 'react'
import { initGoogleAuth, googleLogin, googleLogout } from '../utils/googleAuth'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initAuth = async () => {
      setLoading(true)
      try {
        await initGoogleAuth()
      } catch (error) {
        console.error('Failed to initialize Google Auth:', error)
      } finally {
        setLoading(false)
      }
    }
    
    initAuth()
  }, [])

  const login = (userData) => {
    setLoading(true)
    try {
      setUser(userData)
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    setLoading(true)
    try {
      if (user) {
        await googleLogout()
      }
      setUser(null)
    } catch (error) {
      console.error('Logout error:', error)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const loginWithGoogle = async () => {
    try {
      setLoading(true)
      const userData = await googleLogin()
      setUser(userData)
      return userData
    } catch (error) {
      throw error
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loginWithGoogle, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
