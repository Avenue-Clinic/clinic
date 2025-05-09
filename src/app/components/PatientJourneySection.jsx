'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const PatientJourneySection = ({ dictionary = {} }) => {
  const isRTL = dictionary?.dir === 'rtl';
  const patientJourney = dictionary?.patientJourney || {};
  const [currentSlide, setCurrentSlide] = useState(1);

  const slides =
    Object.entries(patientJourney?.slides || {}).map(([key, slide], index) => ({
      number: index + 1,
      title: slide.title,
      description: slide.description,
      image: slide.image,
    })) || [];

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
    <section className="relative py-[100px] overflow-hidden bg-white z-10">
      <div className="max-w-[1364px] px-8 mx-auto">
        <div
          className={`grid grid-cols-1 xl:grid-cols-[385px,1fr] gap-8 ${isRTL ? 'lg:flex-row-reverse' : ''}`}
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="text-[var(--secondary)] uppercase tracking-[0.2em] text-[14px] font-[700]">
              {patientJourney?.label}
            </h3>
            <h2 className="text-[var(--primary)] text-[30px] md:text-[38px] lg:text-[46px] leading-[48px] font-[700]">
              {patientJourney?.title}
            </h2>
            <p className="max-w-[850px] text-[var(--secondary-text)] text-[16px] leading-[29px] font-[400]">
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
            <div className="relative h-[600px] md:h-[330px] overflow-hidden">
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
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                    currentSlide === slide.number
                      ? 'opacity-100 translate-x-0'
                      : currentSlide > slide.number
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="grid md:grid-cols-[470px,1fr] grid-cols-1 h-full gap-8 md:gap-2">
                    <div className="relative h-[325px] w-full max-w-[470px] mx-auto">
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
                    <div className="flex flex-col justify-center md:pl-4 max-w-[550px]">
                      <h3 className="text-[30px] md:text-[40px] font-[700] leading-[1.2] md:leading-[48px] text-[var(--primary)]">
                        {slide.title}
                      </h3>
                      <p className="mt-2 text-[16px] font-[400] leading-[29px] text-[var(--secondary-text)]">
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
