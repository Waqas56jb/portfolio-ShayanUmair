'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiGooglecloud,
  SiMicrosoftazure,
  SiFastapi,
  SiFlask,
  SiGit,
  SiJupyter,
  SiPandas,
  SiNumpy,
  SiPostgresql,
  SiMysql,
} from 'react-icons/si'

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: SiPython },
      ],
    },
    {
      title: 'ML/DL Frameworks',
      skills: [
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'PyTorch', icon: SiPytorch },
        { name: 'Scikit-learn', icon: SiScikitlearn },
        { name: 'Jupyter', icon: SiJupyter },
      ],
    },
    {
      title: 'Data Processing',
      skills: [
        { name: 'Pandas', icon: SiPandas },
        { name: 'NumPy', icon: SiNumpy },
      ],
    },
    {
      title: 'MLOps & Deployment',
      skills: [
        { name: 'Docker', icon: SiDocker },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'FastAPI', icon: SiFastapi },
        { name: 'Flask', icon: SiFlask },
      ],
    },
    {
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS', icon: SiAmazonaws },
        { name: 'Google Cloud', icon: SiGooglecloud },
        { name: 'Azure', icon: SiMicrosoftazure },
      ],
    },
    {
      title: 'Tools & Databases',
      skills: [
        { name: 'Git', icon: SiGit },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MySQL', icon: SiMysql },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Skills & Expertise</h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            Technologies and tools I work with to build intelligent AI/ML solutions
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card"
              >
                <h3 className="text-xl font-semibold text-primary-600 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon
                    return (
                      <motion.div
                        key={skillIndex}
                        className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg"
                        whileHover={{ scale: 1.05, backgroundColor: '#dbeafe' }}
                      >
                        <Icon className="text-primary-600" size={20} />
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <div className="card">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">
                Core Competencies
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Machine Learning</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Supervised & Unsupervised Learning</li>
                    <li>• Model Evaluation & Validation</li>
                    <li>• Feature Engineering</li>
                    <li>• Hyperparameter Tuning</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Deep Learning</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• CNNs, RNNs, LSTMs</li>
                    <li>• Transfer Learning</li>
                    <li>• Neural Network Optimization</li>
                    <li>• Transformers & LLMs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Specializations</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Computer Vision</li>
                    <li>• Natural Language Processing</li>
                    <li>• MLOps & Model Deployment</li>
                    <li>• Model Monitoring & Logging</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Software Engineering</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Version Control (Git)</li>
                    <li>• CI/CD Pipelines</li>
                    <li>• API Development</li>
                    <li>• Cloud Architecture</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

