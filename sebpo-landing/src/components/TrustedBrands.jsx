import { motion } from 'framer-motion'

const TrustedBrands = () => {
  const brands = [
    {
      name: 'clipcentric',
      logo: (
        <svg className="h-8 w-auto" viewBox="0 0 120 40" fill="currentColor">
          <text x="10" y="25" className="text-sm font-semibold">clipcentric</text>
        </svg>
      )
    },
    {
      name: 'Expedia',
      logo: (
        <svg className="h-8 w-auto" viewBox="0 0 120 40" fill="currentColor">
          <text x="10" y="25" className="text-sm font-bold">Expedia</text>
        </svg>
      )
    },
    {
      name: 'MULTIVIEW',
      logo: (
        <svg className="h-8 w-auto" viewBox="0 0 120 40" fill="currentColor">
          <text x="10" y="25" className="text-sm font-semibold">MULTIVIEW</text>
        </svg>
      )
    },
    {
      name: 'spiceworks',
      logo: (
        <svg className="h-8 w-auto" viewBox="0 0 120 40" fill="currentColor">
          <text x="10" y="25" className="text-sm font-semibold">spiceworks</text>
        </svg>
      )
    },
    {
      name: 'SOARS GROUP',
      logo: (
        <svg className="h-8 w-auto" viewBox="0 0 120 40" fill="currentColor">
          <text x="10" y="25" className="text-xs font-semibold">SOARS GROUP</text>
        </svg>
      )
    },
    {
      name: 'AccuWeather',
      logo: (
        <svg className="h-8 w-auto" viewBox="0 0 120 40" fill="currentColor">
          <text x="10" y="25" className="text-sm font-semibold">AccuWeather</text>
        </svg>
      )
    },
    {
      name: 'BBC NEWS',
      logo: (
        <svg className="h-8 w-auto" viewBox="0 0 120 40" fill="currentColor">
          <text x="10" y="25" className="text-sm font-bold">BBC NEWS</text>
        </svg>
      )
    },
    {
      name: 'CitrusAd',
      logo: (
        <svg className="h-8 w-auto" viewBox="0 0 120 40" fill="currentColor">
          <text x="10" y="25" className="text-sm font-bold">CitrusAd</text>
        </svg>
      )
    }
  ]

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
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gray-600 text-lg font-medium">
            A few of the amazing brands who trust <span className="font-bold text-gray-800">SEBPO</span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center max-w-4xl mx-auto"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors duration-300"
            >
              {brand.logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedBrands
