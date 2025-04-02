"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, Lock, User, Phone, Facebook, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useUser } from "@/context/user-context"

interface AuthModalProps {
  type: "signin" | "signup"
  onClose: () => void
}

export default function AuthModal({ type, onClose }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<string>(type)
  const [showPhoneInput, setShowPhoneInput] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { login } = useUser()
  
  // Form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone_number: "",
    address: "", // Default value
    country: "" // Default value
  })

  // Password visibility state
  const [showPassword, setShowPassword] = useState(false)
  const [showSignupPassword, setShowSignupPassword] = useState(false)

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    
    // Map form field IDs to formData properties
    const fieldMap: Record<string, string> = {
      'first-name': 'firstName',
      'last-name': 'lastName',
      'signup-email': 'email',
      'signup-password': 'password',
      'phone': 'phone_number',
      'email': 'email',
      'password': 'password',
      'address': 'address',
      'country': 'country'
    }
    
    const field = fieldMap[id] || id;
    
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    try {
      // Prepare the request body
      const requestBody = {
        email: formData.email,
        password: formData.password
      }
      
      // Make API request
      const response = await fetch('https://api.bitbopbank.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed')
      }
      
      // Store the token and user data
      if (data.token) {
        localStorage.setItem('token', data.token)
        
        // Log the user in with the returned user data
        login({
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          // Add avatar if available
        })
        
        setIsSuccess(true)
        // Show success animation before closing
        setTimeout(onClose, 1500)
      }
    } catch (err) {
      console.error('Login error:', err)
      setError(err instanceof Error ? err.message : 'Failed to login. Please check your credentials and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    try {
      // Prepare the request body
      const requestBody = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
        phone_number: formData.phone_number || "+1234567890", // Use default if not provided
        address: formData.address,
        country: formData.country
      }
      
      // Make API request
      const response = await fetch('https://api.bitbopbank.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed')
      }
      
      // Store the token and user data
      if (data.token) {
        localStorage.setItem('token', data.token)
        
        // Log the user in with the returned user data
        login({
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          // Add avatar if available
        })
        
        setIsSuccess(true)
        // Show success animation before closing
        setTimeout(onClose, 1500)
      }
    } catch (err) {
      console.error('Signup error:', err)
      setError(err instanceof Error ? err.message : 'Failed to register. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = async (provider: string) => {
    if (provider === "phone") {
      setShowPhoneInput(true)
      return
    }
    
    // Display error message for unimplemented social logins
    setError(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login is not implemented yet.`)
  }

  const handlePhoneLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setShowPhoneInput(false)
    
    // Display error message for unimplemented phone login
    setError("Phone authentication is not implemented yet.")
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-md"
      >
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-full p-8">
                <svg
                  className="w-16 h-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </motion.div>
          ) : showPhoneInput ? (
            <motion.div
              key="phone"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-1"
            >
              <div className="bg-black/80 rounded-xl p-6 md:p-8">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-white/10"
                  onClick={() => setShowPhoneInput(false)}
                >
                  <X className="h-4 w-4" />
                </Button>

                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold">Phone Authentication</h2>
                  <p className="text-white/70 mt-2">Enter your phone number to continue</p>
                </div>

                <form onSubmit={handlePhoneLogin} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm text-white/70">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (234) 567-8900"
                        className="pl-10 bg-white/5 border-white/10 focus-visible:ring-purple-500"
                        value={formData.phone_number}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                  >
                    Send Code
                  </Button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="main"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-1"
            >
              <div className="bg-black/80 rounded-xl p-6 md:p-8">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-white/10"
                  onClick={onClose}
                >
                  <X className="h-4 w-4" />
                </Button>

                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold">
                    Welcome to{" "}
                    <span className="bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-transparent">
                      Bitbop
                    </span>
                  </h2>
                  <p className="text-white/70 mt-2">
                    {activeTab === "signin" ? "Sign in to access your account" : "Create an account to get started"}
                  </p>
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-md text-sm text-white">
                    {error}
                  </div>
                )}

                <Tabs defaultValue={type} value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="signin">Sign In</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  </TabsList>

                  <TabsContent value="signin" className="space-y-6">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm text-white/70">
                          Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="pl-10 bg-white/5 border-white/10 focus-visible:ring-purple-500"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label htmlFor="password" className="text-sm text-white/70">
                            Password
                          </label>
                          <a href="#" className="text-sm text-purple-400 hover:text-purple-300">
                            Forgot password?
                          </a>
                        </div>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="pl-10 bg-white/5 border-white/10 focus-visible:ring-purple-500"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                      >
                        {isLoading ? "Signing In..." : "Sign In"}
                      </Button>
                    </form>

                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                      </div>
                      <div className="relative bg-black px-4 text-sm text-white/50">Or continue with</div>
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                      <Button
                        variant="outline"
                        className="border-white/10 hover:bg-white/5 hover:text-white"
                        onClick={() => handleSocialLogin("google")}
                      >
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="currentColor"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-white/10 hover:bg-white/5 hover:text-white"
                        onClick={() => handleSocialLogin("facebook")}
                      >
                        <Facebook className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        className="border-white/10 hover:bg-white/5 hover:text-white"
                        onClick={() => handleSocialLogin("telegram")}
                      >
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.95 8.03c-.19 2.01-.88 6.89-1.25 9.14-.15.91-.45 1.22-.74 1.25-.63.06-1.11-.42-1.72-.82-.95-.64-1.49-1.04-2.42-1.66-.97-.71-.34-1.11.21-1.75.14-.16 2.6-2.38 2.65-2.59.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.23-.02-.1.02-1.62 1.03-4.59 3.03-.43.3-.82.44-1.17.43-.39-.01-1.13-.22-1.68-.4-.68-.23-1.22-.35-1.17-.74.02-.2.29-.41.81-.62 3.17-1.38 5.29-2.29 6.35-2.73 3.03-1.27 3.66-1.49 4.07-1.5.09 0 .29.02.42.19.11.13.14.31.16.43-.01.07-.01.13-.02.21z"
                          />
                        </svg>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-white/10 hover:bg-white/5 hover:text-white"
                        onClick={() => handleSocialLogin("phone")}
                      >
                        <Phone className="h-5 w-5" />
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="signup" className="space-y-6">
                    <form onSubmit={handleSignup} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="first-name" className="text-sm text-white/70">
                            First Name
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                            <Input
                              id="first-name"
                              placeholder="John"
                              className="pl-10 bg-white/5 border-white/10 focus-visible:ring-purple-500"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="last-name" className="text-sm text-white/70">
                            Last Name
                          </label>
                          <Input
                            id="last-name"
                            placeholder="Doe"
                            className="bg-white/5 border-white/10 focus-visible:ring-purple-500"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="signup-email" className="text-sm text-white/70">
                          Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                          <Input
                            id="signup-email"
                            type="email"
                            placeholder="john@example.com"
                            className="pl-10 bg-white/5 border-white/10 focus-visible:ring-purple-500"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="signup-password" className="text-sm text-white/70">
                          Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                          <Input
                            id="signup-password"
                            type={showSignupPassword ? "text" : "password"}
                            placeholder="Create a password"
                            className="pl-10 bg-white/5 border-white/10 focus-visible:ring-purple-500"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                            onClick={() => setShowSignupPassword(!showSignupPassword)}
                          >
                            {showSignupPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="address" className="text-sm text-white/70">
                          Address
                        </label>
                        <Input
                          id="address"
                          placeholder="Your address"
                          className="bg-white/5 border-white/10 focus-visible:ring-purple-500"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="country" className="text-sm text-white/70">
                          Country
                        </label>
                        <Input
                          id="country"
                          placeholder="Your country"
                          className="bg-white/5 border-white/10 focus-visible:ring-purple-500"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                      >
                        {isLoading ? "Creating Account..." : "Create Account"}
                      </Button>
                    </form>

                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                      </div>
                      <div className="relative bg-black px-4 text-sm text-white/50">Or sign up with</div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <Button
                        variant="outline"
                        className="border-white/10 hover:bg-white/5 hover:text-white"
                        onClick={() => handleSocialLogin("google")}
                      >
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="currentColor"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-white/10 hover:bg-white/5 hover:text-white"
                        onClick={() => handleSocialLogin("facebook")}
                      >
                        <Facebook className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        className="border-white/10 hover:bg-white/5 hover:text-white"
                        onClick={() => handleSocialLogin("telegram")}
                      >
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.95 8.03c-.19 2.01-.88 6.89-1.25 9.14-.15.91-.45 1.22-.74 1.25-.63.06-1.11-.42-1.72-.82-.95-.64-1.49-1.04-2.42-1.66-.97-.71-.34-1.11.21-1.75.14-.16 2.6-2.38 2.65-2.59.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.23-.02-.1.02-1.62 1.03-4.59 3.03-.43.3-.82.44-1.17.43-.39-.01-1.13-.22-1.68-.4-.68-.23-1.22-.35-1.17-.74.02-.2.29-.41.81-.62 3.17-1.38 5.29-2.29 6.35-2.73 3.03-1.27 3.66-1.49 4.07-1.5.09 0 .29.02.42.19.11.13.14.31.16.43-.01.07-.01.13-.02.21z"
                          />
                        </svg>
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
