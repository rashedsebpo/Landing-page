import { motion } from 'framer-motion'
import MediaInfoPanel from './MediaInfoPanel'
import MediaImageGallery from './MediaImageGallery'
import DirectionArrow from './DirectionArrow'
import harleyImage from '../assets/portfolio/harley-davidson-cycles.webp'
import nbcImage from '../assets/portfolio/nbc.webp'
import bananaImage from '../assets/portfolio/banana-republic.webp'

const RichMediaClipcentric = () => {
  const mediaData = {
    title: "Harley Davidson",
    description: "Expandable Units with user interaction and HTML5 animation",
    compatibility: {
      desktop: true,
      tablet: true,
      mobilePortrait: false,
      mobileLandscape: false
    }
  }

  const galleryImages = [
    {
      src: harleyImage,
      alt: "Harley Davidson - New Year New Ride",
      fallbackText: "Harley Davidson Ad"
    },
    {
      src: nbcImage,
      alt: "NBC - Connecting Work",
      fallbackText: "NBC Comedy Show Ad",
      borderColor: "#DBDEE1"
    },
    {
      src: bananaImage,
      alt: "Banana Republic - Work Where",
      fallbackText: "Banana Republic Ad"
    }
  ]

  return (
    <section className="bg-white py-8 md:py-16 mt-10 md:mt-20">
      <div className="flex justify-center mx-auto px-4">
        <div
          className="rounded-[20px] md:rounded-[30px] p-4 md:p-8 relative w-full max-w-7xl"
          style={{
            background: '#FFF2EB',
            minHeight: '400px'
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
                color: '#BB6228',
                fontFamily: 'Montserrat',
                fontWeight: '700'
              }}
            >
              Rich Media Clipcentric Builds
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            <MediaInfoPanel
              title={mediaData.title}
              description={mediaData.description}
              compatibility={mediaData.compatibility}
            />
            
            <MediaImageGallery images={galleryImages} />
          </div>
        </div>
      </div>

      <DirectionArrow />
    </section>
  )
}

export default RichMediaClipcentric
