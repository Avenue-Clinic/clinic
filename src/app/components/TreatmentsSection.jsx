'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TreatmentCard = ({ icon, image, title, description, readMore, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index < 3 ? index * 0.2 : (index - 3) * 0.2
      }}
      className="w-[400px] sm:max-w-[450px] md:max-w-[400px] p-10 bg-white rounded-[40px]"
    >
      <div className="flex flex-col items-center mb-4 text-center md:flex-row md:text-left">
        <div className="w-[50px] h-[58px] -mt-[8px] mb-3 md:mb-0">
          <Image
            src={icon}
            alt={`${title} Icon`}
            width={50}
            height={50}
          />
        </div>
        <h2 className="md:ml-4 text-xl leading-[24px] font-bold text-[var(--primary)]">{title}</h2>
      </div>
      
      <div className="relative w-full h-56 mb-6">
        <Image
          src={image}
          alt={`${title} Demonstration`}
          fill
          className="object-cover rounded-[30px]"
        />
      </div>
      
      <p className="mb-8 text-[#4F5665] text-[16px] leading-[29px] font-[400] text-center md:text-left">
        {description}
      </p>
      
      <div className="flex justify-center md:justify-start">
        <button className="bg-[var(--primary)] text-white font-bold leading-[19px] text-[16px] px-[30px] py-[19px] rounded-[40px] hover:bg-[var(--secondary)] transition-colors">
          {readMore}
        </button>
      </div>
    </motion.div>
  );
};

const TreatmentsSection = ({ dictionary = {} }) => {
  const isRTL = dictionary?.dir === 'rtl';
  const treatments = dictionary?.treatments || {};

  const treatmentsList = [
    'dentalImplants',
    'smileMakeover',
    'dentalVeneers',
    'allOnImplants',
    'dentalCrowns',
    'surgicalDentistry'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1270px] px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col md:flex-row items-center md:justify-between mb-20 text-center md:text-left ${isRTL ? 'md:flex-row-reverse' : ''}`}
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-[var(--secondary)] uppercase tracking-wider text-sm font-bold mb-5">{treatments.title}</h3>
            <h2 className="text-[var(--primary)] text-[46px] leading-[52px] font-bold max-w-[700px]">{treatments.subtitle}</h2>
          </div>
          <button className="inline-flex items-center px-8 py-4 text-white transition bg-[var(--primary)] rounded-full hover:bg-[var(--secondary)] text-base font-semibold">
            {treatments.allTreatments}
          </button>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {treatmentsList.map((treatment, index) => (
            <TreatmentCard
              key={treatment}
              icon={treatments.items[treatment].icon}
              image={treatments.items[treatment].image}
              title={treatments.items[treatment].title}
              description={treatments.items[treatment].description}
              readMore={treatments.items[treatment].readMore}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
