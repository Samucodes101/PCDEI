'use client'

import VisionMission from '@/components/About/VisionMission'
import AboutThematicAreas from '@/components/About/ThematicAreas'
import CoreObjectives from '@/components/About/CoreObjectives'
import Team from '@/components/About/Team'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 mt-24">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-[#11348e] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-[#52c8f9]">PCDEI</span>
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pathway for Community Development and Empowerment Initiative is a non-profit organization 
            dedicated to building resilient, inclusive, and sustainable communities through innovative 
            healthcare, education, and economic empowerment programs.
          </p>
        </div>
        
        <VisionMission />
        <AboutThematicAreas />
        <CoreObjectives />
        <Team />
      </div>
    </div>
  )
}