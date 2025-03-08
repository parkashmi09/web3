"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import useEmblaCarousel from 'embla-carousel-react'
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
  const [isClient, setIsClient] = useState(false)
  const [assetsCarouselRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

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
      <div className="relative py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">My Portfolio</h1>
              <p className="text-white/70 text-sm sm:text-base">Track and manage your crypto assets</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 text-sm py-1.5 px-3">
                <RefreshCw className="h-3.5 w-3.5 mr-1.5" />
                Refresh
              </Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5 text-sm py-1.5 px-3">
                <Download className="h-3.5 w-3.5 mr-1.5" />
                Export
              </Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5 text-sm py-1.5 px-3">
                <Settings className="h-3.5 w-3.5 mr-1.5" />
                Settings
              </Button>
            </div>
          </div>

          {/* Portfolio Overview - Mobile */}
          <div className="block sm:hidden space-y-4 mb-6">
            <motion.div
              initial={isClient ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-4 bg-white/5 border-white/10">
                <div className="flex flex-col gap-3 mb-4">
                  <div>
                    <p className="text-white/70 text-sm mb-1">Total Portfolio Value</p>
                    <h2 className="text-2xl font-bold">${portfolioStats.totalValue.toLocaleString()}</h2>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-green-400 text-sm">
                      <ArrowUpRight className="h-3.5 w-3.5 mr-1" />
                      {portfolioStats.dailyChange}% (24h)
                    </div>
                    <div className="text-white/70 text-sm">
                      {portfolioStats.monthlyChange}% (30d)
                    </div>
                  </div>
                </div>
                <div className="h-[160px] bg-white/5 rounded-lg mb-3">
                  {/* Chart component would go here */}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={isClient ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-4 bg-white/5 border-white/10">
                <h3 className="text-base font-semibold mb-3">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-sm py-1.5">
                    Buy Crypto
                  </Button>
                  <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 text-sm py-1.5">
                    Send
                  </Button>
                  <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 text-sm py-1.5">
                    Receive
                  </Button>
                  <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 text-sm py-1.5">
                    Swap
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Portfolio Overview - Desktop */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={isClient ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="col-span-1 md:col-span-2"
            >
              <Card className="p-4 sm:p-6 bg-white/5 border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-4 sm:mb-6">
                  <div>
                    <p className="text-white/70 text-sm mb-0.5 sm:mb-1">Total Portfolio Value</p>
                    <h2 className="text-2xl sm:text-3xl font-bold">${portfolioStats.totalValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h2>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="flex items-center text-green-400 text-sm sm:text-base mb-0.5 sm:mb-1">
                      <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" />
                      {portfolioStats.dailyChange}% (24h)
                    </div>
                    <div className="text-white/70 text-sm sm:text-base">
                      {portfolioStats.monthlyChange}% (30d)
                    </div>
                  </div>
                </div>
                <div className="h-[160px] sm:h-[200px] bg-white/5 rounded-lg mb-3 sm:mb-4">
                  {/* Chart component would go here */}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={isClient ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Card className="p-4 sm:p-6 bg-white/5 border-white/10">
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-sm sm:text-base py-1.5 sm:py-2">
                    Buy Crypto
                  </Button>
                  <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 text-sm sm:text-base py-1.5 sm:py-2">
                    Send
                  </Button>
                  <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 text-sm sm:text-base py-1.5 sm:py-2">
                    Receive
                  </Button>
                  <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 text-sm sm:text-base py-1.5 sm:py-2">
                    Swap
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Assets List - Mobile Carousel */}
          <div className="block sm:hidden">
            <h3 className="text-lg font-semibold mb-4">Your Assets</h3>
            <div className="overflow-hidden" ref={assetsCarouselRef}>
              <div className="flex touch-pan-y">
                {portfolioStats.assets.map((asset, index) => (
                  <motion.div
                    key={index}
                    initial={isClient ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: isClient ? 0.1 * index : 0 }}
                    className="flex-[0_0_85%] min-w-0 pl-4 first:pl-0"
                  >
                    <Card className="p-4 bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${asset.color} flex items-center justify-center mr-3`}>
                              {asset.symbol.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm">{asset.name}</h4>
                              <p className="text-xs text-white/70">{asset.symbol}</p>
                            </div>
                          </div>
                          <div className="flex items-center text-sm">
                            {asset.change >= 0 ? (
                              <ArrowUpRight className="h-3.5 w-3.5 text-green-400" />
                            ) : (
                              <ArrowDownRight className="h-3.5 w-3.5 text-red-400" />
                            )}
                            <span className={asset.change >= 0 ? "text-green-400" : "text-red-400"}>
                              {Math.abs(asset.change)}%
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-semibold text-sm">${asset.value.toLocaleString()}</div>
                            <p className="text-xs text-white/70">Value</p>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-sm">{asset.amount} {asset.symbol}</div>
                            <p className="text-xs text-white/70">Holdings</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Assets List - Desktop */}
          <div className="hidden sm:block space-y-4">
            {portfolioStats.assets.map((asset, index) => (
              <motion.div
                key={index}
                initial={isClient ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: isClient ? 0.1 * index : 0 }}
              >
                <Card className="p-4 sm:p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r ${asset.color} flex items-center justify-center mr-3 sm:mr-4 text-sm sm:text-base`}>
                        {asset.symbol.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base">{asset.name}</h4>
                        <p className="text-xs sm:text-sm text-white/70">{asset.symbol}</p>
                      </div>
                    </div>
                    <div className="flex justify-between sm:justify-end items-center w-full sm:w-auto gap-4 sm:gap-8">
                      <div className="text-left sm:text-right">
                        <div className="font-semibold text-sm sm:text-base">${asset.value.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
                        <div className="flex items-center text-xs sm:text-sm">
                          {asset.change >= 0 ? (
                            <ArrowUpRight className="h-3.5 w-3.5 text-green-400" />
                          ) : (
                            <ArrowDownRight className="h-3.5 w-3.5 text-red-400" />
                          )}
                          <span className={asset.change >= 0 ? "text-green-400" : "text-red-400"}>
                            {Math.abs(asset.change)}%
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-sm sm:text-base whitespace-nowrap">{asset.amount} {asset.symbol}</div>
                        <p className="text-xs sm:text-sm text-white/70">Holdings</p>
                      </div>
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