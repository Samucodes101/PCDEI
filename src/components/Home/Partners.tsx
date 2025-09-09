'use client'

import { motion } from 'framer-motion'
import SectionTitle from '../../components/UI/SectionTitle'

const Partners = () => {
  const partners = [
    { name: 'Partner 1', logo: '/placeholder-logo1.png' },
    { name: 'Partner 2', logo: '/placeholder-logo2.png' },
    { name: 'Partner 3', logo: '/placeholder-logo3.png' },
    { name: 'Partner 4', logo: '/placeholder-logo4.png' },
    { name: 'Partner 5', logo: '/placeholder-logo5.png' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Our Partners" />
        
        <motion.div 
          className="flex flex-wrap justify-center gap-8 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {partners.map((partner, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24 w-48">
              <div className="text-center">
                <p className="text-dark-blue font-semibold">{partner.name}</p>
                <p className="text-sm text-gray-500">Logo</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Partners