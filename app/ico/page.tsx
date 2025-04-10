"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Rocket,
  Timer,
  Users,
  LineChart,
  Shield,
  Globe,
  Coins,
  ArrowUpRight
} from "lucide-react"

export default function ICOPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/10 to-black">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620325867502-221cfb739145')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4"
            >
              Initial Coin Offerings
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 mb-8"
            >
              Discover and participate in the most promising blockchain projects through our secure ICO platform
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              <Button 
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              >
                View Active ICOs
              </Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Active ICOs */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured ICOs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Bitbop Coin",
              symbol: "MVT",
              raised: "5.2M",
              goal: "10M",
              progress: 52,
              endDate: "2024-04-15"
            },
            {
              name: "DeFi Protocol",
              symbol: "DFP",
              raised: "3.8M",
              goal: "8M",
              progress: 47,
              endDate: "2024-04-20"
            },
            {
              name: "GameFi Platform",
              symbol: "GFP",
              raised: "6.5M",
              goal: "12M",
              progress: 54,
              endDate: "2024-04-25"
            }
          ].map((ico, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <Card className="p-6 bg-white/5 border-white/10 hover:border-purple-500/50 transition-colors">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{ico.name}</h3>
                  <span className="text-sm bg-purple-500/20 text-purple-400 px-2 py-1 rounded">
                    {ico.symbol}
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-white/70 mb-2">
                      <span>Raised: ${ico.raised}</span>
                      <span>Goal: ${ico.goal}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                        style={{ width: `${ico.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-white/70">
                      <Timer className="h-4 w-4" />
                      <span className="text-sm">Ends: {ico.endDate}</span>
                    </div>
                    <Button size="sm" variant="outline" className="border-white/10 hover:bg-white/5">
                      Participate
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Platform</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Secure",
                description: "KYC verified projects"
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Global",
                description: "Worldwide access"
              },
              {
                icon: <Coins className="h-8 w-8" />,
                title: "Multi-currency",
                description: "Multiple payment options"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Community",
                description: "Strong user base"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-purple-400 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}