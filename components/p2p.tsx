"use client"

import { motion } from "framer-motion"
import { Users, Shield, Repeat, ArrowRight, Globe } from "lucide-react"
import { Button } from "./ui/button"

export default function P2P() {
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
              P2P Trading Solutions
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Trade directly with other users through our secure and efficient P2P marketplace. Zero intermediaries, maximum security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">Active Offers</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Buy BTC</span>
                  <span className="text-green-500">$43,250.00</span>
                </div>
                <div className="flex justify-between text-sm text-white/70">
                  <span>Payment: Bank Transfer</span>
                  <span>Limit: $500-$5000</span>
                </div>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Sell ETH</span>
                  <span className="text-red-500">$2,150.00</span>
                </div>
                <div className="flex justify-between text-sm text-white/70">
                  <span>Payment: PayPal</span>
                  <span>Limit: $100-$2000</span>
                </div>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Buy USDT</span>
                  <span className="text-green-500">$1.00</span>
                </div>
                <div className="flex justify-between text-sm text-white/70">
                  <span>Payment: Credit Card</span>
                  <span>Limit: $50-$1000</span>
                </div>
              </div>
            </div>
            
            <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-500">
              View All Offers
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">Create New Offer</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Globe className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Global Reach</h4>
                  <p className="text-white/70">Connect with traders worldwide and choose your preferred payment method</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-purple-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Secure Escrow</h4>
                  <p className="text-white/70">Trade with confidence using our secure escrow service</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Repeat className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Flexible Trading</h4>
                  <p className="text-white/70">Set your own prices and payment terms</p>
                </div>
              </div>

              <Button variant="outline" className="w-full border-blue-500/50 hover:bg-blue-500/20">
                Create Offer
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
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
            <div className="text-3xl font-bold mb-2">50K+</div>
            <p className="text-white/70">Active Users</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center p-6"
          >
            <div className="text-3xl font-bold mb-2">100+</div>
            <p className="text-white/70">Payment Methods</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center p-6"
          >
            <div className="text-3xl font-bold mb-2">$10M+</div>
            <p className="text-white/70">Daily Volume</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center p-6"
          >
            <div className="text-3xl font-bold mb-2">99.9%</div>
            <p className="text-white/70">Success Rate</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}