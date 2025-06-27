const CompatibilityIndicator = ({ label, isCompatible }) => {
  return (
    <div className="flex items-center gap-2">
      <span
        className="text-xs md:text-sm"
        style={{
          color: isCompatible ? '#111029' : '#999',
          fontFamily: 'Montserrat',
          fontWeight: '400'
        }}
      >
        {label}
      </span>
      <div 
        className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
          isCompatible ? 'bg-[#006F99]' : 'bg-gray-300'
        }`}
      />
    </div>
  )
}

export default CompatibilityIndicator
