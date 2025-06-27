import { motion } from 'framer-motion'
import profile1 from '../assets/portfolio/profile1.png'
import profile2 from '../assets/portfolio/profile2.png'
import profile3 from '../assets/portfolio/profile3.png'

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

      {/* Testimonial Section */}
      <TestimonialSection />
    </section>
  )
}

// Testimonial Section Component
const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      image: profile1,
      rating: 4,
      quote: "One of the greatest things that SEBPO does – and they definitely do it better than us – is the supply chain logistics, and ongoing knowledge transfer.",
      name: "Head of Vendor Management",
      company: "Global Ad Management Tech Company"
    },
    {
      id: 2,
      image: profile2,
      rating: 5,
      quote: "Our project managers were able to be more customer-facing and strategic with clients because they were confident the SEBPO team would deliver.",
      name: "Director of Operations",
      company: "Ad Technology Company"
    },
    {
      id: 3,
      image: profile3,
      rating: 4,
      quote: "Something that SEBPO brought to the table immediately was team meetings and team reviews - right off the bat they were very organized.",
      name: "Director of Ad Operations",
      company: "Video Marketing Company"
    }
  ]

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0674 1.24459L12.1438 6.27761C12.2931 6.62644 12.6089 6.85898 12.9743 6.89221L18.7714 7.44036C19.6351 7.52341 19.9839 8.6031 19.3357 9.18447L15.967 13.0215C15.6847 13.2707 15.5684 13.6361 15.6515 14.0015L16.9637 19.3832C17.163 20.2305 16.2494 20.928 15.4853 20.4797L10.6516 17.6391C10.336 17.4564 9.95395 17.4564 9.63835 17.6391L4.80464 20.4797C4.04055 20.928 3.12695 20.2471 3.32628 19.3832L4.63853 14.0015C4.72159 13.6361 4.60531 13.2707 4.32293 13.0215L0.954263 9.18447C0.306044 8.6031 0.654869 7.52341 1.51863 7.44036L7.31574 6.89221C7.68117 6.85898 7.99695 6.62644 8.14625 6.27761L10.2226 1.24459C10.5548 0.414062 11.7343 0.414062 12.0665 1.24459H10.0674Z"
              fill={index < rating ? "#FFBB00" : "#E5E7EB"}
            />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonial Container */}
        <div
          className="relative mx-auto"
          style={{
            width: '100%',
            maxWidth: '1628px',
            height: '598px',
            borderRadius: '30px',
            background: 'var(--Form-TextBox, rgba(244, 244, 244, 0.80))'
          }}
        >
          {/* Section Header - INSIDE the gray background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center pt-12 pb-8"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{
                color: '#111029',
                fontFamily: 'Montserrat',
                fontWeight: '700'
              }}
            >
              Quote from our clients
            </h2>
          </motion.div>
          {/* Testimonial Cards Container - Perfect Static Display */}
          <div className="flex items-center justify-center px-12" style={{ height: 'calc(100% - 120px)' }}>
            <div className="flex gap-6 justify-center">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: testimonial.id * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden"
                  style={{
                    width: '400px',
                    height: '380px',
                    flexShrink: 0,
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  {/* Top Section - Image and Stars */}
                  <div className="flex flex-col items-center">
                    {/* Client Image */}
                    <div className="mb-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>

                    {/* Star Rating */}
                    <div className="mb-4">
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>

                  {/* Middle Section - Quote */}
                  <div
                    className="flex-1 flex items-center justify-center text-center"
                    style={{
                      color: '#111029',
                      fontFamily: 'Montserrat',
                      fontSize: '14px',
                      fontWeight: '400',
                      lineHeight: '24px'
                    }}
                  >
                    "{testimonial.quote}"
                  </div>

                  {/* Bottom Section - Client Info */}
                  <div className="text-center mt-4">
                    <h4
                      className="font-semibold mb-1"
                      style={{
                        color: '#111029',
                        fontFamily: 'Montserrat',
                        fontSize: '16px',
                        fontWeight: '600'
                      }}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className="text-sm"
                      style={{
                        color: '#9CA3AF',
                        fontFamily: 'Montserrat',
                        fontSize: '13px',
                        fontWeight: '400'
                      }}
                    >
                      {testimonial.company}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessStartsNow
