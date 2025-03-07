"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Wallet, Banknote, Shield, LineChart, Coins, Users, CreditCard, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "defi",
    title: "DeFi Banking",
    description:
      "Access decentralized financial services including lending, borrowing, and earning interest on your crypto assets.",
    icon: <Banknote className="h-10 w-10" />,
    color: "from-purple-500 to-blue-500",
  },
  {
    id: "insurance",
    title: "Insurance Services",
    description:
      "Protect your digital assets with comprehensive insurance coverage against hacks, scams, and market volatility.",
    icon: <Shield className="h-10 w-10" />,
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "portfolio",
    title: "Portfolio Management",
    description:
      "Track, analyze, and optimize your crypto portfolio with advanced analytics and real-time market insights.",
    icon: <LineChart className="h-10 w-10" />,
    color: "from-cyan-400 to-emerald-500",
  },
  {
    id: "ico",
    title: "ICO Launchpad",
    description:
      "Participate in vetted Initial Coin Offerings and token sales with early access to promising blockchain projects.",
    icon: <Coins className="h-10 w-10" />,
    color: "from-emerald-500 to-yellow-500",
  },
  {
    id: "p2p",
    title: "P2P Solutions",
    description: "Trade directly with other users through our secure peer-to-peer marketplace with escrow protection.",
    icon: <Users className="h-10 w-10" />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "wallet",
    title: "Crypto Wallet",
    description: "Secure, multi-chain wallet for storing, sending, and receiving cryptocurrencies and NFTs.",
    icon: <Wallet className="h-10 w-10" />,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "investment",
    title: "Investment Services",
    description:
      "Professional investment strategies, managed portfolios, and personalized financial advice for crypto investors.",
    icon: <CreditCard className="h-10 w-10" />,
    color: "from-red-500 to-purple-500",
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null)

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,56,202,0.1),transparent_70%)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Crypto Services
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Explore our wide range of blockchain-powered financial services designed to help you manage, grow, and
            protect your digital assets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-1 h-full"
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="bg-black/60 rounded-lg p-6 h-full flex flex-col">
                <div className={`bg-gradient-to-r ${service.color} p-3 rounded-lg w-fit mb-4`}>{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/70 mb-4 flex-grow">{service.description}</p>
                <Button variant="ghost" className="w-fit p-0 hover:bg-transparent hover:text-white group">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
