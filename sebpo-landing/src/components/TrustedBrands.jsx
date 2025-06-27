import { motion } from 'framer-motion'

// Import brand logos
import clipcentricLogo from '../assets/brands/clipcentric.png'
import expediaLogo from '../assets/brands/expedia.png'
import multiviewLogo from '../assets/brands/multiview.png'
import spiceworksLogo from '../assets/brands/spiceworks.png'
import soarsGroupLogo from '../assets/brands/soars-group.png'
import accuweatherLogo from '../assets/brands/accuweather.png'
import bbcNewsLogo from '../assets/brands/bbc-news.png'
import citrusadLogo from '../assets/brands/citrusad.png'

const TrustedBrands = () => {
  const brands = [
    {
      name: 'clipcentric',
      logo: clipcentricLogo
    },
    {
      name: 'Expedia',
      logo: expediaLogo
    },
    {
      name: 'MULTIVIEW',
      logo: multiviewLogo
    },
    {
      name: 'spiceworks',
      logo: spiceworksLogo
    },
    {
      name: 'SOARS GROUP',
      logo: soarsGroupLogo
    },
    {
      name: 'AccuWeather',
      logo: accuweatherLogo
    },
    {
      name: 'BBC NEWS',
      logo: bbcNewsLogo
    },
    {
      name: 'CitrusAd',
      logo: citrusadLogo
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
    <section className="py-20 bg-white rounded-t-2xl -translate-y-5">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center max-w-5xl mx-auto"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 md:h-12 w-auto max-w-[140px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedBrands
