'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CustomPhoneInput from './CustomPhoneInput'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const mapContainerStyle = {
  width: '100%',
  height: '500px',
  borderRadius: '20px'
}

const center = { 
  lat: 41.01932072847621, 
  lng: 28.653031384657883 
};


export default function ContactMapSection({ dictionary = {} }) {
  const isRTL = dictionary?.dir === 'rtl'
  const contact = dictionary?.contact || {}
  const [phone, setPhone] = useState('')

  useEffect(() => {
    // Check if the URL has a hash and it matches our section
    if (window.location.hash === '#contact-map-section') {
      // Get the element
      const element = document.getElementById('contact-map-section');
      if (element) {
        // Scroll to the element smoothly
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []) // Empty dependency array means this runs once when component mounts

  return (
    <section id="contact-map-section" className="overflow-hidden bg-white">
      <div className="mx-[315px] py-[100px]">
        <div className={`flex gap-[70px] ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Contact Form */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[14px] font-bold leading-[17px] tracking-[0.2em] text-[var(--secondary)] mb-5">
              {contact?.sectionTitle || 'CONTACT US'}
            </h3>
            <h2 
              className="text-[42px] font-bold leading-[55px] text-[var(--primary)] mb-4"
              dangerouslySetInnerHTML={{ __html: dictionary?.contact?.getFreeReport || 'Get Your <span className="text-[var(--secondary)]">FREE</span> Dental Report' }}
            >
            </h2>
            <p className="text-[16px] leading-[24px] text-[#6B7280] mb-8">
              {contact?.subtitle || 'Send us your details to receive a personalized treatment quote and plan.'}
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder={contact?.form?.namePlaceholder || 'Name Surname'}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[var(--secondary)]"
                />
              </div>
              <div className="w-full">
                <CustomPhoneInput
                  value={phone}
                  onChange={setPhone}
                  dictionary={dictionary}
                  placeholder={contact?.form?.phonePlaceholder || 'Phone Number'}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={contact?.form?.emailPlaceholder || 'Email Address'}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[var(--secondary)]"
                />
              </div>
              <div>
                <textarea
                  placeholder={contact?.form?.messagePlaceholder || 'Your Message'}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[var(--secondary)]"
                />
              </div>
              <button 
                type="submit"
                className="px-7 py-4 text-[16px] font-semibold transition-all bg-[var(--primary)] text-white rounded-full hover:bg-[var(--secondary)]"
              >
                {contact?.form?.submitButton || 'Submit'}
              </button>
            </form>
          </motion.div>

          {/* Google Map */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
