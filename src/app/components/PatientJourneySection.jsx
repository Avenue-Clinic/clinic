'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const PatientJourneySection = ({ dictionary = {} }) => {
  const isRTL = dictionary?.dir === 'rtl';
  const patientJourney = dictionary?.patientJourney || {};
  const [currentSlide, setCurrentSlide] = useState(1);

  const slides = [
    {
      number: 1,
      image: '/images/journey/online-consultation.jpg',
      ...(patientJourney?.slides?.slide1 || {})
    },
    {
      number: 2,
      image: '/images/journey/arrival-transfer.jpg',
      ...(patientJourney?.slides?.slide2 || {})
    },
    {
      number: 3,
      image: '/images/journey/accommodation.jpg',
      ...(patientJourney?.slides?.slide3 || {})
    },
    {
      number: 4,
      image: '/images/journey/clinical-consultation.jpg',
      ...(patientJourney?.slides?.slide4 || {})
    },
    {
      number: 5,
      image: '/images/journey/procedure.jpg',
      ...(patientJourney?.slides?.slide5 || {})
    },
    {
      number: 6,
      image: '/images/journey/checkup.jpg',
      ...(patientJourney?.slides?.slide6 || {})
    },
    {
      number: 7,
      image: '/images/journey/departure.jpg',
      ...(patientJourney?.slides?.slide7 || {})
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length ? 1 : prev + 1));
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length ? 1 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? slides.length : prev - 1));
  };

  return (
    <section className="relative py-[100px] overflow-hidden bg-white ">
      <div className="max-w-[1300px] px-4 mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-[385px,1fr] gap-8 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-[var(--secondary)] uppercase tracking-[0.2em] text-[14px] font-[700] mb-5">
                {patientJourney?.label}
              </h3>
              <h2 className="text-[var(--text)] text-[40px] leading-[48px] font-[700]">
                {patientJourney?.title}
              </h2>
            </div>
            <p className="text-[var(--text)] text-[16px] leading-[29px] font-[400]">
              {patientJourney?.description}
            </p>
          </motion.div>

          {/* Right Content - Slider */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Slider Container */}
            <div className="relative h-[330px] overflow-hidden">
              {/* Navigation Chevrons */}
              <button
                onClick={goToPrevSlide}
                className="absolute z-10 -translate-y-1/2 left-4 top-1/2"
                aria-label="Previous slide"
              >
                <Image src="/icons/chl.svg" alt="Previous" width={24} height={24} />
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
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                    currentSlide === slide.number
                      ? 'opacity-100 translate-x-0'
                      : currentSlide > slide.number
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="grid grid-cols-[470px,1fr] h-full gap-2">
                    <div className="relative h-[325px] w-full">
                      <div className="absolute inset-[20px] rounded-[30px] overflow-hidden">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-cover"
                          sizes="470px"
                          priority={index === 0}
                        />
                      </div>
                      <div className="absolute inset-0 rounded-[30px] border-[25px] border-white"></div>
                    </div>
                    <div className="flex flex-col justify-center pl-4">
                      <h3 className="mb-5 text-[40px] font-[700] leading-[48px] text-[var(--text)]">{slide.title}</h3>
                      <p className="text-[16px] font-[400] leading-[29px] text-[var(--text)]">
                        {slide.description}
                      </p>
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
                      ? 'bg-[var(--primary)] w-6'
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

export default PatientJourneySection;