'use client'

import { motion } from 'framer-motion'
import SectionTitle from '../../components/UI/SectionTitle'

const Team = () => {
  const teamMembers = [
    { name: 'Rachael Nwaoha', role: 'Executive Director' },
    { name: 'Bankole Adedayo Tayo', role: 'Executive Director' },
    { name: 'Ogechi Iwuamadi', role: 'Executive Director' },
    { name: 'Victor Amara', role: 'Board Member' },
    { name: 'Kevin Okyere', role: 'Board Member' },
  ]

  return (
    <section className="py-16">
      <SectionTitle title="Our Team" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl text-gray-400">👤</span>
            </div>
            <h3 className="text-xl font-semibold text-dark-blue mb-2">{member.name}</h3>
            <p className="text-light-blue font-medium">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Team