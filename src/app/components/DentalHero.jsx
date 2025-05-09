'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CounterAnimation from './CounterAnimation';

const DentalHero = ({ dictionary }) => {
  const isRTL = dictionary?.dir === 'rtl';
  const [currentSlide, setCurrentSlide] = useState(0);
  const implants = dictionary?.treatments?.items?.dentalImplants?.hero || {};

  // Debug: Log the dictionary structure
  console.log('Dictionary in DentalHero:', dictionary);

  const slides = [
    {
      number: 0,
      image: '/images/dental-implant-slider/dental-implant-slider-1.jpg',
    },
    {
      number: 1,
      image: '/images/dental-implant-slider/dental-implant-slider-2.jpg',
    },
    {
      number: 2,
      image: '/images/dental-implant-slider/dental-implant-slider-3.jpg',
    },
    {
      number: 3,
      image: '/images/dental-implant-slider/dental-implant-slider-4.jpg',
    },
    {
      number: 4,
      image: '/images/dental-implant-slider/dental-implant-slider-5.jpg',
    },
    {
      number: 5,
      image: '/images/dental-implant-slider/dental-implant-slider-6.jpg',
    },
    {
      number: 6,
      image: '/images/dental-implant-slider/dental-implant-slider-7.jpg',
    },
    {
      number: 7,
      image: '/images/dental-implant-slider/dental-implant-slider-8.jpg',
    },
    {
      number: 8,
      image: '/images/dental-implant-slider/dental-implant-slider-9.jpg',
    },
    {
      number: 9,
      image: '/images/dental-implant-slider/dental-implant-slider-10.jpg',
    },
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <section className="pt-[100px] pb-[120px] md:pb-[165px] bg-[var(--primary)]">
      <div className="container px-8 mx-auto">
        <div className="grid items-center grid-cols-1 gap-8 md:gap-6 md:grid-cols-2">
          {/* Text Content */}
          <motion.div
            className={`max-w-[650px] flex flex-col justify-center  ${
              isRTL ? 'text-right' : ''
            }`}
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-[540px]">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 text-[30px] md:text-[38px] lg:text-[50px] font-bold text-white leading-[42px] lg:leading-[65px] max-w-[590px]"
              >
                {implants.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 mb-6 text-[16px] font-normal leading-relaxed text-gray-100"
              >
                {implants.description}
              </motion.p>

              <div
                className={`mt-5 mb-5 pr-12 lg:pr-16 flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} justify-between items-center py-[25px] border-t border-b`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className={isRTL ? 'text-right' : 'text-left'}
                >
                  <div className="text-[42px] font-semibold text-white leading-none">
                    <CounterAnimation end="70" suffix="%" />
                  </div>
                  <div className="mt-1 text-sm text-gray-200">
                    {implants.stats?.affordability?.label}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className={isRTL ? 'text-right' : 'text-left'}
                >
                  <div className="text-[42px] font-bold text-white leading-none mb-4">
                    <CounterAnimation end="15" suffix="+" />
                  </div>
                  <div className="mt-1 text-sm text-gray-200">
                    {implants.stats?.durability?.label}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={isRTL ? 'text-right' : 'text-left'}
              >
                <button
                  className={`inline-flex items-center px-6 py-3 my-5 text-[var(--primary)] transition bg-white rounded-full hover:bg-gray-100 ${isRTL ? 'flex-row-reverse' : ''} font-bold text-[18px]`}
                >
                  {implants.cta}
                  <svg
                    className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={isRTL ? 'M19 12H5' : 'M5 12h14'}
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={isRTL ? 'M12 19l7-7-7-7' : 'M12 5l7 7-7 7'}
                    />
                  </svg>
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-[543px] mx-auto md:mx-0"
          >
            {/* Slider Container */}
            <div className="relative h-[534px] overflow-hidden">
              {/* Navigation Chevrons */}
              <button
                onClick={goToPrevSlide}
                className="absolute z-10 -translate-y-1/2 left-4 top-1/2"
                aria-label="Previous slide"
              >
                <Image
                  src="/icons/chl.svg"
                  alt="Previous"
                  width={24}
                  height={24}
                />
              </button>

              <button
                onClick={goToNextSlide}
                className="absolute z-10 -translate-y-1/2 right-8 top-1/2"
                aria-label="Next slide"
              >
                <Image src="/icons/chr.svg" alt="Next" width={24} height={24} />
              </button>

              {slides.map((slide, index) => (
                <div
                  key={slide.number}
                  className={`absolute inset-0 w-full h-full py-6 transition-all duration-700 ease-in-out ${
                    currentSlide === slide.number
                      ? 'opacity-100 translate-x-0'
                      : currentSlide > slide.number
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 rounded-[30px] overflow-hidden">
                      <Image
                        src={slide.image}
                        alt={`Dental Implant Slide ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="543px"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {slides.map((slide) => (
                <button
                  key={slide.number}
                  onClick={() => goToSlide(slide.number)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === slide.number
                      ? 'bg-white w-6'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${slide.number}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DentalHero;
