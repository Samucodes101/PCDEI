'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/UI/SectionTitle'

const ThematicAreas = () => {
  const areas = [
    {
      title: 'Good health and well-being',
      color: 'good-health',
      description: 'We champion healthcare access and preventive services, with a strong emphasis on immunization programs that protect vulnerable populations, especially children and women, from preventable diseases.'
    },
    {
      title: 'Quality Education',
      color: 'quality-education',
      description: 'We drive educational initiatives, capacity building, and vocational skills training to equip individuals with the knowledge and resources needed to thrive.'
    },
    {
      title: 'Gender Equality',
      color: 'gender-equality',
      description: 'Our programs foster gender inclusivity and equality in the society and in economic industries.'
    },
    {
      title: 'Decent Work and Economic Growth',
      color: 'economic-growth',
      description: 'Our programs also prioritize women\'s empowerment, youth engagement, and community driven development, ensuring that no group is left behind.'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <SectionTitle title="Thematic Areas" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {areas.map((area, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={`w-12 h-12 rounded-full bg-${area.color} mb-4`}></div>
            <h3 className="text-xl font-semibold text-dark-blue mb-3">{area.title}</h3>
            <p className="text-gray-600">{area.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ThematicAreas