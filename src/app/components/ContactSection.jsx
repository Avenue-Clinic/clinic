'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { IconPlus, IconMinus } from '@tabler/icons-react'
import CustomPhoneInput from './CustomPhoneInput'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export default function ContactSection({ dictionary }) {
  const isRTL = dictionary.dir === 'rtl'
  const { contact } = dictionary
  const [activeQuestion, setActiveQuestion] = useState(null)
  const [phone, setPhone] = useState('')

  return (
    <section className="overflow-hidden bg-white">
      <div className="container mx-auto py-[100px] pb-[200px]">
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
              {contact.sectionTitle}
            </h3>
            <h2 className="text-[42px] font-bold leading-[55px] text-[var(--primary)] mb-4">
              Get Your <span className="text-[var(--secondary)]">FREE</span> Dental Report
            </h2>
            <p className="text-[16px] leading-[24px] text-[#6B7280] mb-8">
              {contact.subtitle}
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder={contact.form.namePlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[var(--secondary)]"
                />
              </div>
              <div className="w-full">
                <CustomPhoneInput
                  value={phone}
                  onChange={setPhone}
                  dictionary={dictionary}
                  placeholder={contact.form.phonePlaceholder}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={contact.form.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[var(--secondary)]"
                />
              </div>
              <div>
                <textarea
                  placeholder={contact.form.messagePlaceholder}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[var(--secondary)]"
                />
              </div>
              <button 
                type="submit"
                className="px-7 py-4 text-[16px] font-semibold transition-all bg-[var(--primary)] text-white rounded-full hover:bg-[var(--secondary)]"
              >
                {contact.form.submitButton}
              </button>
            </form>
          </motion.div>

          {/* FAQ Section */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-[14px] font-bold leading-[17px] tracking-[0.2em] text-[var(--secondary)] mb-5">
              FAQS
            </h3>
            <h2 className="text-[42px] font-bold leading-[55px] text-[var(--primary)] mb-4">
              {contact.faq.title}
            </h2>
            <p className="text-[16px] leading-[24px] text-[#6B7280] mb-8">
              {contact.faq.subtitle}
            </p>
            <div className="space-y-4">
              {Object.entries(contact.faq.questions).map(([key, question]) => (
                <div key={key} className="rounded-[20px] overflow-hidden">
                  <button
                    className={`w-full px-6 py-4 flex items-center justify-between text-left transition-all duration-500 ${
                      activeQuestion === key ? 'bg-[#2B2B2B]' : 'bg-[#FAFAFA]'
                    }`}
                    onClick={() => setActiveQuestion(activeQuestion === key ? null : key)}
                  >
                    <span className={`text-[20px] font-semibold leading-[24px] transition-colors duration-500 ${
                      activeQuestion === key ? 'text-white' : 'text-[var(--primary)]'
                    }`}>
                      {question.question}
                    </span>
                    {activeQuestion === key ? (
                      <IconMinus className={`transition-colors duration-500 ${
                        activeQuestion === key ? 'text-white' : 'text-[var(--primary)]'
                      }`} size={24} stroke={2.5} />
                    ) : (
                      <IconPlus className={`transition-colors duration-500 ${
                        activeQuestion === key ? 'text-white' : 'text-[var(--primary)]'
                      }`} size={24} stroke={2.5} />
                    )}
                  </button>
                  <div 
                    className={`overflow-hidden transition-all ${
                      activeQuestion === key ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    style={{
                      transitionDuration: '600ms',
                      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <div className="px-6 py-4 bg-[#FAFAFA]">
                      <p className="text-[16px] leading-[29px] text-[var(--text)]">{question.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
