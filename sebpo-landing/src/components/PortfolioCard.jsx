import { motion } from 'framer-motion'

const PortfolioCard = ({ work, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="flex-shrink-0 rounded-2xl border border-[#DBDEE1] overflow-hidden transition-shadow duration-300 w-full max-w-[341px] mx-auto"
      style={{
        height: '285px',
        boxShadow: '0px 30px 58px 0px rgba(99, 99, 99, 0.10)',
        background: 'var(--Form-TextBox, rgba(244, 244, 244, 0.80))'
      }}
    >
      {/* Image Container */}
      <div className="relative w-full h-full p-4">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <img
            src={work.image}
            alt={work.alt}
            className="w-full h-full object-cover rounded-2xl"
            style={{
              background: 'lightgray 50% / cover no-repeat'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 rounded-2xl">Image placeholder</div>`;
            }}
          />

          {/* Badge Overlay */}
          <div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg text-gray-700 text-sm font-medium"
            style={{
              background: 'rgba(219, 222, 225, 0.5)',
              opacity: 0.5
            }}
          >
            {work.title}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioCard
