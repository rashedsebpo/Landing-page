import { motion } from 'framer-motion'

const ContactSection = () => {

  return (
    <section className="relative overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 w-full h-full">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="1700" 
          height="709" 
          viewBox="0 0 1700 709" 
          fill="none"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M1700 -0.000976562L0 617.206V719H1700V-0.000976562Z" 
            fill="#006F99"
          />
        </svg>
      </div>

      {/* Orange accent SVG */}
      <div
        className="absolute left-0 top-0"
        style={{
          width: '252px',
          height: '595px',
          flexShrink: 0
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="252"
          height="595"
          viewBox="0 0 252 595"
          fill="none"
          className="w-full h-full"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M252 0L-1.52588e-05 92V595L252 504V0Z"
            fill="#E67F32"
          />
        </svg>
      </div>

      <div className="relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          {/* Contact Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden"
            style={{
              width: '1272px',
              height: '649px',
              flexShrink: 0,
              borderRadius: '30px',
              background: '#F9F9F9',
              boxShadow: '0px 50px 60px 0px rgba(0, 0, 0, 0.15)'
            }}
          >
            <div className="flex h-full">
              {/* Left Side - Contact Info */}
              <div className="w-1/2 p-12 flex flex-col justify-between">
                {/* Header */}
                <div>
                  <h2
                    className="text-4xl font-bold mb-8"
                    style={{
                      color: '#111029',
                      fontFamily: 'Montserrat',
                      fontWeight: '700'
                    }}
                  >
                    Contact
                  </h2>

                  {/* Visit Our Studio */}
                  <div className="mb-8">
                    <h3
                      className="text-lg font-semibold mb-3"
                      style={{
                        color: '#111029',
                        fontFamily: 'Montserrat',
                        fontWeight: '600'
                      }}
                    >
                      Visit Our Studio
                    </h3>
                    <p
                      className="text-gray-600 mb-1"
                      style={{
                        fontFamily: 'Montserrat',
                        fontSize: '14px',
                        fontWeight: '400'
                      }}
                    >
                      78 E Main Street,
                    </p>
                    <p
                      className="text-gray-600"
                      style={{
                        fontFamily: 'Montserrat',
                        fontSize: '14px',
                        fontWeight: '400'
                      }}
                    >
                      Marlton, NJ 08053
                    </p>
                  </div>

                  {/* Please Contact */}
                  <div className="mb-8">
                    <h3
                      className="text-lg font-semibold mb-3"
                      style={{
                        color: '#111029',
                        fontFamily: 'Montserrat',
                        fontWeight: '600'
                      }}
                    >
                      Please Contact
                    </h3>
                    <p
                      className="text-gray-600 mb-1"
                      style={{
                        fontFamily: 'Montserrat',
                        fontSize: '14px',
                        fontWeight: '400'
                      }}
                    >
                      info@sebpo.com
                    </p>
                    <p
                      className="text-gray-600"
                      style={{
                        fontFamily: 'Montserrat',
                        fontSize: '14px',
                        fontWeight: '400'
                      }}
                    >
                      www.sebpo.com
                    </p>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="w-1/2 p-12" style={{ background: '#F9F9F9' }}>
                <div className="h-full flex flex-col justify-between">
                  <div className="space-y-8">
                    {/* Name Field */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M0 15.2C0 15.6424 0.348444 16 0.777778 16H13.2222C13.6523 16 14 15.6424 14 15.2V14.4C14 11.4288 12.2414 8.8744 9.73933 7.77521C10.6781 6.96719 11.2778 5.75439 11.2778 4.39999C11.2778 1.9744 9.35822 0 7 0C4.641 0 2.72222 1.9744 2.72222 4.39999C2.72222 5.75439 3.32189 6.96719 4.26067 7.77521C1.75856 8.8744 0 11.4296 0 14.4V15.2ZM4.27783 4.4001C4.27783 2.85609 5.49894 1.6001 7.00005 1.6001C8.50117 1.6001 9.72228 2.85609 9.72228 4.4001C9.72228 5.94409 8.50117 7.2001 7.00005 7.2001C5.49894 7.2001 4.27783 5.94409 4.27783 4.4001ZM12.4446 14.3998C12.4446 11.3126 10.0016 8.7998 7.00011 8.7998C3.99789 8.7998 1.55566 11.3126 1.55566 14.3998H12.4446Z" fill="#6B6B6B"/>
                        </svg>
                        <span
                          style={{
                            color: '#9CA3AF',
                            fontFamily: 'Montserrat',
                            fontSize: '14px',
                            fontWeight: '400'
                          }}
                        >
                          Name
                        </span>
                      </div>
                      {/* Divider Line */}
                      <div
                        style={{
                          width: '400px',
                          height: '1px',
                          flexShrink: 0,
                          backgroundColor: '#E5E7EB'
                        }}
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M2.3 1H12.7C13.415 1 14 1.61875 14 2.375V10.625C14 11.3813 13.415 12 12.7 12H2.3C1.585 12 1 11.3813 1 10.625V2.375C1 1.61875 1.585 1 2.3 1Z" stroke="#6B6B6B" strokeWidth="1.3608" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 2.375L7.5 7.1875L1 2.375" stroke="#6B6B6B" strokeWidth="1.3608" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span
                          style={{
                            color: '#9CA3AF',
                            fontFamily: 'Montserrat',
                            fontSize: '14px',
                            fontWeight: '400'
                          }}
                        >
                          info@sebpo.com
                        </span>
                      </div>
                      {/* Divider Line */}
                      <div
                        style={{
                          width: '400px',
                          height: '1px',
                          flexShrink: 0,
                          backgroundColor: '#E5E7EB'
                        }}
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M10.6284 9.98041L8.6876 11.9218C6.8112 10.768 5.232 9.1888 4.0788 7.3132L6.0196 5.3718C5.1576 3.7728 4.6666 1.944 4.6666 0H0C0 8.834 7.1602 16 16 16V11.3334C14.056 11.3334 12.2272 10.8424 10.6284 9.98041ZM1.3999 1.3335H3.4043C3.5455 2.6597 3.8919 3.9241 4.4087 5.0979L2.9047 6.6019C2.0919 4.9935 1.5705 3.2137 1.3999 1.3335ZM9.39844 13.0957C11.0064 13.9081 12.7857 14.4295 14.6664 14.6001V12.5957C13.3404 12.4551 12.076 12.1081 10.9028 11.5913L9.39844 13.0957Z" fill="#6B6B6B"/>
                        </svg>
                        <span
                          style={{
                            color: '#9CA3AF',
                            fontFamily: 'Montserrat',
                            fontSize: '14px',
                            fontWeight: '400'
                          }}
                        >
                          Phone number
                        </span>
                      </div>
                      {/* Divider Line */}
                      <div
                        style={{
                          width: '400px',
                          height: '1px',
                          flexShrink: 0,
                          backgroundColor: '#E5E7EB'
                        }}
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <div className="mb-4">
                        <span
                          style={{
                            color: '#9CA3AF',
                            fontFamily: 'Montserrat',
                            fontSize: '14px',
                            fontWeight: '400'
                          }}
                        >
                          Your message
                        </span>
                      </div>
                      {/* Divider Line */}
                      <div
                        style={{
                          width: '400px',
                          height: '1px',
                          flexShrink: 0,
                          backgroundColor: '#E5E7EB'
                        }}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end mt-8">
                    <button
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                      style={{
                        fontFamily: 'Montserrat',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}
                    >
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m22 2-7 20-4-9-9-4 20-7z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p
            className="text-white text-sm"
            style={{
              fontFamily: 'Montserrat',
              fontWeight: '400'
            }}
          >
            © SEBPO 2020. Proprietary and Confidential.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
