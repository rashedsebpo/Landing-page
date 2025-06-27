import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
// Import images
import abernathysImage from '../assets/portfolio/AbernathysHarleyDavidson.webp'
import bananaRepublicMobileImage from '../assets/portfolio/BananaRepublic_WorkWhere_3DMobile.webp'
import nbc2Image from '../assets/portfolio/nbc2.webp'

const RichMediaCeltraBuilds = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Celtra Builds data - Fixed order: BBC → P.R. Sturgill → Mercedes-Benz
  const celtraBuilds = [
    {
      id: 1,
      title: 'BBC News',
      subtitle: 'BREAKING NEWS',
      description: 'Full width responsive leaderboard with animation and Expandable video',
      compatibility: {
        desktop: true,
        tablet: true,
        mobilePortrait: false,
        mobileLandscape: true
      },
      image: nbc2Image,
      alt: 'BBC News Breaking News Advertisement'
    },
    {
      id: 2,
      title: 'P.R. STURGILL',
      subtitle: 'FINE JEWELRY',
      description: 'Buying Gold, Silver and Estate Jewelry',
      compatibility: {
        desktop: true,
        tablet: true,
        mobilePortrait: true,
        mobileLandscape: false
      },
      image: bananaRepublicMobileImage,
      alt: 'P.R. Sturgill Fine Jewelry Advertisement'
    },
    {
      id: 3,
      title: 'Mercedes-Benz',
      subtitle: 'THE NEW E-CLASS COUPÉ',
      description: 'Full width responsive leaderboard with animation and Expandable video',
      compatibility: {
        desktop: true,
        tablet: true,
        mobilePortrait: false,
        mobileLandscape: false
      },
      image: abernathysImage,
      alt: 'Mercedes-Benz E-Class Coupé Advertisement'
    }
  ]

  const totalSlides = celtraBuilds.length

  // Auto-sliding effect - moves left to right
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [totalSlides])

  return (
    <section className="bg-white py-8 md:py-16 mt-10 md:mt-20">
      <div className="flex justify-center mx-auto px-4">
        <div
          className="rounded-[20px] md:rounded-[30px] p-4 md:p-8 relative w-full max-w-7xl"
          style={{
            background: '#E8F9FF',
            minHeight: '470px',
            width: '1372px'
          }}
        >
          {/* Header inside the container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-8"
          >
            <h2
              className="font-bold text-2xl md:text-4xl lg:text-5xl"
              style={{
                color: '#111029',
                fontFamily: 'Montserrat',
                fontWeight: '700'
              }}
            >
              Rich Media Celtra Builds
            </h2>
          </motion.div>

          {/* Content Layout - Left: Sliding Cards, Right: Fixed Info Panel */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Left Side - Sliding Image Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="overflow-hidden">
                <motion.div
                  className="flex transition-transform duration-1000 ease-in-out gap-4"
                  style={{
                    transform: `translateX(-${currentSlide * (280 + 16)}px)`, // 280px card width + 16px gap
                    width: `${celtraBuilds.length * (280 + 16)}px`
                  }}
                >
                  {celtraBuilds.map((build, index) => (
                    <div
                      key={build.id}
                      className="flex-shrink-0 rounded-[15px] overflow-hidden shadow-lg transition-transform hover:scale-105"
                      style={{
                        width: '280px',
                        height: '320px',
                        border: '1px solid #9F9FA9',
                        background: `url(${build.image}) lightgray 50% / cover no-repeat`
                      }}
                    >
                      <img
                        src={build.image}
                        alt={build.alt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm rounded-[15px]">${build.title}</div>`;
                        }}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Fixed Information Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-full lg:w-80"
            >
              <div className="h-full flex flex-col justify-center bg-white rounded-[15px] p-6 shadow-lg">
                <h3
                  className="font-bold mb-2 text-lg md:text-xl lg:text-2xl"
                  style={{
                    color: '#111029',
                    fontFamily: 'Montserrat',
                    fontWeight: '700'
                  }}
                >
                  {celtraBuilds[currentSlide].title}
                </h3>
                <p
                  className="mb-3 md:mb-4 text-sm md:text-base"
                  style={{
                    color: '#111029',
                    fontFamily: 'Montserrat',
                    fontWeight: '400',
                    lineHeight: '25px'
                  }}
                >
                  {celtraBuilds[currentSlide].description}
                </p>
                <p
                  className="mb-4 md:mb-6 text-sm md:text-base"
                  style={{
                    color: '#111029',
                    fontFamily: 'Montserrat',
                    fontWeight: '400',
                    lineHeight: '25px'
                  }}
                >
                  This ads is compatible with
                </p>
                <div className="space-y-2 mb-4 md:mb-6">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${celtraBuilds[currentSlide].compatibility.desktop ? 'bg-[#006F99]' : 'bg-gray-300'}`}></div>
                    <span
                      className="text-xs md:text-sm"
                      style={{
                        color: celtraBuilds[currentSlide].compatibility.desktop ? '#111029' : '#999',
                        fontFamily: 'Montserrat',
                        fontWeight: '400'
                      }}
                    >
                      Desktop
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${celtraBuilds[currentSlide].compatibility.tablet ? 'bg-[#006F99]' : 'bg-gray-300'}`}></div>
                    <span
                      className="text-xs md:text-sm"
                      style={{
                        color: celtraBuilds[currentSlide].compatibility.tablet ? '#111029' : '#999',
                        fontFamily: 'Montserrat',
                        fontWeight: '400'
                      }}
                    >
                      Tablet
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${celtraBuilds[currentSlide].compatibility.mobilePortrait ? 'bg-[#006F99]' : 'bg-gray-300'}`}></div>
                    <span
                      className="text-xs md:text-sm"
                      style={{
                        color: celtraBuilds[currentSlide].compatibility.mobilePortrait ? '#111029' : '#999',
                        fontFamily: 'Montserrat',
                        fontWeight: '400'
                      }}
                    >
                      Mobile Portrait
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${celtraBuilds[currentSlide].compatibility.mobileLandscape ? 'bg-[#006F99]' : 'bg-gray-300'}`}></div>
                    <span
                      className="text-xs md:text-sm"
                      style={{
                        color: celtraBuilds[currentSlide].compatibility.mobileLandscape ? '#111029' : '#999',
                        fontFamily: 'Montserrat',
                        fontWeight: '400'
                      }}
                    >
                      Mobile Landscape
                    </span>
                  </div>
                </div>
                <button
                  className="text-left hover:underline text-sm md:text-base"
                  style={{
                    color: '#006F99',
                    fontFamily: 'Montserrat',
                    fontWeight: '700',
                    lineHeight: '1.6'
                  }}
                >
                  View this creative →
                </button>
              </div>
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {celtraBuilds.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-[#006F99]'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrow - positioned outside and below the container, pointing right */}
      <div className="flex justify-center mt-8 md:mt-12">
        <svg xmlns="http://www.w3.org/2000/svg" width="164" height="16" viewBox="0 0 164 16" fill="none" className="w-32 md:w-40">
          <rect x="71.042" y="6" width="80" height="4" fill="#006F99"/>
          <path d="M151.042 0V16L163.042 8L151.042 0Z" fill="#006F99"/>
          <g opacity="0.3">
            <rect x="35.042" y="10" width="24" height="4" transform="rotate(-180 35.042 10)" fill="#6B6B6B"/>
            <path d="M12 16L12 3.8147e-06L3.5604e-06 8L12 16Z" fill="#6B6B6B"/>
          </g>
        </svg>
      </div>
    </section>
  )
}

export default RichMediaCeltraBuilds
