"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import useEmblaCarousel from 'embla-carousel-react'
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
  const [isClient, setIsClient] = useState(false)
  const [tradesCarouselRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  })
  const [featuresCarouselRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

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
      <div className="relative h-[30vh] sm:h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl" />
        <div className="absolute inset-0 bg-[url('/images/p2p-bg.jpg')] bg-cover bg-center opacity-20" />
        <div style={{marginTop:"60px"}}  className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1 
              initial={isClient ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3 sm:mb-4"
            >
              P2P Trading Platform
            </motion.h1>
            <motion.p 
              initial={isClient ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-white/70 mb-6 sm:mb-8"
            >
              Trade cryptocurrencies directly with other users securely and efficiently
            </motion.p>
            <motion.div 
              initial={isClient ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button 
                className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              >
                Start Trading
              </Button>
              <Button variant="outline" className="w-full sm:w-auto border-white/10 hover:bg-white/5">
                View Orders
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trading Section */}
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="bg-white/5 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="grid grid-cols-2 sm:flex gap-2 sm:gap-4 mb-4 sm:mb-6">
            <Button variant="outline" className="border-white/10 hover:bg-white/5 text-sm">
              Buy
            </Button>
            <Button variant="outline" className="border-white/10 hover:bg-white/5 text-sm">
              Sell
            </Button>
            <div className="hidden sm:block flex-grow" />
            <Button variant="outline" className="border-white/10 hover:bg-white/5 text-sm">
              BTC <ChevronDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Button variant="outline" className="border-white/10 hover:bg-white/5 text-sm">
              USD <ChevronDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Button variant="outline" className="col-span-2 sm:col-span-1 border-white/10 hover:bg-white/5 text-sm">
              Payment <ChevronDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>

          {/* Mobile Trades Carousel */}
          <div className="block sm:hidden overflow-hidden" ref={tradesCarouselRef}>
            <div className="flex touch-pan-y">
              {trades.map((trade, index) => (
                <motion.div
                  key={index}
                  initial={isClient ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: isClient ? 0.1 * index : 0 }}
                  className="flex-[0_0_85%] min-w-0 pl-4 first:pl-0"
                >
                  <Card className="p-4 bg-white/5 border-white/10 hover:border-purple-500/50 transition-colors">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-sm">{trade.seller}</span>
                            <div className="flex items-center text-yellow-500">
                              <Star className="h-3.5 w-3.5 fill-current" />
                              <span className="ml-1 text-xs">{trade.rating}</span>
                            </div>
                          </div>
                          <div className="text-xs text-white/70">
                            {trade.completedTrades} trades
                          </div>
                        </div>
                        <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-sm py-1.5 px-3">
                          Buy BTC
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <div className="font-semibold text-sm">${trade.price.toLocaleString()}</div>
                          <div className="text-xs text-white/70">{trade.currency}</div>
                        </div>
                        <div>
                          <div className="font-semibold text-sm truncate">{trade.available} BTC</div>
                          <div className="text-xs text-white/70">Available</div>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-white/70">Payment Methods</div>
                        <div className="text-sm truncate">{trade.paymentMethods.join(", ")}</div>
                      </div>
                      <div className="text-xs text-white/70">
                        Limits: ${trade.minAmount.toLocaleString()} - ${trade.maxAmount.toLocaleString()}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Trades List */}
          <div className="hidden sm:block space-y-4">
            {trades.map((trade, index) => (
              <motion.div
                key={index}
                initial={isClient ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: isClient ? 0.1 * index : 0 }}
              >
                <Card className="p-4 sm:p-6 bg-white/5 border-white/10 hover:border-purple-500/50 transition-colors">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-sm sm:text-base">{trade.seller}</span>
                          <div className="flex items-center text-yellow-500">
                            <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                            <span className="ml-1 text-xs sm:text-sm">{trade.rating}</span>
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm text-white/70">
                          {trade.completedTrades} trades
                        </div>
                      </div>
                      <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-sm sm:text-base py-1.5 px-3 sm:py-2 sm:px-4">
                        Buy BTC
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 text-sm sm:text-base">
                      <div>
                        <div className="font-semibold">${trade.price.toLocaleString()}</div>
                        <div className="text-xs sm:text-sm text-white/70">{trade.currency}</div>
                      </div>
                      <div>
                        <div className="font-semibold truncate">{trade.paymentMethods.join(", ")}</div>
                        <div className="text-xs sm:text-sm text-white/70">Payment</div>
                      </div>
                      <div>
                        <div className="font-semibold">{trade.available} BTC</div>
                        <div className="text-xs sm:text-sm text-white/70">Available</div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-white/70">
                          Limits: ${trade.minAmount.toLocaleString()} - ${trade.maxAmount.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Why Trade P2P With Us</h2>
          
          {/* Mobile Features Carousel */}
          <div className="block sm:hidden overflow-hidden" ref={featuresCarouselRef}>
            <div className="flex touch-pan-y">
              {[
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: "Secure Escrow",
                  description: "Protected trading environment"
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Verified Users",
                  description: "Trusted trading partners"
                },
                {
                  icon: <DollarSign className="h-6 w-6" />,
                  title: "Best Rates",
                  description: "Competitive pricing"
                },
                {
                  icon: <ArrowLeftRight className="h-6 w-6" />,
                  title: "Fast Trades",
                  description: "Quick transaction process"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={isClient ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: isClient ? 0.1 * index : 0 }}
                  className="flex-[0_0_70%] min-w-0 pl-4 first:pl-0"
                >
                  <div className="text-center p-4">
                    <div className="text-purple-400 mb-3 flex justify-center">{feature.icon}</div>
                    <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-white/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Features Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Secure Escrow",
                description: "Protected trading environment"
              },
              {
                icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Verified Users",
                description: "Trusted trading partners"
              },
              {
                icon: <DollarSign className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Best Rates",
                description: "Competitive pricing"
              },
              {
                icon: <ArrowLeftRight className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Fast Trades",
                description: "Quick transaction process"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-3 sm:p-4">
                <div className="text-purple-400 mb-3 sm:mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}