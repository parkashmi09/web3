"use client"

import { motion } from "framer-motion"
import { LineChart, BarChart, Wallet2, TrendingUp, ArrowRight, PieChart, Activity, Lock } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"
import { useUser } from "@/context/user-context"
import { useAuth } from "@/components/AuthProvider"

export default function Portfolio() {
  const { user } = useUser()
  const { openSignIn } = useAuth()

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80"
          alt="Portfolio Background"
          fill
          className="object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
      </div>

      {/* Floating Chart Elements */}
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
          <Activity className="w-40 h-40 text-purple-500/20" />
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
          <PieChart className="w-32 h-32 text-blue-500/20" />
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
              Portfolio Management
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Track, analyze, and optimize your crypto portfolio with advanced analytics and real-time insights.
          </p>
        </motion.div>

        {user ? (
          <>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-black/40 rounded-2xl p-8 backdrop-blur-xl border border-white/10">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Portfolio Overview</h3>
                      <p className="text-white/70">Real-time tracking of your assets</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-3">
                      <LineChart className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <span>Total Value</span>
                      <span className="text-purple-500 font-semibold">$24,500.00</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <span>24h Change</span>
                      <span className="text-green-500 font-semibold">+5.23%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <span>Assets</span>
                      <span className="text-white/90 font-semibold">12</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-black/40 rounded-2xl p-8 backdrop-blur-xl border border-white/10">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Performance Metrics</h3>
                      <p className="text-white/70">Track your investment growth</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-3">
                      <BarChart className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <span>ROI</span>
                      <span className="text-blue-500 font-semibold">+18.5%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <span>Best Performer</span>
                      <span className="text-green-500 font-semibold">ETH +25%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <span>Risk Score</span>
                      <span className="text-yellow-500 font-semibold">Moderate</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-black/40 rounded-2xl p-6 backdrop-blur-xl border border-white/10">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-3 w-fit mb-4">
                    <Wallet2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Asset Allocation</h4>
                  <p className="text-white/70 mb-4">Smart portfolio balancing with AI-powered recommendations</p>
                  <Button variant="outline" className="w-full group border-purple-500/50 hover:bg-purple-500/20">
                    Optimize Now
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-black/40 rounded-2xl p-6 backdrop-blur-xl border border-white/10">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-3 w-fit mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Market Analysis</h4>
                  <p className="text-white/70 mb-4">Real-time market insights and trend analysis</p>
                  <Button variant="outline" className="w-full group border-blue-500/50 hover:bg-blue-500/20">
                    View Analysis
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-black/40 rounded-2xl p-6 backdrop-blur-xl border border-white/10">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg p-3 w-fit mb-4">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Performance Reports</h4>
                  <p className="text-white/70 mb-4">Detailed reports and analytics of your investments</p>
                  <Button variant="outline" className="w-full group border-cyan-500/50 hover:bg-cyan-500/20">
                    Generate Report
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-16 text-center"
            >
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-xl group">
                Connect Portfolio
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </>
        ) : (
          /* Content for non-logged in users */
          <div className="space-y-12">
            {/* Login prompt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center"
            >
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Sign In to Access Your Portfolio</h3>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Create an account or sign in to access your portfolio dashboard and manage your crypto assets.
              </p>
              <Button 
                onClick={openSignIn}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-xl"
              >
                Sign In to Continue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Feature preview */}
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-black/40 rounded-2xl p-6 backdrop-blur-xl border border-white/10">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-3 w-fit mb-4">
                    <Wallet2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Asset Management</h4>
                  <p className="text-white/70 mb-4">Track all your crypto assets in one place with real-time updates</p>
                  <div className="relative">
                    <Button 
                      variant="outline" 
                      className="w-full group border-purple-500/50 hover:bg-purple-500/20 opacity-60"
                      disabled
                    >
                      Preview Locked
                      <Lock className="ml-2 w-4 h-4" />
                    </Button>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/40 backdrop-blur-sm rounded-md px-3 py-1 text-xs">
                        Sign in to unlock
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-black/40 rounded-2xl p-6 backdrop-blur-xl border border-white/10">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-3 w-fit mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Performance Tracking</h4>
                  <p className="text-white/70 mb-4">Monitor your investment performance with detailed analytics</p>
                  <div className="relative">
                    <Button 
                      variant="outline" 
                      className="w-full group border-blue-500/50 hover:bg-blue-500/20 opacity-60"
                      disabled
                    >
                      Preview Locked
                      <Lock className="ml-2 w-4 h-4" />
                    </Button>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/40 backdrop-blur-sm rounded-md px-3 py-1 text-xs">
                        Sign in to unlock
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-black/40 rounded-2xl p-6 backdrop-blur-xl border border-white/10">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg p-3 w-fit mb-4">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">AI-Powered Insights</h4>
                  <p className="text-white/70 mb-4">Get personalized recommendations based on market trends</p>
                  <div className="relative">
                    <Button 
                      variant="outline" 
                      className="w-full group border-cyan-500/50 hover:bg-cyan-500/20 opacity-60"
                      disabled
                    >
                      Preview Locked
                      <Lock className="ml-2 w-4 h-4" />
                    </Button>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/40 backdrop-blur-sm rounded-md px-3 py-1 text-xs">
                        Sign in to unlock
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}