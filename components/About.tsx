'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">About Me</h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            Passionate AI/ML Engineer with hands-on experience in building end-to-end machine learning solutions
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  I&apos;m a dedicated AI/ML Engineer with a strong foundation in machine learning,
                  deep learning, and MLOps. I specialize in transforming complex data into
                  intelligent, scalable solutions that drive real-world impact.
                </p>
                <p className="text-lg leading-relaxed">
                  My expertise spans across the entire ML lifecycle - from data preprocessing
                  and feature engineering to model development, deployment, and monitoring.
                  I&apos;m passionate about building production-ready AI systems that are both
                  performant and maintainable.
                </p>
                <p className="text-lg leading-relaxed">
                  With hands-on experience in computer vision, NLP, and MLOps, I bring a
                  comprehensive understanding of modern AI technologies and best practices
                  to every project.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">2+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-gray-600">Technologies</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-600">Dedicated</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

