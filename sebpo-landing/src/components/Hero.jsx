import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-teal-500 to-teal-700 min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="container-max section-padding w-full relative z-10">
        <div className="text-center text-white">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="mb-8">
              <img
                src="/sebpo-icon.png"
                alt="SEBPO"
                className="h-24 mx-auto"
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8 max-w-6xl mx-auto">
              SEBPO is a leading global outsourcing partner to many of<br className="hidden md:block" />
              the world's largest advertising, media and tech companies.
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-yellow-300 font-semibold">
              @United States, Bangladesh and El Salvador
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-white text-teal-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 text-lg inline-flex items-center gap-2 hover:scale-105">
              Learn more about sebpo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
