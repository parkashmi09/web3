"use client"

import { motion } from "framer-motion"
import { Wallet, QrCode, Shield, ArrowRight, Smartphone, TrendingUp, Percent } from "lucide-react"
import { Button } from "./ui/button"

export default function CryptoWallet() {
  return (
    <section className="py-20 bg-black/50 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
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
            className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-8 backdrop-blur-xl border border-white/10 shadow-xl"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Multi-Currency Support</h3>
                <p className="text-white/70">Store multiple cryptocurrencies in one secure wallet</p>
              </div>
              <Wallet className="w-12 h-12 text-purple-500" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <span className="text-yellow-500">₿</span>
                  </div>
                  <span>Bitcoin</span>
                </div>
                <div className="text-right">
                  <span className="text-white/90 block">2.5 BTC</span>
                  <span className="text-purple-500 text-xs">5% Monthly Return</span>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-blue-500">Ξ</span>
                  </div>
                  <span>Ethereum</span>
                </div>
                <div className="text-right">
                  <span className="text-white/90 block">15.8 ETH</span>
                  <span className="text-blue-500 text-xs">8% Monthly Return</span>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/5 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-500">$</span>
                  </div>
                  <span>USDT</span>
                </div>
                <div className="text-right">
                  <span className="text-white/90 block">5000 USDT</span>
                  <span className="text-green-500 text-xs">5% Monthly Return</span>
                </div>
              </div>
            </div>

            <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
              Add Currency
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-xl border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">Wallet Features</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                <Shield className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Advanced Security</h4>
                  <p className="text-white/70">Multi-signature support and biometric authentication</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                <QrCode className="w-8 h-8 text-purple-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Easy Transfers</h4>
                  <p className="text-white/70">Quick transfers with QR code scanning</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                <Smartphone className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Mobile Access</h4>
                  <p className="text-white/70">Manage your assets on the go with our mobile app</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-purple-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Staking Rewards</h4>
                  <p className="text-white/70">Earn 5-8% monthly returns on your crypto holdings</p>
                </div>
              </div>

              <Button variant="outline" className="w-full border-blue-500/50 hover:bg-blue-500/20 group transition-all duration-300">
                <span className="group-hover:translate-x-1 transition-transform duration-300">Create Wallet</span>
                <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-6 backdrop-blur-xl text-center border border-white/10 hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">100+</div>
            <p className="text-white/70">Supported Currencies</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 backdrop-blur-xl text-center border border-white/10 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-1">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">5-8%</span>
              <Percent className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-white/70">Monthly Returns</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-6 backdrop-blur-xl text-center border border-white/10 hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">24/7</div>
            <p className="text-white/70">Customer Support</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}