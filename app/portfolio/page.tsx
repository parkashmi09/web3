"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Wallet,
  TrendingUp,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  Settings,
  Download
} from "lucide-react"

export default function PortfolioPage() {
  const portfolioStats = {
    totalValue: 125750.32,
    dailyChange: 2.5,
    monthlyChange: 15.8,
    assets: [
      {
        name: "Bitcoin",
        symbol: "BTC",
        amount: 1.25,
        value: 56250.00,
        change: 3.2,
        color: "from-orange-500 to-yellow-500"
      },
      {
        name: "Ethereum",
        symbol: "ETH",
        amount: 15.5,
        value: 42375.50,
        change: -1.5,
        color: "from-blue-500 to-purple-500"
      },
      {
        name: "Solana",
        symbol: "SOL",
        amount: 245.8,
        value: 27124.82,
        change: 5.8,
        color: "from-green-500 to-emerald-500"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/10 to-black">
      {/* Header Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">My Portfolio</h1>
              <p className="text-white/70">Track and manage your crypto assets</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>

          {/* Portfolio Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-2"
            >
              <Card className="p-6 bg-white/5 border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-white/70 mb-1">Total Portfolio Value</p>
                    <h2 className="text-3xl font-bold">${portfolioStats.totalValue.toLocaleString()}</h2>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-green-400 mb-1">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      {portfolioStats.dailyChange}% (24h)
                    </div>
                    <div className="text-white/70">
                      {portfolioStats.monthlyChange}% (30d)
                    </div>
                  </div>
                </div>
                <div className="h-[200px] bg-white/5 rounded-lg mb-4">
                  {/* Chart component would go here */}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 bg-white/5 border-white/10">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    Buy Crypto
                  </Button>
                  <Button variant="outline" className="w-full border-white/10 hover:bg-white/5">
                    Send
                  </Button>
                  <Button variant="outline" className="w-full border-white/10 hover:bg-white/5">
                    Receive
                  </Button>
                  <Button variant="outline" className="w-full border-white/10 hover:bg-white/5">
                    Swap
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Assets List */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Your Assets</h3>
            {portfolioStats.assets.map((asset, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${asset.color} flex items-center justify-center mr-4`}>
                        {asset.symbol.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold">{asset.name}</h4>
                        <p className="text-sm text-white/70">{asset.symbol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">${asset.value.toLocaleString()}</div>
                      <div className="flex items-center justify-end">
                        {asset.change >= 0 ? (
                          <ArrowUpRight className="h-4 w-4 text-green-400" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-red-400" />
                        )}
                        <span className={asset.change >= 0 ? "text-green-400" : "text-red-400"}>
                          {Math.abs(asset.change)}%
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{asset.amount} {asset.symbol}</div>
                      <p className="text-sm text-white/70">Holdings</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}