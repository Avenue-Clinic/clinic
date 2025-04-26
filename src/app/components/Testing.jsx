'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
  "/images/journey/online-consultation.jpg",
  "/images/journey/arrival.jpg",
  "/images/journey/accommodation.jpg",
  "/images/journey/clinical-consultation.jpg",
  "/images/journey/procedure.jpg",
  "/images/journey/checkup.jpg",
  "/images/journey/departure.jpg",
];

const Testing = ({ dictionary }) => {
  const { patientJourney } = dictionary;
  const isRTL = dictionary.dir === 'rtl';
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 7;

  // Auto-slide every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        <div className="relative">
          {/* Main content */}
          <div className={`flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Image */}
            <div className="w-1/2">
              <div className="relative aspect-[863/337] rounded-[20px] overflow-hidden">
                <Image
                  src={images[currentSlide]}
                  alt={patientJourney.slides[`slide${currentSlide + 1}`].title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text content */}
            <div className="w-1/2">
              <h2
                className="text-[40px] font-bold leading-[48px] text-primary mb-4"
              >
                {patientJourney.slides[`slide${currentSlide + 1}`].title}
              </h2>
              <p
                className="text-[16px] font-normal leading-[29px] text-[#343434]"
              >
                {patientJourney.slides[`slide${currentSlide + 1}`].description}
              </p>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className={`absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors ${
              isRTL ? 'right-[-40px]' : 'left-[-40px]'
            }`}
            aria-label="Previous slide"
          >
            <Image 
              src={isRTL ? "/icons/chr.svg" : "/icons/chl.svg"} 
              alt="Previous" 
              width={20} 
              height={20} 
            />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors ${
              isRTL ? 'left-[-40px]' : 'right-[-40px]'
            }`}
            aria-label="Next slide"
          >
            <Image 
              src={isRTL ? "/icons/chl.svg" : "/icons/chr.svg"} 
              alt="Next" 
              width={20} 
              height={20} 
            />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testing;
