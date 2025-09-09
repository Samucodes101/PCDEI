'use client'

import { motion } from 'framer-motion'
import SectionTitle from '../../components/UI/SectionTitle'

const CoreObjectives = () => {
  const objectives = [
    {
      title: 'Healthcare Access & Immunization',
      description: 'Improve access to preventive healthcare services, with a focus on immunization for women, children, and underserved communities.'
    },
    {
      title: 'Community-Based Surveillance (CBS)',
      description: 'Strengthen community capacity for early detection, reporting, and response to infectious diseases.'
    },
    {
      title: 'Educational Empowerment',
      description: 'Provide literacy programs, scholarships, and vocational training to equip youth and women with life skills and leadership opportunities.'
    },
    {
      title: 'Economic Development',
      description: 'Create pathways for entrepreneurship, micro-grants, and financial literacy to achieve self-reliance.'
    },
    {
      title: 'Women & Youth Empowerment',
      description: 'Advance gender equity, mentorship, and civic engagement for girls and adolescents.'
    },
    {
      title: 'Advocacy, Communication, and Social Mobilization',
      description: 'Use culturally relevant campaigns and partnerships to drive behavior change and improve health-seeking practices.'
    },
    {
      title: 'Partnerships & Policy Influence',
      description: 'Collaborate with stakeholders to inform policy, scale impact, and strengthen national development systems.'
    }
  ]

  return (
    <section className="py-16">
      <SectionTitle title="Core Objectives" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {objectives.map((objective, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-light-blue hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-dark-blue mb-3">{objective.title}</h3>
            <p className="text-gray-600">{objective.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default CoreObjectives