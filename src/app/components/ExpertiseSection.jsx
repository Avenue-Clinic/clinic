'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.2
      }}
      className="flex items-start gap-6"
    >
      <div className="flex-shrink-0 w-[50px] h-[50px] rounded-2xl bg-[var(--primary)] flex items-center justify-center">
        <Image
          src="/icons/tick.svg"
          alt="Checkmark"
          width={20}
          height={20}
        />
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

const ExpertiseSection = ({ dictionary = {} }) => {
  const isRTL = dictionary?.dir === 'rtl';
  const expertise = dictionary?.expertise || {};

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="max-w-[1270px] px-4 mx-auto">
        {/* Horizontal layout for lg and above, vertical stack for smaller screens */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 lg:gap-16 ${isRTL ? 'lg:flex lg:flex-row-reverse' : ''}`}>
          {/* Left/Right Content based on language direction */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto space-y-8 text-center lg:text-left lg:mx-0"
          >
            <div>
              <h3 className="text-[var(--secondary)] uppercase tracking-wider text-[14px] font-[700] mb-5">
                {expertise?.label}
              </h3>
              <h2 className="text-[var(--primary)] text-[46px] leading-[52px] font-bold">
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

          {/* Right/Left Image Content based on language direction */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mt-16 lg:mt-0"
          >
            <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full max-w-[1000px] mx-auto lg:mx-0">
              {/* Background Pattern - Responsive */}
              <div className="absolute left-1/2 lg:left-auto lg:right-[78px] top-1/2 lg:top-[100px] transform lg:transform-none -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 w-[80%] lg:w-[520px] h-[70%] lg:h-[500px] max-h-[500px] overflow-hidden rounded-[40px]">
                <Image
                  src="/images/expertise-background.jpg"
                  alt="Background Pattern"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* First Expertise Image - Responsive and positioned according to screen size */}
              <div className="absolute left-1/2 lg:left-auto lg:right-[48%] top-1/2 lg:top-[10%] transform lg:transform-none -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 w-[30%] max-w-[270px] aspect-[270/400] rounded-[30px] overflow-hidden z-20 shadow-lg">
                <Image
                  src="/images/expertise-1.jpg"
                  alt="Dental Expertise"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Second Expertise Image - Responsive and positioned according to screen size */}
              <div className="absolute left-1/2 lg:left-[49.5%] bottom-[30%] lg:bottom-[16%] transform lg:transform-none -translate-x-1/2 lg:translate-x-0 w-[25%] max-w-[250px] aspect-[250/330] rounded-[40px] overflow-hidden z-10 shadow-lg">
                <Image
                  src="/images/expertise-2.jpg"
                  alt="Dental Technology"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Expert Dentist Stats - Responsive and positioned according to screen size */}
              <div className="absolute left-1/2 lg:left-auto lg:right-[50%] bottom-[20%] lg:bottom-[18%] transform lg:transform-none -translate-x-1/2 lg:translate-x-0 bg-white p-4 md:p-6 lg:p-6 rounded-[30px] shadow-lg max-w-[300px] z-20 w-[35%]">
                <div className="flex items-center gap-4 md:gap-8 lg:gap-12">
                  <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] relative">
                    <Image
                      src="/icons/dentist.svg"
                      alt="Dentists Icon"
                      fill
                    />
                  </div>
                  <div>
                    <h4 className="text-[var(--primary)] text-[18px] md:text-[20px] lg:text-[24px] font-bold leading-none">
                      {expertise?.stats?.value}
                    </h4>
                    <p className="text-[#4F5665] text-[14px] md:text-[16px]">
                      {expertise?.stats?.label}
                    </p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="absolute left-1/2 lg:left-[120px] bottom-[5%] lg:bottom-20 transform lg:transform-none -translate-x-1/2 lg:-translate-x-1/2">
                <button className="bg-[var(--primary)] text-white font-bold leading-[19px] text-[16px] px-[30px] py-[19px] rounded-[40px] hover:bg-[var(--secondary)] transition-colors">
                  {expertise?.cta}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;