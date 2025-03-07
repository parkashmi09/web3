"use client"

import { motion } from "framer-motion"
import { Building2, ArrowRight, Landmark, PiggyBank, TrendingUp, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DeFiBankingPage() {
  const features = [
    {
      icon: Landmark,
      title: "Decentralized Lending",
      description: "Borrow and lend crypto assets with competitive interest rates and no intermediaries"
    },
    {
      icon: PiggyBank,
      title: "Yield Farming",
      description: "Earn passive income by providing liquidity to decentralized protocols"
    },
    {
      icon: TrendingUp,
      title: "Staking Rewards",
      description: "Stake your crypto assets to earn rewards and help secure the network"
    },
    {
      icon: Shield,
      title: "Smart Contract Security",
      description: "Your assets are protected by audited smart contracts and insurance protocols"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Next-Gen DeFi Banking
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Experience the future of banking with our decentralized financial services. Earn, borrow, and grow your crypto assets with complete control.
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              Start Banking <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-500/30 rounded-full filter blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/30 rounded-full filter blur-[100px] opacity-20"></div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <feature.icon className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
                $1.2B+
              </div>
              <div className="text-white/70">Total Value Locked</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
                12%
              </div>
              <div className="text-white/70">Average APY</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <div className="text-white/70">Active Users</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}