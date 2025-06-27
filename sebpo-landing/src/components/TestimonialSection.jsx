import { motion } from 'framer-motion'
import { useState } from 'react'
import profile1 from '../assets/portfolio/profile1.png'
import profile2 from '../assets/portfolio/profile2.png'
import profile3 from '../assets/portfolio/profile3.png'

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

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

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

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
    <section
      className="py-16 md:py-24"
      style={{
        background: 'var(--Form-TextBox, rgba(244, 244, 244, 0.80))',
        opacity: 0.6
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
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
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ width: '50px', height: '50px' }}
          >
            <svg width="16" height="28" viewBox="0 0 31 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.668881 31.2623L26.7493 57.2973C27.6887 58.2342 29.2098 58.2342 30.1491 57.2973C31.0885 56.3603 31.0885 54.8392 30.1491 53.9047L5.58741 29.3836L30.1492 4.86489C31.0886 3.92791 31.0886 2.40923 30.1492 1.46982C29.2098 0.532833 27.6887 0.532833 26.7494 1.46982L0.671395 27.5048C0.154013 28.0198 -0.0486177 28.7088 0.00385725 29.3835C-0.0511279 30.0582 0.153922 30.7473 0.668881 31.2623Z" fill="#DBDEE1"/>
            </svg>
          </button>

          <button
            onClick={handleNextSlide}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ width: '50px', height: '50px' }}
          >
            <svg width="16" height="28" viewBox="0 0 31 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.181 26.7377L4.10059 0.702673C3.16118 -0.234224 1.64007 -0.234224 0.700746 0.702673C-0.238666 1.63966 -0.238666 3.16076 0.700746 4.09533L25.2624 28.6164L0.700653 53.1351C-0.238759 54.0721 -0.238759 55.5908 0.700653 56.5302C1.64007 57.4672 3.16118 57.4672 4.1005 56.5302L30.1785 30.4952C30.6958 29.9802 30.8985 29.2912 30.846 28.6165C30.901 27.9418 30.6959 27.2527 30.181 26.7377Z" fill="#DBDEE1"/>
            </svg>
          </button>

          {/* Testimonial Cards Container - Static Layout Like Figma */}
          <div className="flex items-center justify-center h-full px-16">
            <div className="flex gap-6 justify-center">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: testimonial.id * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-lg"
                  style={{
                    width: '512px',
                    height: '330px',
                    flexShrink: 0
                  }}
                >
                  {/* Client Image */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>

                  {/* Star Rating */}
                  <div className="flex justify-center mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Quote */}
                  <div
                    className="mb-6 px-4"
                    style={{
                      color: '#111029',
                      fontFamily: 'Montserrat',
                      fontSize: '15px',
                      fontWeight: '400',
                      lineHeight: '28px',
                      textAlign: 'center'
                    }}
                  >
                    "{testimonial.quote}"
                  </div>

                  {/* Client Info */}
                  <div className="text-center">
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
                        fontSize: '14px',
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
    </section>
  )
}

export default TestimonialSection
