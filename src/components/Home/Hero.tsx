'use client'

import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import AnimatedBackground from '@/components/UI/AnimatedBackground'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="mt-12 relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-blue via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <AnimatedBackground />
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/80 to-transparent"></div>
      </div>
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 z-1 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center bg-light-blue/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-light-blue/30">
            <span className="w-2 h-2 bg-light-blue rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-semibold">Transforming Communities Since 2023</span>
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-light-blue bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Pathway to
          <span className="block mt-2">Community Empowerment</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Building resilient communities through innovative healthcare, education, 
          and economic empowerment initiatives that create lasting impact.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link 
            href="/about" 
            className="bg-light-blue text-dark-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl shadow-light-blue/30"
          >
            Explore Our Mission
          </Link>
          <Link 
            href="/contact" 
            className="border-2 border-light-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-light-blue/20 hover:scale-105 transition-all duration-300"
          >
            Get Involved
          </Link>
        </motion.div>

        {/* Stats counter */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: '50+', label: 'Communities Served' },
            { number: '10K+', label: 'Lives Impacted' },
            { number: '100+', label: 'Health Campaigns' },
            { number: '5', label: 'Thematic Areas' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-light-blue mb-2">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-light-blue rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-light-blue rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero