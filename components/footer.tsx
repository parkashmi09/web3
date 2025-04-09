"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Twitter, Facebook, Instagram, Linkedin, Github, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent inline-block"
            >
              Bitbop
            </Link>
            <p className="text-white/70">
              Your comprehensive Web3 platform for DeFi banking, portfolio management, and secure crypto services. Build and grow your digital assets with confidence.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-white/70 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#defi" className="text-white/70 hover:text-white transition-colors">
                  DeFi
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/defi" className="text-white/70 hover:text-white transition-colors">
                  DeFi Banking
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="text-white/70 hover:text-white transition-colors">
                  Insurance Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/70 hover:text-white transition-colors">
                  Portfolio Management
                </Link>
              </li>
              <li>
                <Link href="/ico" className="text-white/70 hover:text-white transition-colors">
                  ICO Launchpad
                </Link>
              </li>
              <li>
                <Link href="/p2p" className="text-white/70 hover:text-white transition-colors">
                  P2P Solutions
                </Link>
              </li>
              <li>
                <Link href="/wallet" className="text-white/70 hover:text-white transition-colors">
                  Crypto Wallet
                </Link>
              </li>
              <li>
                <Link href="/investment" className="text-white/70 hover:text-white transition-colors">
                  Investment Services
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold">Subscribe</h3>
            <p className="text-white/70">Stay updated with the latest news about DeFi innovations, security updates, and investment opportunities.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/5 border-white/10 focus-visible:ring-purple-500"
              />
              <Button
                size="icon"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-6 border-t border-white/10 text-center text-white/50 text-sm"
        >
          <p>@bitbop defi banking & banking AIO</p>
          {/* <p> {new Date().getFullYear()} Bitbop. All rights reserved.</p> */}
        </motion.div>
      </div>
    </footer>
  )
}
