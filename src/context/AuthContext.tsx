import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { initGoogleAuth, googleLogin, googleLogout } from '../utils/googleAuth'
import { User, AuthContextType } from '../types/auth'

const AuthContext = createContext<AuthContextType | undefined>(undefined)
const USER_STORAGE_KEY = 'appUserData'

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initAuth = async () => {
      setLoading(true)
      try {
        await initGoogleAuth()
        
        const storedUser = localStorage.getItem(USER_STORAGE_KEY)
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error('Failed to initialize Google Auth:', error)
      } finally {
        setLoading(false)
      }
    }
    
    initAuth()
  }, [])

  const login = (userData: User) => {
    setLoading(true)
    try {
      setUser(userData)
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData))
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
      localStorage.removeItem(USER_STORAGE_KEY)
    } catch (error) {
      console.error('Logout error:', error)
      setUser(null)
      localStorage.removeItem(USER_STORAGE_KEY)
    } finally {
      setLoading(false)
    }
  }

  const loginWithGoogle = async (): Promise<User> => {
    try {
      setLoading(true)
      const userData = await googleLogin()
      setUser(userData)
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData))
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

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
