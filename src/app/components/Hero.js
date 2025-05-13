'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';

export default function Hero() {
  const { t, i18n } = useTranslation('content');
  const isRTL = i18n.language === 'ar';

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
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
          />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-[2] container mx-auto px-6 h-full max-w-[1260px] flex flex-col justify-start md:justify-center sm:justify-start pt-[120px] md:pt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Desktop Gallery Button */}
          <div className="absolute hidden -translate-y-1/2 md:block right-6 top-1/2">
            <Link
              href="/gallery"
              className="bg-white text-[var(--primary)] px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              {t('hero.galleryButton')}
            </Link>
          </div>
          <div
            className={`max-w-4xl ${isRTL ? 'rtl mr-auto' : 'ml-0'} text-white`}
          >
            <h1 className="mb-6 font-bold text-[38px] sm:text-[56px] leading-[46px] sm:leading-[72px]">
              {t('hero.title')}
            </h1>
            <p className="max-w-2xl text-[16px] md:text-lg opacity-90">
              {t('hero.subtitle')}
            </p>
            <div className="flex mt-12 md:hidden">
              <Link
                href="/gallery"
                className="bg-white text-[var(--primary)] px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
              >
                {t('hero.galleryButton')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
