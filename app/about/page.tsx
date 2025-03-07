'use client';

import { motion } from 'framer-motion';
import { Wallet, Shield, Users, TrendingUp, Globe, Clock, Cpu, Lock, BarChart3, Rocket } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-[url('/images/crypto-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Revolutionizing Crypto Trading
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner in the world of cryptocurrency trading and blockchain technology
          </p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We are dedicated to making cryptocurrency trading accessible, secure, and profitable for everyone. 
                Our platform combines cutting-edge technology with user-friendly interfaces to provide the best 
                trading experience in the crypto space.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Wallet, title: "Advanced Trading", desc: "State-of-the-art trading tools" },
                { icon: Shield, title: "Security First", desc: "Enterprise-grade security" },
                { icon: Users, title: "Community", desc: "Strong user community" },
                { icon: TrendingUp, title: "Analytics", desc: "Real-time market insights" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl"
                >
                  <item.icon className="w-8 h-8 text-blue-500 mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black/50 to-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Lock,
                  title: "Advanced Security",
                  description: "Multi-layer security protocols and regular security audits to protect your assets"
                },
                {
                  icon: Clock,
                  title: "24/7 Support",
                  description: "Round-the-clock customer support to assist you with any queries"
                },
                {
                  icon: Cpu,
                  title: "Innovative Technology",
                  description: "Cutting-edge blockchain technology and trading algorithms"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  className="p-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl backdrop-blur-sm"
                >
                  <feature.icon className="w-12 h-12 text-blue-500 mb-4 mx-auto" strokeWidth={1.5} />
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { icon: Users, value: "1M+", label: "Active Users" },
              { icon: BarChart3, value: "$10B+", label: "Trading Volume" },
              { icon: Globe, value: "150+", label: "Countries" },
              { icon: Rocket, value: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <stat.icon className="w-8 h-8 text-blue-500 mb-4 mx-auto" strokeWidth={1.5} />
                <h3 className="text-4xl font-bold text-blue-500 mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Trading?</h2>
            <p className="text-gray-300 mb-8">
              Join millions of users worldwide and start your crypto journey today
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Get Started Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;