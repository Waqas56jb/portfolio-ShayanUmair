'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      type: 'experience',
      title: 'AI/ML Engineer',
      company: 'Tech Company',
      location: 'Remote',
      period: '2023 - Present',
      description: [
        'Developed and deployed machine learning models for production use',
        'Built end-to-end ML pipelines with automated training and deployment',
        'Implemented MLOps practices including CI/CD, model versioning, and monitoring',
        'Collaborated with cross-functional teams to deliver AI solutions',
      ],
    },
    {
      type: 'experience',
      title: 'Machine Learning Intern',
      company: 'AI Startup',
      location: 'Remote',
      period: '2022 - 2023',
      description: [
        'Assisted in developing computer vision models for object detection',
        'Preprocessed and analyzed large datasets using Python and Pandas',
        'Contributed to model optimization and performance improvements',
      ],
    },
  ]

  const education = [
    {
      type: 'education',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      location: 'City, Country',
      period: '2018 - 2022',
      description: [
        'Specialized in Machine Learning and Artificial Intelligence',
        'Relevant coursework: Deep Learning, Data Mining, Statistics',
      ],
    },
  ]

  return (
    <section id="experience" className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Experience & Education</h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            My professional journey and educational background
          </p>

          <div className="max-w-4xl mx-auto mt-12">
            {/* Experience Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <FaBriefcase className="text-primary-600 text-2xl" />
                <h3 className="text-3xl font-bold text-gray-900">Experience</h3>
              </div>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="card relative pl-8 border-l-4 border-primary-600"
                  >
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-600 rounded-full border-4 border-white"></div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-primary-600 font-medium mb-2">
                      {exp.company} • {exp.location}
                    </p>
                    <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600 flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <FaGraduationCap className="text-primary-600 text-2xl" />
                <h3 className="text-3xl font-bold text-gray-900">Education</h3>
              </div>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: (experiences.length + index) * 0.2 }}
                    className="card relative pl-8 border-l-4 border-primary-600"
                  >
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-600 rounded-full border-4 border-white"></div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-600 font-medium mb-2">
                      {edu.institution} • {edu.location}
                    </p>
                    <p className="text-gray-500 text-sm mb-4">{edu.period}</p>
                    <ul className="space-y-2">
                      {edu.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600 flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

