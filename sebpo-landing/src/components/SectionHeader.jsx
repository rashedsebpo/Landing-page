import { motion } from 'framer-motion'

const SectionHeader = ({ title, description, showLine = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      {/* Horizontal Line */}
      {showLine && (
        <div
          className="mx-auto mb-8"
          style={{
            width: '1140px',
            height: '1px',
            flexShrink: 0,
            background: '#DBDEE1',
            maxWidth: '100%'
          }}
        />
      )}
      
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {title}
      </h2>
      
      {description && (
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeader
