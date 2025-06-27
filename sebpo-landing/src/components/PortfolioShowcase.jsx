import { useState } from 'react'
import SectionHeader from './SectionHeader'
import PortfolioGrid from './PortfolioGrid'
import pursuitImage from '../assets/portfolio/pursuit.webp'
import qantasImage from '../assets/portfolio/qantas.webp'
import utahImage from '../assets/portfolio/life-utah.webp'

const PortfolioShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const portfolioWorks = [
    {
      id: 1,
      title: 'Animated GIF',
      image: pursuitImage,
      type: 'animated',
      alt: 'Western Canada Pursuit Dealer Animation'
    },
    {
      id: 2,
      title: 'Static Banner Ads',
      image: qantasImage,
      type: 'static',
      alt: 'Qantas Static Banner Advertisement'
    },
    {
      id: 3,
      title: 'Animated GIF',
      image: utahImage,
      type: 'animated',
      alt: 'Utah Life Animation'
    }
  ]

  const totalSlides = 4 // Fixed to 4 dots as requested

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleSetSlide = (index) => {
    setCurrentSlide(index)
  }

  const sectionDescription = (
    <>
      SEBPO specializes in <span className="text-[#006F99] font-semibold">ad operations, creative services, quality assurance and data solutions.</span> SEBPO offers
      industry expertise and process governance so organizations can scale, innovate and control costs.
    </>
  )

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Some of Our Recent Works"
          description={sectionDescription}
          showLine={true}
        />

        <PortfolioGrid
          works={portfolioWorks}
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onPrevSlide={handlePrevSlide}
          onNextSlide={handleNextSlide}
          onSetSlide={handleSetSlide}
        />
      </div>
    </section>
  )
}

export default PortfolioShowcase
