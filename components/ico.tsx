"use client"

import { motion } from "framer-motion"
import { Rocket, Timer, Users, ArrowRight, ChartBar } from "lucide-react"
import { Button } from "./ui/button"

export default function ICO() {
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
              Initial Coin Offerings
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Launch your token with our secure and compliant ICO platform. Access global investors and seamless token distribution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">Featured ICO</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-semibold mb-1">Bitbop Coin</h4>
                  <p className="text-white/70">Next-gen virtual reality platform</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/70">Raised</p>
                  <p className="text-xl font-semibold text-purple-500"> $5M</p>
                </div>
              </div>
              
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{ width: "50%" }}></div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-sm text-white/70">Price</p>
                  <p className="font-semibold">$0.05</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-white/70">Min. Buy</p>
                  <p className="font-semibold">100 MVT</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-white/70">Ends in</p>
                  <p className="font-semibold text-blue-500">2d 14h</p>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500">
                Participate Now
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">Launch Your ICO</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Rocket className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Token Launch</h4>
                  <p className="text-white/70">Create and deploy your token with our secure smart contracts</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-purple-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Investor Dashboard</h4>
                  <p className="text-white/70">Professional tools for investor management and KYC</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <ChartBar className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Analytics & Reporting</h4>
                  <p className="text-white/70">Real-time statistics and investor insights</p>
                </div>
              </div>

              <Button variant="outline" className="w-full border-blue-500/50 hover:bg-blue-500/20">
                Start ICO Launch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center p-6"
          >
            <div className="text-3xl font-bold mb-2">$50M+</div>
            <p className="text-white/70">Total Funds Raised</p>
          </motion.div>
{/* 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center p-6"
          >
            <div className="text-3xl font-bold mb-2">50+</div>
            <p className="text-white/70">Successful ICOs</p>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center p-6"
          >
            <div className="text-3xl font-bold mb-2">90K+</div>
            <p className="text-white/70">Global Investors</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}