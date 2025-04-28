'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const TestimonialsSection = ({ dictionary, inverted = false }) => {
  const isRTL = dictionary?.dir === 'rtl'
  const testimonials = dictionary?.testimonials || {}

  return (
    <section className={inverted ? "bg-[#FAFAFA]" : "bg-[var(--primary)]"}>
      <div className="mx-[315px] py-[100px]">
        <div className={`flex items-center justify-between mb-[80px] ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="max-w-[820px]">
            <h3 className={`text-[14px] font-bold leading-[17px] tracking-[0.2em] mb-5 ${inverted ? "text-[var(--secondary)]" : "text-white"}`}>
              {testimonials?.sectionTitle}
            </h3>
            <h2 className={`text-[46px] font-bold leading-[55px] ${inverted ? "text-[var(--primary)]" : "text-[rgb(249,244,235)]"}`}>
              {testimonials?.title}
            </h2>
          </div>
          <button className={`px-7 py-4 text-[16px] font-semibold transition-all rounded-full ${
            inverted 
              ? "bg-[var(--primary)] text-white hover:bg-[var(--secondary)]" 
              : "bg-white text-[var(--primary)] hover:bg-opacity-90"
          }`}>
            {testimonials?.button}
          </button>
        </div>

        <motion.div 
          className="flex gap-[20px] mt-[60px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {Array.from({ length: 3 }, (_, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className="relative">
                <div className="w-[410px] h-[500px] relative">
                  <Image
                    src={`/images/test${index + 1}.jpg`}
                    fill
                    style={{ objectFit: 'cover' }}
                    alt={`Testimonial ${index + 1}`}
                    className="rounded-2xl"
                  />
                </div>
                <div className="absolute -translate-x-1/2 translate-y-1/2 left-1/2 bottom-1/4">
                  <div className="relative w-[60px] h-[60px] bg-red-500 rounded-full flex items-center justify-center">
                    <Image
                      src="/images/play.svg"
                      width={41}
                      height={41}
                      alt="Play button"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection;
