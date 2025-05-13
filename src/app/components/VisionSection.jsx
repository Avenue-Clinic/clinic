'use client';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import Image from 'next/image';

const VisionSection = () => {
  const { locale } = useParams();
  const { t } = useTranslation(['content']);
  const isRTL = locale === 'ar';

  // Debug: Log the dictionary structure
  console.log('Locale in VisionSection:', locale);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative z-10 bg-white mb-[-150px]">
      {/* Container for the cards that will be shifted upwards */}
      <div className="mx-auto max-w-[1290px] px-4 sm:px-6 lg:px-8 relative -top-[220px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid grid-cols-1 md:grid-cols-3 gap-[30px] ${isRTL ? 'rtl' : 'ltr'}`}
        >
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-[40px] p-[40px] shadow-lg"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={`/images/vision/icon${index + 1}.svg`}
                  width={80}
                  height={80}
                  alt={t(`about.vision_section.cards.${index + 1}.title`)}
                  className="w-[80px] h-[80px] mb-6"
                />
                <h3 className="text-[22px] font-bold text-[var(--primary)] mb-4">{t(`about.vision_section.cards.${index + 1}.title`)}</h3>
                <p className="text-[16px] text-gray-600 leading-relaxed">{t(`about.vision_section.cards.${index + 1}.description`)}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
