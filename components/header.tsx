"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, LogOut, Wallet, LayoutDashboard, Shield, DollarSign, Coins, Building2, Handshake, BadgeDollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useUser } from "@/context/user-context"

interface HeaderProps {
  onSignIn: () => void
}

export default function Header({ onSignIn }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const { user, logout } = useUser()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const services = [
    { name: "DeFi Banking", icon: Building2, path: "/defi-banking" },
    { name: "Portfolio Management", icon: LayoutDashboard, path: "/portfolio" },
    { name: "Crypto Wallet", icon: Wallet, path: "/wallet" },
    { name: "ICO Investments", icon: Coins, path: "/ico" },
    { name: "P2P Trading", icon: Handshake, path: "/p2p" },
    { name: "Insurance", icon: Shield, path: "/insurance" },
    { name: "Investment", icon: BadgeDollarSign, path: "/investment" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
          >
            Bitbop
          </Link>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-8"
        >
          <Link href="/" className="text-white/80 hover:text-white transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button
              onClick={toggleServices}
              className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors"
            >
              <span>Services</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-64 rounded-md bg-black/95 backdrop-blur-md border border-white/10 shadow-lg py-2"
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      href={service.path}
                      className="flex items-center px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <service.icon className="mr-3 h-5 w-5" />
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/portfolio" className="text-white/80 hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link href="/defi-banking" className="text-white/80 hover:text-white transition-colors">
            DeFi
          </Link>
          <Link href="/about" className="text-white/80 hover:text-white transition-colors">
            About
          </Link>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center space-x-4"
        >
          {user ? (
            <div className="relative">
              <Button
                variant="ghost"
                className="flex items-center space-x-2 hover:bg-white/10"
                onClick={toggleProfileMenu}
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar || ""} alt={user.name} />
                  <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500">
                    {user.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden lg:inline">{user.name}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>

              <AnimatePresence>
                {isProfileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 rounded-md bg-black border border-white/10 shadow-lg py-1"
                  >
                    <Link
                      href="/wallet"
                      className="flex items-center px-4 py-2 text-sm text-white/80 hover:bg-white/10"
                    >
                      <Wallet className="mr-2 h-4 w-4" />
                      Crypto Wallet
                    </Link>
                    <Link
                      href="/portfolio"
                      className="flex items-center px-4 py-2 text-sm text-white/80 hover:bg-white/10"
                    >
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Portfolio
                    </Link>
                    <Link
                      href="/defi"
                      className="flex items-center px-4 py-2 text-sm text-white/80 hover:bg-white/10"
                    >
                      <DollarSign className="mr-2 h-4 w-4" />
                      DeFi Banking
                    </Link>
                    <Link
                      href="/insurance"
                      className="flex items-center px-4 py-2 text-sm text-white/80 hover:bg-white/10"
                    >
                      <Shield className="mr-2 h-4 w-4" />
                      Insurance
                    </Link>
                    <button
                      onClick={logout}
                      className="flex w-full items-center px-4 py-2 text-sm text-white/80 hover:bg-white/10"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Button
              onClick={onSignIn}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
            >
              Sign In
            </Button>
          )}
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-2">
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full text-white/80 hover:text-white transition-colors py-2"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-2"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          href={service.path}
                          className="flex items-center text-white/80 hover:text-white transition-colors py-2"
                          onClick={() => {
                            setIsServicesOpen(false)
                            setIsMobileMenuOpen(false)
                          }}
                        >
                          <service.icon className="mr-3 h-5 w-5" />
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {user ? (
                <>
                  <div className="flex items-center space-x-2 py-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar || ""} alt={user.name} />
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500">
                        {user.name?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <span>{user.name}</span>
                  </div>
                  <Link
                    href="/wallet"
                    className="flex items-center text-white/80 hover:text-white transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Wallet className="mr-2 h-4 w-4" />
                    Crypto Wallet
                  </Link>
                  <Link
                    href="/portfolio"
                    className="flex items-center text-white/80 hover:text-white transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Portfolio
                  </Link>
                  <Link
                    href="/defi"
                    className="flex items-center text-white/80 hover:text-white transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <DollarSign className="mr-2 h-4 w-4" />
                    DeFi Banking
                  </Link>
                  <Link
                    href="/insurance"
                    className="flex items-center text-white/80 hover:text-white transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    Insurance
                  </Link>
                  <button
                    onClick={() => {
                      logout()
                      setIsMobileMenuOpen(false)
                    }}
                    className="flex items-center text-white/80 hover:text-white transition-colors py-2 w-full"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </button>
                </>
              ) : (
                <Button
                  onClick={() => {
                    onSignIn()
                    setIsMobileMenuOpen(false)
                  }}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                >
                  Sign In
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
