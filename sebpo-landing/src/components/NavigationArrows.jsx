const NavigationArrows = ({ onPrevClick, onNextClick }) => {
  return (
    <>
      {/* Left Arrow */}
      <button
        onClick={onPrevClick}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 z-10 bg-white rounded-full p-3 transition-shadow duration-300"
      >
        <svg width="16" height="30" viewBox="0 0 31 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.668881 31.2623L26.7493 57.2973C27.6887 58.2342 29.2098 58.2342 30.1491 57.2973C31.0885 56.3603 31.0885 54.8392 30.1491 53.9047L5.58741 29.3836L30.1492 4.86489C31.0886 3.92791 31.0886 2.40923 30.1492 1.46982C29.2098 0.532833 27.6887 0.532833 26.7494 1.46982L0.671395 27.5048C0.154013 28.0198 -0.0486177 28.7088 0.00385725 29.3835C-0.0511279 30.0582 0.153922 30.7473 0.668881 31.2623Z" fill="#DBDEE1"/>
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={onNextClick}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 z-10 bg-white rounded-full p-3 transition-shadow duration-300"
      >
        <svg width="16" height="30" viewBox="0 0 31 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.181 26.7377L4.10059 0.702673C3.16118 -0.234224 1.64007 -0.234224 0.700746 0.702673C-0.238666 1.63966 -0.238666 3.16076 0.700746 4.09533L25.2624 28.6164L0.700653 53.1351C-0.238759 54.0721 -0.238759 55.5908 0.700653 56.5302C1.64007 57.4672 3.16118 57.4672 4.1005 56.5302L30.1785 30.4952C30.6958 29.9802 30.8985 29.2912 30.846 28.6165C30.901 27.9418 30.6959 27.2527 30.181 26.7377Z" fill="#DBDEE1"/>
        </svg>
      </button>
    </>
  )
}

export default NavigationArrows
