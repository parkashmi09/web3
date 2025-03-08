"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Shield, Award } from "lucide-react"

export default function About() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      description: "Blockchain pioneer with 15+ years in fintech"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      description: "Expert in DeFi architecture and security"
    },
    {
      name: "Elena Rodriguez",
      role: "Head of DeFi",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      description: "Leading innovation in decentralized finance"
    },
    {
      name: "David Kim",
      role: "Head of Security",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      description: "Cybersecurity expert with blockchain focus"
    }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <Image
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80"
          alt="Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pioneering the Future of
            <span className="block bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Decentralized Finance
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Building a more inclusive and accessible financial ecosystem through innovative blockchain technology and DeFi solutions.
          </p>
        </motion.div>

        {/* Mission and Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&q=80"
              alt="Mission"
              width={600}
              height={400}
              className="rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-white/70 mb-6">
              At Bitbop, we're committed to democratizing finance through blockchain technology. Our platform provides accessible, secure, and innovative DeFi solutions that empower users worldwide.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-lg">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Innovation</h4>
                  <p className="text-sm text-white/70">Pushing boundaries in DeFi</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Security</h4>
                  <p className="text-sm text-white/70">Uncompromising protection</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Team</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Led by industry experts with decades of combined experience in blockchain, finance, and technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="object-cover aspect-square group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="font-bold text-lg">{member.name}</h4>
                    <p className="text-white/70">{member.role}</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block mb-16">
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-8">
              <Award className="h-12 w-12 mx-auto mb-4 text-purple-500" />
              <h3 className="text-2xl font-bold mb-2">Industry Recognition</h3>
              <p className="text-white/70">
                Recognized as a leading innovator in DeFi solutions and blockchain technology
              </p>
            </div>
          </div>
          
          <Button
            variant="ghost"
            className="group text-white hover:text-purple-500 transition-colors"
          >
            Learn More About Our Vision
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}