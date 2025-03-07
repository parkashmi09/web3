"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowLeftRight,
  Shield,
  Users,
  Search,
  DollarSign,
  Star,
  ChevronDown,
  ArrowRight
} from "lucide-react"

export default function P2PPage() {
  const trades = [
    {
      seller: "CryptoTrader",
      rating: 4.9,
      completedTrades: 521,
      price: 45250.00,
      currency: "USD",
      paymentMethods: ["Bank Transfer", "PayPal"],
      available: 2.5,
      minAmount: 100,
      maxAmount: 10000
    },
    {
      seller: "BitMaster",
      rating: 4.8,
      completedTrades: 342,
      price: 45200.00,
      currency: "USD",
      paymentMethods: ["Bank Transfer", "Credit Card"],
      available: 1.8,
      minAmount: 50,
      maxAmount: 5000
    },
    {
      seller: "CoinPro",
      rating: 4.7,
      completedTrades: 283,
      price: 45300.00,
      currency: "USD",
      paymentMethods: ["Bank Transfer"],
      available: 3.2,
      minAmount: 200,
      maxAmount: 15000
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/10 to-black">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl" />
        <div className="absolute inset-0 bg-[url('/images/p2p-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4"
            >
              P2P Trading Platform
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 mb-8"
            >
              Trade cryptocurrencies directly with other users securely and efficiently
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
                Start Trading
              </Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                View Orders
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trading Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white/5 rounded-xl p-6 mb-8">
          <div className="flex flex-wrap gap-4 mb-6">
            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              Buy
            </Button>
            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              Sell
            </Button>
            <div className="flex-grow" />
            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              BTC <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              USD <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              Payment Method <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            {trades.map((trade, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="p-6 bg-white/5 border-white/10 hover:border-purple-500/50 transition-colors">
                  <div className="flex flex-wrap gap-6 items-center">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{trade.seller}</span>
                        <div className="flex items-center text-yellow-500">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="ml-1 text-sm">{trade.rating}</span>
                        </div>
                      </div>
                      <div className="text-sm text-white/70">
                        {trade.completedTrades} trades
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">${trade.price.toLocaleString()}</div>
                      <div className="text-sm text-white/70">{trade.currency}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Payment Methods</div>
                      <div className="text-sm text-white/70">
                        {trade.paymentMethods.join(", ")}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">{trade.available} BTC</div>
                      <div className="text-sm text-white/70">Available</div>
                    </div>
                    <div>
                      <div className="text-sm text-white/70">
                        Limits: ${trade.minAmount.toLocaleString()} - ${trade.maxAmount.toLocaleString()}
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                        Buy BTC
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Trade P2P With Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Secure Escrow",
                description: "Protected trading environment"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Verified Users",
                description: "Trusted trading partners"
              },
              {
                icon: <DollarSign className="h-8 w-8" />,
                title: "Best Rates",
                description: "Competitive pricing"
              },
              {
                icon: <ArrowLeftRight className="h-8 w-8" />,
                title: "Fast Trades",
                description: "Quick transaction process"
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