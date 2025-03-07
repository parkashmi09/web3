"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Shield,
  Umbrella,
  FileCheck,
  Clock,
  Lock,
  CheckCircle,
  AlertCircle,
  ArrowRight
} from "lucide-react"

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/10 to-black">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl" />
        <div className="absolute inset-0 bg-[url('/images/insurance-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4"
            >
              Crypto Asset Insurance
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 mb-8"
            >
              Protect your digital assets with our comprehensive insurance coverage
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              <Button 
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              >
                Get Coverage
              </Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Coverage Plans */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Insurance Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Basic Coverage",
              price: "0.1% monthly",
              features: [
                "Up to $100,000 coverage",
                "Hack protection",
                "24/7 support",
                "Smart contract coverage"
              ],
              recommended: false
            },
            {
              name: "Premium Coverage",
              price: "0.15% monthly",
              features: [
                "Up to $500,000 coverage",
                "Hack & theft protection",
                "Priority 24/7 support",
                "Smart contract coverage",
                "Exchange coverage"
              ],
              recommended: true
            },
            {
              name: "Enterprise Coverage",
              price: "Custom",
              features: [
                "Unlimited coverage",
                "Complete protection",
                "Dedicated support team",
                "Custom coverage options",
                "Multi-wallet protection"
              ],
              recommended: false
            }
          ].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <Card className={`p-6 ${plan.recommended ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20' : 'bg-white/5'} border-white/10 hover:border-purple-500/50 transition-colors relative`}>
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-1 rounded-full text-sm font-medium">
                    Recommended
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                <div className="text-2xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.recommended ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600' : 'border-white/10 hover:bg-white/5'}`}
                  variant={plan.recommended ? 'default' : 'outline'}
                >
                  Choose Plan
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Insurance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Secure Coverage",
                description: "Protected by industry experts"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Instant Claims",
                description: "Quick claim processing"
              },
              {
                icon: <Lock className="h-8 w-8" />,
                title: "Asset Security",
                description: "Multi-layer protection"
              },
              {
                icon: <FileCheck className="h-8 w-8" />,
                title: "Smart Contracts",
                description: "Automated processing"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-purple-400 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}