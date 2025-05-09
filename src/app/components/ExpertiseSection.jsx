'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
      }}
      className="flex items-start gap-6"
    >
      <div className="flex-shrink-0 w-[45px] h-[45px] rounded-2xl bg-[var(--primary)] flex items-center justify-center">
        <Image src="/icons/tick.svg" alt="Checkmark" width={20} height={20} />
      </div>
      <div>
        <h3 className="text-[20px] font-[600] leading-[24px] mb-2 text-[var(--primary)]">
          {title}
        </h3>
        <p className="text-[#4F5665] text-[16px] leading-[29px] font-[400]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ExpertiseSection = ({ dictionary = {}, locale = 'en' }) => {
  const isRTL = dictionary?.dir === 'rtl';
  const expertise = dictionary?.expertise || {};

  return (
    <section className="relative py-20 overflow-hidden bg-white lg:pb-32">
      <div className="max-w-[1300px] px-8 mx-auto">
        {/* Horizontal layout for lg and above, vertical stack for smaller screens */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 lg:gap-16 ${isRTL ? 'lg:flex lg:flex-row-reverse' : ''}`}
        >
          {/* Left/Right Content based on language direction */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto space-y-8 text-left lg:mx-0"
          >
            <div>
              <h3 className="text-[var(--secondary)] uppercase tracking-wider text-[14px] font-[700] mb-5">
                {expertise?.label}
              </h3>
              <h2 className="text-[var(--primary)] text-[30px] md:text-[38px] lg:text-[46px] leading-[40px] md:leading-[52px] font-bold">
                {expertise?.title}
              </h2>
            </div>
            <p className="text-[#4F5665] text-[16px] leading-[29px] font-[400]">
              {expertise?.description}
            </p>
            <div className="space-y-8">
              {expertise?.features?.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Single Combined Image Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative h-[600px] w-full">
              {/* Single Combined Image with all elements */}
              <div className="absolute lg:left-0 right-0 top-[60px] w-full max-w-[600px] lg:max-w-[500px] h-[490px] lg:h-[400px] rounded-[30px] overflow-hidden shadow-lg">
                <Image
                  src="/images/expertise-combined.jpg"
                  alt="Dental Expertise Combined"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>

              {/* Button - Left positioned and 40px below the image */}
              <div className="absolute left-0 top-[580px] lg:top-[500px] mb-16">
                <Link href={`/${dictionary?.lang}/about`} passHref legacyBehavior>
                  <button className="bg-[var(--primary)] text-white font-bold leading-[19px] text-[16px] px-[30px] py-[19px] rounded-[40px] hover:bg-[var(--secondary)] transition-colors">
                    {expertise?.cta}
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile responsiveness */}
      <style jsx global>{`
        @media (max-width: 1023px) {
          .expertise-button {
            left: 50% !important;
            transform: translateX(-50%) !important;
            top: auto !important;
            bottom: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ExpertiseSection;
