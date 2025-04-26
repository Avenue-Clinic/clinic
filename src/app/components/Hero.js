'use client';

import Image from 'next/image';

export default function Hero({ dictionary = {}, locale = 'en' }) {
  const isRTL = locale === 'ar';

  return (
    <div>
      {/* Background image section */}
      <div className="w-full h-[650px] relative overflow-hidden ">
        <div className="absolute inset-0 bg-[var(--primary)] opacity-50 z-[1]"></div>
        <div className="absolute inset-0">
          <Image 
            src="/images/hero-bg.png" 
            alt="Dental Clinic Background" 
            fill
            priority
            className="object-cover object-top"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-[2] container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="mb-6 font-bold text-[56px] leading-[72px]">
              {dictionary?.hero?.title || "Crafting Beautiful Smiles, Ensuring Healthier Tomorrows"}
            </h1>
            <p className="max-w-2xl mx-auto text-base md:text-lg opacity-90">
              {dictionary?.hero?.subtitle || "Discover expert dental care that prioritizes top-quality treatments for your smile's health and beauty all at 70% more affordable costs than worldwide standards."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}