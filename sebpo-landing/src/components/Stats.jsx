import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const Stats = () => {
  const stats = [
    {
      icon: (
        <div className="mb-4 flex justify-center">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#FBB262"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M39.5339 42.8696H24.4661C21.9247 42.874 19.7032 41.1563 19.0678 38.6957L16 25.2174L20.3061 28.3478C21.5165 29.233 23.0449 29.5648 24.5134 29.2613C25.9819 28.9578 27.2535 28.0472 28.0139 26.7548L32 20L35.9791 26.7687C36.7418 28.061 38.0158 28.9701 39.4859 29.2711C40.956 29.572 42.4848 29.2366 43.6939 28.3478L48 25.2174L44.9322 38.6957C44.2968 41.1563 42.0753 42.874 39.5339 42.8696Z" fill="white"/>
          </svg>
        </div>
      ),
      number: 16,
      suffix: '',
      label: 'years experience',
      color: 'text-gray-800'
    },
    {
      icon: (
        <div className="mb-4 flex justify-center">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#006F99"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M33.0723 16C27.0809 16.2723 22.3149 21.2426 22.383 27.3021V28.8L20 35.8128L23.4043 36.6979V40.3745C23.4043 42.0085 24.766 43.3021 26.4 43.3021H30.8255L32.2553 47.3872L42.6043 44.4596L41.1064 34.9277C43.2851 32.817 44.5106 29.9574 44.5106 26.8936C44.5106 20.834 39.5404 16 33.4809 16C33.3447 16 33.2085 16 33.0723 16Z" fill="white"/>
          </svg>
        </div>
      ),
      number: 70,
      suffix: '+',
      label: 'Happy Clients',
      color: 'text-gray-800'
    },
    {
      icon: (
        <div className="mb-4 flex justify-center">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#FFC638"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M44.0435 16.7827V43.8262C44.0435 46.1218 42.1653 48.0001 39.8696 48.0001H24.5653C22.2696 48.0001 20.3914 46.1218 20.3914 43.8262V16.7827H44.0435Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M29.4348 49V42.4348H35V49" fill="#FFEDB6"/>
            <path d="M29.4348 49V42.4348H35V49" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            <rect x="25.5652" y="21.9565" width="4.78261" height="5.56522" fill="#FFEDB6" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            <rect x="34.0869" y="21.9565" width="4.78261" height="5.56522" fill="#FFEDB6" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            <rect x="25.5652" y="31.6958" width="4.78261" height="5.56522" fill="#FFEDB6" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            <rect x="34.0869" y="31.6958" width="4.78261" height="5.56522" fill="#FFEDB6" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      ),
      number: 200,
      suffix: 'k+',
      label: 'Creative Ads Created',
      color: 'text-gray-800'
    }
  ]



  return (
    <section className="py-20 bg-white-50 rounded-t-3xl">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center">{stat.icon}</div>
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                <CountUp
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={2.5}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
              </div>
              <p className="text-gray-600 text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
