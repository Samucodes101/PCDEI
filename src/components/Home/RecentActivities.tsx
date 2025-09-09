'use client'

import { motion } from 'framer-motion'
import SectionTitle from '../../components/UI/SectionTitle'

const RecentActivities = () => {
  const activities = [
    {
      title: 'Community Vaccination Campaign',
      description: 'Organized vaccination drives in rural communities to increase immunization coverage.',
      date: 'March 2024'
    },
    {
      title: 'Women Empowerment Workshop',
      description: 'Conducted skills training and financial literacy programs for women entrepreneurs.',
      date: 'February 2024'
    },
    {
      title: 'School Health Outreach',
      description: 'Provided health education and basic medical checkups for school children.',
      date: 'January 2024'
    }
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle title="Recent Activities" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-light-blue hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-dark-blue mb-3">{activity.title}</h3>
              <p className="text-gray-600 mb-4">{activity.description}</p>
              <p className="text-sm text-light-blue font-medium">{activity.date}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a 
            href="/activities" 
            className="inline-block bg-dark-blue text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
          >
            View All Activities
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default RecentActivities