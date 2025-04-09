"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { TrendingUp, PieChart, Lock, ArrowRight, LineChart, Sparkles, BarChart4, Wallet } from "lucide-react"


export default function Page() {
  return (
    <section className="py-20 bg-black/50 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Investment Services
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Professional investment solutions for both beginners and experienced crypto investors. Grow your wealth with our expert strategies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-8 backdrop-blur-xl border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Sparkles className="w-6 h-6 text-purple-500 mr-2" />
              Bitbop Investment Plans
            </h3>
            <div className="space-y-6">
              <div className="p-6 bg-white/5 rounded-lg border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold">Starter Plan</h4>
                  <div className="text-right">
                    <span className="text-purple-500 font-bold">6% Monthly</span>
                    <p className="text-xs text-white/50">72% APY</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-white/70">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Minimum investment: $100
                  </li>
                  <li className="flex items-center text-white/70">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Weekly returns
                  </li>
                  <li className="flex items-center text-white/70">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Basic portfolio management
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-purple-500/50 hover:bg-purple-500/20 group transition-all duration-300">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Start Investing</span>
                  <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </Button>
              </div>

              <div className="p-6 bg-white/5 rounded-lg border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-500 text-xs px-3 py-1 rounded-bl-lg font-medium">
                  POPULAR
                </div>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold">Pro Plan</h4>
                  <div className="text-right">
                    <span className="text-blue-500 font-bold">8% Monthly</span>
                    <p className="text-xs text-white/50">96% APY</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-white/70">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Minimum investment: $1000
                  </li>
                  <li className="flex items-center text-white/70">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Daily returns
                  </li>
                  <li className="flex items-center text-white/70">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Advanced portfolio management
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-blue-500/50 hover:bg-blue-500/20 group transition-all duration-300">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Go Pro</span>
                  <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-xl border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <BarChart4 className="w-6 h-6 text-blue-500 mr-2" />
              Investment Features
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                <PieChart className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Diversified Portfolio</h4>
                  <p className="text-white/70">Spread your investments across multiple cryptocurrencies and reduce risk</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                <Lock className="w-8 h-8 text-purple-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Secure Storage</h4>
                  <p className="text-white/70">Your investments are protected with institutional-grade security</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                <LineChart className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Performance Tracking</h4>
                  <p className="text-white/70">Monitor your investment performance with detailed analytics</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                <Wallet className="w-8 h-8 text-purple-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Instant Withdrawals</h4>
                  <p className="text-white/70">Access your funds anytime with our quick withdrawal process</p>
                </div>
              </div>

              <div className="mt-8">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Schedule Consultation</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center p-6 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">$100M+</div>
            <p className="text-white/70">Assets Under Management</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center p-6 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">15+</div>
            <p className="text-white/70">Years Experience</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center p-6 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">24/7</div>
            <p className="text-white/70">Expert Support</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center p-6 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">50K+</div>
            <p className="text-white/70">Active Investors</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}