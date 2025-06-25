import { motion } from 'framer-motion'
import { useState } from 'react'

const RecentWorks = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const works = [
    {
      title: 'Animated GIF',
      subtitle: 'Western Canada Pursuit Dealer',
      image: '🎬',
      category: 'Animation'
    },
    {
      title: 'Static Banner Ads',
      subtitle: 'Create Better Ads',
      image: '📊',
      category: 'Design'
    },
    {
      title: 'Animated GIF',
      subtitle: 'Utah - It Snowed Last Season',
      image: '🎿',
      category: 'Animation'
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Some of Our Recent Works
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            SEBPO specializes in <span className="text-sebpo-blue font-semibold">ad operations, creative services, quality assurance and data solutions.</span> SEBPO offers
            industry expertise and process governance so organizations can scale, innovate and control costs.
          </p>
        </motion.div>

        {/* Works Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {works.map((work, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-sebpo-blue to-sebpo-dark-blue flex items-center justify-center">
                <div className="text-6xl">{work.image}</div>
              </div>
              <div className="p-6">
                <span className="inline-block bg-sebpo-orange text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {work.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{work.title}</h3>
                <p className="text-gray-600">{work.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2, 3].map((dot, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === activeSlide ? 'bg-sebpo-blue' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentWorks
