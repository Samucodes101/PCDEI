'use client'

import { motion } from 'framer-motion'
import SectionTitle from '../../components/UI/SectionTitle'

const VisionMission = () => {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-dark-blue mb-6">Vision Statement</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To be a leading force in shaping resilient and empowered communities where education, 
            economic opportunity, and healthcare including universal access to immunization enable 
            every individual to thrive with dignity and purpose.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-dark-blue mb-6">Mission Statement</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our mission is to create sustainable pathways that transform lives and strengthen communities. 
            We are dedicated to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Expanding access to quality healthcare and immunization services that protect and save lives</li>
            <li>Driving educational and economic empowerment initiatives that foster self-reliance</li>
            <li>Building partnerships and innovative solutions that ensure long-term community resilience</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default VisionMission