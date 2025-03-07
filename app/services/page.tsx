"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Building2,
  Wallet,
  LayoutDashboard,
  Coins,
  Handshake,
  Shield,
  BadgeDollarSign,
  ArrowRight
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      name: "DeFi Banking",
      description: "Access decentralized banking services including lending, borrowing, and earning interest on your crypto assets.",
      icon: Building2,
      path: "/defi-banking",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Portfolio Management",
      description: "Track and manage your crypto portfolio with advanced analytics and real-time market data.",
      icon: LayoutDashboard,
      path: "/portfolio",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Crypto Wallet",
      description: "Secure digital wallet for storing, sending, and receiving cryptocurrencies with multi-chain support.",
      icon: Wallet,
      path: "/wallet",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "ICO Investments",
      description: "Participate in carefully vetted Initial Coin Offerings (ICOs) and token sales.",
      icon: Coins,
      path: "/ico",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "P2P Trading",
      description: "Trade cryptocurrencies directly with other users through our secure peer-to-peer platform.",
      icon: Handshake,
      path: "/p2p",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Insurance",
      description: "Protect your digital assets with comprehensive crypto insurance coverage.",
      icon: Shield,
      path: "/insurance",
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "Investment",
      description: "Access professional investment strategies and automated trading solutions.",
      icon: BadgeDollarSign,
      path: "/investment",
      color: "from-purple-500 to-blue-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/10 to-black">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl" />
        <div className="absolute inset-0 bg-[url('/images/services-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 mb-8"
            >
              Comprehensive crypto solutions for trading, investment, and asset management
            </motion.p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.path}>
                <Card className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-white/70 mb-4">{service.description}</p>
                  <div className="flex items-center text-purple-400">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Join thousands of users who trust our platform for their crypto journey
          </p>
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
            Create Account
          </Button>
        </div>
      </div>
    </div>
  )
}