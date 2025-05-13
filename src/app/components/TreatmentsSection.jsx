'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const TreatmentCard = ({
  icon,
  image,
  title,
  description,
  readMore,
  index,
  slug
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index < 3 ? index * 0.2 : (index - 3) * 0.2,
      }}
      className="w-[340px] sm:w-[400px] md:max-w-[400px] px-6 sm:px-10 py-10 bg-white rounded-[40px]"
    >
      <div className="flex items-center mb-4 text-left">
        <div className="w-[40px] h-[46px] sm:w-[50px] sm:h-[58px]">
          <Image src={icon} alt={`${title} Icon`} width={50} height={50} />
        </div>
        <h2 className="ml-3 sm:ml-4 text-lg sm:text-xl leading-[22px] sm:leading-[24px] font-bold text-[var(--primary)]">
          {title}
        </h2>
      </div>

      <div className="relative w-full h-48 mb-4 sm:h-56 sm:mb-6">
        <Image
          src={image}
          alt={`${title} Demonstration`}
          fill
          className="object-cover rounded-[30px]"
        />
      </div>

      <p className="mb-6 sm:mb-8 text-[#4F5665] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[29px] font-[400] text-left">
        {description}
      </p>

      <div className="flex justify-start">
        <Link
          href={`/treatments/${slug}`}
          className="bg-[var(--primary)] text-white font-bold leading-[14px] sm:leading-[16px] text-[12px] sm:text-[14px] px-[16px] sm:px-[20px] py-[12px] sm:py-[14px] rounded-[40px] hover:bg-[var(--secondary)] transition-colors"
        >
          {readMore}
        </Link>
      </div>
    </motion.div>
  );
};

const TreatmentsSection = () => {
  const { t, i18n } = useTranslation('content');
  const isRTL = i18n.language === 'ar';

  const treatmentsList = [
    { id: 'dentalImplants', slug: 'dental-implants' },
    { id: 'smileMakeover', slug: 'hollywood-smile' },
    { id: 'dentalVeneers', slug: 'dental-veneers' },
    { id: 'allOnImplants', slug: 'all-on46-implants' },
    { id: 'dentalCrowns', slug: 'dental-crowns' },
    { id: 'surgicalDentistry', slug: 'surgical-dentistry' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1270px] px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col items-start mb-20 text-left ${isRTL ? 'items-end text-right' : ''}`}
        >
          <div>
            <h3 className="text-[var(--secondary)] uppercase tracking-wider text-sm font-bold mb-5">
              {t('treatments.title')}
            </h3>
            <h2 className="text-[var(--primary)] text-[30px] md:text-[38px] lg:text-[46px] leading-[40px] md:leading-[52px] font-bold max-w-[720px]">
              {t('treatments.subtitle')}
            </h2>
            <Link
              href="/treatments"
              className="inline-flex items-center px-6 py-3 mt-6 text-white transition bg-[var(--primary)] rounded-full hover:bg-[var(--secondary)] text-sm font-semibold"
            >
              {t('treatments.allTreatments')}
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 justify-items-center">
          {treatmentsList.map((treatment, index) => (
            <TreatmentCard
              key={treatment.id}
              icon={t(`treatments.items.${treatment.id}.icon`)}
              image={t(`treatments.items.${treatment.id}.image`)}
              title={t(`treatments.items.${treatment.id}.title`)}
              description={t(`treatments.items.${treatment.id}.description`)}
              readMore={t(`treatments.items.${treatment.id}.readMore`)}
              index={index}
              slug={treatment.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
