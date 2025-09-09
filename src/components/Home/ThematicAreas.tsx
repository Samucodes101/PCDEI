'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/UI/SectionTitle'

const ThematicAreas = () => {
  const areas = [
    {
      title: 'Health & Well-being',
      color: '#4ca146', // good-health
      icon: '⚕️',
      description: 'Comprehensive healthcare access with emphasis on immunization programs protecting vulnerable populations.'
    },
    {
      title: 'Quality Education',
      color: '#c7202f', // quality-education
      icon: '🎓',
      description: 'Educational initiatives and vocational training to equip individuals with knowledge and resources.'
    },
    {
      title: 'Gender Equality',
      color: '#ee402d', // gender-equality
      icon: '⚖️',
      description: 'Programs fostering gender inclusivity and equality across society and economic sectors.'
    },
    {
      title: 'Economic Growth',
      color: '#a21b43', // economic-growth
      icon: '📈',
      description: 'Women empowerment and youth engagement driving sustainable community development.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-[#11348e]/5 to-[#52c8f9]/5 transform -skew-y-3 -translate-y-16"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Our Thematic Focus" 
          subtitle="Driving sustainable change through targeted interventions across key development areas"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#52c8f9]/20 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Gradient overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                  background: `linear-gradient(135deg, ${area.color}15 0%, transparent 100%)` 
                }}
              ></div>
              
              <div className="relative z-10">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: area.color }}
                >
                  {area.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[#11348e] mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {area.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {area.description}
                </p>
                
                <div className="mt-6">
                  <span 
                    className="inline-block w-8 h-1 rounded-full group-hover:w-12 transition-all duration-500"
                    style={{ backgroundColor: area.color }}
                  ></span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ThematicAreas