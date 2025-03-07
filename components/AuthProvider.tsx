"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { UserProvider } from "@/context/user-context"
import AuthModal from "@/components/auth-modal"

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authType, setAuthType] = useState<"signin" | "signup">("signin")

  const openSignIn = () => {
    setAuthType("signin")
    setShowAuthModal(true)
  }

  const openSignUp = () => {
    setAuthType("signup")
    setShowAuthModal(true)
  }

  const closeAuthModal = () => {
    setShowAuthModal(false)
  }

  return (
    <UserProvider>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <Header onSignIn={openSignIn} />
        {children}
        <Footer />
        <AnimatePresence>
          {showAuthModal && <AuthModal type={authType} onClose={closeAuthModal} />}
        </AnimatePresence>
      </div>
    </UserProvider>
  )
}