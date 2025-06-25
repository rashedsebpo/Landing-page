import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Stats = () => {
  const stats = [
    {
      icon: (
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
      ),
      number: 16,
      suffix: '',
      label: 'years experience',
      color: 'text-gray-800'
    },
    {
      icon: (
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 12h2.5v10h3v-7h2v7h4v-7h2v7h3z"/>
          </svg>
        </div>
      ),
      number: 70,
      suffix: '+',
      label: 'Happy Clients',
      color: 'text-gray-800'
    },
    {
      icon: (
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      ),
      number: 200,
      suffix: 'k+',
      label: 'Creative Ads Created',
      color: 'text-gray-800'
    }
  ]

  const AnimatedNumber = ({ number, suffix }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      const timer = setTimeout(() => {
        if (count < number) {
          setCount(count + Math.ceil(number / 50))
        }
      }, 50)
      return () => clearTimeout(timer)
    }, [count, number])

    return (
      <span>
        {Math.min(count, number)}{suffix}
      </span>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center">{stat.icon}</div>
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                <AnimatedNumber number={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-gray-600 text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
