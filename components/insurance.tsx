"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Umbrella, ArrowRight, Check } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

export default function Insurance() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80"
          alt="Insurance Background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
      </div>

      {/* Floating Shield Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: ["0%", "-50%"],
            opacity: [0.2, 0, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-20 top-0"
        >
          <Shield className="w-40 h-40 text-purple-500/20" />
        </motion.div>
        <motion.div
          animate={{
            y: ["-30%", "20%"],
            opacity: [0.2, 0, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-10 top-1/3"
        >
          <Lock className="w-32 h-32 text-blue-500/20" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Crypto Insurance Solutions
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Protect your digital assets with our comprehensive insurance coverage. Smart contracts powered security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative bg-black/40 rounded-2xl p-8 backdrop-blur-xl border border-white/10 h-full">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-3 w-fit mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Wallet Protection</h3>
              <p className="text-white/70 mb-6">
                Secure coverage for your crypto wallets against hacks, theft, and unauthorized access.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-white/70">
                  <Check className="w-5 h-5 text-purple-500 mr-3" />
                  Up to $1M coverage
                </li>
                <li className="flex items-center text-white/70">
                  <Check className="w-5 h-5 text-purple-500 mr-3" />
                  24/7 monitoring
                </li>
                <li className="flex items-center text-white/70">
                  <Check className="w-5 h-5 text-purple-500 mr-3" />
                  Instant claims
                </li>
              </ul>
              <Button variant="outline" className="group border-purple-500/50 hover:bg-purple-500/20 w-full">
                Get Protected
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative bg-black/40 rounded-2xl p-8 backdrop-blur-xl border border-white/10 h-full">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-3 w-fit mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Smart Contract Coverage</h3>
              <p className="text-white/70 mb-6">
                Insurance for smart contract vulnerabilities and technical failures.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-white/70">
                  <Check className="w-5 h-5 text-blue-500 mr-3" />
                  Audit protection
                </li>
                <li className="flex items-center text-white/70">
                  <Check className="w-5 h-5 text-blue-500 mr-3" />
                  Bug bounty coverage
                </li>
                <li className="flex items-center text-white/70">
                  <Check className="w-5 h-5 text-blue-500 mr-3" />
                  Automated payouts
                </li>
              </ul>
              <Button variant="outline" className="group border-blue-500/50 hover:bg-blue-500/20 w-full">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative bg-black/40 rounded-2xl p-8 backdrop-blur-xl border border-white/10 h-full">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg p-3 w-fit mb-6">
                <Umbrella className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">DeFi Protection</h3>
              <p className="text-white/70 mb-6">
                Comprehensive coverage for your DeFi investments and yield farming activities.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-white/70">
                  <Check className="w-5 h-5 text-cyan-500 mr-3" />
                  Liquidity protection
                </li>
                <li className="flex items-center text-white/70">
                  <Check className="w-5 h-5 text-cyan-500 mr-3" />
                  Staking insurance
                </li>
                <li className="flex items-center text-white/70">
                  <Check className="w-5 h-5 text-cyan-500 mr-3" />
                  Yield guarantees
                </li>
              </ul>
              <Button variant="outline" className="group border-cyan-500/50 hover:bg-cyan-500/20 w-full">
                Get Coverage
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              $504M+
            </h4>
            <p className="text-white/70">Claims Paid</p>
          </div>
          <div>
            <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              96K+
            </h4>
            <p className="text-white/70">Protected Users</p>
          </div>
          <div>
            <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              99.9%
            </h4>
            <p className="text-white/70">Claims Approval</p>
          </div>
          <div>
            <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              24/7
            </h4>
            <p className="text-white/70">Support</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-xl group">
            Calculate Premium
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}