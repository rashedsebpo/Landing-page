import { motion } from 'framer-motion'
import CompatibilityIndicator from './CompatibilityIndicator'

const MediaInfoPanel = ({ 
  title, 
  description, 
  compatibilityText = "This ad is compatible with",
  compatibility = {},
  buttonText = "View this creative →",
  onButtonClick 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex-shrink-0 w-full lg:w-80"
    >
      <div className="h-full flex flex-col justify-center">
        <h3
          className="font-bold mb-3 md:mb-4 text-lg md:text-xl lg:text-2xl"
          style={{
            color: '#111029',
            fontFamily: 'Montserrat',
            fontWeight: '700'
          }}
        >
          {title}
        </h3>
        
        {description && (
          <p
            className="mb-3 md:mb-4 text-sm md:text-base"
            style={{
              color: '#111029',
              fontFamily: 'Montserrat',
              fontWeight: '400',
              lineHeight: '1.5'
            }}
          >
            {description}
          </p>
        )}
        
        <p
          className="mb-4 md:mb-6 text-sm md:text-base"
          style={{
            color: '#111029',
            fontFamily: 'Montserrat',
            fontWeight: '400',
            lineHeight: '1.5'
          }}
        >
          {compatibilityText}
        </p>
        
        <div className="space-y-2 mb-4 md:mb-6">
          <CompatibilityIndicator 
            label="Desktop" 
            isCompatible={compatibility.desktop} 
          />
          <CompatibilityIndicator 
            label="Tablet" 
            isCompatible={compatibility.tablet} 
          />
          <CompatibilityIndicator 
            label="Mobile Portrait" 
            isCompatible={compatibility.mobilePortrait} 
          />
          <CompatibilityIndicator 
            label="Mobile Landscape" 
            isCompatible={compatibility.mobileLandscape} 
          />
        </div>
        
        <button
          onClick={onButtonClick}
          className="text-right hover:underline text-sm md:text-base"
          style={{
            color: '#006F99',
            fontFamily: 'Montserrat',
            fontWeight: '700',
            lineHeight: '1.6'
          }}
        >
          {buttonText}
        </button>
      </div>
    </motion.div>
  )
}

export default MediaInfoPanel
