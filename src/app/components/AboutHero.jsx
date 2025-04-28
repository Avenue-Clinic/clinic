"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CounterAnimation from "./CounterAnimation";

const AboutHero = ({ dictionary }) => {
  const isRTL = dictionary.dir === "rtl";
  const [currentSlide, setCurrentSlide] = useState(0);
  const about = dictionary?.about || {};

  const slides = [
    {
      number: 0,
      image: "/images/slider/aboutus1.jpg",
    },
    {
      number: 1,
      image: "/images/slider/aboutus2.jpg",
    },
    {
      number: 2,
      image: "/images/slider/aboutus3.jpg",
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
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div 
            className={`max-w-[650px] flex flex-col justify-center ${
              isRTL ? 'text-right' : ''
            }`}
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className='h-[540px]'>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-semibold text-[var(--red)] uppercase tracking-wider"
              >
                {about.label}
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 text-[46px] font-bold text-[var(--primary)] leading-[55px] max-w-[590px]"
              >
                {about.title}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-[16px] font-normal leading-relaxed text-gray-600"
              >
                {about.description}
              </motion.p>

              <div className={`mt-8 flex ${isRTL ? 'flex-row-reverse justify-end' : 'flex-row'} gap-20 items-center`}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className={isRTL ? "text-right" : "text-left"}
                >
                  <div className="text-[42px] font-semibold text-[var(--primary)] leading-none">
                    <CounterAnimation end="18" suffix="K" prefix="+" />
                  </div>
                  <div className="mt-1 text-sm text-gray-500">{about.stats?.smiles?.label}</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className={isRTL ? "text-right" : "text-left"}
                >
                  <div className="text-[42px] font-bold text-[var(--primary)] leading-none">
                    <CounterAnimation end="96" suffix="%" />
                  </div>
                  <div className="mt-1 text-sm text-gray-500">{about.stats?.satisfaction?.label}</div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={isRTL ? "text-right" : "text-left"}
              >
                <Link
                  href="/contact"
                  className={`inline-flex items-center px-6 py-3 mt-8 text-white transition bg-[var(--primary)] rounded-full hover:bg-[var(--secondary)] ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {about.cta}
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
                      d={isRTL ? "M19 12H5" : "M5 12h14"}
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d={isRTL ? "M12 19l7-7-7-7" : "M12 5l7 7-7 7"}
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>

{/* Image Carousel */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="relative w-[600px]"
>
  {/* Slider Container */}
  <div className="relative h-[500px] overflow-hidden ">
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
        className={`absolute inset-0 w-full h-full py-16 transition-all duration-700 ease-in-out ${
          currentSlide === slide.number
            ? 'opacity-100 translate-x-0'
            : currentSlide > slide.number
            ? 'opacity-0 -translate-x-full'
            : 'opacity-0 translate-x-full'
        }`}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-[5px] rounded-[30px] overflow-hidden">
            <Image
              src={slide.image}
              alt={`About Us Slide ${index + 1}`}
              fill
              className="object-cover"
              sizes="600px"
              priority={index === 0}
            />
          </div>
          <div className="absolute inset-0 rounded-[30px] border-[5px] border-white"></div>
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

export default AboutHero;
