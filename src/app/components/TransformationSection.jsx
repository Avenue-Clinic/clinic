'use client';

import { ReactCompareSlider } from 'react-compare-slider';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function TransformationSection({ dictionary, locale = 'en' }) {
  const isRTL = dictionary.dir === 'rtl';
  const transformation =
    dictionary.transformation || dictionary.hero?.transformation;
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  if (!transformation) return null;

  const transformations = [
    {
      id: 1,
      beforeImage: '/images/btrans1.jpg',
      afterImage: '/images/atrans1.jpg',
      alt: 'Transformation 1',
    },
    {
      id: 2,
      beforeImage: '/images/btrans2.jpg',
      afterImage: '/images/atrans2.jpg',
      alt: 'Transformation 2',
    },
    {
      id: 3,
      beforeImage: '/images/btrans3.jpg',
      afterImage: '/images/atrans3.jpg',
      alt: 'Transformation 3',
    },
  ];

  return (
    <section className="bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto py-[100px] md:py-[120px]">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4 lg:gap-0 mb-[80px]">
          <motion.div
            className="max-w-[820px] md:max-w-[900px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h3 className="text-[14px] font-bold leading-[17px] tracking-[0.2em] text-[var(--secondary)] mb-5">
              {transformation.sectionTitle}
            </h3>
            <motion.h2
              className="text-[30px] md:text-[38px] lg:text-[46px] font-bold leading-[42px] md:leading-[42px] lg:leading-[55px] text-[var(--primary)]"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              {transformation.title}
            </motion.h2>
          </motion.div>
          <Link href={`/${dictionary?.lang}/gallery`} passHref legacyBehavior>
            <motion.button
              className="px-7 py-4 text-[16px] font-semibold transition-all bg-[var(--primary)] text-white rounded-full hover:bg-[var(--secondary)]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              {transformation.button}
            </motion.button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-[20px] md:gap-[40px] mt-[60px]">
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative w-full aspect-square max-w-[403px] mx-auto group"
              onMouseEnter={() => setHoveredImage(item.id)}
              onMouseLeave={() => setHoveredImage(null)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 * index }}
            >
              <ReactCompareSlider
                onPointerDown={() => setIsDragging(true)}
                onPointerUp={() => setIsDragging(false)}
                itemOne={
                  <div className="relative w-full aspect-square">
                    <Image
                      src={item.beforeImage}
                      alt={`${item.alt} Before`}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-2xl"
                    />
                  </div>
                }
                itemTwo={
                  <div className="relative w-full aspect-square">
                    <Image
                      src={item.afterImage}
                      alt={`${item.alt} After`}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-2xl"
                    />
                  </div>
                }
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: '1rem',
                  '--rcs-handle-size': '40px',
                  '--rcs-handle-color': 'white',
                  '--rcs-handle-arrow-color': 'var(--primary)',
                  '--rcs-handle-border-color': 'white',
                  '--rcs-line-color': 'white',
                  '--rcs-line-width': '3px',
                }}
                position={50}
                onPositionChange={() => {}}
                portrait={false}
                changePositionOnHover={false}
              />

              {hoveredImage === item.id && !isDragging && (
                <>
                  <div className="absolute inset-0 transition-opacity duration-500 pointer-events-none bg-black/40 rounded-2xl" />
                  <div
                    className={`absolute ${isRTL ? 'right-6' : 'left-6'} top-1/2 -translate-y-1/2 bg-[#1E1E1E80] backdrop-blur-[7.5px] px-4 py-2 rounded-lg z-10 transition-opacity duration-500`}
                  >
                    <span className="text-sm font-medium text-white">
                      {transformation.before}
                    </span>
                  </div>
                  <div
                    className={`absolute ${isRTL ? 'left-6' : 'right-6'} top-1/2 -translate-y-1/2 bg-[#1E1E1E80] backdrop-blur-[7.5px] px-4 py-2 rounded-lg z-10 transition-opacity duration-500`}
                  >
                    <span className="text-sm font-medium text-white">
                      {transformation.after}
                    </span>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
