'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Heart, Users, BookOpen, TrendingUp, Megaphone, Building } from 'lucide-react'
import Image from 'next/image'

const Programs = () => {
  const [imageLoadErrors, setImageLoadErrors] = useState({})

  const programCategories = [
    {
      title: 'Healthcare & Surveillance Programs',
      icon: Heart,
      imageAlt: 'Healthcare workers conducting community vaccination campaign',
      activities: [
        'Organizing community vaccination campaigns and health outreaches.',
        'Training local health volunteers in CBS for early disease detection.',
        'Developing culturally sensitive health education materials to improve hygiene, nutrition, and disease prevention.'
      ]
    },
    {
      title: 'Girl-Child & Adolescent Services',
      icon: Users,
      imageAlt: 'Young girls in mentorship program activities',
      activities: [
        'Creating safe spaces, mentorship, and leadership programs for girls and adolescents.',
        'Delivering SRH (Sexual and Reproductive Health) education, peer-to-peer clubs, and life skills training.',
        'Offering scholarships and vocational training for vulnerable adolescents.'
      ]
    },
    {
      title: 'Educational Initiatives',
      icon: BookOpen,
      imageAlt: 'Students participating in digital literacy programs',
      activities: [
        'Launching literacy programs and digital education opportunities.',
        'Establishing vocational and technical training hubs for marginalized groups.',
        'Supporting youth entrepreneurship through mentorship and access to resources.'
      ]
    },
    {
      title: 'Economic Empowerment Projects',
      icon: TrendingUp,
      imageAlt: 'Women participating in microfinance cooperative meeting',
      activities: [
        'Building microfinance and cooperative models for women-led businesses.',
        'Training youth and women in entrepreneurship and financial management.',
        'Facilitating income-generating projects that uplift entire communities.'
      ]
    },
    {
      title: 'Advocacy, Communication & Social Mobilization (ACSM)',
      icon: Megaphone,
      imageAlt: 'Community leaders at advocacy town hall meeting',
      activities: [
        'Collaborating with traditional and religious leaders to drive health and gender campaigns.',
        'Hosting media-driven advocacy programs, including radio, social media, and town hall sessions.',
        'Mobilizing communities to achieve higher immunization coverage and disease prevention.'
      ]
    },
    {
      title: 'Community Development & Resilience',
      icon: Building,
      imageAlt: 'Community members working on water and sanitation project',
      activities: [
        'Implementing projects in sanitation, clean water, and nutrition.',
        'Building local capacity to respond to emergencies and health threats.',
        'Strengthening grassroots leadership through training and policy engagement.'
      ]
    }
  ]

  const handleImageError = (index) => {
    setImageLoadErrors(prev => ({ ...prev, [index]: true }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray- py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
       

        </motion.div>

        {/* Programs Grid */}
        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {programCategories.map((category, index) => {
            const IconComponent = category.icon
            const isEven = index % 2 === 0

            return (
              <motion.section
                key={index}
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch`}>
                  {/* Image Section */}
                  <div className="lg:w-2/5 relative">
                    <div className="h-64 lg:h-full bg-gray-100 rounded-lg m-4 flex items-center justify-center overflow-hidden">
                      {!imageLoadErrors[index] ? (
                        <image
                          src={`/api/placeholder/400/300?text=${encodeURIComponent(category.title)}`}
                          alt={category.imageAlt}
                          className="w-full h-full object-cover rounded-lg"
                          onError={() => handleImageError(index)}
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 rounded-lg flex flex-col items-center justify-center text-gray-500">
                          <IconComponent size={48} className="text-dark-blue mb-3" />
                          <p className="text-sm font-medium text-center px-4">
                            {category.imageAlt}
                          </p>
                          <div className="mt-2 text-xs text-gray-400">
                            Image placeholder
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-3/5 p-6 lg:p-8">
                    <div className="flex items-center mb-6">
                      <div className="p-2 rounded-lg bg-gray-100 text-dark-blue mr-4">
                        <IconComponent size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-dark-blue">
                        {category.title}
                      </h2>
                    </div>

                    <div className="space-y-3">
                      {category.activities.map((activity, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-1.5 h-1.5 bg-dark-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">
                            {activity}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Call to Action */}
                    <div className="mt-6">
                      <button className="bg-dark-blue hover:bg-opacity-90 text-white px-6 py-2 rounded-md font-medium transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </motion.section>
            )
          })}
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          className="mt-16 text-center bg-white rounded-xl shadow-sm border border-gray-200 p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-dark-blue mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join us in our mission to create sustainable positive change in communities across the region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-dark-blue hover:bg-opacity-90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300">
              Get Involved
            </button>
            <button className="border border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-white px-6 py-3 rounded-md font-medium transition-all duration-300">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Programs