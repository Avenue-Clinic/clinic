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

const ExpertiseSection = ({ dictionary }) => {
  const isRTL = dictionary.dir === 'rtl';
  const { expertise } = dictionary;

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="max-w-[1270px] px-4 mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-[var(--secondary)] uppercase tracking-wider text-[14px] font-[700] mb-5">
                {expertise.label}
              </h3>
              <h2 className="text-[var(--primary)] text-[46px] leading-[52px] font-bold">
                {expertise.title}
              </h2>
            </div>
            <p className="text-[#4F5665] text-[16px] leading-[29px] font-[400]">
              {expertise.description}
            </p>
            <div className="space-y-8">
              {expertise.features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[800px]"
          >
            {/* Background Pattern */}
            <div className="absolute right-0 top-[100px] w-[600px] h-[500px] overflow-hidden rounded-[40px]">
              <Image
                src="/images/expertise-background.jpg"
                alt="Background Pattern"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Expertise Images */}
            <Image
              src="/images/expertise-1.jpg"
              alt="Dental Expertise"
              width={270}
              height={400}
              className="absolute left-[-3px] top-[60px] rounded-[30px] object-cover z-10 shadow-lg"
            />
            <Image
              src="/images/expertise-2.jpg"
              alt="Dental Technology"
              width={270}
              height={350}
              className="absolute right-[30px] bottom-[150px] rounded-[40px] object-cover z-10 shadow-lg"
            />

            {/* Expert Dentist Stats */}
            <div className="absolute left-[-5px] bottom-[200px] bg-white p-8 rounded-[30px] shadow-lg max-w-[280px] z-20">
              <div className="flex items-center gap-12">
                <Image
                  src="/icons/dentist.svg"
                  alt="Dentists Icon"
                  width={60}
                  height={60}
                />
                <div>
                  <h4 className="text-[var(--primary)] text-[24px] font-bold leading-none">
                    {expertise.stats.value}
                  </h4>
                  <p className="text-[#4F5665] text-[16px]">
                    {expertise.stats.label}
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="absolute mt-4 -translate-x-1/2 bottom-20  left-[120px]">
              <button className="bg-[var(--primary)] text-white font-bold leading-[19px] text-[16px] px-[30px] py-[19px] rounded-[40px] hover:bg-[var(--secondary)] transition-colors">
                {expertise.cta}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
