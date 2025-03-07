"use client"

import { motion } from "framer-motion"
import { Wallet, QrCode, Shield, ArrowRight, Smartphone } from "lucide-react"
import { Button } from "./ui/button"

export default function CryptoWallet() {
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
              Secure Crypto Wallet
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Your gateway to the world of digital assets. Store, send, and receive cryptocurrencies with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-8 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Multi-Currency Support</h3>
                <p className="text-white/70">Store multiple cryptocurrencies in one secure wallet</p>
              </div>
              <Wallet className="w-12 h-12 text-purple-500" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <span className="text-yellow-500">₿</span>
                  </div>
                  <span>Bitcoin</span>
                </div>
                <span className="text-white/90">2.5 BTC</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-blue-500">Ξ</span>
                  </div>
                  <span>Ethereum</span>
                </div>
                <span className="text-white/90">15.8 ETH</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-500">$</span>
                  </div>
                  <span>USDT</span>
                </div>
                <span className="text-white/90">5000 USDT</span>
              </div>
            </div>

            <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-500">
              Add Currency
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">Wallet Features</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Advanced Security</h4>
                  <p className="text-white/70">Multi-signature support and biometric authentication</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <QrCode className="w-8 h-8 text-purple-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Easy Transfers</h4>
                  <p className="text-white/70">Quick transfers with QR code scanning</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Smartphone className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Mobile Access</h4>
                  <p className="text-white/70">Manage your assets on the go with our mobile app</p>
                </div>
              </div>

              <Button variant="outline" className="w-full border-blue-500/50 hover:bg-blue-500/20">
                Create Wallet
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
            className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-6 backdrop-blur-xl text-center"
          >
            <div className="text-3xl font-bold mb-2">50+</div>
            <p className="text-white/70">Supported Currencies</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 backdrop-blur-xl text-center"
          >
            <div className="text-3xl font-bold mb-2">$0</div>
            <p className="text-white/70">Transaction Fees</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-6 backdrop-blur-xl text-center"
          >
            <div className="text-3xl font-bold mb-2">24/7</div>
            <p className="text-white/70">Customer Support</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}