"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  Wallet, 
  ArrowRightLeft, 
  TrendingUp, 
  Shield, 
  QrCode,
  Send,
  Download,
  History
} from "lucide-react"

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/10 to-black">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl" />
        <div className="absolute inset-0 bg-[url('/images/wallet-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4"
            >
              Secure Crypto Wallet
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 mb-8"
            >
              Store, send, and receive your cryptocurrencies with our state-of-the-art wallet solution
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              >
                Create Wallet
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="h-8 w-8" />,
              title: "Secure Storage",
              description: "Multi-signature security and encrypted private keys"
            },
            {
              icon: <ArrowRightLeft className="h-8 w-8" />,
              title: "Quick Transfers",
              description: "Send and receive crypto instantly worldwide"
            },
            {
              icon: <TrendingUp className="h-8 w-8" />,
              title: "Real-time Trading",
              description: "Direct access to trading and exchange features"
            },
            {
              icon: <QrCode className="h-8 w-8" />,
              title: "Easy Access",
              description: "QR code scanning for quick wallet access"
            },
            {
              icon: <History className="h-8 w-8" />,
              title: "Transaction History",
              description: "Detailed history of all your transactions"
            },
            {
              icon: <Wallet className="h-8 w-8" />,
              title: "Multi-Currency",
              description: "Support for all major cryptocurrencies"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <Card className="p-6 bg-white/5 border-white/10 hover:border-purple-500/50 transition-colors">
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: <Send className="h-6 w-6" />,
                label: "Send"
              },
              {
                icon: <Download className="h-6 w-6" />,
                label: "Receive"
              },
              {
                icon: <ArrowRightLeft className="h-6 w-6" />,
                label: "Swap"
              },
              {
                icon: <History className="h-6 w-6" />,
                label: "History"
              }
            ].map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex flex-col items-center gap-2 py-8 border-white/10 hover:bg-white/5 hover:border-purple-500/50"
              >
                <div className="text-purple-400">{action.icon}</div>
                <span>{action.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}