"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

interface UserContextType {
  user: User | null
  login: (user: User) => void
  logout: () => void
  isLoading: boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)

  // Set isClient to true once the component mounts
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Load user from localStorage on mount (client-side only)
  useEffect(() => {
    if (!isClient) return;
    
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error('Failed to load user from localStorage:', error)
      } finally {
        setIsLoading(false)
      }
    }
    
    loadUser()
  }, [isClient])

  const login = (userData: User) => {
    setUser(userData)
    
    // Save to localStorage (client-side only)
    if (isClient) {
      try {
        localStorage.setItem('user', JSON.stringify(userData))
      } catch (error) {
        console.error('Failed to save user to localStorage:', error)
      }
    }
  }

  const logout = () => {
    setUser(null)
    
    // Remove from localStorage (client-side only)
    if (isClient) {
      try {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
      } catch (error) {
        console.error('Failed to remove user from localStorage:', error)
      }
    }
  }

  return (
    <UserContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
