'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import VideoPlayButton from './playButton';
import { useTranslation } from 'react-i18next';

const CounterAnimation = ({ end, duration = 2, suffix, prefix = '' }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end_num = parseInt(end.replace(/[^0-9]/g, ''));
      const increment = end_num / (duration * 60);
      const handle = setInterval(() => {
        start += increment;
        if (start >= end_num) {
          setCount(end_num);
          clearInterval(handle);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(handle);
    }
  }, [end, duration, inView]);

  return <div ref={ref}>{count ? `${prefix}${count}${suffix}` : '0'}</div>;
};

export default function AboutSection() {
  const { t, i18n } = useTranslation('content');
  const [isHovered, setIsHovered] = useState(false);
  const isRTL = i18n.language === 'ar';

  return (
    <section className="py-12 bg-white">
      <div className="container relative mx-auto px-8 lg:px-6 xl:px-[20px] max-w-[1300px] py-8 lg:py-12">
        <div
          className={`grid items-center gap-8 grid-cols-1 lg:grid-cols-2 ${isRTL ? 'lg:flex-row-reverse' : ''}`}
        >
          {/* Image container */}
          <div
            className={`relative w-full aspect-[585/490] max-h-[490px] ${isRTL ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[585px] h-full rounded-xl overflow-hidden ${
                isRTL
                  ? 'lg:left-auto lg:right-10 lg:translate-x-0'
                  : 'lg:right-auto lg:left-[5px] lg:translate-x-0'
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src="/images/placeholder-dental.jpg"
                alt="Dental Care Video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                <VideoPlayButton color="var(--red)" />
              </div>
            </div>
          </div>

          {/* Text container */}
          <motion.div
            className={`w-full max-w-[650px] flex flex-col justify-center px-0 lg:px-4 mx-auto lg:mx-0 text-left ${
              isRTL ? 'lg:text-right' : ''
            }`}
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-[540px]">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-semibold text-[var(--red)] uppercase tracking-wider"
              >
                {t('about.label')}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 text-[30px] md:text-[46px] font-bold text-[var(--primary)] leading-[40px] md:leading-[55px] max-w-[590px]"
              >
                {t('about.title')}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-[16px] font-normal leading-relaxed text-gray-600"
              >
                {t('about.description')}
              </motion.p>

              <div
                className={`mt-8 flex ${isRTL ? 'lg:flex-row-reverse lg:justify-end' : 'lg:flex-row'} justify-between items-center lg:pr-8`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className={`lg:text-${isRTL ? 'right' : 'left'} text-left`}
                >
                  <div className="text-[24px] md:text-[42px] font-semibold text-[var(--primary)] leading-none ">
                    <CounterAnimation end="18" suffix="K" prefix="+" />
                  </div>
                  <div className="pl-4 mt-1 text-sm text-gray-500 lg:pl-0">
                    {t('about.stats.smiles.label')}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className={`lg:text-${isRTL ? 'right' : 'left'} text-left`}
                >
                  <div className="text-[24px] md:text-[42px] font-bold text-[var(--primary)] leading-none">
                    <CounterAnimation end="96" suffix="%" />
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    {t('about.stats.satisfaction.label')}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`lg:text-${isRTL ? 'right' : 'left'} text-left`}
              >
                <Link
                  href="/about"
                  className={`inline-flex items-center px-6 py-3 mt-8 text-white transition bg-[var(--primary)] rounded-full hover:bg-[var(--secondary)] mx-auto lg:mx-0 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {t('about.cta')}
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
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
