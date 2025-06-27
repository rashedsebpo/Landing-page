import { motion } from 'framer-motion'
import { useState } from 'react'
import breakfastImage from '../assets/portfolio/breakfast.webp'

const CustomRichMediaAdUnits = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const adUnits = [
    {
      id: 1,
      title: 'Taco Bell',
      subtitle: 'Custom desktop in-line unit with animation',
      compatibility: {
        desktop: true,
        tablet: true,
        mobilePortrait: false,
        mobileLandscape: false
      },
      image: breakfastImage,
      alt: 'Taco Bell Toasted Breakfast Burritos Advertisement'
    }
    // Add more ad units here if needed
  ]

  const totalSlides = 4 // Based on the dots in your screenshot

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const handleDotClick = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section
      className="py-8 md:py-16 mt-10 md:mt-20"
      style={{
        background: 'var(--Form-TextBox, rgba(244, 244, 244, 0.80))'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 px-4"
            style={{
              color: '#006F99',
              fontFamily: 'Montserrat',
              fontWeight: '700'
            }}
          >
            Custom Rich Media Ad Units
          </h2>
        </motion.div>

        {/* Main Content Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
          <button
            onClick={handlePrevSlide}
            className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 xl:-translate-x-16 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ width: '40px', height: '40px' }}
          >
            <svg width="14" height="26" viewBox="0 0 31 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.668881 31.2623L26.7493 57.2973C27.6887 58.2342 29.2098 58.2342 30.1491 57.2973C31.0885 56.3603 31.0885 54.8392 30.1491 53.9047L5.58741 29.3836L30.1492 4.86489C31.0886 3.92791 31.0886 2.40923 30.1492 1.46982C29.2098 0.532833 27.6887 0.532833 26.7494 1.46982L0.671395 27.5048C0.154013 28.0198 -0.0486177 28.7088 0.00385725 29.3835C-0.0511279 30.0582 0.153922 30.7473 0.668881 31.2623Z" fill="#DBDEE1"/>
            </svg>
          </button>

          <button
            onClick={handleNextSlide}
            className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 xl:translate-x-16 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ width: '40px', height: '40px' }}
          >
            <svg width="14" height="26" viewBox="0 0 31 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.181 26.7377L4.10059 0.702673C3.16118 -0.234224 1.64007 -0.234224 0.700746 0.702673C-0.238666 1.63966 -0.238666 3.16076 0.700746 4.09533L25.2624 28.6164L0.700653 53.1351C-0.238759 54.0721 -0.238759 55.5908 0.700653 56.5302C1.64007 57.4672 3.16118 57.4672 4.1005 56.5302L30.1785 30.4952C30.6958 29.9802 30.8985 29.2912 30.846 28.6165C30.901 27.9418 30.6959 27.2527 30.181 26.7377Z" fill="#DBDEE1"/>
            </svg>
          </button>

          {/* Content Layout */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-16 items-center justify-center max-w-5xl mx-auto">
            {/* Left Side - Ad Unit Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-full lg:w-auto"
            >
              <div
                className="rounded-[15px] overflow-hidden transition-transform hover:scale-105 duration-300 mx-auto"
                style={{
                  width: '100%',
                  maxWidth: '530px',
                  height: 'auto',
                  aspectRatio: '530 / 441.331',
                  border: '1px solid #DBDEE1',
                  background: `url(${adUnits[currentSlide].image}) lightgray 50% / cover no-repeat`,
                  boxShadow: '0px 30px 58px 0px rgba(99, 99, 99, 0.20)'
                }}
              >
                <img
                  src={adUnits[currentSlide].image}
                  alt={adUnits[currentSlide].alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm sm:text-lg rounded-[15px] p-4">${adUnits[currentSlide].title}</div>`;
                  }}
                />
              </div>
            </motion.div>

            {/* Right Side - Information Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 w-full lg:max-w-md px-4 lg:px-0"
            >
              <div className="space-y-4 md:space-y-6">
                {/* Title */}
                <h3
                  className="text-2xl sm:text-3xl font-bold text-center lg:text-left"
                  style={{
                    color: '#111029',
                    fontFamily: 'Montserrat',
                    fontWeight: '700'
                  }}
                >
                  Taco Bell
                </h3>

                {/* Subtitle */}
                <p
                  className="text-sm sm:text-base text-center lg:text-left"
                  style={{
                    color: '#666',
                    fontFamily: 'Montserrat',
                    fontWeight: '400',
                    lineHeight: '1.5'
                  }}
                >
                  Custom desktop in-line unit with animation
                </p>

                {/* Compatibility Section */}
                <div className="space-y-3 md:space-y-4">
                  <p
                    className="text-sm sm:text-base font-medium text-center lg:text-left"
                    style={{
                      color: '#111029',
                      fontFamily: 'Montserrat',
                      fontWeight: '500'
                    }}
                  >
                    This ads is compatible with
                  </p>

                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#006F99]" />
                      <span
                        className="text-sm sm:text-base"
                        style={{
                          color: '#111029',
                          fontFamily: 'Montserrat',
                          fontWeight: '400'
                        }}
                      >
                        Desktop
                      </span>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#006F99]" />
                      <span
                        className="text-sm sm:text-base"
                        style={{
                          color: '#111029',
                          fontFamily: 'Montserrat',
                          fontWeight: '400'
                        }}
                      >
                        Tablet
                      </span>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gray-300" />
                      <span
                        className="text-sm sm:text-base"
                        style={{
                          color: '#999',
                          fontFamily: 'Montserrat',
                          fontWeight: '400'
                        }}
                      >
                        Mobile
                      </span>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gray-300" />
                      <span
                        className="text-sm sm:text-base"
                        style={{
                          color: '#999',
                          fontFamily: 'Montserrat',
                          fontWeight: '400'
                        }}
                      >
                        Portrait
                      </span>
                    </div>
                  </div>
                </div>

                {/* View Creative Button */}
                <div className="mt-6 md:mt-8 flex justify-center lg:justify-start">
                  <button
                    className="inline-flex items-center gap-2 text-sm sm:text-base hover:underline transition-all duration-200"
                    style={{
                      color: '#FBB262',
                      fontFamily: 'Montserrat',
                      fontWeight: '500'
                    }}
                  >
                    View this creative
                    <svg
                      width="16"
                      height="16"
                      className="sm:w-5 sm:h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 md:space-x-3 mt-8 md:mt-12">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-[#006F99]'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-6 lg:hidden">
            <button
              onClick={handlePrevSlide}
              className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ width: '40px', height: '40px' }}
            >
              <svg width="12" height="22" viewBox="0 0 31 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.668881 31.2623L26.7493 57.2973C27.6887 58.2342 29.2098 58.2342 30.1491 57.2973C31.0885 56.3603 31.0885 54.8392 30.1491 53.9047L5.58741 29.3836L30.1492 4.86489C31.0886 3.92791 31.0886 2.40923 30.1492 1.46982C29.2098 0.532833 27.6887 0.532833 26.7494 1.46982L0.671395 27.5048C0.154013 28.0198 -0.0486177 28.7088 0.00385725 29.3835C-0.0511279 30.0582 0.153922 30.7473 0.668881 31.2623Z" fill="#DBDEE1"/>
              </svg>
            </button>

            <button
              onClick={handleNextSlide}
              className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ width: '40px', height: '40px' }}
            >
              <svg width="12" height="22" viewBox="0 0 31 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.181 26.7377L4.10059 0.702673C3.16118 -0.234224 1.64007 -0.234224 0.700746 0.702673C-0.238666 1.63966 -0.238666 3.16076 0.700746 4.09533L25.2624 28.6164L0.700653 53.1351C-0.238759 54.0721 -0.238759 55.5908 0.700653 56.5302C1.64007 57.4672 3.16118 57.4672 4.1005 56.5302L30.1785 30.4952C30.6958 29.9802 30.8985 29.2912 30.846 28.6165C30.901 27.9418 30.6959 27.2527 30.181 26.7377Z" fill="#DBDEE1"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomRichMediaAdUnits
