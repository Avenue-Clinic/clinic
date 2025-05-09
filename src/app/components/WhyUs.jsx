'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, index, isRTL }) => (
  <motion.div
    initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="bg-[var(--primary-800)] p-7 rounded-2xl relative"
  >
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="bg-white w-[52px] h-[52px] rounded-lg flex items-center justify-center flex-shrink-0">
          <Image
            src={icon}
            width={36}
            height={36}
            alt={title}
            className="w-9 h-9"
          />
        </div>
        <h3 className="text-[20px] font-semibold leading-[24px] text-white">
          {title}
        </h3>
      </div>
      <p className="text-[16px] font-normal leading-[29px] text-white/80">
        {description}
      </p>
    </div>
    {index < 2 && (
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10" />
    )}
  </motion.div>
);

const WhyUs = ({ dictionary = {} }) => {
  const whyUs = dictionary?.whyUs || {};
  const isRTL = dictionary?.dir === 'rtl';

  const features = [
    {
      icon: '/icons/professional.svg',
      title: whyUs?.features?.professionals?.title,
      description: whyUs?.features?.professionals?.description,
    },
    {
      icon: '/icons/patient.svg',
      title: whyUs?.features?.satisfaction?.title,
      description: whyUs?.features?.satisfaction?.description,
    },
    {
      icon: '/icons/material.svg',
      title: whyUs?.features?.materials?.title,
      description: whyUs?.features?.materials?.description,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="bg-[var(--primary)] text-white py-16">
      <div className="container px-8 mx-auto">
        <div
          className={`flex flex-col lg:flex-row gap-12 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}
        >
          {/* Left Content */}
          <motion.div
            className="md:space-y-8 lg:space-y-10 lg:w-1/2 lg:pr-8"
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-[14px] font-bold leading-[17px] tracking-wider text-[var(--secondary)]"
            >
              {whyUs?.label}
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-[30px] md:text-[38px] lg:text-[46px] font-bold leading-[1.2] mb-6"
            >
              {whyUs?.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[14px] md:text-[16px] font-normal leading-[29px] opacity-90 mb-8"
            >
              {whyUs?.description}
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[var(--secondary)] hover:bg-white hover:text-[var(--primary)] transition-colors duration-300 text-white px-[32px] py-[18px] rounded-lg font-extrabold text-[16px]"
            >
              {whyUs?.cta}
            </motion.button>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="lg:w-[45%]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title || index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                  isRTL={isRTL}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
