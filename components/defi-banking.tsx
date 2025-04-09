"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Repeat, DollarSign, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

export default function DefiBanking() {
  const services = [
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: "Savings Account",
      description: "Earn high yields on your crypto deposits with our secure savings accounts. Competitive APY rates.",
      gradient: "from-purple-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80"
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Secure Lending",
      description: "Access instant crypto-backed loans with competitive interest rates and flexible terms.",
      gradient: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80"
    },
    {
      icon: <Repeat className="w-8 h-8 text-white" />,
      title: "Smart Payments",
      description: "Send and receive payments globally with near-zero fees and instant settlement.",
      gradient: "from-cyan-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1621761311461-1e961f05f06b?auto=format&fit=crop&q=80"
    }
  ]

  return (
    <section id="defi" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(121,40,202,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
      </div>

      {/* SVG Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg className="absolute top-0 left-0 w-96 h-96 text-purple-500/20" viewBox="0 0 200 200">
          <path fill="currentColor" d="M44.5,-76.3C59.2,-69.9,73.7,-60.1,83.1,-46.2C92.4,-32.3,96.7,-14.3,94.7,2.9C92.8,20.1,84.7,36.5,73.7,50.2C62.7,63.9,48.8,75,33.1,79.7C17.4,84.4,-0.2,82.8,-16.8,77.8C-33.4,72.8,-49,64.4,-61.9,52.5C-74.8,40.6,-85,25.2,-88.3,8.1C-91.6,-9,-88,-27.7,-78.7,-42.3C-69.4,-56.9,-54.4,-67.3,-39.7,-73.8C-25,-80.3,-10.7,-82.8,2.9,-87.8C16.4,-92.8,32.8,-100.3,44.5,-76.3Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-96 h-96 text-blue-500/20" viewBox="0 0 200 200">
          <path fill="currentColor" d="M38.5,-64.3C51.9,-56.7,66.5,-49.6,75.1,-37.7C83.7,-25.8,86.3,-9,84.1,6.7C81.9,22.4,74.9,37,65.1,48.7C55.3,60.4,42.7,69.2,28.7,74.3C14.7,79.4,-0.8,80.8,-15.4,76.9C-30,73,-43.8,63.8,-54.4,51.8C-65,39.8,-72.4,25,-76.3,8.8C-80.2,-7.4,-80.5,-25,-73.6,-38.8C-66.7,-52.6,-52.5,-62.5,-38.1,-69.8C-23.7,-77.1,-9.2,-81.8,2.6,-85.8C14.3,-89.8,28.7,-93.2,38.5,-64.3Z" transform="translate(100 100)" />
        </svg>
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
              DeFi Banking Services
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Experience the future of banking with our decentralized financial services. Secure, transparent, and efficient.
          </p>
        </motion.div>

        <div className="relative">
          <Button 
            variant="outline" 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 rounded-full p-3 border-purple-500/50 hover:bg-purple-500/20"
            id="prev-slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button 
            variant="outline" 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 rounded-full p-3 border-purple-500/50 hover:bg-purple-500/20"
            id="next-slide"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <Swiper
            modules={[Navigation, Autoplay, EffectCoverflow]}
            navigation={{
              prevEl: '#prev-slide',
              nextEl: '#next-slide',
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="py-8"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group relative h-[400px]"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-2xl opacity-20"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/40 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative h-full bg-black/40 rounded-2xl p-8 backdrop-blur-xl border border-white/10 flex flex-col">
                    <div className={`bg-gradient-to-r ${service.gradient} rounded-lg p-3 w-fit mb-6`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-white/70 mb-6 flex-grow">{service.description}</p>
                    <Button variant="outline" className={`group border-${service.gradient.split('-')[1]}/50 hover:bg-${service.gradient.split('-')[1]}/20 w-full`}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              $5M+
            </h4>
            <p className="text-white/70">Total Value Locked</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              8%
            </h4>
            <p className="text-white/70">Monthly Return <span className="text-xs opacity-70">(96% APY)</span></p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              96K+
            </h4>
            <p className="text-white/70">Active Users</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              0.01%
            </h4>
            <p className="text-white/70">Transaction Fee</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-xl group">
            Open DeFi Account
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}