import { motion } from 'framer-motion'

const MediaImageGallery = ({ images }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex-1"
    >
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 rounded-[15px] overflow-hidden shadow-lg"
            style={{
              width: '100%',
              maxWidth: '280px',
              height: '320px',
              ...(image.borderColor && { 
                border: `1px solid ${image.borderColor}` 
              })
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm rounded-[15px]">${image.fallbackText}</div>`;
              }}
            />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default MediaImageGallery
