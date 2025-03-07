"use client"

import { motion } from "framer-motion"
import { TrendingUp, PieChart, Lock, ArrowRight, LineChart } from "lucide-react"
import { Button } from "./ui/button"

export default function Investment() {
  return (
    <section className="py-20 bg-black/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
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
            className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">Investment Plans</h3>
            <div className="space-y-6">
              <div className="p-6 bg-white/5 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold">Starter Plan</h4>
                  <span className="text-purple-500">5% APY</span>
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
                <Button variant="outline" className="w-full border-purple-500/50 hover:bg-purple-500/20">
                  Start Investing
                </Button>
              </div>

              <div className="p-6 bg-white/5 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold">Pro Plan</h4>
                  <span className="text-blue-500">12% APY</span>
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
                <Button variant="outline" className="w-full border-blue-500/50 hover:bg-blue-500/20">
                  Go Pro
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">Investment Features</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <PieChart className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Diversified Portfolio</h4>
                  <p className="text-white/70">Spread your investments across multiple cryptocurrencies and reduce risk</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Lock className="w-8 h-8 text-purple-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Secure Storage</h4>
                  <p className="text-white/70">Your investments are protected with institutional-grade security</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <LineChart className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Performance Tracking</h4>
                  <p className="text-white/70">Monitor your investment performance with detailed analytics</p>
                </div>
              </div>

              <div className="mt-8">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center p-6"
          >
            <div className="text-3xl font-bold mb-2">$100M+</div>
            <p className="text-white/70">Assets Under Management</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center p-6"
          >
            <div className="text-3xl font-bold mb-2">15+</div>
            <p className="text-white/70">Years Experience</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center p-6"
          >
            <div className="text-3xl font-bold mb-2">24/7</div>
            <p className="text-white/70">Expert Support</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center p-6"
          >
            <div className="text-3xl font-bold mb-2">50K+</div>
            <p className="text-white/70">Active Investors</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}