import { motion } from 'framer-motion'
import PortfolioCard from './PortfolioCard'
import NavigationArrows from './NavigationArrows'
import NavigationDots from './NavigationDots'

const PortfolioGrid = ({ 
  works, 
  currentSlide, 
  totalSlides, 
  onPrevSlide, 
  onNextSlide, 
  onSetSlide 
}) => {
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
    <div className="relative max-w-6xl mx-auto">
      <NavigationArrows 
        onPrevClick={onPrevSlide}
        onNextClick={onNextSlide}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16 justify-items-center"
      >
        {works.map((work) => (
          <PortfolioCard
            key={work.id}
            work={work}
            variants={cardVariants}
          />
        ))}
      </motion.div>

      <NavigationDots
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        onDotClick={onSetSlide}
      />
    </div>
  )
}

export default PortfolioGrid
