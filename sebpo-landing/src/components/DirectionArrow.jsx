const DirectionArrow = ({ className = "w-32 md:w-40" }) => {
  return (
    <div className="flex justify-center mt-8 md:mt-12">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="164" 
        height="16" 
        viewBox="0 0 164 16" 
        fill="none" 
        className={className}
      >
        <rect x="71.042" y="6" width="80" height="4" fill="#006F99"/>
        <path d="M151.042 0V16L163.042 8L151.042 0Z" fill="#006F99"/>
        <g opacity="0.3">
          <rect x="35.042" y="10" width="24" height="4" transform="rotate(-180 35.042 10)" fill="#6B6B6B"/>
          <path d="M12 16L12 3.8147e-06L3.5604e-06 8L12 16Z" fill="#6B6B6B"/>
        </g>
      </svg>
    </div>
  )
}

export default DirectionArrow
