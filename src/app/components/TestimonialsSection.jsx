'use client'
import Image from 'next/image'

export default function TestimonialsSection({ dictionary }) {
  const isRTL = dictionary.dir === 'rtl'
  const { testimonials } = dictionary

  return (
    <section className="bg-[var(--primary)]">
      <div className="mx-[315px] py-[100px]">
      <div className={`flex items-center justify-between mb-[80px] ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="max-w-[820px]">
            <h3 className="text-[14px] font-bold leading-[17px] tracking-[0.2em] text-white mb-5">
              {testimonials.sectionTitle}
            </h3>
            <h2 className="text-[46px] font-bold leading-[55px] text-[rgb(249,244,235)]">
              {testimonials.title}
            </h2>
          </div>
          <button className="px-7 py-4 text-[16px] font-semibold transition-all bg-white rounded-full text-primary hover:bg-opacity-90">
            {testimonials.button}
          </button>
        </div>

        <div className="flex gap-[20px] mt-[60px]">
          <div className="relative">
            <div className="w-[410px] h-[500px] relative">
              <Image
                src="/images/test1.jpg"
                fill
                style={{ objectFit: 'cover' }}
                alt="Testimonial 1"
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
          <div className="relative">
            <div className="w-[410px] h-[500px] relative">
              <Image
                src="/images/test2.jpg"
                fill
                style={{ objectFit: 'cover' }}
                alt="Testimonial 2"
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
          <div className="relative">
            <div className="w-[410px] h-[500px] relative">
              <Image
                src="/images/test3.jpg"
                fill
                style={{ objectFit: 'cover' }}
                alt="Testimonial 3"
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
        </div>
      </div>
    </section>
  )
}
