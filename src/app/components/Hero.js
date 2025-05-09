'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero({ dictionary = {}, locale = 'en' }) {
  const isRTL = locale === 'ar';

  return (
    <div>
      {/* Background image section */}
      <div className="w-full h-[650px] relative overflow-hidden ">
        <div className="absolute inset-0 bg-[var(--primary)] opacity-50 z-[1]"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg1.png"
            alt="Dental Clinic Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-[2] container mx-auto px-6 h-full flex flex-col justify-start md:justify-center sm:justify-start pt-[90px] md:pt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className={`max-w-4xl mx-auto ${isRTL ? 'rtl' : ''} text-white md:text-center`}
          >
            <h1 className="mb-6 font-bold text-[38px] sm:text-[56px] leading-[46px] sm:leading-[72px] text-center">
              {dictionary?.hero?.title ||
                'Crafting Beautiful Smiles, Ensuring Healthier Tomorrows'}
            </h1>
            <p className="max-w-2xl mx-auto text-[16px] md:text-lg opacity-90 text-center">
              {dictionary?.hero?.subtitle ||
                "Discover expert dental care that prioritizes top-quality treatments for your smile's health and beauty all at 70% more affordable costs than worldwide standards."}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
