"use client"

import { useState, useEffect } from "react"
import { motion, useReducedMotion } from "framer-motion"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Insurance from "@/components/insurance"
import About from "@/components/about"
import DeFiBanking from "@/components/defi-banking"
import Portfolio from "@/components/portfolio"
import ICO from "@/components/ico"
import P2P from "@/components/p2p"
import CryptoWallet from "@/components/wallet"
import Investment from "@/components/investment"
import Image from "next/image"

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Optimize animations for mobile
  const backgroundAnimation = shouldReduceMotion
    ? {}
    : {
        animate: {
          rotate: [0, 360],
        },
        transition: {
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        },
      }

  const floatingAnimation = shouldReduceMotion
    ? {}
    : {
        animate: {
          y: ["0%", "-50%"],
          opacity: [0.2, 0, 0.2],
        },
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        },
      }

  return (
    <main className="relative z-10">
      {/* Global Background Elements - Conditionally render on desktop */}
      <div className="fixed inset-0 z-0 hidden sm:block">
        {/* Gradient Orbs - Simplified for mobile */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-purple-500/30 rounded-full filter blur-[60px] sm:blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-500/30 rounded-full filter blur-[50px] sm:blur-[100px] opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-cyan-500/20 rounded-full filter blur-[55px] sm:blur-[110px] opacity-20"></div>
        </div>

        {/* Animated SVG Patterns - Only on desktop */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            {...backgroundAnimation}
            className="absolute -top-1/2 -left-1/2 w-full h-full"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </motion.div>
        </div>

        {/* Noise Texture - Reduced opacity on mobile */}
        <div 
          className="absolute inset-0 opacity-[0.01] sm:opacity-[0.015]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            transform: 'translate3d(0, 0, 0)'
          }}
        ></div>
      </div>

      {/* Hero Section with Call to Action */}
      <Hero onSignUp={() => {}} />
      
      {/* Core Services Overview */}
      <Services />
      
      {/* Main Product Sections */}
      <div className="relative">
        {/* Section Dividers - Simplified for mobile */}
        <div className="absolute inset-0 pointer-events-none opacity-50 sm:opacity-100">
          <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="rgba(139, 92, 246, 0.03)" d="M0,0 C240,70 480,90 720,80 C960,70 1200,30 1440,60 L1440,0 L0,0 Z" />
          </svg>
          <svg className="absolute bottom-0 left-0 w-full rotate-180" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="rgba(59, 130, 246, 0.03)" d="M0,0 C240,70 480,90 720,80 C960,70 1200,30 1440,60 L1440,0 L0,0 Z" />
          </svg>
        </div>

        {/* Floating Crypto Icons - Only on desktop */}
        <div className="hidden sm:block">
          <motion.div
            {...floatingAnimation}
            className="absolute right-0 top-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&q=80"
              alt="Floating Crypto"
              width={300}
              height={300}
              className="opacity-10"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            {...floatingAnimation}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-0 top-1/3"
          >
            <Image
              src="https://images.unsplash.com/photo-1621761311461-1e961f05f06b?auto=format&fit=crop&q=80"
              alt="Floating Crypto"
              width={250}
              height={250}
              className="opacity-10"
              loading="lazy"
            />
          </motion.div>
        </div>
        
        {/* Main Content Sections */}
        <div className="relative">
          <DeFiBanking />
          <Insurance />
          {/* <Portfolio/> */}
          <ICO />
          <P2P />
          <CryptoWallet />
          <Investment/>
        </div>
      </div>
      
      {/* About Section */}
      <About />
    </main>
  )
}
