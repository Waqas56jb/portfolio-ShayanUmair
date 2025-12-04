'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'End-to-End ML Pipeline',
      description: 'A complete machine learning pipeline from data ingestion to model deployment, featuring automated preprocessing, feature engineering, and model serving with FastAPI.',
      technologies: ['Python', 'Scikit-learn', 'FastAPI', 'Docker', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'Computer Vision Classification System',
      description: 'Deep learning model for image classification using CNNs with transfer learning. Deployed with real-time inference API and monitoring dashboard.',
      technologies: ['PyTorch', 'TensorFlow', 'FastAPI', 'Docker', 'AWS'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'NLP Sentiment Analysis API',
      description: 'Production-ready NLP model for sentiment analysis using transformers. Includes model versioning, A/B testing, and performance monitoring.',
      technologies: ['Transformers', 'BERT', 'FastAPI', 'MLflow', 'Kubernetes'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'MLOps CI/CD Pipeline',
      description: 'Automated ML workflow with continuous integration, model training, testing, and deployment. Includes model registry and monitoring with MLflow.',
      technologies: ['GitHub Actions', 'Docker', 'Kubernetes', 'MLflow', 'AWS'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'Real-time Recommendation System',
      description: 'Scalable recommendation engine using collaborative filtering and deep learning. Features real-time inference and personalization.',
      technologies: ['PyTorch', 'Redis', 'FastAPI', 'Docker', 'Kubernetes'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'Time Series Forecasting Platform',
      description: 'Advanced time series forecasting system using LSTM networks with automated feature engineering and hyperparameter optimization.',
      technologies: ['TensorFlow', 'LSTM', 'Pandas', 'FastAPI', 'Docker'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: '/api/placeholder/600/400',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="projects" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Featured Projects</h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            Showcasing my work in AI/ML engineering, from research to production deployment
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card group hover:border-primary-300"
              >
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-primary-600 text-4xl font-bold opacity-50">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-50 text-primary-600 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <FaGithub />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

