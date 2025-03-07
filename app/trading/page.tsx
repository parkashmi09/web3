"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  LineChart,
  CandlestickChart,
  ArrowUpDown,
  Wallet,
  TrendingUp,
  Clock,
  BarChart3,
  Layers
} from "lucide-react"

export default function TradingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/10 to-black">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl" />
        <div className="absolute inset-0 bg-[url('/images/trading-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4"
            >
              Advanced Crypto Trading
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 mb-8"
            >
              Professional-grade trading tools with real-time market data and advanced charting
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
                View Markets
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trading Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <CandlestickChart className="h-8 w-8" />,
              title: "Advanced Charts",
              description: "Professional-grade charting with multiple timeframes"
            },
            {
              icon: <ArrowUpDown className="h-8 w-8" />,
              title: "Instant Execution",
              description: "Lightning-fast order execution with minimal slippage"
            },
            {
              icon: <Wallet className="h-8 w-8" />,
              title: "Secure Trading",
              description: "Multi-signature security for your trading account"
            },
            {
              icon: <TrendingUp className="h-8 w-8" />,
              title: "Market Analysis",
              description: "Real-time market data and technical indicators"
            },
            {
              icon: <Clock className="h-8 w-8" />,
              title: "24/7 Trading",
              description: "Trade cryptocurrencies around the clock"
            },
            {
              icon: <BarChart3 className="h-8 w-8" />,
              title: "Portfolio Tracking",
              description: "Monitor your trading performance in real-time"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <Card className="p-6 bg-white/5 border-white/10 hover:border-purple-500/50 transition-colors">
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trading Pairs */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Trading Pairs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                pair: "BTC/USDT",
                price: "45,123.45",
                change: "+2.34%",
                volume: "1.2B"
              },
              {
                pair: "ETH/USDT",
                price: "3,123.78",
                change: "+1.56%",
                volume: "789M"
              },
              {
                pair: "BNB/USDT",
                price: "312.45",
                change: "+0.89%",
                volume: "234M"
              }
            ].map((pair, index) => (
              <Card
                key={index}
                className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">{pair.pair}</span>
                  <Layers className="h-5 w-5 text-purple-400" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/70">Price</span>
                    <span className="font-medium">${pair.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">24h Change</span>
                    <span className="text-green-400">{pair.change}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">24h Volume</span>
                    <span className="font-medium">${pair.volume}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}