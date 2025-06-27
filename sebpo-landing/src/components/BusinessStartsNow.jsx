import { motion } from 'framer-motion'

const BusinessStartsNow = () => {
  return (
    <section className="bg-white py-6 sm:py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full rounded-[15px] sm:rounded-[20px] border-2 border-[#DBDEE1] bg-white"
          style={{
            maxWidth: '1287px'
          }}
        >
          {/* Mobile Layout (Stacked) */}
          <div className="flex flex-col lg:hidden p-6 sm:p-8 space-y-6">
            {/* Content Section */}
            <div className="w-full">
              {/* Main Title */}
              <h2
                className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
                style={{
                  color: '#000',
                  fontFamily: 'Helvetica',
                  fontWeight: '700',
                  letterSpacing: '0.8px'
                }}
              >
                Your Next Successful Business Starts Now
              </h2>

              {/* Description Text */}
              <div className="space-y-3 sm:space-y-4">
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{
                    color: '#6B6B6B',
                    fontFamily: 'Montserrat',
                    fontWeight: '400',
                    lineHeight: '1.6',
                    letterSpacing: '0.2px'
                  }}
                >
                  SEBPO has been consistently recognized as one of the 5000 Fastest Growing Private
                  Companies in America by Inc. since 2014, and as a Top Global Outsourcing Company (GO100)
                  by the International Association of Outsourcing Professionals (IAOP) since 2013.
                </p>

                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{
                    color: '#6B6B6B',
                    fontFamily: 'Montserrat',
                    fontWeight: '400',
                    lineHeight: '1.6',
                    letterSpacing: '0.2px'
                  }}
                >
                  Founded in 2006, SEBPO is based in New Jersey with delivery centers in Bangladesh and El
                  Salvador. For more information, or to request additional samples, please contact
                  info@sebpo.com or visit www.sebpo.com.
                </p>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
              {/* Request Additional Samples Button */}
              <button
                className="flex items-center justify-center transition-all duration-200 hover:shadow-lg w-full sm:flex-1 h-12 sm:h-14 rounded-lg text-sm sm:text-base font-bold"
                style={{
                  background: '#FBB262',
                  boxShadow: '0px -2px 0px 0px rgba(0, 0, 0, 0.12) inset',
                  color: '#FFF',
                  fontFamily: 'Montserrat',
                  fontWeight: '700'
                }}
              >
                Request Additional Samples
              </button>

              {/* Start Your Day Button */}
              <button
                className="flex items-center justify-center transition-all duration-200 hover:shadow-lg w-full sm:flex-1 h-12 sm:h-14 rounded-lg text-sm sm:text-base font-bold"
                style={{
                  background: '#006F99',
                  boxShadow: '0px -2px 0px 0px rgba(0, 0, 0, 0.12) inset',
                  color: '#FFF',
                  fontFamily: 'Montserrat',
                  fontWeight: '700',
                  letterSpacing: '0.2px'
                }}
              >
                Start your day with SEBPO
              </button>
            </div>
          </div>

          {/* Desktop Layout (Side by Side) */}
          <div className="hidden lg:flex items-center justify-between h-[376px] px-12 py-8">
            {/* Left Side - Content */}
            <div className="flex-1 max-w-[600px]">
              {/* Main Title */}
              <h2
                className="mb-6"
                style={{
                  color: '#000',
                  fontFamily: 'Helvetica',
                  fontSize: '36px',
                  fontWeight: '700',
                  lineHeight: 'normal',
                  letterSpacing: '0.8px'
                }}
              >
                Your Next Successful Business Starts Now
              </h2>

              {/* Description Text */}
              <div className="space-y-4">
                <p
                  style={{
                    color: '#6B6B6B',
                    fontFamily: 'Montserrat',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '26px',
                    letterSpacing: '0.2px'
                  }}
                >
                  SEBPO has been consistently recognized as one of the 5000 Fastest Growing Private
                  Companies in America by Inc. since 2014, and as a Top Global Outsourcing Company (GO100)
                  by the International Association of Outsourcing Professionals (IAOP) since 2013.
                </p>

                <p
                  style={{
                    color: '#6B6B6B',
                    fontFamily: 'Montserrat',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '26px',
                    letterSpacing: '0.2px'
                  }}
                >
                  Founded in 2006, SEBPO is based in New Jersey with delivery centers in Bangladesh and El
                  Salvador. For more information, or to request additional samples, please contact
                  info@sebpo.com or visit www.sebpo.com.
                </p>
              </div>
            </div>

            {/* Right Side - Buttons */}
            <div className="flex flex-col gap-4">
              {/* Request Additional Samples Button */}
              <button
                className="flex items-center justify-center transition-all duration-200 hover:shadow-lg"
                style={{
                  width: '311px',
                  height: '60px',
                  borderRadius: '8px',
                  background: '#FBB262',
                  boxShadow: '0px -2px 0px 0px rgba(0, 0, 0, 0.12) inset',
                  color: '#FFF',
                  fontFamily: 'Montserrat',
                  fontSize: '16px',
                  fontWeight: '700',
                  lineHeight: 'normal'
                }}
              >
                Request Additional Samples
              </button>

              {/* Start Your Day Button */}
              <button
                className="flex items-center justify-center transition-all duration-200 hover:shadow-lg"
                style={{
                  width: '311px',
                  height: '60px',
                  borderRadius: '8px',
                  background: '#006F99',
                  boxShadow: '0px -2px 0px 0px rgba(0, 0, 0, 0.12) inset',
                  color: '#FFF',
                  textAlign: 'center',
                  fontFamily: 'Montserrat',
                  fontSize: '16px',
                  fontWeight: '700',
                  lineHeight: 'normal',
                  letterSpacing: '0.2px'
                }}
              >
                Start your day with SEBPO
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BusinessStartsNow
