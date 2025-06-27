const NavigationDots = ({ totalSlides, currentSlide, onDotClick }) => {
  return (
    <div className="flex justify-center space-x-2 mt-12">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-2 w-2 rounded-full transition-all duration-300 ${
            index === currentSlide
              ? 'bg-[#006F99]'
              : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export default NavigationDots
