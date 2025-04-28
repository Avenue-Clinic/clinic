'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

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

export default function AboutSection({ dictionary = {} }) {
  const about = dictionary?.about || {};
  const [isHovered, setIsHovered] = useState(false);
  const isRTL = dictionary?.dir === 'rtl';

  return (
    <section className="py-12">
      <div className="container relative h-[555px] mx-auto max-w-[1300px] px-0">
        <div className={`grid items-center h-full grid-cols-1 md:grid-cols-2 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          {/* Image container */}
          <div className={`relative h-full ${isRTL ? 'md:order-2' : 'md:order-1'}`}>
            <div 
              className={`absolute top-1/2 -translate-y-1/2 w-[585px] h-[490px] rounded-xl overflow-hidden ${
                isRTL ? 'right-10' : 'left-[5px]'
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
              <motion.div 
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  opacity: isHovered ? 0.6 : 0.4
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex items-center justify-center w-20 h-20 rounded-full bg-[var(--primary)]"
                  animate={{
                    scale: isHovered ? 1.2 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Text container */}
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
                  href="/about-us"
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
        </div>
      </div>
    </section>
  );
}